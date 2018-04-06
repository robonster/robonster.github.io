// Copy-pasted boilerplate from dev.twitter.com because I am a bad programmer
(function() {
  if (window.__twitterIntentHandler) return;
  var intentRegex = /twitter\.com(\:\d{2,4})?\/intent\/(\w+)/,
      boxWidth = 550,
      boxHeight = 400,
      winWidth = screen.width,
      winHeight = screen.height;
  
  if (boxWidth > winWidth)  boxWidth = winWidth;
  if (boxHeight > winHeight)  boxHeight = winHeight;
 
  function handleIntent(e) {
    e = e || window.event;
    var target = e.target || e.srcElement,
        m, left, top;
 
    while (target && target.nodeName.toLowerCase() !== 'a') {
      target = target.parentNode;
    }
 
    if (target && target.nodeName.toLowerCase() === 'a' && target.href) {
      m = target.href.match(intentRegex);
      if (m) {
        left = Math.round((winWidth / 2) - (boxWidth / 2));

        top = 0;
        if (winHeight > boxHeight) {
          top = Math.round((winHeight / 2) - (boxHeight / 2));
        }

        window.open(target.href, 'intent', 'scrollbars=yes,resizable=yes,toolbar=no,location=yes,top=' + top + ',left=' + left + ',width=' + boxWidth + ',height=' + boxHeight);

        e.returnValue = false;
        e.preventDefault && e.preventDefault();
      }
    }
  }
 
  if (document.addEventListener) {
    document.addEventListener('click', handleIntent, false);
  } else if (document.attachEvent) {
    document.attachEvent('onclick', handleIntent);
  }
  window.__twitterIntentHandler = true;
}());

// Here's the real stuff.
(function($) {

	var windowHref = window.location.href;
	windowHref = windowHref.substring(0,8) + windowHref.substring(12,windowHref.length);

	var options = {
		dataAttr: 'data-tweetable',
		linkClass: 'tweetable',
		via: 'MGEMadison',
		related: null,
		url: windowHref
	};

    // Tried to think of some sort of "options optional" pun.  Did not succeed.
 	$.tweetable = (function () {
    	return { options: options };
  	})();

    $.fn.tweetable = function(options) {

    	// Things I learned on a Thursday night: extend() is basically black magic
		$.extend($.tweetable.options, options);

    	var $elements = $(this);

    	return $elements.each(function () {

    		var $e = $(this);

      		// If the particular selector is 'blank', we default to the text within.
 			// Otherwise, we grab the value of the selector.
	      	if ($e.attr($.tweetable.options.dataAttr) == "")
	    		var tweetText = $e.text();
	    	else
	    		var tweetText = $e.attr($.tweetable.options.dataAttr);

	    	// Let's go ahead and be a stickler about enforcing that 140-char limit.
	    	if (tweetText.length > 140) {
	    		console.error("That's more than 140 characters.")
	    		return $e;
	    	}

	    	// %20 all the things
	    	tweetText = encodeURIComponent(tweetText);
	    	
	    	// Here we make the actual link.  Goodie.
	    	var twitterLink = 'https://twitter.com/intent/tweet?';
	    	twitterLink += "text=" + tweetText + "&nbsp; %23mge2030";
	    	twitterLink += "&url=" + encodeURIComponent($.tweetable.options.url)
	    	if($.tweetable.options.via)
	    		twitterLink += "&via=" + $.tweetable.options.via

	    	$e.wrap('<a class="tweet-it" href="' + twitterLink + '"/>');
	        return $e;
	    });
    };

}( jQuery ));