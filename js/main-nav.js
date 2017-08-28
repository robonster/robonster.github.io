// JavaScript Document

var cbpHorizontalMenu = (function() {
$('.cbp-hrmenu ul').closest("li").addClass("cbp-more");
$('.cbp-hrmenu ul li.cbp-more > a').addClass("dropdown");

	var $listItems = $( '#cbp-hrmenu > ul > li' ),
		$menuItems = $listItems.children( 'a.dropdown' ),
		$body = $( 'body' ),
		current = -1;

	function init() {
		$menuItems.on( 'click', open );
		$listItems.on( 'click', function( event ) { event.stopPropagation(); } );
	}

	function open( event ) {

		if( current !== -1 ) {
			$listItems.eq( current ).removeClass( 'cbp-hropen' );
		}

		var $item = $( event.currentTarget ).parent( 'li' ),
			idx = $item.index();

		if( current === idx ) {
			$item.removeClass( 'cbp-hropen' );
			current = -1;
		}
		else {
			$item.addClass( 'cbp-hropen' );
			current = idx;
			$body.off('click').on('click', close);
		}

		return false;

	}

	$("#cbp-hrmenu ul.cbp-hrsub li a").click(function () {
	    $('ul.cbp-hrsub', close);
	});

	function close( event ) {
		$listItems.eq( current ).removeClass( 'cbp-hropen' );
		current = -1;
	}

	return { init : init };
	

})();