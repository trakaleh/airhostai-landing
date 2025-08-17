(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[5,82,85,86],{1013:function(e,t,a){"use strict";a.d(t,"j",(function(){return r})),a.d(t,"c",(function(){return o})),a.d(t,"b",(function(){return i})),a.d(t,"h",(function(){return c})),a.d(t,"i",(function(){return s})),a.d(t,"k",(function(){return u})),a.d(t,"a",(function(){return d})),a.d(t,"g",(function(){return l})),a.d(t,"n",(function(){return g})),a.d(t,"o",(function(){return p})),a.d(t,"l",(function(){return m})),a.d(t,"e",(function(){return O})),a.d(t,"f",(function(){return h})),a.d(t,"p",(function(){return I})),a.d(t,"q",(function(){return b})),a.d(t,"r",(function(){return E})),a.d(t,"d",(function(){return S})),a.d(t,"s",(function(){return N})),a.d(t,"m",(function(){return D}));var n=a(48);const r={airport:n.ICON_NAMES.PLANE,blog:n.ICON_NAMES.BLOG,bus:n.ICON_NAMES.BUS,cooking:n.ICON_NAMES.COOKING,facebook:n.ICON_NAMES.FACEBOOK,"further info":n.ICON_NAMES.FURTHER_INFO,googleplus:n.ICON_NAMES.GOOGLE_PLUS,guests:n.ICON_NAMES.GUESTS,"heating/cooling":n.ICON_NAMES.SNOWFLAKE,instagram:n.ICON_NAMES.INSTAGRAM,internet:n.ICON_NAMES.WIFI,laundry:n.ICON_NAMES.LAUNDRY,linkedin:n.ICON_NAMES.LINKEDIN,"meal plans":n.ICON_NAMES.COOKING_HAT,miscellaneous:n.ICON_NAMES.SECURITY,motorway:n.ICON_NAMES.ROAD,noChildren:n.ICON_NAMES.NO_CHILDREN,outside:n.ICON_NAMES.SUN,parking:n.ICON_NAMES.PARKING,petsAllowed:n.ICON_NAMES.PAW,pinterest:n.ICON_NAMES.PINTEREST,port:n.ICON_NAMES.PORT,rooms:n.ICON_NAMES.BEDROOM_DOOR,roomsBathroom:n.ICON_NAMES.BATHROOM,roomsBedroom:n.ICON_NAMES.BEDROOM_DOOR,sanitary:n.ICON_NAMES.BATHROOM,sleeping:n.ICON_NAMES.DOUBLE_BED,sleepingBabyCrib:n.ICON_NAMES.BABY_CRIB,sleepingBedLinen:n.ICON_NAMES.BED_LINEN,sleepingChildBed:n.ICON_NAMES.SINGLE_BED,sleepingDoubleBed:n.ICON_NAMES.DOUBLE_BED,sleepingFoldAwayBed:n.ICON_NAMES.COUCH,sleepingKingBed:n.ICON_NAMES.DOUBLE_BED,sleepingLoftBed:n.ICON_NAMES.LOFT_BED,sleepingQueenBed:n.ICON_NAMES.DOUBLE_BED,sleepingStudioCouch:n.ICON_NAMES.COUCH,sleepingTwinSingleBed:n.ICON_NAMES.SINGLE_BED,other:n.ICON_NAMES.SOFA,"other units":n.ICON_NAMES.SOFA,"spa and gym":n.ICON_NAMES.SPA,train:n.ICON_NAMES.TRAIN,twitter:n.ICON_NAMES.TWITTER,underground:n.ICON_NAMES.UNDERGROUND,youtube:n.ICON_NAMES.YOUTUBE,entertainment:n.ICON_NAMES.PING_PONG,policies:n.ICON_NAMES.DOCUMENT,locationfeatures:n.ICON_NAMES.LANDSCAPE,parkingandfacilities:n.ICON_NAMES.PARKING,kitchenanddining:n.ICON_NAMES.COOKING,internetandoffice:n.ICON_NAMES.WIFI,poolandspafacilities:n.ICON_NAMES.SWIM,bathroomandlaundry:n.ICON_NAMES.BATHROOM,services:n.ICON_NAMES.PLATTER,heatingandcooling:n.ICON_NAMES.TEMPERATURE,safety:n.ICON_NAMES.FIRST_AID},o="YYYY-MM-DD",i="YYYYMMDD",c=50,s={DROPDOWN_IMAGE:200,FEATURED_PROPERTIES_IMAGE:500,FEATURED_ROOM_TYPE_IMAGE:500,HEADER_LOGO:500,HERO_BACKGROUND_IMAGE:2080,HOST_PROFILE_AVATAR:300,IMAGE:1040,PROMOTION_IMAGE:1040,PROPERTY_PICTURES_IMAGE:1040,SLIDE_SHOW_IMAGE:2080},u=12,d="ALL_PROPERTIES",l="/",g="_blank",p="{{TermsOfServiceLink}}",m="{{PrivacyPolicyLink}}",O="https://policies.google.com/privacy",h="https://policies.google.com/terms",I="en-gb",b="US",E="en",S=E,N=["HidePoweredByLodgifyDotCom","HidePoweredByLodgifyDotComSetByApp"],D="ref"},1014:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const n=(e,t)=>{if(e){const a=e&&e.includes("?")?"&":"?";return`${e}${a}w=${t}`}}},1016:function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return n}));const n=()=>{if(!e.location)return{};const t=new URLSearchParams(e.location.search),a={};for(const[e,n]of t)a[e.toLowerCase()]=n;return a}}).call(this,a(35))},1017:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(1013),r=a(1014);const o=(e,t)=>{const a=!Number.isNaN(t)&&t>=100?Math.round(t/100):n.h;return Object(r.a)(e,a)}},1021:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(12),r=a.n(n),o=a(1013);const i=e=>{const t=r.a.locale();return e===o.q?(r.a.locale(o.r),"MM/DD/YYYY"):t===o.d?(r.a.locale(o.p),"DD/MM/YYYY"):r.a.localeData()._longDateFormat.L}},1022:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const n=e=>1===e},1027:function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return c}));var n=a(1028),r=a(1029),o=a(1030),i=a(1031);const c=function(){let{dates:t,guests:a,location:c=""}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{coupon:s,promotionId:u,searchPageUrl:d=""}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{startDate:l,endDate:g}=Object(n.a)(t),p=Object(r.a)(a),m=Object(i.a)(c),O=Object(o.a)({SelectedLocationId:m,Arrival:l,Departure:g,NumberOfPeople:p,promid:u,coupon:s});return`${e.location.origin}${d}${O}`}}).call(this,a(35))},1028:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(1013);const r=e=>{const{startDate:t,endDate:a}=e||{};return{startDate:t&&t._isAMomentObject?t.format(n.b):void 0,endDate:a&&a._isAMomentObject?a.format(n.b):void 0}}},1029:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const n=e=>e||2},1030:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const n=e=>{const t=Object.entries(e).reduce((e,t)=>{let[a,n]=t;return[...e,...void 0!==n&&""!==n?[`${a}=${n}`]:[]]},[]).join("&");return t?"?"+t:""}},1031:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const n=e=>e||void 0},1033:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const n=(e,t,a,n)=>{switch(!0){case 1===e:return a.replace("{{NumberOfGuests}}",e);case e>1:return n.replace("{{NumberOfGuests}}",e);default:return t}}},1035:function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return C}));var n=a(0),r=a.n(n),o=a(12),i=a.n(o),c=a(1),s=a.n(c),u=a(149),d=a(40),l=a(118),g=a(230),p=a(148),m=a(1041),O=a(1016),h=a(305),I=a(1013),b=a(1027),E=a(1021),S=a(1036),N=a(1037),D=a(1038),_=a(1033),A=a(1039),f=a(1040);const C=t=>{let{assignedPropertyId:a,children:o,cookies:c,guestsCounterLabel:s,language:C,maxProperties:B,numberOfGuestsPlural:M,numberOfGuestsSingular:R,onSetCookie:T,searchPageUrl:w,websiteId:y,willCheckoutOnSearchBarSubmit:j}=t;const L=i()().format("YYYY-MM-DD"),[x,P]=Object(n.useState)(null),[v,G]=Object(n.useState)(null),[k,U]=Object(n.useState)(1),[H,Y]=Object(n.useState)(null),[F,V]=Object(n.useState)([]),{ref:$,currency:K,rt:W,coupon:z}=Object(O.a)(),{setParams:q}=Object(d.useCheckoutUrl)(),{formatDate:Z}=Object(g.b)(C),[Q,,X]=Object(h.a)(u.getSearchFilters,{params:[y]}),{maxGuests:J}=Q||{},ee=Object(n.useMemo)(()=>(null==v?void 0:v.startDate)?i()(null==v?void 0:v.startDate).format("YYYY-MM-DD"):void 0,[null==v?void 0:v.startDate,x]),{available:te,checkInValidation:ae,unavailable:ne}=Object(u.useCheckIn)({websiteId:y,startDate:L,propertyId:a}),{available:re,unavailable:oe,minStay:ie,checkOutValidation:ce}=Object(u.useCheckOut)({websiteId:y,startDate:ee,propertyId:a}),{translate:se}=Object(p.f)(),ue=Object(m.a)(),[de,le]=Object(n.useState)(oe);Object(n.useEffect)(()=>{$&&localStorage.setItem(I.m,$)},[]),Object(n.useEffect)(()=>{const{endDate:e,startDate:t,numberOfGuests:a}=ue;if(a||t||e)U(a),G({startDate:t,endDate:e});else{const e=Object(D.a)(c),t=Object(N.a)(c);t&&G(t),e&&U(e)}const n=Object(A.a)(c);n&&Y(n)},[c]),Object(n.useEffect)(()=>{!ee&&(null==te||te.length),ae||(V(te),le(ne))},[ee,ae]),Object(n.useEffect)(()=>{void 0===ee||"endDate"!==x||ce||(V(re),le(oe))},[ee,ce]),Object(n.useEffect)(()=>{(null==v?void 0:v.startDate)&&"startDate"===x&&!ae&&(V(te),le(ne))},[x]),Object(n.useEffect)(()=>{(null==v?void 0:v.startDate)&&(null==v?void 0:v.endDate)&&"endDate"===x&&(V(re),le(oe))},[x]);Object(n.useEffect)(()=>{q({location:H,guests:k,dates:v,ref:$,coupon:z})},[H,k,v]);const ge=Object(_.a)(k,s,R,M),pe=Object(E.a)(c[l.a]);return r.a.createElement(n.Fragment,null,o({countryCode:c[l.a],dateRangePickerDisplayFormat:pe,maximumGuestsInputValue:J,datesInputFocusedInput:x,datesInputOnFocusChange:e=>{P(e)},datesInputValue:v,getIsDayBlocked:B>1&&!a?()=>!1:e=>!(null==F?void 0:F.includes(i()(e).format("YYYY-MM-DD"))),datesInputUnavailableDates:de,datesInputMinStayNumber:ie,datesInputMinStayTooltipText:se(p.a.DATEPICKER_MINSTAY_TOOLTIP,{plural:ie>1}),datesInputRestrictedDayTooltipText:se(p.a.DATEPICKER_RESTRICTED_TOOLTIP),formatDate:Z,guestsInputLabel:ge,guestsCounterLabel:s,guestsInputValue:k,isDateRangePickerLoading:ae||X,locationInputValue:H,onChangeInput:e=>{let{dates:t,guests:a,location:n}=e;i()(null==t?void 0:t.startDate).isSame(null==v?void 0:v.startDate)&&"startDate"===x&&!(null==v?void 0:v.endDate)&&(V(re),le(oe)),t.startDate&&t.endDate&&t.startDate!==v.startDate?G({startDate:t.startDate,endDate:null}):(t.startDate||t.endDate||(V(te),le(ne)),G(t),a&&U(a),void 0!==n&&Y(n))},onSubmit:t=>{const a=Object(S.a)(t);if(Object(f.a)(a,T),j)return!0;e.location.assign(Object(b.a)(a,{searchPageUrl:w}))},currencyQueryParam:K,roomTypeQueryParam:W}))};C.defaultProps={assignedPropertyId:void 0,searchPageUrl:null,children:Function.prototype},C.propTypes={assignedPropertyId:s.a.number,cookies:s.a.objectOf(s.a.oneOfType([s.a.string,s.a.number])).isRequired,guestsCounterLabel:s.a.string.isRequired,language:s.a.string.isRequired,numberOfGuestsPlural:s.a.string.isRequired,numberOfGuestsSingular:s.a.string.isRequired,onSetCookie:s.a.func.isRequired,searchPageUrl:s.a.string,willCheckoutOnSearchBarSubmit:s.a.bool.isRequired,children:s.a.func,websiteId:s.a.number,maxProperties:s.a.number.isRequired},C.displayName="SearchBarController"}).call(this,a(35))},1036:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(1013);const r=e=>{let{location:t,dates:a,guests:r}=e;return t===n.a?{dates:a,guests:r}:{location:t,dates:a,guests:r}}},1037:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(12),r=a.n(n),o=a(118);const i=e=>{const t=e[o.f],a=e[o.c];return{endDate:a?r()(a):null,startDate:t?r()(t):null}}},1038:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(118);const r=e=>{const t=e[n.d];return Number(t)||void 0}},1039:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(118);const r=e=>e[n.e]||null},1040:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(118);const r=(e,t)=>{let{guests:a,location:r,dates:o}=e;const i=o&&o.startDate?o.startDate.format():null,c=o&&o.endDate?o.endDate.format():null;a&&t(n.d,a),i&&t(n.f,i),c&&t(n.c,c),r&&t(n.e,r)}},1041:function(e,t,a){"use strict";var n=a(1016),r=a(12),o=a.n(r);const i=()=>{const{arrival:e,departure:t,numberofpeople:a,currency:r,rt:i}=Object(n.a)();return{endDate:e?o()(t):null,startDate:e?o()(e):null,numberOfGuests:Number(a)||null,currency:r||null,rt:i||null}};a.d(t,"a",(function(){return i}))},1054:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const n=(e,t)=>e&&{...e,text:t}},1072:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(529),r=a(1014),o=a(1017);const i=(e,t,a,i)=>e.map(e=>{let{url:c,text:s,width:u,height:d}=e;return{alternativeText:s,descriptionText:s,placeholderUrl:Object(o.a)(c,i),sizes:Object(n.getImageSizes)(t,c),srcSet:Object(n.getImageSrcSet)(t,c),title:s,url:Object(r.a)(c,a),imageWidth:u,imageHeight:d}})},1073:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));const n=(e,t)=>e.map((e,a)=>({...e,text:t[a].text}))},529:function(e,t,a){"use strict";a.r(t);const n=[320,575,768,992,1200,1920],r={DROPDOWN_IMAGE:{320:56,575:56,768:56,992:56,1200:56,1920:112},FEATURED_PROPERTIES_IMAGE:{320:300,575:300,768:300,992:300,1200:300,1920:500},FEATURED_ROOM_TYPE_IMAGE:{320:300,575:300,768:300,992:300,1200:300,1920:500},HEADER_LOGO:{320:200,575:200,768:200,992:200,1200:200,1920:400},HERO_BACKGROUND_IMAGE:{320:320,575:575,768:768,992:992,1200:1200,1920:1920},IMAGE:{320:320,575:575,768:768,992:992,1200:1040,1920:1040},PROMOTION_IMAGE:{320:600,575:600,768:880,992:880,1200:880,1920:880},PROPERTY_PICTURES_GALLERY_IMAGE:{320:320,575:575,768:768,992:992,1200:1040,1920:1920},PROPERTY_PICTURES_THUMBNAIL_IMAGE:{320:150,575:150,768:150,992:350,1200:350,1920:350},SLIDE_SHOW_IMAGE:{320:320,575:575,768:768,992:992,1200:1200,1920:1920},THUMBNAIL_IMAGE:{320:50,575:50,768:50,992:50,1200:50,1920:50}},o=e=>n.map(t=>((e,t)=>`(max-width: ${e}px) ${t}px`)(t,e[t])).join(", "),i=(e,t)=>t&&n.map(a=>`${t}?w=${e[a]} ${e[a]}w`).join(", ");var c=a(1013);const s=(e,t)=>Object.entries(e).reduce((e,a)=>{let[n,r]=a;return{...e,[n]:Number(n)>575?Math.floor(r/c.k*t):r}},{});a.d(t,"IMAGE_SIZES",(function(){return r})),a.d(t,"BREAKPOINTS",(function(){return n})),a.d(t,"getImageSizes",(function(){return o})),a.d(t,"getImageSrcSet",(function(){return i})),a.d(t,"getSizesWithColumnWidth",(function(){return s}))},531:function(e,t,a){"use strict";a.r(t);var n=a(106),r=a.n(n),o=a(165),i=a(148),c=a(11),s=a(22),u=a(118),d=a(356),l=a(1035);const g=r()(Object(s.z)(e=>{var t,a;const n=null==e||null===(t=e.websiteData)||void 0===t?void 0:t.maxProperties;return{assignedPropertyId:n<2?Object.keys(null==e?void 0:e.propertyData)[0]:Object(c.a)(s.d.ASSIGNED_PROPERTY_ID,e),language:Object(s.s)(e),searchPageUrl:Object(s.x)(s.d.SEARCH_PAGE_URL,e),singlePropertyWebsitePropertyId:Object(s.w)(e),slug:Object(c.a)(s.d.SLUG,e),websiteId:Object(c.a)(s.d.WEBSITE_ID,e),willCheckoutOnSearchBarSubmit:Object(c.a)(s.d.USE_CHECKOUT_URL,e),domain:null==e?void 0:e.domain,propertyId:null==e||null===(a=e.pageData)||void 0===a?void 0:a.assignedPropertyId,maxProperties:n}}),Object(i.g)(e=>({numberOfGuestsPlural:Object(o.a)(i.a.NUMBER_OF_GUESTS_PLURAL,e),numberOfGuestsSingular:Object(o.a)(i.a.NUMBER_OF_GUESTS_SINGULAR,e),guestsCounterLabel:Object(o.a)(i.a.GUESTS,e)})),Object(u.h)(),Object(d.c)())(l.a);a.d(t,"SearchBarController",(function(){return g}))},533:function(e,t,a){"use strict";a.r(t);var n=a(25),r=a.n(n),o=a(0),i=a.n(o),c=a(89),s=a(531);const u=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:e=>e;return t=>{const a=a=>i.a.createElement(s.SearchBarController,null,n=>i.a.createElement(t,r()({},a,e(n))));return a.displayName=Object(c.a)("withSearchBarController",t),a}};a.d(t,"withSearchBarController",(function(){return u}))},572:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(106),i=a.n(o),c=a(40),s=a(48),u=a(3),d=a(11),l=a(165),g=a(358),p=a(22),m=a(148),O=a(1072),h=a(1073),I=a(1013),b=a(1054),E=a(1014),S=a(1022),N=a(1017),D=a(529);var _=a(533),A=a(25),f=a.n(A),C=a(1),B=a(230),M=a(101),R=a(359);const T=u.styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  z-index: 99;

  .search-bar {
    box-shadow: 0 30px 30px -15px rgba(0, 0, 0, 0.15);
    border-radius: 10px;

    .ui.form .inputs-container {
      display: flex;
      width: 100%;
      flex-direction: column;
      padding: 1em;
      margin-left: 0;
      border-radius: 10px;
      background-color: var(--ldg-semantic-color-white);
      gap: 1.25em;

      .button-container {
        margin: 0;
      }

      .location-input-container {
        i.icon {
          :first-child {
            display: none;
          }
        }
      }

      > div {
        width: 100%;
        max-width: unset;
        padding-right: 0;

        &:last-child {
          margin: 0;
          margin-left: auto;
        }

        .dropdown-container {
          min-width: 90px;
          height: 100%;
          .ui.dropdown {
            max-width: unset;
          }
        }
      }

      .ui.selection.dropdown {
        border: 1px solid #c6c6c6;
        border-radius: 5px;
        padding: 1em;
        background: var(--ldg-semantic-color-white);
      }

      .DateRangePickerInput__withBorder {
        border: 1px solid #c6c6c6;
        border-radius: 5px !important;
        background: var(--ldg-semantic-color-white);
        padding-left: 1em;
      }
    }
  }

  @media (min-width: ${u.breakpoints.desktop}) {
    .search-bar .ui.form .inputs-container {
      flex-direction: row;
      margin-top: 1.5em;
      padding: 0;

      .button-container {
        max-width: 160px;
      }

      .guests-input-container {
        max-width: 135px;
      }

      .location-input-container {
        max-width: 220px;
      }

      .DateRangePickerInput__withBorder {
        max-width: 360px;
        padding: 4px;
      }

      .input-container {
        margin: 1.25em 0;

        > div {
          width: unset;
        }
      }

      .input-container.dates-input-container {
        margin-left: ${e=>e.hasLocationDropdown?"0":"1.25em"};
      }

      .input-container.location-input-container {
        margin-left: 1em;

        i.icon {
          :first-child {
            display: none;
          }
        }
      }
    }
  }
