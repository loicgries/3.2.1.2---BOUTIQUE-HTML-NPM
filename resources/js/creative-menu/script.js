var responsive = 984;

function resize() {
	$('body > div.position-relative, #navigation').removeAttr('style');

	var ulHeight = $('#navigation > ul').innerHeight();
	var windowHeight = $(window).height();

	if(ulHeight < windowHeight) {
		$('body > div.position-relative, #navigation').css('height', windowHeight);
	} else {
		$('body > div.position-relative, #navigation').css('height', ulHeight);
	}
}

jQuery().ready(function($) {
	$('header .hamburger').on('click', function() {
		if($('body').hasClass('show-nav')) {
			$('body').removeClass('show-nav').addClass('hide-nav');
			$('body > div.position-relative, #navigation').removeAttr('style');

			setTimeout(function() {
				$('body').removeClass('hide-nav');
			}, 500);
		} else {
			$('body').removeClass('hide-nav').addClass('show-nav');
			resize();
		}

		return false;
	});

	/* $('#navigation a[href^=\\#]').on('click', function() {
		if($(window).width() < responsive) {
			if($('body').hasClass('show-nav')) {
				$('body').removeClass('show-nav').addClass('hide-nav');
				$('body > div.position-relative, #navigation').removeAttr('style');
	
				setTimeout(function() {
					$('body').removeClass('hide-nav');
				}, 500);
			} else {
				$('body').removeClass('hide-nav').addClass('show-nav');
				resize();
			}
		}
	}); */

	$(window).resize(function() {
		if($(window).width() < responsive) {
			if($('body').hasClass('show-nav')) {
				resize();
			}
		} else {
			$('body').removeClass('show-nav');
			$('body > div.position-relative, #navigation').removeAttr('style');
		}
	});
});

jQuery(document).keyup(function(e) {
	if(e.keyCode == 27) {
		if($(window).width() < responsive) {
			if($('body').hasClass('show-nav')) {
				$('body').removeClass('show-nav').addClass('hide-nav');
				$('body > div.position-relative').removeAttr('style');

				setTimeout(function() {
					$('body').removeClass('hide-nav');
					resize();
				}, 500);
			}
		}
	}
});