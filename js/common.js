// JavaScript Document

$(window).load(function() {
		// Animate loader off screen
		$("#loader").fadeOut(500);
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
	
	// HIDE HEADER ON SCROLL DOWN
	var prev = 0;
	var header = $('header');
	$(window).scroll(function(){
		var scrollHeader = $(window).scrollTop();
		header.toggleClass('hidden', scrollHeader > prev);
		prev = scrollHeader;
	});
	// END OF HIDE HEADER
	
});

/*$(function addBackground() {
	if ( "objectFit" in document.documentElement.style === false) {
	    // assign HTMLCollection with parents of images with objectFit to variable
  		var container = document.getElementsByClassName('fit');
  
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
			container[i].style.height = '600px';
			}
	
	}
});*/

$(document).ready(function() {
	/*$('#client').each(function() {
		$(this).find('').addClass('hideme');
	});
	
			
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){

    /* Check the location of each desired element */
    $('.hideme').each( function(i){

        var bottom_of_object = $(this).position().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        /* If the object is completely visible in the window, fade it it */
        if( bottom_of_window > bottom_of_object ){

            $(this).animate({'opacity':'1'},2000);

        }
    }); 
  });
});