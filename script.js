$(document).ready(function(){
	$('.company__img_cons').hover(function(){
		$('.company__block').hide();
	    $('.company__cons').show();
	});
	$('.company__img_photo').hover(function(){
		$('.company__block').hide();
	    $('.company__photo').show();
	});
	$('.company__img_web').hover(function(){
		$('.company__block').hide();
	    $('.company__web').show();
	});
	$('.company__img_advert').hover(function(){
		$('.company__block').hide();
	    $('.company__advert').show();
	});
// Slick-Carousel
	$('.logo-carousel').slick({
		// normal options...
  			slidesToShow: 5,
			slidesToScroll: 1,
			autoplay: true,
			autoplaySpeed: 2000,
  		// responsive
		responsive: [
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 540,
			settings: {
				slidesToShow: 2,
			}
		}]		
	});

});