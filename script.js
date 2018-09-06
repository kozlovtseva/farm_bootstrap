$(document).ready(function(){
	$('.company__img-block').hover(function(){
		$('.company__block').hide();
	    $("#"+$(this).attr('data-id')).show();
	});
});