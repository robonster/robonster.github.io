// JavaScript Document//
/*SET LANGUAGE*/
$('html').attr('lang','en');

$(window).on('load', function() {
		// Animate loader off screen//
		$("#loader").fadeOut(500);
});

/*PAGE SCROLLING PROGRESS BAR*/
	$(window).scroll(function () {
		var s = $(window).scrollTop(),
			d = $(document).height(),
			c = $(window).height();
		scrollPercent = (s / (d-c)) * 100;
		var position = scrollPercent.toFixed(2);

		$('.progress-bar').width(position + '%');
	  });
/*PAGE SCROLLING BAR*/

/*SEARCH AND TRANSLATE FUNCTION*/
$(document).ready(function () {
	
//MAIN MENU TRIGGER//
	$('.menu-trigger').click(function() {
        $('.robonster-nav').toggleClass('active');
    });
	 $(document).click(function(event) {
        // Check if the clicked target is outside the nav element and the trigger
        if (!$(event.target).closest('.robonster-nav, .menu-trigger').length) {
            $('.robonster-nav').removeClass('active');
        }
    });

  $('#search-btn').click(function () {
	  $('#global-search').toggleClass('active');
	  $('.set-focus').focus();
  });
  
  $('#lang-btn').click(function () {
	  $('#language-selector').toggleClass('active');
  });
	
  $('#login-btn').click(function () {
	  $('#login-header').toggleClass('active');
  });
	
  $('#contact-btn').click(function () {
	  $('#contact-sidebar').toggleClass('active');
  });
  
  $('.close-overlay').click(function() {
	  $('#global-search, #language-selector, #login-header, #contact-sidebar').removeClass('active');
  });
	
	//TRIPTYCH VIDEO HOVER EFFECT//
	var triptychContainer = $(".hero-triptych--container");
	var triptychVideo = $(".hero-triptych--video");
	var triptychLink = $(".art-info--menu-item");
	
	triptychVideo.on("mouseenter focus", function () {
		$(this, "triptychVideo").get(0).play();
	});
	triptychVideo.on("mouseout blur", function () {
		$(this, "triptychVideo").get(0).pause();
	});
	triptychLink.on("click", function(){
		$("#art-info--master-container").removeClass (function (index, className) {
			return (className.match (/(^|\s)bg-\S+/g) || []).join(' ');
		}).addClass($(this).attr("data-bg"));
		
    });
	
	//ART INFO WIDGET//
	var artMenu = $(".art-info--menu-item");
	var artInfoContainer = $(".art-info--container");
	artMenu.click(function(e) {
		e.preventDefault();
		$($(this).attr('href')).addClass('active').siblings().removeClass("active img-fade");
		setTimeout(function() {
			$(".art-info--container.active").addClass("img-fade");
		}, 500);
	});
	
	//SIMPLE SLIDER//
	setInterval(function () {
        moveRight();
    }, 5000);  
	var slideCount = $('#simple-slider ul li').length;
	var slideWidth = $('#simple-slider ul li').width();
	var slideHeight = $('#simple-slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;
	
    function moveLeft() {
        $('#simple-slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#simple-slider ul li:last-child').prependTo('#simple-slider ul');
            $('#simple-slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#simple-slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#simple-slider ul li:first-child').appendTo('#simple-slider ul');
            $('#simple-slider ul').css('left', '');
        });
    };

    $('a.simple-slider--prev').click(function (e) {
		e.preventDefault();
        moveLeft();
    });

    $('a.simple-slider--next').click(function (e) {
		e.preventDefault();
        moveRight();
    });
	
	
	var solitudeMenu = $(".solitude--container-menu-item");
	var solitudeContainer = $(".solitude--container");
	solitudeMenu.click(function(e) {
		e.preventDefault();
		$($(this).attr("href")).addClass("active").siblings().removeClass("active");
	});
	
  
/*});

	
$(document).ready(function(){
	
	Check to see if the window is top if not then display button*/
	$(window).scroll(function(){
		if ($(this).scrollTop() > 1000) {
			$('.scrollToTop').fadeIn(1000);
		} else {
			$('.scrollToTop').fadeOut(1000);
		}
    });
	
	/*Click event to scroll to top*/
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},1500);
		return false;
	});
	
	/*HIDE/DISPLAY A DIV WITH SAME ID AS PARENT*/
	
	$(".toggle-btn").click(function(){
		var divToToggle = $( $(this, "a").attr('href'));
		$(".toggle-container:visible").not(divToToggle).hide(500);
		divToToggle.slideToggle("slow");
	  });
	$(".toggle-close").click(function() {
		$(".toggle-container:visible").hide(1000);
	});
	
	
	$(".side-navbar--submenu").hide();
	$(".side-navbar--link").click(function(){
		$subMenu = $(this).closest(".side-navbar--parentmenu");
		$subMenu.siblings().find(".side-navbar--submenu").slideUp();
		$subMenu.find(".side-navbar--submenu").slideToggle(500, "linear");
	  });
	
	(function(){
		$('.side-navbar--link').bind('click', function(e){
			var el   = $(this),
				list = $('.side-navbar--submenu').find('li');
			list.removeClass('active');            
			el.addClass('active').parents('li').addClass('active');
		});
	}());
	

    //REMOVE COLON FROM CERTAIN DIVS IN KENTICO FORMS//
    $('span.linecon-font').each(function () {
        $(this).html($(this).html().replace(":", ""));
    });
	
	// ACCORDION CODE //
	const items = document.querySelectorAll(".accordion a");
	function toggleAccordion() {
	  const itemToggle = this.getAttribute('aria-expanded');

	  for (i = 0; i < items.length; i++) {
		items[i].setAttribute('aria-expanded', 'false');
	  }

	  if (itemToggle == 'false') {
		this.setAttribute('aria-expanded', 'true');
	  }
	}
	items.forEach(item => item.addEventListener('click', toggleAccordion));
	// END ACCORDION CODE //	
	
});

