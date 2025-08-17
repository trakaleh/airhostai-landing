# mirror_solo_codigo.py
from collections import deque
from urllib.parse import urljoin, urlparse
from pathlib import Path
import os, re, time, hashlib, sys, random
from bs4 import BeautifulSoup

from playwright.sync_api import sync_playwright, TimeoutError as PwTimeout

START_URL   = "https://www.lodgify.com/"
ALLOWED_DOM = {"lodgify.com"}
MAX_PAGES   = 800           # sube/baja si quieres
MAX_DEPTH   = 5
DELAY_SEC   = (0.4, 0.9)    # espera aleatoria entre páginas
OUT_DIR     = Path("lodgify_codigo")

# Solo guardamos "código"
KEEP_CT = (
    "text/html",
    "text/css",
    "application/javascript",
    "text/javascript",
    "application/json",
    "application/manifest+json",
)

UA = ("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 "
      "(KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36")

def in_scope(url: str) -> bool:
    p = urlparse(url)
    return p.scheme in ("http","https") and any(d in p.netloc for d in ALLOWED_DOM)

def canonical_path(url: str, default_ext: str) -> Path:
    p = urlparse(url)
    path = p.path
    if not path or path.endswith("/"):
        path = (path or "/") + f"index.{default_ext}"
    root, ext = os.path.splitext(path)
    if not ext:
        path = f"{root}.{default_ext}"
    if p.query:
        qh = hashlib.sha1(p.query.encode()).hexdigest()[:8]
        root, ext = os.path.splitext(path)
        path = f"{root}~{qh}{ext}"
    path = re.sub(r"[^A-Za-z0-9._/\\-]", "_", path)
    return OUT_DIR / p.netloc / path.lstrip("/")

def ensure_parent(fp: Path):
    fp.parent.mkdir(parents=True, exist_ok=True)

def smart_wait(page):
    """Espera corta por algunos selectores comunes; ignora errores."""
    for sel in ("main", "body", "[data-testid]", "header", "footer"):
        try:
            page.wait_for_selector(sel, timeout=2000)
            break
        except Exception:
            pass

def save_html(url, html):
    fp = canonical_path(url, "html")
    ensure_parent(fp)
    fp.write_text(html, encoding="utf-8")
    return fp

def looks_blocked(html: str) -> bool:
    t = html.lower()
    return ("just a moment" in t and "cloudflare" in t) or "cf-challenge" in t

def crawl():
    visited = set()
    queue = deque([(START_URL, 0)])

    with sync_playwright() as pw:
        # Headful suele evitar bloqueos más que headless puro; prueba headless=False si te bloquean.
        browser = pw.chromium.launch(headless=True)
        ctx = browser.new_context(
            user_agent=UA,
            locale="es-ES",
            timezone_id="Europe/Madrid",
            viewport={"width": 1366, "height": 824}
        )

        # Bloquea imágenes, fuentes y media para ir más rápido
        def route_handler(route):
            req = route.request
            rtype = req.resource_type
            if rtype in ("image", "media", "font"):
                return route.abort()
            return route.continue_()
        ctx.route("**/*", route_handler)

        # Guarda recursos de código (CSS/JS/JSON) que se pidan
        def on_response(resp):
            try:
                url = resp.url
                if not in_scope(url):
                    return
                ct = resp.headers.get("content-type", "").split(";")[0].strip().lower()
                if not any(ct.startswith(k) for k in KEEP_CT):
                    return
                body = resp.body()
                if "html" in ct:  fp = canonical_path(url, "html")
                elif "css" in ct: fp = canonical_path(url, "css")
                elif "json" in ct: fp = canonical_path(url, "json")
                else:             fp = canonical_path(url, "js")
                ensure_parent(fp)
                with open(fp, "wb") as f:
                    f.write(body)
            except Exception:
                pass

        ctx.on("response", on_response)
        page = ctx.new_page()
        page.set_default_timeout(120000)               # 120s por espera
        page.set_default_navigation_timeout(120000)    # 120s navegación

        while queue and len(visited) < MAX_PAGES:
            url, depth = queue.popleft()
            if url in visited or depth > MAX_DEPTH or not in_scope(url):
                continue
            visited.add(url)

            # Múltiples estrategias de carga
            strategies = ["networkidle", "load", "domcontentloaded"]
            success = False
            last_err = None
            for i, strat in enumerate(strategies, start=1):
                try:
                    page.goto(url, wait_until=strat, timeout=120000)
                    smart_wait(page)
                    html = page.content()
                    fp = save_html(url, html)
                    print(f"[{len(visited)}] HTML({strat}): {fp}  (nivel {depth})")
                    if looks_blocked(html):
                        print("   ! Aviso: posible bloqueo/antibot en esta página.")
                    success = True
                    break
                except PwTimeout as e:
                    last_err = e
                    # Aunque haya timeout, intentamos salvar lo que haya
                    try:
                        html = page.content()
                        if html and len(html) > 200:
                            fp = save_html(url, html)
                            print(f"[{len(visited)}] HTML(partial:{strat}): {fp}  (nivel {depth})")
                            success = True
                            break
                    except Exception:
                        pass
                    # Reintento pequeño antes de cambiar de estrategia
                    time.sleep(1.0 + 0.5 * i)
                except Exception as e:
                    last_err = e
                    break

            if not success:
                print(f"Error en {url} -> {last_err}")
                continue

            # Encolar enlaces internos
            try:
                soup = BeautifulSoup(html, "html.parser")
                for a in soup.select("a[href]"):
                    href = a.get("href", "").split("#")[0].strip()
                    if not href:
                        continue
                    nxt = urljoin(url, href)
                    if in_scope(nxt) and nxt not in visited:
                        queue.append((nxt, depth + 1))
            except Exception:
                pass

            time.sleep(random.uniform(*DELAY_SEC))

        browser.close()

    print("Total páginas guardadas:", len(visited))
    print("Salida:", OUT_DIR.resolve())

if __name__ == "__main__":
    try:
        OUT_DIR.mkdir(parents=True, exist_ok=True)
        crawl()
    except KeyboardInterrupt:
        print("\nCancelado por el usuario.")
        sys.exit(1)
