/*
 * jQuery v1.9.1 included
 */

 var oldIds = ["360007774334"];
  var newIds = ["360010952559"];

  for (var i = 0; i < oldIds.length; i++){
    if (window.location.href.indexOf(oldIds[i]) > -1) {
      window.location.href = 'https://help.lodgify.com/hc/en-us/articles/' + newIds[i]; 
    }
  }

// String To Slug
function slugify(text) {
  return text
    .toString()                     // Cast to string
    .toLowerCase()                  // Convert the string to lowercase letters
    .normalize('NFD')              // The normalize() method returns the Unicode Normalization Form of a given string.
    .trim()                         // Remove whitespace from both sides of a string
    .replace(/\s+/g, '-')           // Replace spaces with -
    .replace(/[^\w\-]+/g, '')       // Remove all non-word chars
    .replace(/\-\-+/g, '-')        // Replace multiple - with single -
}

$(document).ready(function() {
  $(".btn_logout").attr("href",$(".btn_logout").attr("href")+"return_to="+document.location.href+"&brand_id=114095292613&sso=zendesk&language=en");
  $(".btn_login").attr("href",$(".btn_login").attr("href")+"return_to="+"https://help.lodgify.com/hc/en-us/requests/new&brand_id=114095292613&sso=zendesk&language=en");
  
	var $bread_cat = $('ol.breadcrumbs > li:nth-child(2) > a');
	// If Page sections
  if ( $bread_cat.length){

      let cat_name = $bread_cat.text();
      let cat_href = $bread_cat.attr('href');
      $('body').addClass('template-cat-' + slugify(cat_name));
      
      if($('header.header .head-cat-link').length) {

        $('header.header .head-cat-link .cat-name').text(cat_name);
        $('header.header .logo').addClass('hidden');
        $('header.header .head-cat-link').attr('href', cat_href).removeClass('hidden');

      }

  } 
  
  // Capture submit request event
  $('a.submit-a-request, .article-more-questions a').on('click', function(e) {
      var path = window.location.pathname;
      ga('send', 'event', 'Submit Request', 'Submit Request From', path);
  });
  
   // Capture ticket deflection event
  $("#new_request").on('click', '.searchbox-suggestions a', function(e) {
      var $this = $(this),
          link = $this.attr('href');
      ga('send', 'event', 'Ticket Deflection', 'Deflect', link);
  });
  
  // stuff here
  
  // Capture search submit event
  $('form[role="search"]').on('submit', function(e) {
      var $this = $(this),
          query = $this.find('input[type="search"]').val().toLowerCase();
      ga('send', 'event', 'Search', 'Submit', query);
  });
  
    //MOBILE VIEWPORT -- adds class isMobile when the viewport is smaller than 600px
  
  	const appBody = $('body');
  
    function isMobile() {
      const appWidthViewport = $(window).width();
      
      if (appWidthViewport < 768) {
        appBody.addClass('isMobile');
      } else {
        appBody.removeClass('isMobile');
      }
    }
		
  	isMobile();
    
    $(window).resize(() => {
      isMobile();
    });
  
  
  //Mobile submit
    $('body').prepend('<a href="/hc/en-us/requests/new" class="mobile__submit--fixed" type="submit">Contact us</a>');
    $('.mobile__submit--fixed').hide();
  	
  	  
    $(window).resize(()=> {
      const viewportMobile = $('body').hasClass('isMobile');
      if(viewportMobile === true) {
        $('.mobile__submit--fixed').show();
      } else  {
        $('.mobile__submit--fixed').hide();
      }
    });
  
  //Fixings for back to top link
  $('a:contains("Back to top")').attr('href', '#article-container');
  
  //Menu slicing
  const sidebarEnd = $('section.section-articles.collapsible-sidebar ul li').length
  const offMenu = $('section.section-articles.collapsible-sidebar ul li').slice(5, sidebarEnd);
  offMenu.hide();
  
  //Homepage hidden menu
  
  function isHomepage() {
    const homeCheck = $('section').hasClass('page--homepage')
    if (homeCheck === true) {
    return true;
    }
  }

  if (isHomepage() != true) {
      $('.header--container .header-wrapper:nth-child(2)').css("cssText", "visibility: visible");
  }
  
  //Zooming effect
	new Zooming({
  	customSize: '100%',
	}).listen('.article-body img');
  
  //Deactivate helpdesk button when KB active  
  
  function isKB() {
    console.log('Im running the function');
    const insideKB = $('.breadcrumbs	 li a').text().indexOf('Knowledge Base') > -1;
		const KBactive = $('.category').hasClass('knowledge-base');
    
    if (KBactive === true || insideKB === true) { 
      const myVar = setInterval(myTimer, 100);

      function myTimer() {
         const supportButton = $('.zEWidget-launcher.zEWidget-launcher--active')
         supportButton.hide();
      }

      function myStopFunction() {
          clearInterval(myVar);
      }
  	}
  }
  
	
  //isKB();
	
  //Enables sticky header 
  
  const headerSticky = $('.header')

  function stickyReady() {
    const headerPosition = $(window).scrollTop();

    if (headerPosition > 10) {
      headerSticky.addClass('stickyHeader');
    } else {
      headerSticky.removeClass('stickyHeader');
    }
  }
  
  stickyReady()

  $(window).scroll(() => {
    stickyReady()
  });
  

  
  // social share popups
  $(".share a").click(function(e) {
    e.preventDefault();
    window.open(this.href, "", "height = 500, width = 500");
  });

  // show form controls when the textarea receives focus or backbutton is used and value exists
  var $commentContainerTextarea = $(".comment-container textarea"),
    $commentContainerFormControls = $(".comment-form-controls, .comment-ccs");

  $commentContainerTextarea.one("focus", function() {
    $commentContainerFormControls.show();
  });

  if ($commentContainerTextarea.val() !== "") {
    $commentContainerFormControls.show();
  }

  // Expand Request comment form when Add to conversation is clicked
  var $showRequestCommentContainerTrigger = $(".request-container .comment-container .comment-show-container"),
    $requestCommentFields = $(".request-container .comment-container .comment-fields"),
    $requestCommentSubmit = $(".request-container .comment-container .request-submit-comment");

  $showRequestCommentContainerTrigger.on("click", function() {
    $showRequestCommentContainerTrigger.hide();
    $requestCommentFields.show();
    $requestCommentSubmit.show();
    $commentContainerTextarea.focus();
  });

  // Mark as solved button
  var $requestMarkAsSolvedButton = $(".request-container .mark-as-solved:not([data-disabled])"),
    $requestMarkAsSolvedCheckbox = $(".request-container .comment-container input[type=checkbox]"),
    $requestCommentSubmitButton = $(".request-container .comment-container input[type=submit]");

  $requestMarkAsSolvedButton.on("click", function () {
    $requestMarkAsSolvedCheckbox.attr("checked", true);
    $requestCommentSubmitButton.prop("disabled", true);
    $(this).attr("data-disabled", true).closest("form").submit();
  });

  // Change Mark as solved text according to whether comment is filled
  var $requestCommentTextarea = $(".request-container .comment-container textarea");

  $requestCommentTextarea.on("keyup", function() {
    if ($requestCommentTextarea.val() !== "") {
      $requestMarkAsSolvedButton.text($requestMarkAsSolvedButton.data("solve-and-submit-translation"));
      $requestCommentSubmitButton.prop("disabled", false);
    } else {
      $requestMarkAsSolvedButton.text($requestMarkAsSolvedButton.data("solve-translation"));
      $requestCommentSubmitButton.prop("disabled", true);
    }
  });

  // Disable submit button if textarea is empty
  if ($requestCommentTextarea.val() === "") {
    $requestCommentSubmitButton.prop("disabled", true);
  }

  // Submit requests filter form in the request list page
  $("#request-status-select, #request-organization-select")
    .on("change", function() {
      search();
    });

  // Submit requests filter form in the request list page
  $("#quick-search").on("keypress", function(e) {
    if (e.which === 13) {
      search();
    }
  });

  function search() {
    window.location.search = $.param({
      query: $("#quick-search").val(),
      status: $("#request-status-select").val(),
      organization_id: $("#request-organization-select").val()
    });
  }
  
  // redirects from pages
  var redirectLinks = ['https://help.lodgify.com/hc/en-us/categories/360000274874-Learning-Center-',
  'https://help.lodgify.com/hc/en-us/articles/360005000654',
  'https://help.lodgify.com/hc/en-us/articles/360005048893',
  'https://help.lodgify.com/hc/en-us/articles/360005049073',
  'https://help.lodgify.com/hc/en-us/articles/360005000694',
  'https://help.lodgify.com/hc/en-us/articles/360005048993',
  'https://help.lodgify.com/hc/en-us/articles/360015055340',
  'https://help.lodgify.com/hc/en-us/articles/360013020499'];

  for (var i = 0; i < redirectLinks.length; i++) {
    if(location.href == redirectLinks[i]) {
      window.location.replace("https://learning-center.lodgify.com/hc/en-us");
    }
  }
  
  
}); //end of domready

 // Toggles expanded aria to collapsible elements
  $(".collapsible-nav, .collapsible-sidebar").on("click", function(e) {
    e.stopPropagation();
    var isExpanded = this.getAttribute("aria-expanded") === "true";
    this.setAttribute("aria-expanded", !isExpanded);
  });
}); // end of Toggles expanded aria to collapsible elements

