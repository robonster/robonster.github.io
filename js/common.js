// JavaScript Document


if(typeof window.orientation !== 'undefined'){
    $('a[href^="tel:"]').on('click', function(e){
        e.preventDefaults()
    });
}

$(document).ready(function() {

	//show the partnership info in the bucket
		$(".partnerships-small").click(function(event) {
			event.stopPropagation();
			$(this, ".partnerships-small").toggleClass("active");
		});

		$(document).click( function(){
        	$(".partnerships-small").removeClass("active");
        });


 	/*$('#mainc a, footer a').on('click touchend', function(e) {});

	show the news info in the bucket
	$( ".news-info-btn").click(function() {
		$(this).next(".news-info").toggleClass("active");
		$(this).next(".sneek-peek-info").toggleClass("active");
	});

	//show the news info in the bucket
	$( "a.news-info-link" ).click(function() {
		$(".sneek-peek-info").toggleClass("active");
	});*/

});

/*
$(window).load(function() {
		// Animate loader off screen
		$("#loader").fadeOut(500);
});*/


$(document).on("scroll", function(){

	var scroll = $(window).scrollTop();

		if (scroll > 200 ) {
		  $("header").addClass("small");
		}  else {
		    $("header").removeClass("small");
		}

		if (scroll > 50 ) {
			$(".hero-img").addClass("small");
		} else {
			$(".hero-img").removeClass("small");
		}

		if (scroll > 250 ) {
			$(".dev-test-head").addClass("small");
		} else {
			$(".dev-test-head").removeClass("small");
		}

		/*if (scroll > 100 ) {
			$(".news-box.one").delay(200).queue(function(){$(this).addClass("active");});
			$(".news-box.two").delay(1500).queue(function(){$(this).addClass("active");});
			$(".news-box.three").delay(1800).queue(function(){$(this).addClass("active");});
		}*/

		if (scroll > 100 ) {
		  $("#social").addClass("small");
		}  else {
		  $("#social").removeClass("small");
		}

		var scrollPercentage = 100 * ($(this).scrollTop() / $('body').height());
    	if (scrollPercentage >= 10 && scrollPercentage <= 50){
        	$('#related').addClass('active');
			$('.related-close').click(function() {
			  $('#related').addClass('deactive');
		  });
    	}

});

$(document).ready(function(){

	//Check to see if the window is top if not then display button
	$(window).scroll(function(){
		if ($(this).scrollTop() > 1000) {
			$('.scrollToTop').fadeIn(1000);
		} else {
			$('.scrollToTop').fadeOut(1000);
		}

	});

	//Click event to scroll to top
	$('.scrollToTop').click(function(){
		$('html, body').animate({scrollTop : 0},1500);
		return false;
	});

});

	//search active button
$(document).ready(function () {
  $('#search-btn').click(function () {
    $('#global-search').toggleClass('active');
  });
  $('.close-overlay').click(function() {
	  $('#global-search').removeClass('active');
  });

  //sites buttons - delete if necessary

  $('.close-overlay').click(function() {
	  $('.overlay').removeClass('active');
  });

  //show/hide timeline years
  $(function() {
	$('.year-btn').click(function() {
		$('#'+$(this).attr('target')).toggleClass('active');
	});
  });

});

$(function closeOverlay(){
	$('a.close-overlay .close').click();
	document.addEventListener('click',closeOverlay,true);
});

//twitter code
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+"://platform.twitter.com/widgets.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","twitter-wjs");

/*$(function addBackground() {
	if ( "objectFit" in document.documentElement.style === false) {
	    // assign HTMLCollection with parents of images with objectFit to variable
  		var container = document.querySelectorAll('.news-box, .rob-grid1-3.partnerships-small.left, .partnerships-img');

			// Loop through HTMLCollection
			for(var i = 0; i < container.length; i++) {
			// Asign image source to variable
			var imageSource = container[i].querySelector('img').src;
			// Hide image
			container[i].querySelector('img').style.display = 'none';
			// Add background-size: cover
			container[i].style.backgroundSize = 'cover';
			// Add background-image: and put image source here
			container[i].style.backgroundImage = 'url(' + imageSource + ')';
			// Add background-position: center center
			container[i].style.backgroundPosition = 'center center';
			// Add height so container doesn't collapse in older versions of IE
			container[i].style.height = '400px';
			}

	}
});*/
