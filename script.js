$(document).ready(function(){
	$('.company__img-block').hover(function(){
		$('.company__block').hide();
	    $("#"+$(this).attr('data-id')).show();
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