(function($) {
	
  console.log(`   _______________    
    |  ___________  |      
    | |           | |    
    | |   0   0   | |    
    | |     -     | |    
    | |   \___/   | |    
    | |___     ___| |.......Visit our Careers page at      
    |_____|\_/|_____|.......https://wordpress-1354756-4982292.cloudwaysapps.com/careers/      
      _|__|/ \|_|_..........to learn about our existing job openings
     / ********** \     
   /  ************  \ 
  -------------------- `);
  
    // Parallax background figures
    // var rellax = new Rellax('.rellax');
  
    // Animate on scroll
    // AOS.init();
  
    // document.addEventListener('aos:in', ({ detail }) => {
    //   console.log('animated in', detail);
    // });
  
    // document.addEventListener('aos:out', ({ detail }) => {
    //   console.log('animated out', detail);
    // });
  
  
    // Add the class "iframe-video-responsive" to each youtube embed video
    // var youtubeIframes = document.querySelectorAll('iframe[src*="youtube.com/embed/"]');
    // if (youtubeIframes.length > 0) {
    //   youtubeIframes.forEach(function(iframe) {
    //     iframe.classList.add('iframe-video-responsive');
    //   });
    // }
  
    // // Onepage scroll nav hightlight by scroll
    // if($('body.single-story').length) {
    //   $('body.single-story').scrollspy({ target: '#onepage-nav' });
    // }
  
    // if($('body.post-type-archive-story, body.page-template-template-success-stories').length) {
  
    //   $(window).scroll(function() {
    //     var scroll = $(window).scrollTop()
    //     if (scroll < ( $(window).height() / 2 ) ) {
    //     $(".head-bgimg").css({
    //       transform: 'scale(' + (100 + scroll / 30) / 100 + ')'
    //     });
    //     }
    //   });
    // }
  
    // Dropdown Select Menu
    // const selectDropdownEls = document.querySelectorAll(".select-dropdown-menu");
    // if (selectDropdownEls.length > 0) {
    // 	// Loop through each select dropdown element
    // 	selectDropdownEls.forEach(selectDropdownEl => {
    // 		const selectBtn = selectDropdownEl.querySelector(".select-dropdown-btn"),
    // 			options = selectDropdownEl.querySelectorAll(".select-dropdown-option"),
    // 			sBtn_text = selectDropdownEl.querySelector(".sBtn-text");
    
    // 		selectBtn.addEventListener("click", () => selectDropdownEl.classList.toggle("active"));
    
    // 		options.forEach(option => {
    // 			option.addEventListener("click", () => {
    // 				let selectedOption = option.querySelector(".option-text").innerText;
    // 				sBtn_text.innerText = selectedOption;
    // 				selectDropdownEl.classList.remove("active");
    // 			});
    // 		});
    
    // 		// Add a click event listener to the document to hide dropdown if clicked outside
    // 		document.addEventListener("click", (event) => {
    // 			if (!selectDropdownEl.contains(event.target)) {
    // 				selectDropdownEl.classList.remove("active");
    // 			}
    // 		});
    // 	});
    // }
  
    // Attach the click event listener to a common ancestor of all select dropdown elements
    document.addEventListener("click", (event) => {
      const selectBtn = event.target.closest(".select-dropdown-btn");
      const option = event.target.closest(".select-dropdown-option");
      const dropdownMenu = event.target.closest(".select-dropdown-menu");
  
      if (selectBtn) {
        const selectDropdownEl = selectBtn.closest(".select-dropdown-menu");
        if (selectDropdownEl) {
          selectDropdownEl.classList.toggle("active");
        }
      } else if (option) {
        const selectDropdownEl = option.closest(".select-dropdown-menu");
        if (selectDropdownEl) {
          const sBtn_text = selectDropdownEl.querySelector(".sBtn-text");
          const selectedOption = option.querySelector(".option-text").innerText;
          sBtn_text.innerText = selectedOption;
          selectDropdownEl.classList.remove("active");
        }
      } else if (!dropdownMenu) {
        // Clicked outside any select dropdown, so close all dropdowns
        document.querySelectorAll(".select-dropdown-menu.active").forEach(dropdown => {
          dropdown.classList.remove("active");
        });
      }
    });
    // Add a click event listener to the document to hide dropdown if clicked outside
    document.addEventListener("click", (event) => {
      const dropdownMenu = event.target.closest(".select-dropdown-menu");
      if (!dropdownMenu) {
        document.querySelectorAll(".select-dropdown-menu.active").forEach(dropdown => {
          dropdown.classList.remove("active");
        });
      }
    });
  
  
    
    // Calendar Animation
    setTimeout( function(){
  
      $('.sct-calendar-box').each(function() {
        let currentItem = $(this);
        let waypoint3 = new Waypoint({
          element: currentItem,
          handler: function(direction) {
            if (direction === 'down') {
              $(this.element).addClass('bg-img-shown');
              //console.log('to Down - End')
            }
            else {
              $(this.element).removeClass('bg-img-shown');
              $('.calendar-pin-box').removeClass('bg-img-shown');
              //console.log('to Top - Start');
            }
          },
          offset: '80'
        });
  
        let waypoint4 = new Waypoint({
          element: currentItem,
          handler: function(direction) {
            if (direction === 'down') {
              $(this.element).addClass('bg-img-shown-static');
              //console.log('to Down - End')
            }
            else {
              $(this.element).removeClass('bg-img-shown-static');
              //console.log('to Top - Start');
            }
          },
          offset: 'bottom-in-view'
        });
      });
  
      $('.calendar-pin-box').each(function() {
        let currentItem = $(this);
        let waypoint1 = new Waypoint({
          element: currentItem,
          handler: function(direction) {
            if (direction === 'down') {
              $(this.element).addClass('bg-img-shown');
              //console.log('to Down - START')
            }
            else {
              $(this.element).removeClass('bg-img-shown');
              //console.log('to Top - End');
            }
          },
          offset: '60%'
        });
        // let waypoint2 = new Waypoint({
        // 	element: currentItem,
        // 	handler: function(direction) {
        // 		if (direction === 'down') {
        // 			// $(this.element).removeClass('bg-img-shown');
        // 			$('.sct-calendar-box').addClass('bg-img-shown-static');
        // 			//console.log('to Down - End')
        // 		}
        // 		else {
        // 			// $(this.element).addClass('bg-img-shown');
        // 			$('.sct-calendar-box').removeClass('bg-img-shown-static');
        // 			//console.log('to Top - Start');
        // 		}
        // 	},
        // 	offset: '0'
        // });
      });
  
    }, 1200);
  
    setTimeout(function() {
      $hs_chat = $("body div#hubspot-messages-iframe-container");
      $hs_chat.css("cssText", "display: block !important");
      // $("body #hubspot-messages-iframe-container").css("height", "234px");
      // $("body #hubspot-messages-iframe-container").css("width", "276px");
    }, 4000)
  
    // Magic line for onepage navigation
    if($('.onepage-nav ul li').length) {
      // $(window).on('load resize', function() {
      //    var $thisnav = $('.onepage-nav ul li:first-child').offset().left;
      //    $('.onepage-nav ul li').hover(function() {
      //      var $left = $(this).offset().left - $thisnav;
      //      var $width = $(this).outerWidth();
      //      var $start = 0;
      //      $('.nav-magic-line').css({ 'left': $left , 'width': $width });
      //    }, function() {
      //      var $initwidth = $('.active').width();
      //      $('.nav-magic-line').css({ 'left': '0' , 'width': $initwidth });
      //    });
      //  });
      var $thisnav = $('.onepage-nav ul li:first-child').offset().left;
      $(".onepage-nav ul li").on("added-active-class", function(){  // I customized bootstrap.min.js file and added 'added-active-class' trigger to 'scrollspy'
        var $left = $(this).offset().left - $thisnav;
        var $width = $(this).outerWidth();
        var $start = 0;
        $('.onepage-nav .nav-magic-line').css({ 'left': $left , 'width': $width });
      });
    }
  
    // Footer
    $('.faq-item').on('click', '.faq-question', function() {
      $(this).closest('.faq-item').toggleClass('active');
    });
    $('.foot-area .widget').on('click', 'h5', function() {
      $(this).closest('.widget').toggleClass('active');
    });
  
    // Keep navigation bar fixed after scrolling
    var fixedNavigation = $('.head-top-bar.head-top-bar-sticky');
    var fixedNavigationWrap = fixedNavigation.closest('.head-top-wrap');
    var navpos = fixedNavigationWrap.offset();
    var gore = true;
    var previousScroll = 0;
    if (fixedNavigation.length) {
      $(window).on('scroll', function() {
        var fixedNavigationHeight = fixedNavigation.height() + 'px';
        if ($(window).scrollTop() > navpos.top) {
          if (gore) {
            $('body').addClass('sticky-main-nav-active');
            fixedNavigationWrap.css("height", fixedNavigationHeight);
            gore = false;
          }
        } else {
          if (!gore) {
            $('body').removeClass('sticky-main-nav-active');
            fixedNavigationWrap.css("height", 'auto');
            gore = true;
          }
        }
      });
    }
  
    //  Template Page
    $('.devices-demo-wrap .devices-demo-controls li').click(function(event) {
      var currentData = $(this).data('show');
      //console.log(currentData);
      if (!$(this).hasClass('active')) {
        $(this)
          .addClass('active')
          .siblings()
          .removeClass('active')
          .closest('.devices-demo-wrap')
          .find('.device-tech')
          .removeClass('device-desktop device-tablet device-mobile')
          .addClass(currentData);
      }
    });
  
    // Bootstrap Tooltip
    // $('[data-toggle="tooltip"]').tooltip();
    // $('[data-tooltip="fix"]')
    // 	.tooltip({
    // 		placement: 'bottom',
    // 		trigger: 'manual'
    // 	})
    // 	.tooltip('show');
    //$('[data-toggle="tooltip"]').on('click',function(){$(this).tooltip('destroy');});
  
    // Tabs
    if ($('.ld-tabs ul.tab-control').length) {
      $('.ld-tabs ul.tab-control').on('click', 'li:not(.active)', function() {
        $(this).stop(false, true)
          .addClass('active')
          .siblings()
          .removeClass('active')
          .closest('.ld-tabs')
          .find('.tab-box')
          .fadeOut(0)
          .removeClass('active')
          .eq($(this).index())
          .fadeIn(200)
          .addClass('active');
        $(this).stop(false, true)
          .closest('.tabs-select')
          .removeClass('select-active')
          .find('.mob-tab-select')
          .text($(this).text());
        $('html,body').stop(false, true).animate(
          {
            scrollTop: $('.ld-tabs').offset().top - 100
          },
          200
        );
      });
    }
    // Mobile Select Tab
    $('.tabs-select').on('click', '.mob-tab-select', function() {
      $(this).closest('.tabs-select').toggleClass('select-active');
    });
  
    // Tabs Hover
    if ($('.ld-tabs-h ul.tab-control').length) {
      $('.ld-tabs-h ul.tab-control').on('mouseover', 'li:not(.active)', function() {
        $(this)
          .addClass('active')
          .siblings()
          .removeClass('active')
          .closest('.ld-tabs-h')
          .find('.tab-box')
          .fadeOut(0)
          .removeClass('active')
          .eq($(this).index())
          .fadeIn(50)
          .addClass('active');
        $(this)
          .closest('.tabs-select')
          .removeClass('select-active')
          .find('.mob-tab-select')
          .text($(this).text());
      });
    }
  
    // Popup Link with Youtube or Vimeo iframe
    // if ($('.popup-video').length) {
    //   $('.popup-video').magnificPopup({
    //     //disableOn: 700,
    //     type: 'iframe',
    //     mainClass: 'mfp-fade',
    //     removalDelay: 160,
    //     preloader: false,
    //     fixedContentPos: false,
    //     iframe: {
    //           patterns: {
    //               youtube: {
    //                   index: 'youtube.com/', 
    //                   id: 'v=', 
    //                   src: '//www.youtube.com/embed/%id%?autoplay=1' 
    //               }
    //            },
    //            srcAction: 'iframe_src', 
    //        }
    //   });
    // }
  
    // $('.popup-inline-link').magnificPopup({
    //   type: 'inline',
    //   preloader: false,
    //   focus: '#name',
    // });
  
    // Testimonial Carousel on Home Page
    var $testimonialCarousel = $('.testimonial-carousel');
    if ($testimonialCarousel.length) {
      $testimonialCarousel.owlCarousel({
        items: 1,
        loop: true,
        center: false,
        margin: 0,
        nav: true,
        dots: false,
        smartSpeed: 550,
        autoplay: true,
        autoHeight: true,
        autoplayTimeout: 9000,
        autoplayHoverPause: false,
        navContainer: '.testimonial-navs'
      });
      // Change Background Image when we change new testimonial slide
      $testimonialCarousel.on('changed.owl.carousel', function(property) {
        var current = property.item.index;
        var imageUrl = $(property.target)
          .find('.owl-item')
          .eq(current)
          .find('.testimonial-item .testimonial-img')
          .attr('src');
        var currentSection = $(property.target).closest('.testimonial-section');
        if (currentSection.hasClass('active-bg')) {
          currentSection
            .removeClass('active-bg')
            .find('.testimonial-section-bg')
            .css('background-image', 'url(' + imageUrl + ')')
            .fadeIn(400);
        } else {
          currentSection
            .css('background-image', 'url(' + imageUrl + ')')
            .addClass('active-bg')
            .find('.testimonial-section-bg')
            .fadeOut(400);
        }
        //console.log('Current Image Url ' + imageUrl)
        //console.log(property);
      });
    }
  
    // Testimonial Carousel on Home Page
    var $benCarousel = $('.benefit-carousel');
    if ($benCarousel.length) {
      $benCarousel.each(function() {
        var $thisCarousel = $(this);
        $thisCarousel.owlCarousel({
          items: 1,
          loop: false,
          margin: 70,
          nav: true,
          dots: false,
          smartSpeed: 550,
          autoplay: false,
          autoHeight: true,
          autoplayTimeout: 9000,
          autoplayHoverPause: false,
          //navText: ['<svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.89128 6.99995L8.49989 0.666662L7.80425 0L0.499999 6.99995L7.80436 14L8.5 13.3333L1.89128 6.99995Z" fill="black"/></svg>','<svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.10871 6.99995L0.500107 0.666662L1.19575 0L8.5 6.99995L1.19564 14L0.5 13.3333L7.10871 6.99995Z" fill="black"/></svg>'],
          responsive: {
            600: {
              items: 2,
              margin: 30
            },
            900: {
              items: 3,
              margin: 30
            }
          }
        });
      });
    }
  
  
    // Testimonial Carousel on Home Page
    var $guideCarousel = $('.guide-carousel');
    if ($guideCarousel.length) {
      $guideCarousel.each(function() {
        var $thisCarousel = $(this);
        $thisCarousel.owlCarousel({
          items: 1,
          loop: false,
          margin: 25,
          nav: true,
          dots: false,
          smartSpeed: 550,
          autoplay: false,
          autoHeight: true,
          autoplayTimeout: 9000,
          autoplayHoverPause: false,
          navText: ['<svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M1.89128 6.99995L8.49989 0.666662L7.80425 0L0.499999 6.99995L7.80436 14L8.5 13.3333L1.89128 6.99995Z" fill="black"/></svg>','<svg width="9" height="14" viewBox="0 0 9 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M7.10871 6.99995L0.500107 0.666662L1.19575 0L8.5 6.99995L1.19564 14L0.5 13.3333L7.10871 6.99995Z" fill="black"/></svg>'],
          responsive: {
            600: {
              items: 2,
              margin: 30
            },
            900: {
              items: 3,
              margin: 30
            }
          }
        });
      });
    }
  
    // Testimonial Carousel on Home Page
    var $magCarouselStatic = $('.mag-carousel-wrap .mag-carousel-static');
    if ($magCarouselStatic.length) {
      $magCarouselStatic.each(function() {
        var $thisCarousel = $(this);
        $thisCarousel.owlCarousel({
          items: 1,
          loop: true,
          margin: 30,
          nav: false,
          dots: false,
          smartSpeed: 550,
          autoplay: false,
          autoHeight: true,
          center: true,
          autoplayTimeout: 9000,
          autoplayHoverPause: false,
          responsive: {
            992: {
              items: 1,
              margin: 60
            },
            992: {
              items: 1,
              margin: 80
            }
          }
        });
      });
    }
  
    // Testimonial Carousel on Home Page
    var $magCarousel = $('.mag-carousel-wrap .mag-carousel');
    if ($magCarousel.length) {
      $magCarousel.each(function() {
        var $thisCarousel = $(this);
        $thisCarousel.owlCarousel({
          items: 1,
          loop: true,
          margin: 40,
          nav: true,
          dots: true,
          smartSpeed: 550,
          autoplay: true,
          autoHeight: true,
          center: true,
          autoplayTimeout: 9000,
          autoplayHoverPause: false,
          navContainer: $thisCarousel.closest('.mag-carousel-wrap').find('.mag-carousel-nav'),
          responsive: {
            992: {
              items: 1,
              margin: 50
            }
          }
        });
        // Change title slide below slider for each slide
        // $thisCarousel.on('changed.owl.carousel', function(property) {
        // 	var current = property.item.index;
        // 	var slideTitle = $(property.target)
        // 		.find('.owl-item')
        // 		.eq(current)
        // 		.find('.slide-item')
        // 		.data('title');
        // 	var currentSection = $(property.target)
        // 		.closest('.mag-carousel-wrap')
        // 		.find('.mag-slide-title')
        // 		.text(slideTitle);
        // 	//console.log('Current Image Url ' + imageUrl)
        // 	//console.log(property);
        // });
      });
    }
  
    // Success stories carousel
    var $storiesCarousel = $('.stories-carousel-wrap .stories-carousel');
    if ($storiesCarousel.length) {
      $storiesCarousel.each(function() {
        var $thisCarousel = $(this);
        $thisCarousel.owlCarousel({
          items: 1,
          loop: true,
          margin: 30,
          nav: true,
          dots: false,
          smartSpeed: 550,
          autoplay: true,
          autoHeight: true,
          autoplayTimeout: 9000,
          autoplayHoverPause: false,
          navContainer: $thisCarousel.closest('.stories-carousel-wrap').find('.stories-carousel-nav'),
          // responsive: {
          // 	360: {
          // 		items: 2,
          // 	},
          // 	680: {
          // 		items: 3,
          // 	}
          // }
        });
      });
      $storiesCarousel.on('mousewheel', '.owl-stage', function (e) {
        if (e.deltaY>0) {
          $storiesCarousel.trigger('prev.owl');
        } else {
          $storiesCarousel.trigger('next.owl');
        }
        return false;
      });
    }
  
    // Conver SVG Images wiht class="svg" to SVG code, we will be able change the fill color for these images
    $('img.svg').each(function() {
      var $img = $(this);
      var imgID = $img.attr('id');
      var imgClass = $img.attr('class');
      var imgURL = $img.attr('src');
      $.get(
        imgURL,
        function(data) {
          // Get the SVG tag, ignore the rest
          var $svg = $(data).find('svg');
          // Add replaced image's ID to the new SVG
          if (typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
          }
          // Add replaced image's classes to the new SVG
          if (typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass + ' replaced-svg');
          }
          // Remove any invalid XML tags as per http://validator.w3.org
          $svg = $svg.removeAttr('xmlns:a');
          // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
          if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'));
          }
          // Replace image with new SVG
          $img.replaceWith($svg);
        },
        'xml'
      );
    });
  
    // Toggle Class 'focused' to input wrapper
    $('.form-group-input').delegate('input', 'focus', function() {
      var elem = $(this).closest('.form-group-input');
      elem.addClass('focused');
    });
  
    $('.form-group-input').delegate('input', 'blur', function() {
      var elem = $(this).closest('.form-group-input');
      if (!$(this).val()) {
        elem.removeClass('focused');
      }
    });
  
    // $( ".form-group-input" ).delegate( "input", "focus blur", function() {
    // 	var elem = $(this).closest('.form-group-input');
    // 	elem.toggleClass( "focused" );
    // });
  
  
  
    // Only Mobile - (Owl Carousel)
    //var screenWidth = $(window).width();
    var mobNavButton = $('.btn-mobile-bar');
    var xsCarousel = $('.xs-carousel');
    if (xsCarousel.length) {
      mobCarousel(xsCarousel, mobNavButton);
      $(window).resize(function() {
        mobCarousel(xsCarousel, mobNavButton);
      });
    }
  
    // Show/Hide Mobile bar
    $('body').on('click', '.btn-mobile-bar, .mob-wrap', function(event) {
      if($('body').hasClass('mobile-menu-bar-shown')) {
        setTimeout(function(){
          $('.content-wrapper').css({ 'height': 'auto' });
        }, 650);
      } else {
        if($('body').hasClass('admin-bar')) {
          $('.content-wrapper').css({ 'height': '94vh' });
        } else {
          $('.content-wrapper').css({ 'height': '100vh' });
        }
      }
      $('body').toggleClass('mobile-menu-bar-shown');
    });
  
    $('.main-mobile-nav-menu').on('click', '.caret', function(event) {
      event.preventDefault();
      $(this).closest('li').toggleClass('active');
    });
  
    // Price Period Buttons
    var pricePeriod = '2';
    //var priceValue1 = "25";
    //var priceValue2 = "53";
    if ($('.price-period-buttons li').length) {
      $('.price-period-buttons').on('click', 'li:not(.active)', function(event) {
        event.preventDefault();
        $(this).addClass('active').siblings().removeClass('active');
        pricePeriod = $(this).data('price-period');
        //console.log(pricePeriod);
        var propCount = $('#scroll-properties-plan').val();
        changePriceNumber(propCount, pricePeriod);
        if (pricePeriod == 1) {
          priceValue1 = prM['pro'];
        } else if (pricePeriod == 2) {
          priceValue1 = prY['pro'];
        } else if (pricePeriod == 3) {
          priceValue1 = prTY['pro'];
        }
        $('.price-panel-1 .price-item .total-sum').html(priceValue1);
  
        $('.mob-tab-select').html($(this).html()).closest('.tabs-select').removeClass('select-active');
  
        // Features markers not allowed in Monthly price
        if (pricePeriod == 1) {
          jQuery(
            '.price-item .plan-feature-lists .f-marker, .row-lg.plan-feature-lists .f-marker'
          ).hide();
        } else {
          jQuery(
            '.price-item .plan-feature-lists .f-marker, .row-lg.plan-feature-lists .f-marker'
          ).show();
        }
      });
    }
    // Price Properties Slider
    // $('#scroll-properties-plan').slider({
    //   ticks: [1, 2, 3, 4, 5],
    //   ticks_labels: ['S', 'M', 'L', 'XL', 'XXL'],
    //   tooltip: 'hide',
    //   value: '1'
    // });
    // // Price Properties Slider Events
    // $('#scroll-properties-plan').on('slide', function(slideEvt) {
    //   changePriceNumber(slideEvt.value, pricePeriod);
    // });
    // $('.price-panel-2 .price-item').on('click', '.scroll-box', function(slideEvt) {
    //   var propCount = $('#scroll-properties-plan').val();
    //   changePriceNumber(propCount, pricePeriod);
    //   //console.log('Click Slider ');
    // });
  
  
    // // // Price Properties Slider
    // $('#scroll-prop-plan').slider({
    // 	// tooltip: 'hide',
    // 	// value: '1'
    // 	ticks: [1, 10, 30, 50, 70, 100, 1000],
    // 	ticks_positions: [0, 10, 34, 60, 86, 92, 100],
    // 	ticks_labels: ['' ,'10', '30', '50', '70+', '', ''],
    // });
  
    // var ArPPrice = {
    // 	1:32, 
    // 	2:18, 
    // 	3:14, 
    // 	4:9, 
    // 	5:7, 
    // 	31:6, 
    // 	101:5, 
    // 	501:4
    // };
    // // Price Properties Slider Events
    // $('#scroll-prop-plan').on('slide', function(slideEvt) {
    // 	// if (pricePeriod == 1) {
    // 	// 	priceValue2 = prM['pro'];
    // 	// } else if (pricePeriod == 2) {
    // 	// 	priceValue2 = prY['pro'];
    // 	// } else if (pricePeriod == 3) {
    // 	// 	priceValue2 = prTY['pro'];
    // 	// }
    // 	//console.log(priceValue2 + slideEvt.value);
    // 	//console.log(ArPPrice);
    // 	var pricePack = 0;
    // 	var priceCurrent = 0;
    // 	var priceCof = 0.9375;
    // 	var priceWithCof = 0;
    // 	var priceTotal = 0;
    // 	for (var i = 1; i <= slideEvt.value; i++) {
    // 		if(typeof ArPPrice[i] === 'undefined') {
    // 		} else {
    // 			pricePack = ArPPrice[i];
    // 		}
    // 		if(pricePack !== priceCurrent) {
    // 			priceCurrent = pricePack;
    // 			priceWithCof = Math.round(priceCurrent * priceCof);
    // 		}
    // 		priceTotal += priceWithCof;
    // 	}
    // 	console.log(priceWithCof);
    // 	$('.plan-price .total-sum').html(priceTotal);
    // 	//$('.plan-price .total-sum').html(pr[1] * slideEvt.value);
    // });
  
    // All Templates page (Show all templates button)
    $('body').on('click', 'div[data-tpl-filter]', function(event) {
      event.preventDefault();
      $(this).addClass('active').siblings().removeClass('active');
      let data_filter = $(this).data('tpl-filter');
      let tpl_title = $(this).data('tpl-title');
      let tpl_subtitle = $(this).data('tpl-subtitle');
      let data_filter_class = '.tpl-filter-'+data_filter;
      let templateList = $('.templates-list-all');
      templateList.addClass('show-all');
      $('.templates-list .tpl-item-wrap').stop().css('display', 'none').addClass('op-0').filter(data_filter_class).fadeIn('100').removeClass('op-0');
      $('.btn-all-templates-wrap').fadeOut('150');
  
      $('.tpls-heading .tpl-title').stop().css('display', 'none').addClass('op-0').text(tpl_title).fadeIn('100').removeClass('op-0');
      $('.tpls-heading .tpl-subtitle').stop().css('display', 'none').addClass('op-0').text(tpl_subtitle).fadeIn('100').removeClass('op-0');
  
      // console.log(data_filter_class);
    });
  
    $('body').on('click', '.btn-all-templates', function(event) {
      event.preventDefault();
      //$('.templates-list-all').toggleClass('show-all');
      $('.templates-list .tpl-item-wrap').fadeIn('100');
      $(this).closest('.btn-all-templates-wrap').fadeOut('150');
    });
  
    // Disable ckick by current language
    $('.header li.wpml-ls-current-language > a').click(function(event) {
      event.preventDefault();
    });
  
    var careersJobList = function(){
      $("h2.whr-group").each(function( index ) {
        //console.log( index + ": " + $( this ).text() );
        var jobCategory = $(this).text();
        var jobCatClass = jobCategory.toLowerCase().replace(/ /g, '-').replace(/&/g, '-');
        $(this).next(".whr-items").addClass('cat-'+jobCatClass).find('.whr-item');
        var childCatBox = $(this).next(".whr-items").find('.whr-item');
        $('<p class="whr-category">'+ jobCategory +'</p>').prependTo(childCatBox);
      });
    };
    setTimeout(careersJobList, 1000);
  
  // Replace flag US to GB
    // if ( Cookies.get('ngx_geoip_cc') == "GB" ) {
    //   $("img.wpml-ls-flag").attr("src",function(index,attr){
    //     return attr.replace("/en.png","/gb.png");
    //   });
    // }
  // Set userlang Cookies when a user clicks to language navigation
    $('.wpml-ls-item ul.sub-menu a').click(function(e) {
      userlang = $(this).find('img').attr('alt');
      Cookies.set('userlang', userlang, { expires: 365 });
      //console.log(lang);
    });
  // Redirect to browser language version (only first visit)
    if(window.location.pathname == '/') {
      pageURL = document.location.href;
      var paths = pageURL.split('/');
      paths.shift();
      //console.log(navigator.language.substring(0, 2));
      //console.log(Cookies.get('userlang'));
      userLang = Cookies.get('userlang') ? Cookies.get('userlang') : navigator.language.substring(0, 2);
      //console.log(userLang);
      if(paths[2].length == 2) { // If the url has language path in url (es, it, de, fr)
        return false;
      } else { // If the url has english version
        switch(userLang){
          case 'es':
            window.location.href = addReplaceLangCode( document.location.href, 'es');
            break;
          case 'fr':
            window.location.href = addReplaceLangCode( document.location.href, 'fr');
            break;
          case 'it':
            window.location.href = addReplaceLangCode( document.location.href, 'it');
            break;
          case 'de':
            window.location.href = addReplaceLangCode( document.location.href, 'de');
            break;
        }
      }
    }
    //Cookies.remove('userlang');
  
  
    // init Isotope
    if($('.isotope-grid').length) { 
      var $isotopeGrid = $('.isotope-grid').isotope({
        itemSelector: '.isotope-grid-item',
        gutter: 50,
        layoutMode: 'fitRows'
      });
      // filter items on button click
      $('.isotope-filters').on( 'click', 'a', function(event) {
        event.preventDefault();
        var filterValue = $(this).attr('data-filter');
        $(this).addClass('active').siblings().removeClass('active');
        $isotopeGrid.isotope({ filter: filterValue });
        //var pageURL = updateQueryStringParameter(window.location.href , 'filter' , filterValue.replace(/\./g, ""));
        //window.history.pushState('', '', pageURL);
      });
  
      $('.isotope-filters').mousewheel(function(e, delta) {
        this.scrollLeft -= (delta * 40);
        e.preventDefault();
      });
  
      // if( ($('.isotope-filter a').length > 0) && getUrlParameter('filter') ) {
      // 	console.log(getUrlParameter('filter'));
      // 	var filterBtnClass = 'filter-btn-'+ getUrlParameter('filter');
      // 	console.log(filterBtnClass);
      // 	$('a.' + filterBtnClass).click();
      // }
    }
  
    //Smooth Scrolling Anchor
    $('a.anchor').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        scrollPadding = $(this).data('pad') ? $(this).data('pad') : 0;
        if($('body').hasClass('admin-bar')) {
          scrollPadding -= 30;
        }
        if($('.head-top-bar').css("position") === "fixed") {
          scrollPadding -= 70;
        }
        if (target.length) {
          $('html,body').stop(false, true).animate({
            scrollTop: target.offset().top + (scrollPadding)
          }, 500);
          return false;
        }
      }
    });
  
  /**
  * Resources
  */
  
    $('.resource-heading-mobile').click(function(event) {
      event.preventDefault();
      $(this).toggleClass('active');
    });
  
    // Sticky elements like share buttons.
    if ($('.sticky-scroll-box').length) {
      var lg_sticky_scroll_box = new Sticky('.sticky-scroll-box');
    }
    // Highlight Links when scroll to Anchors
    if ($('.page-cont-nav li a').length) {
      var aChildren = $(".page-cont-nav li").children(); // find the a children of the list items
      var aArray = []; // create the empty aArray
      for (var i=0; i < aChildren.length; i++) {    
        var aChild = aChildren[i];
        var ahref = $(aChild).attr('href');
        aArray.push(ahref);
      } // this for loop fills the aArray with attribute href values
      $(window).scroll(function(){
        var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
        var windowHeight = $(window).height(); // get the height of the window
        var docHeight = $(document).height();
  
        for (var i=0; i < aArray.length; i++) {
          var theID = aArray[i];
          var divPos = $(theID).offset().top; // get the offset of the div from the top of page
          var divHeight = $(theID).height(); // get the height of the div in question
          if (windowPos + 150 >= divPos /*&& windowPos < (divPos + divHeight)*/) {
            $("a[href='" + theID + "']").addClass("active").closest('li').siblings().find('a').removeClass("active");
          } else {
            $("a[href='" + theID + "']").removeClass("active");
          }
        }
      });
    }
  
  })(jQuery);
  
  // Chnage Price Number in Price tables
  //var prM = {pro:36, ms:74, mm:111, ml:169, mxl:209, mxxl:299};
  //var prY = {pro:29, ms:59, mm:89, ml:135, mxl:167, mxxl:239};
  //var prTY = {pro:27, ms:56, mm:83, ml:127, mxl:157, mxxl:224};
  function changePriceNumber(propCount, pricePeriod) {
    var priceBox2 = jQuery('#scroll-properties-plan').closest('.price-item').find('.total-sum');
    var propertCountBox = jQuery('#scroll-properties-plan')
      .closest('.price-item')
      .find('.properties-count');
    var priceValue2;
    if (propCount == '1') {
      propertCountBox.text('2-5');
      if (pricePeriod == 1) {
        priceValue2 = prM['ms'];
      } else if (pricePeriod == 2) {
        priceValue2 = prY['ms'];
      } else if (pricePeriod == 3) {
        priceValue2 = prTY['ms'];
      }
    } else if (propCount == '2') {
      propertCountBox.text('6-15');
      if (pricePeriod == 1) {
        priceValue2 = prM['mm'];
      } else if (pricePeriod == 2) {
        priceValue2 = prY['mm'];
      } else if (pricePeriod == 3) {
        priceValue2 = prTY['mm'];
      }
    } else if (propCount == '3') {
      propertCountBox.text('16-30');
      if (pricePeriod == 1) {
        priceValue2 = prM['ml'];
      } else if (pricePeriod == 2) {
        priceValue2 = prY['ml'];
      } else if (pricePeriod == 3) {
        priceValue2 = prTY['ml'];
      }
    } else if (propCount == '4') {
      propertCountBox.text('31-50');
      if (pricePeriod == 1) {
        priceValue2 = prM['mxl'];
      } else if (pricePeriod == 2) {
        priceValue2 = prY['mxl'];
      } else if (pricePeriod == 3) {
        priceValue2 = prTY['mxl'];
      }
    } else if (propCount == '5') {
      propertCountBox.text('51-100');
      if (pricePeriod == 1) {
        priceValue2 = prM['mxxl'];
      } else if (pricePeriod == 2) {
        priceValue2 = prY['mxxl'];
      } else if (pricePeriod == 3) {
        priceValue2 = prTY['mxxl'];
      }
    }
    priceBox2.html(priceValue2);
  }
  
  
  // Open external links in New Tab
  if (document.readyState !== "loading") {
      replace_team_host();
    external_links_in_new_windows_loop();
  } else {
      document.addEventListener('DOMContentLoaded', replace_team_host, false);
    document.addEventListener('DOMContentLoaded', external_links_in_new_windows_loop, false);
  }
  
  
  function external_links_in_new_windows_loop() {
    if (!document.links) {
      document.links = document.getElementsByTagName('a');
    }
    var change_link = !1;
    var force = '';
    var ignore = '';
    for (var t = 0; t < document.links.length; t++) {
      var all_links = document.links[t];
      change_link = !1;
      if (document.links[t].hasAttribute('onClick') == !1) {
        if (
          all_links.href.search(/^http/) != -1 &&
          all_links.href.search(window.location.host) == -1
        ) {
          change_link = !0;
        }
        if (force != '' && all_links.href.search(force) != -1) {
          change_link = !0;
        }
        if (ignore != '' && all_links.href.search(ignore) != -1) {
          change_link = !1;
        }
        // if link points to login/signup do not open a new window
        if(all_links.href.search(/app\.lodgify(develop|staging|money|connectivity|activation|integration)?\.com\/(login|signup)/) != -1) {
          change_link = !1;
        }
        if (change_link == !0) {
          document.links[t].setAttribute(
            'onClick',
            "javascript:window.open('" + all_links.href + "'); return false;"
          );
          document.links[t].removeAttribute('target');
        }
      }
    }
  }
  
  function replace_team_host(){
    var is_team = window.location.host.search(/(www)\.lodgify(develop|staging|money|connectivity|activation|integration)\.com/)!=-1;
    if(!is_team) return;
    
    var links = document.getElementsByTagName('a');	
    for (var i = 0; i < links.length; i++) {
      var href = links[i].href;
      var is_app_link = href.search(/app\.lodgify\.com\//) != -1;
      if(is_app_link){
        var old_host = 'app.lodgify.com';
        var new_host = window.location.host.replace('www.', 'app.');
        links[i].href = href.replace(old_host, new_host);
      }
    }
  }
  
  // Mobile Owl Carousel Function
  //var mobCarouselGore = false;
  function mobCarousel(xsCarousel, mobNavButton) {
    if (mobNavButton.is(':visible')) {
      xsCarousel.addClass('owl-carousel').owlCarousel({
        items: 1,
        loop: false,
        margin: 15,
        nav: false,
        dots: true,
        smartSpeed: 550,
        autoplay: false,
        autoHeight: true,
        autoplayTimeout: 9000,
        autoplayHoverPause: false
      });
  
      var subInputSlider = xsCarousel.find('#scroll-properties');
      if (subInputSlider.length) {
        subInputSlider.slider();
      }
    } else {
      xsCarousel.trigger('destroy.owl.carousel').removeClass('owl-carousel owl-loaded');
      xsCarousel.find('.owl-stage-outer').children().unwrap();
    }
  }
  
  function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
    var results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
  }
  
  function getCookie(name) {
    var value = '; ' + document.cookie;
    var parts = value.split('; ' + name + '=');
    if (parts.length == 2) return parts.pop().split(';').shift();
  }
  
  function onKeyPressedDefaultAction(e, target) {
    var evt = window.event ? window.event : e;
    var k = evt.which ? evt.which : evt.keyCode;
    if (evt && k == 13 && !(evt.srcElement && evt.srcElement.tagName.toLowerCase() == 'textarea')) {
      if (target) {
        if (typeof target.click != 'undefined') target.click();
        else if (typeof target.onclick != 'undefined') target.onclick();
        else return true;
        evt.cancelBubble = true;
        if (evt.stopPropagation) {
          evt.stopPropagation();
        }
        return false;
      }
    }
    return true;
  }
  
  // Change language code in url using javascript
  function addReplaceLangCode(url, langCode) {
    var a = document.createElement('a');
    a.href = url;
  
    var paths = a.pathname.split('/');
    paths.shift();
  
    if(paths[0].length == 2) {
      paths[0] = langCode;
    }else{
      paths.unshift(langCode);
    }
    return a.protocol + '//' +
      a.host + '/' + paths.join('/') + 
      (a.search != '' ?  a.search : '') + 
      (a.hash != '' ?  a.hash : '');
  }