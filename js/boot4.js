$(function () {
	
	'use strict';
	
	// Make slider image take 100% of screen for responsive
	
	var winH = $(window).height(),
		upperH = $('.upper-bar').innerHeight(),
		navh = $('.navbar').innerHeight();
	
	$('.slider , .carousel-item').height(winH - (upperH + navh));
	
	// Make shuffle for images at gallery
	$('.featured-work .btns button').on('click', function () {
		$(this).addClass('active').siblings().removeClass('active');
		if ($(this).data('class') == 'all') {
			$('.featured-work .gallery .col-sm').css('opacity' , 1);
		} else {
			$('.featured-work .gallery .col-sm').css('opacity' , '.4');
			$($(this).data('class')).parent().css('opacity' , '1');
		}
		
		
		 // console.log($(this).data('class'));  ==> to check if data-class is working
		
	});
});