`,w=u.styled.div`
  &.CapucineTwo {
    --ldg-component-hero-widget-content-height: 400px;
    --ldg-component-hero-widget-content-padding: 0 4em 0 0;
    --ldg-component-hero-widget-width: 100%;
    --ldg-component-hero-widget-margin: unset;
    --ldg-component-hero-widget-padding: 0 2em;
    --ldg-component-hero-widget-heading-margin: 0 0 1.25em 0;
    --ldg-component-hero-widget-image-height: 350px;

    @media (min-width: ${u.breakpoints.tablet}) {
      --ldg-component-hero-widget-image-height: 550px;
      --ldg-component-hero-widget-content-height: 660px;
    }

    @media (min-width: ${u.breakpoints.desktop}) {
      --ldg-component-hero-widget-content-height: 585px;
      --ldg-component-hero-widget-width: 80%;
      --ldg-component-hero-widget-margin: auto;
      --ldg-component-hero-widget-content-padding: 0 7em 0 0;
      --ldg-component-hero-widget-heading-margin: 0 0 3.5em 0;

      &.without-searchbar {
        --ldg-component-hero-widget-content-padding: 0;
      }
    }
  }

  &.TidewayTwo {
    &.without-searchbar {
      --ldg-component-hero-widget-content-height: unset;
    }

    @media (min-width: ${u.breakpoints.desktop}) {
      --ldg-component-hero-widget-content-height: 630px;

      &.without-searchbar {
        --ldg-component-hero-widget-content-height: unset;
      }
    }
  }

  &.BrooklynTwo {
    --ldg-component-hero-widget-padding: var(--ldg-core-spacing-7x);
    --ldg-component-hero-widget-image-height: 80vh;
    --ldg-component-hero-widget-max-height: 100vh;
    --ldg-component-hero-widget-heading-margin: 0 1em 4.5em 0;
    --ldg-component-hero-widget-carousel-border-radius: 0px;
    --ldg-component-hero-widget-overlay-background: linear-gradient(
      0deg,
      hsla(0, 0%, 100%, 0) 51%,
      rgba(0, 0, 0, 0.5)
    );
    --ldg-component-hero-widget-content-padding: var(--ldg-core-spacing-4x);

    @media (min-width: ${u.breakpoints.tablet}) {
      --ldg-component-hero-widget-padding: 0;
      --ldg-component-hero-widget-image-height: 100vh;
    }
  }

  &.LivingstoneTwo {
    --ldg-component-hero-widget-padding: 0;
    --ldg-component-hero-widget-image-height: 100vh;
    --ldg-component-hero-widget-max-height: 100vh;
    --ldg-component-hero-widget-heading-margin: 2em 0 5.75em 0;
    --ldg-component-hero-widget-heading-font-size: 2.85em;
    --ldg-component-hero-widget-carousel-border-radius: 0px;
    --ldg-component-hero-widget-overlay-background: linear-gradient(
      0deg,
      hsla(0, 0%, 100%, 0) 51%,
      rgba(0, 0, 0, 0.5)
    );

    @media (min-width: ${u.breakpoints.tablet}) {
      --ldg-component-hero-widget-heading-font-size: 3.42em;
    }
  }
