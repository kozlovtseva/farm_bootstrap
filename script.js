$(document).ready(function(){

//Company Block
//меняем содержимое блока по наведению на одну из соседних картинок
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

//Tile Block
	$('.tile__filter').click(function(){
		if($(this).hasClass('active')){
			return;
		}
		$('.tile__filter.active').button('toggle');
		$(this).button('toggle');
		if($(this).text() === 'All'){
			$('.tile__item').fadeIn(800);//показываем все картинки
		}else{		
			$('.tile__item')
				.hide() //прячем все
				.filter('[data-key~="'+$(this).text().toLowerCase()+'"]')//фильтруем по ключу
				.fadeIn(800);//показываем картинки, которые отвечают фильтру						
		};
	});

//Team Block
//по клику на фото - информация о сотруднике
	$('.team__img-item').click(function(){
		$('.team__img-item').css("display", "none");
		$('.team__overlay')
			.css("display", "none")
			.filter('[data-id~="'+$(this).attr("id")+'"]')
			.show(800);
	});
//по клику на крестик - к плитке фотографий
	$('.team__close-btn').click(function(){
		$('.team__overlay').hide();
		$('.team__img-item').fadeIn(800);
	});

});