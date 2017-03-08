$(document).scroll(function() {
	var header = $('header').height();
	var arrow = $('.arrow-down');
	var scrolled = $(document).scrollTop();
	var opacity = 1 - scrolled / header;
	var blur = scrolled / header * 10;
	if (blur < 10) {
		$('h1').css({'filter': 'blur('+ blur + 'px)'});
	}
	$('header').css({'opacity': opacity});
	$('h1').css({'opacity': opacity});
	if (scrolled > header * 0.25) {
		arrow.css({'box-shadow': '0 -50px lightgrey inset',
							 'color': 'black',
							 'line-height': '70px'});
	} else {
		arrow.css({'box-shadow': '',
							 'color': '',
							 'line-height': ''});
	}
});
$('.arrow-down').click(function() {
	var header = $('header').height();
	$('body').animate({scrollTop: header}, 2500, 'swing');
});