`,y=Object(u.styled)(T)`
  @media (min-width: ${u.breakpoints.desktop}) {
    .search-bar .ui.form .inputs-container {
      border-radius: 4px;
      margin-left: 1.25em;
      justify-content: space-between;
      gap: 1.5em;
    }
  }
`,j=u.styled.div`
  @media (min-width: ${u.breakpoints.tablet}) {
    background-color: var(--ldg-semantic-color-white);
    padding: var(--ldg-core-spacing-5x);
    margin-right: var(--brooklyn-menu-width);
  }
`,L=Object(u.styled)(u.Button)`
  gap: 1em;
  @media (min-width: ${u.breakpoints.desktop}) {
    border-radius: 0px 10px 10px 0px;
    display: flex;
    height: 100%;
    justify-content: space-between;
    padding: 0.92857143rem 2.85714286rem;

    &.capucine-button {
      border-radius: 0px 4px 4px 0px;
    }
  }
`,x="TidewayTwo",P="LivingstoneTwo",v="CapucineTwo",G="BrooklynTwo",k=e=>{let{countryCode:t,dateRangePickerDisplayFormat:a,formatDate:n,searchBarModalHeadingText:r,searchBarDateRangePickerLocaleCode:o,searchBarDatesCheckInLabel:i,searchBarDatesCheckOutLabel:c,searchBarDatesInputFocusedInput:s,searchBarDatesInputOnFocusChange:u,searchBarDatesInputValue:d,searchBarGetIsDayBlocked:l,searchBarGuestsInputLabel:g,searchBarGuestsInputValue:p,searchBarLocationInputLabel:m,searchBarLocationInputValue:O,searchBarLocationOptions:h,searchBarMaximumGuestsInputValue:I,searchBarOnChangeInput:b,searchBarOnSubmit:E,searchBarSearchButton:S,isSearchBarDateRangePickerLoading:N,searchBarDatesInputUnavailableDates:D,searchBarDatesInputMinStayNumber:_,searchBarDatesInputMinStayTooltipText:A,searchBarDatesInputRestrictedDayTooltipText:f,searchBarModalTrigger:C}=e;return{countryCode:t,dateRangePickerDisplayFormat:a,dateRangePickerLocaleCode:o,datesCheckInLabel:i,datesCheckOutLabel:c,datesInputFocusedInput:s,datesInputOnFocusChange:u,datesInputValue:d,formatDate:n,getIsDayBlocked:l,guestsInputLabel:g,guestsInputValue:p,locationInputLabel:m,locationInputValue:O,locationOptions:h,maximumGuestsInputValue:I,onChangeInput:b,onSubmit:E,searchButton:S,isDateRangePickerLoading:N,datesInputUnavailableDates:D,datesInputMinStayNumber:_,datesInputMinStayTooltipText:A,datesInputRestrictedDayTooltipText:f,modalHeadingText:r,modalTrigger:C}},U=e=>{const{themeName:t,images:a,headingText:n,searchBarLocationOptions:o,searchBarHidden:i}=e,d=Object(c.useMediaQuery)(`(min-width: ${u.breakpoints.tablet})`);return r.a.createElement(w,{className:`${t} ${i&&"without-searchbar"}`},r.a.createElement(R.HeroWidget,{images:a,headingText:n,autoplay:a.length>1},!i&&r.a.createElement(r.a.Fragment,null,t===x&&r.a.createElement(T,{hasLocationDropdown:!!o},r.a.createElement(s.SearchBar,f()({},k(e),{isCalendarIconDisplayed:!1,isDisplayedAsModal:!d,searchButton:r.a.createElement(L,{type:"submit","data-testid":"tideway-home-hero.search-button",className:"tideway-button"},e.searchBarButtonText,r.a.createElement(s.Icon,{name:s.ICON_NAMES.CHEVRON_RIGHT}))}))),t===v&&r.a.createElement(y,null,r.a.createElement(s.SearchBar,f()({},k(e),{isCalendarIconDisplayed:!1,isDisplayedAsModal:!d,searchButton:r.a.createElement(L,{type:"submit","data-testid":"capucine-home-hero.search-button",className:"capucine-button"},e.searchBarButtonText,r.a.createElement(s.Icon,{name:s.ICON_NAMES.CHEVRON_RIGHT}))}))),t===G&&r.a.createElement(j,null,r.a.createElement(s.SearchBar,f()({},k(e),{isCalendarIconDisplayed:!0,isDisplayedAsModal:!d,searchButton:r.a.createElement(u.Button,{type:"submit","data-testid":"brooklyn-home-hero.search-button"},r.a.createElement(s.Icon,{name:s.ICON_NAMES.SEARCH}),e.searchBarButtonText)}))),t===P&&r.a.createElement("div",null,r.a.createElement(s.SearchBar,f()({},k(e),{isCalendarIconDisplayed:!0,isDisplayedAsModal:!d,searchButton:r.a.createElement(u.Button,{type:"submit","data-testid":"livingstone-home-hero.search-button"},r.a.createElement(s.Icon,{name:s.ICON_NAMES.SEARCH}),e.searchBarButtonText)}))))))};U.propTypes={themeName:C.string.isRequired,images:Object(C.arrayOf)(C.string).isRequired,searchBarButtonText:C.string.isRequired,headingText:C.string,searchBarLocationOptions:Object(C.arrayOf)(Object),searchBarHidden:C.bool};var H=a(118);const Y=e=>{let{language:t,...a}=e;const{formatDate:o}=Object(B.b)(t),[i,c]=Object(M.b)(H.a);return Object(n.useEffect)(()=>{c()},[]),r.a.createElement(U,f()({formatDate:o,countryCode:i},a))};Y.displayName="HomeHeroController",Y.propTypes={language:C.string};const F=i()(Object(_.withSearchBarController)(e=>{let{datesInputFocusedInput:t,datesInputOnFocusChange:a,datesInputValue:n,dateRangePickerDisplayFormat:r,getIsDayBlocked:o,guestsInputLabel:i,guestsCounterLabel:c,guestsInputValue:s,locationInputValue:u,onChangeInput:d,onSubmit:l,isDateRangePickerLoading:g,maximumGuestsInputValue:p,datesInputUnavailableDates:m,datesInputMinStayNumber:O,datesInputMinStayTooltipText:h,datesInputRestrictedDayTooltipText:I}=e;return{dateRangePickerDisplayFormat:r,searchBarDatesInputFocusedInput:t,searchBarDatesInputOnFocusChange:a,searchBarDatesInputValue:n,searchBarGetIsDayBlocked:o,searchBarGuestsInputLabel:i,searchBarGuestsInputCounterLabel:c,searchBarGuestsInputValue:s,searchBarLocationInputValue:u,searchBarOnChangeInput:d,searchBarOnSubmit:l,isSearchBarDateRangePickerLoading:g,searchBarMaximumGuestsInputValue:p,searchBarDatesInputUnavailableDates:m,searchBarDatesInputMinStayNumber:O,searchBarDatesInputMinStayTooltipText:h,searchBarDatesInputRestrictedDayTooltipText:I}}),Object(p.z)((e,t)=>{let{text:a,images:n}=t;const r=Object(d.a)(["0","imageId"],n),{url:o,width:s,height:u}=Object(p.o)(r,e),l=Object(p.s)(e),g=Object(d.a)("pageData.pageOptions",e,[]).includes("SearchBoxHidden");return{backgroundImageSizes:Object(D.getImageSizes)(D.IMAGE_SIZES.HERO_BACKGROUND_IMAGE,o),backgroundImageSrcSet:Object(D.getImageSrcSet)(D.IMAGE_SIZES.HERO_BACKGROUND_IMAGE,o),backgroundImageUrl:Object(E.a)(o,I.i.HERO_BACKGROUND_IMAGE),backgroundImageHeight:u,backgroundImageWidth:s,headingText:a,maxProperties:Object(d.a)(p.d.MAX_PROPERTIES,e),placeholderBackgroundImageUrl:Object(N.a)(o,s),searchBarLocationOptions:i()(c.adaptSearchLocations,d.a)(p.d.SEARCH_LOCATIONS,e),searchBarDateRangePickerLocaleCode:l,images:Object(O.a)(Object(h.a)(Object(p.r)(n,e),n),Object(D.getSizesWithColumnWidth)(D.IMAGE_SIZES.SLIDE_SHOW_IMAGE,12),I.i.SLIDE_SHOW_IMAGE,s),themeName:Object(d.a)(p.d.THEME_NAME,e),language:l,searchBarHidden:g}}),Object(m.g)((e,t)=>{let{headerPrimaryCTA:a,maxProperties:n}=t;const o=Object(S.a)(n)?Object(l.a)(m.a.BOOK_NOW,e):Object(l.a)(m.a.VIEW_ALL_PROPERTIES,e),i=Object(S.a)(n)?Object(l.a)(m.a.BOOK_NOW,e):Object(l.a)(m.a.SEARCH,e);return{headerPrimaryCTA:Object(b.a)(a,o),searchBarDatesCheckInLabel:Object(l.a)(m.a.ARRIVAL,e),searchBarDatesCheckOutLabel:Object(l.a)(m.a.DEPARTURE,e),searchBarLocationInputLabel:Object(l.a)(m.a.LOCATION,e),searchBarModalHeadingText:Object(l.a)(m.a.CHECK_AVAILABILITY,e),searchBarButtonText:i,searchBarSearchButton:r.a.createElement(u.Button,{type:"submit"},r.a.createElement(s.Icon,{name:s.ICON_NAMES.SEARCH}),i),searchBarModalTrigger:r.a.createElement(u.Button,{type:"submit"},r.a.createElement(s.Icon,{name:s.ICON_NAMES.SEARCH}),i)}}),Object(g.b)(e=>{let{backgroundImageUrl:t,backgroundImageWidth:a}=e;return{...t&&a&&{backgroundImageUrl:t,backgroundImageSizes:Object(D.getImageSizes)(D.IMAGE_SIZES.HERO_BACKGROUND_IMAGE,t),backgroundImageSrcSet:Object(D.getImageSrcSet)(D.IMAGE_SIZES.HERO_BACKGROUND_IMAGE,t),placeholderBackgroundImageUrl:Object(N.a)(t,a)}}}))(Y);a.d(t,"Component",(function(){return F}))}}]);