// JavaScript Document
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

  // Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

});
