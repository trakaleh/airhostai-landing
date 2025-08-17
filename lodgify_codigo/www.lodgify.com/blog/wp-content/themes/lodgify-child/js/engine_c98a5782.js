(function($) {
	
console.log(`   _______________    
  |  ___________  |      
  | |           | |    
  | |   0   0   | |    
  | |     -     | |    
  | |   \___/   | |    
  | |___     ___| |.......Visit our Careers page at      
  |_____|\_/|_____|.......https://www.lodgify.com/careers/      
    _|__|/ \|_|_..........to learn about our existing job openings
   / ********** \     
 /  ************  \ 
-------------------- `);


	// Show/Hide Mobile bar
	$('#page').on('click', '.btn-mobile-bar, .mob-wrap', function(event) {
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

	$('.foot-area .footer-widget').on('click', 'h3', function() {
		$(this).closest('.footer-widget').toggleClass('active');
	});

	$('.foot-area .widget').on('click', 'h5', function() {
		$(this).closest('.widget').toggleClass('active');
	});


	// Keep navigation bar fixed after scrolling
	var fixedNavigation = $('.head-top-bar.head-top-bar-sticky');
	var fixedNavigationWrap = fixedNavigation.closest('.head-top-wrap');
	var navpos = fixedNavigationWrap.offset();
	var gore = true;
	var goreP2 = true;
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
				// Show single post navigation in the header
				if (goreP2 && $(window).scrollTop() > 700) {
					$('body').addClass('sticky-p2-stuck-up');
					goreP2 = false;
				}
			} else {
				if (!gore) {
					$('body').removeClass('sticky-main-nav-active');
					fixedNavigationWrap.css("height", 'auto');
					gore = true;
				}
			}
			// Show single post navigation in the header
			if (!goreP2 && $(window).scrollTop() < 700) {
				$('body').removeClass('sticky-p2-stuck-up');
				goreP2 = true;
			}
		});
	}


})(jQuery);
