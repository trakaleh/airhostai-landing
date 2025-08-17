// for pricing-5 template

(function waitForjQuery() {
  if (window.jQuery) {
    (function ($) {
      const priceCofMonthly = 1.25;
      const priceCofBi = 0.9375;

      // Price 2 Array USD - Starter
      var Price2Usd = {
        1: 15.84,
        2: 6.61,
        3: 5.28,
        4: 3.97,
        8: 2.64,
        11: 1.1,
        21: 0.55,
      };
      // Price 2 Array EURO - Starter
      var Price2Eur = {
        1: 13.12,
        2: 5.47,
        3: 4.37,
        4: 3.29,
        8: 2.19,
        11: 0.91,
        21: 0.46,
      };
      // Price 2 Array GBP - Starter
      var Price2Gbp = {
        1: 12.19,
        2: 5.09,
        3: 4.06,
        4: 3.05,
        8: 2.03,
        11: 0.85,
        21: 0.42,
      };

      // Price 1 Array USD - Professional
      var Price1Usd = {
        1: 40.32,
        2: 22.68,
        3: 17.64,
        4: 20.1,
        5: 9.66,
        6: 8.86,
        11: 8.47,
        21: 8.32,
        31: 7.0,
        101: 5.83,
        501: 4.66,
      };
      // Price 1 Array EURO - Professional
      var Price1Eur = {
        1: 33.39,
        2: 18.39,
        3: 14.61,
        4: 16.65,
        5: 8.0,
        6: 7.33,
        11: 7.02,
        21: 6.89,
        31: 5.8,
        101: 4.83,
        501: 3.86,
      };
      // Price 1 Array GBP - Professional
      var Price1Gbp = {
        1: 29.39,
        2: 16.53,
        3: 12.86,
        4: 14.66,
        5: 7.04,
        6: 6.46,
        11: 6.18,
        21: 6.07,
        31: 5.1,
        101: 4.25,
        501: 3.4,
      };

      // Price 3 Array USD - Ultimate
      var Price3Usd = {
        1: 58.75,
        2: 33.05,
        3: 25.7,
        4: 16.52,
        5: 12.85,
        6: 11.78,
        31: 10.1,
        101: 8.42,
        501: 6.73,
      };
      // Price 3 Array EURO - Ultimate
      var Price3Eur = {
        1: 48.65,
        2: 27.36,
        3: 21.28,
        4: 13.68,
        5: 10.64,
        6: 9.76,
        31: 8.37,
        101: 6.98,
        501: 5.57,
      };
      // Price 3 Array GBP - Ultimate
      var Price3Gbp = {
        1: 45.21,
        2: 25.43,
        3: 19.78,
        4: 12.71,
        5: 9.89,
        6: 9.07,
        31: 7.78,
        101: 6.48,
        501: 5.18,
      };

      var Ar1Price = Price1Usd;
      var Ar2Price = Price2Usd;
      var Ar3Price = Price3Usd;
      var priceCof = 1; // the cof for Month plan
      var pricePeriod = 2; // Yearly

      var elemPlan1 = $(".plan-price-1 .total-sum");
      var elemPlan2 = $(".plan-price-2 .total-sum");
      var elemPlan3 = $(".plan-price-3 .total-sum");

      // Round to two decimal places
      function roundToTwo(num) {
        return Math.round(num * 100) / 100;
      }

      function roundToIntAfterTwo(num) {
        return Math.round(roundToTwo(num));
      }

      // Count total price - function
      var cardPrice = function (num, elem, priceArr) {
        var priceTotal = 0;
        var priceTotalMax = 0;
        var priceCurrent = 0;

        for (var i = 1; i <= num; i++) {
          if (priceArr[i] !== undefined) {
            priceCurrent = priceArr[i];
          }
          var priceWithCof = roundToTwo(priceCurrent * priceCof);
          var priceMax = roundToTwo(priceCurrent * priceCofMonthly);

          priceTotal += priceWithCof;
          priceTotalMax += priceMax;
        }

        elem.text(roundToIntAfterTwo(priceTotal));

        // Show Discount
        elem
          .closest(".price-item")
          .find(".discount-number")
          .text(roundToIntAfterTwo(priceTotalMax));
      };

      // Change Currency - function
      var changeCurrency = function (cur) {
        let curSelector = $(".price-currency-select");
        if (cur === "usd") {
          cursPre = "$";
          cursPost = "";
          Ar1Price = Price1Usd;
          Ar2Price = Price2Usd;
          Ar3Price = Price3Usd;
          curSelector.val("usd");
        } else if (cur === "gbp") {
          cursPre = "£";
          cursPost = "";
          Ar1Price = Price1Gbp;
          Ar2Price = Price2Gbp;
          Ar3Price = Price3Gbp;
          curSelector.val("gbp");
        } else {
          cursPre = "";
          cursPost = "€";
          Ar1Price = Price1Eur;
          Ar2Price = Price2Eur;
          Ar3Price = Price3Eur;
          curSelector.val("eur");
        }
        $(".currency-symbol-pre").html(cursPre);
        $(".currency-symbol-post").html(cursPost);
        cardPrice($("#scroll-prop-plan").val(), elemPlan1, Ar1Price);
        cardPrice($("#scroll-prop-plan").val(), elemPlan2, Ar2Price);
        cardPrice($("#scroll-prop-plan").val(), elemPlan3, Ar3Price);
      };

      // Magic Line Animation - function
      var magicLineAnimation = function (elem) {
        // Magic Line Animation
        let $thisnav = elem.closest(".magic-btn-group ul");
        let $thisnavMagicLine = $thisnav.find(".nav-magic-line");

        let $width = elem.outerWidth();
        let $left = elem.offset().left - $thisnav.offset().left - $width;
        let $start = 0;
        $thisnavMagicLine.css({ left: $left, width: $width });
      };

      // Click Event by period
      if ($(".price-period-buttons-2 li").length) {
        $(".price-period-buttons-2").on(
          "click",
          "li:not(.active)",
          function (event) {
            event.preventDefault();

            let $this = $(this);

            $this.addClass("active").siblings().removeClass("active");
            pricePeriod = $this.data("price-period");
            if (pricePeriod == 1) {
              priceCof = priceCofMonthly;
              $(".hide-price-period-1").hide();
              $(".price-discount-cont").hide();
              //$('.price-card-starter .price-item').addClass('disabled').find('.btn-price-plan-starter').text($('.btn-price-plan-starter').data('text-disable'));
            } else if (pricePeriod == 2) {
              priceCof = 1;
              $(".hide-price-period-1").show();
              $(".price-discount-cont").show();
              // if($('.price-card-starter .price-item').hasClass('disabled')) {
              // 	$('.price-card-starter .price-item').removeClass('disabled').find('.btn-price-plan-starter').text($('.btn-price-plan-starter').data('text'));
              // }
              //$('.price-card-starter .price-discount-cont').hide();
            } else if (pricePeriod == 3) {
              priceCof = priceCofBi;
              $(".hide-price-period-1").show();
              // if($('.price-card-starter .price-item').hasClass('disabled')) {
              // 	$('.price-card-starter .price-item').removeClass('disabled').find('.btn-price-plan-starter').text($('.btn-price-plan-starter').data('text'));
              // }
              $(".price-discount-cont").show();
            }

            let propCount = $("#scroll-prop-plan").val();
            cardPrice(propCount, elemPlan1, Ar1Price);
            cardPrice(propCount, elemPlan2, Ar2Price);
            cardPrice(propCount, elemPlan3, Ar3Price);
            $(".mob-tab-select")
              .html($this.html())
              .closest(".tabs-select")
              .removeClass("select-active");

            // Magic Line Animation
            magicLineAnimation($this);

            $("[data-text-plan-" + pricePeriod + "]").each(function (index) {
              let text = $(this).attr("data-text-plan-" + pricePeriod + "");
              $(this).html(text);
            });
          }
        );
      }

      // Click Event by period
      if ($(".btn-group-pricing-table li").length) {
        $(".btn-group-pricing-table").on(
          "click",
          "li:not(.active)",
          function (event) {
            event.preventDefault();

            let $this = $(this);

            $this.addClass("active").siblings().removeClass("active");
            let activePlan = $this.data("price-plan");

            //console.log(activePlan);

            $(".table-price").attr("data-active-plan", activePlan);

            // Magic Line Animation
            magicLineAnimation($this);
          }
        );
      }

      // Magic Line Animation when resize window
      $(window).resize(function () {
        magicLineAnimation($(".price-period-buttons-2 li.active"));
      });

      // Activate Price Properties Slider
      var prSlider = $("#scroll-prop-plan").slider({
        tooltip: "hide",
        value: "1",
        ticks: [1, 10, 30, 50, 70, 100, 220],
        ticks_positions: [0, 11, 29, 48, 67, 85, 100],
        ticks_labels: ["1", "10", "30", "50", "70", "100+", "220"],
      });

      $("#scroll-prop-plan").keyup(function () {
        if ($(this).val() == "") {
        } else {
          $(this).change();
        }
      });

      $("#scroll-prop-plan").change(function () {
        let val = $(this).val();

        var priceGrid = $(".price-grid");
        priceGrid.attr("data-num-properies", val);

        if (val < 1) {
          val = 1;
        }

        let maxItemsCount = 100;
        // IF template is 6v2
        if ($("body").hasClass("page-template-pricing-6v2")) {
          maxItemsCount = 4;
        }

        if (val > maxItemsCount) {
          // val = 100;
          if (priceGrid.is(":visible")) {
            priceGrid.slideUp("20");
            $(".plan-price").slideUp("20");
            $(".price-panel-over-100").slideDown("50");
          }
        } else {
          if (priceGrid.is(":hidden")) {
            $(".price-panel-over-100").stop().slideUp("20");
            priceGrid.stop().slideDown("50");
            $(".plan-price").slideDown("50");
          }
        }
        // console.log(over_switcher);
        prSlider.slider("setValue", val);
        cardPrice(val, elemPlan1, Ar1Price);
        cardPrice(val, elemPlan2, Ar2Price);
        cardPrice(val, elemPlan3, Ar3Price);
      });

      $(".price-currency-select").on("change", function () {
        changeCurrency($(this).val());
      });

      const euroCurrencyCountries = [
        "AD", // Andorra
        "AT", // Austria
        "BE", // Belgium
        "CY", // Cyprus
        "DE", // Germany
        "EE", // Estonia
        "ES", // Spain
        "FI", // Finland
        "FR", // France
        "GR", // Greece
        "HR", // Croatia
        "IE", // Ireland
        "IT", // Italy
        "LT", // Lithuania
        "LU", // Luxembourg
        "LV", // Latvia
        "MC", // Monaco
        "MT", // Malta
        "NL", // Netherlands
        "PT", // Portugal
        "SI", // Slovenia
        "SK", // Slovakia
        "SM", // San Marino
        "VA", // Vatican City
      ];

      // console.log(Cookies.get('ngx_geoip_cc'));
      if (Cookies.get("ngx_geoip_cc") == "GB") {
        changeCurrency("gbp");
      } else if (euroCurrencyCountries.includes(Cookies.get("ngx_geoip_cc"))) {
        changeCurrency("eur");
      } else if ($("body").hasClass("body-lang-en")) {
        changeCurrency("usd");
      } else {
        changeCurrency("eur");
      }

      elemPlan1.html(Math.round(Ar1Price[1]));
      elemPlan2.html(Math.round(Ar2Price[1]));
      elemPlan3.html(Math.round(Ar3Price[1]));

      // Buttons to decrement and increment the number of properties
      $(".property-scroll-box .btn-property-scroll-change").on(
        "click",
        function () {
          sliderElem = $(this)
            .closest(".property-scroll-box")
            .find("#scroll-prop-plan");
          sliderVal = parseInt(sliderElem.val());
          if ($(this).hasClass("btn-property-scroll-change-minus")) {
            sliderElem.val(sliderVal - 1);
          } else {
            sliderElem.val(sliderVal + 1);
          }
          sliderElem.change();
        }
      );
    })(jQuery);
  } else {
    setTimeout(waitForjQuery, 20);
  }
})();
