//WAYPOINT TRIGGERS HOME VIDEO TOOLTIPS//

$(document).ready(function(){
	let offset10 = { offset: "10%" };
	let offset20 = { offset: "20%" };
	let offset30 = { offset: "30%" };
	let offset40 = { offset: "40%" };
	let offset50 = { offset: "50%" };
	let offset60 = { offset: "60%" };
	let offset70 = { offset: "70%" };
	let offset80 = { offset: "80%" };
	let offset90 = { offset: "90%" };
	let offset100 = { offset: "100%" };
	
	var $fadeInUp = $(".fadein--up");
	
	
	$fadeInUp.waypoint(function () {
		$(".fadein--up img").addClass("animate__animated animate__fadeInUp");
	}, offset70);
	
	
	
	/* SLIDE IN LEFT/RIGHT */
	var $sliderLeft = $(".slider.slider-left");
	var $sliderRight = $(".slider.slider-right");
	var $sliderTL = $(".slider-t.slider-t-l");
	var $sliderTR = $(".slider-t.slider-t-r");
	var $flipInX = $(".flip-in-x");
	$sliderLeft.waypoint(function (direction) {
		if(direction == "down") {
			$(this).addClass("active");
		} else {
			$(this).removeClass("active");
		}
	}, { offset: "80%" });
	$sliderRight.waypoint(function (direction) {
		if(direction == "down") {
			$(this).addClass("active");
		} else {
			$(this).removeClass("active");
		}
	}, { offset: "80%" });
	

	
	
});