//HIDE/DISPLAY HEADER//

$(document).on("scroll", function(){
	var scroll = $(window).scrollTop();	
		if (scroll > 800 ) {
		  $("header").addClass("hidden");
		}  else {
		    $("header").removeClass("hidden");
		}
});

//MOUSEWHEEL SCROLLING//

$(function() {
   $(".slider-container").mousewheel(function(event, delta) {
      this.scrollLeft -= (delta * 60);    
      event.preventDefault();
   });
 });
 
/* $(document).ready(function() {
	 //DETECT ELEMENTS WHEN IN VIEWPORT//
	 $.fn.isInViewport = function() {
		var elementTop = $(this).offset().top;
		var elementBottom = elementTop + $(this).outerHeight();

		var viewportTop = $(window).scrollTop();
		var viewportBottom = viewportTop + $(window).height();

		return elementBottom > viewportTop && elementTop < viewportBottom;
	};

	$(window).on('resize scroll', function() {
		var elfake = document.getElementById("gl");
		var fakeimg = elfake.getAttribute("data-imageOriginal");
		if (document.documentMode || /Edge/.test(navigator.useragent)) {
			if ($('#gl').isInViewport()) {
				$("#gl").after("<img src=" + fakeimg + " class='fit'/>");
			}
		}
	});
});*/

$(document).ready(function() {
    /*grouping radio button input and label*/
    $('.radio.radio-list-vertical input, .radio.radio-list-horizontal input').each(function () {
        $(this).next('label').andSelf().wrapAll('<div class="radio-list-pair resp-grid1-4"/>')
    });
    /*adding class to parent radio button and label div*/
    $('.radio-list-pair input, .PollAnswerRadio.radio input').click(function () {
        $('.radio-list-pair input:not(:checked), .PollAnswerRadio.radio input:not(:checked)').parent().removeClass("active");
        $('.radio-list-pair input:checked, .PollAnswerRadio.radio input:checked').parent().addClass("active");
    });
    $('.radio-list-pair input:checked, .PollAnswerRadio.radio input:checked').parent().addClass("active");
});