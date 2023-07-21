jQuery().ready(function($) {
	// slider
	let slider = $('.slider');

	slider.slick({
		adaptiveHeight: true,
		arrows: false,
		autoplay: false,
		dots: true,
		draggable: true,
		fade: false,
		infinite: true,
		pauseOnHover: true,
		swipe: true,
	});


	// promotions
	let promotions = $('.promotions');

	promotions.slick({
		arrows: false,
		autoplay: false,
		dots: false,
		draggable: false,
		fade: false,
		infinite: false,
		slidesToScroll: 1,
		slidesToShow: 4,
		swipe: false,
		responsive: [
			{
				breakpoint: 1164,
				settings: {
					dots: true,
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 984,
				settings: {
					dots: true,
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 576,
				settings: {
					dots: true,
					slidesToShow: 1,
				}
			}
		]
	});


	// selection
	let selection = $('.selection');

	selection.slick({
		arrows: false,
		autoplay: false,
		dots: false,
		draggable: false,
		fade: false,
		infinite: false,
		slidesToScroll: 4,
		slidesToShow: 4,
		swipe: false,
		responsive: [
			{
				breakpoint: 1164,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 984,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 576,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});

	// TODO /!\
	if($(window).outerWidth() < 1164) {
		selection.slick('slickFilter', ':eq(0), :eq(1), :eq(2), :eq(4), :eq(5), :eq(6)');
	}

	$('#link-cuisine').on('click', function() {
		if($(this).hasClass('text-light')) {
			$(this).addClass('text-dark text-decoration-underline').removeClass('text-light');
			$('#link-medical').addClass('text-light').removeClass('text-dark text-decoration-underline');

			selection.slick('slickGoTo', 0);
		}
	});

	$('#link-medical').on('click', function() {
		if($(this).hasClass('text-light')) {
			$(this).addClass('text-dark text-decoration-underline').removeClass('text-light');
			$('#link-cuisine').addClass('text-light').removeClass('text-dark text-decoration-underline');

			selection.slick('slickGoTo', 4);
		}
	});
});