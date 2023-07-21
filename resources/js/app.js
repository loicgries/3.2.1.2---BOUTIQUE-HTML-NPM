import './jquery-global.js';

import * as bootstrap from 'bootstrap'

import './creative-menu/script.js';
import './creative-menu/style.css';

import './slick/slick.min.js';
import './slick/script.js';
import './slick/slick.css';
import './slick/slick-theme.css';

import './bootstrap/bootstrap-input-spinner.js';

import '@fancyapps/fancybox/dist/jquery.fancybox.min.js';
import './jquery.fancybox/style.css';

import './jquery.counterup/jquery.counterup.min.js';

import './tarteaucitron/tarteaucitron.js';
import './tarteaucitron/script.js';
import './tarteaucitron/style.css';

import { library, dom } from '@fortawesome/fontawesome-svg-core';
import * as icons from './icons';
library.add(...Object.values(icons));
dom.watch();

import '../scss/app.scss';

jQuery(function($) {
	//
	// js pour désactiver l'action des liens avec juste une ancre
	//
	$('a[href=\\#]').on('click', function(event) {
		event.preventDefault();
	});


	//
	// js pour coller le menu en haut
	//
	/* function stickyMenu() {
		if($(window).outerWidth() >= 1400) {
			if($('body').height() > $(window).outerHeight()) {
				if($(document).scrollTop() >= $('header > div.bg-color').height()) {
					$('header > div.container-fluid').addClass('position-xl-fixed top-0 z-1');
				} else {
					$('header > div.container-fluid').removeClass('position-xl-fixed top-0 z-1');
				}

				if($(document).scrollTop() >= $('header > div.bg-color').height()+$('.image').height()) {
					$('header > div.container-fluid').addClass('reduce');
				} else {
					$('header > div.container-fluid').removeClass('reduce');
				}
			}
		} else {
			$('header > div.container-fluid').removeClass('position-xl-fixed reduce top-0 z-1');
		}
	}

	$(window).scroll(function() {
		stickyMenu();
	});

	$(window).resize(function() {
		stickyMenu();
	}); */


	//
	// js pour la réécriture des emails
	//
	function deObfuscateEmail() {
		var content = $(this).html().replace(new RegExp("{AT}", 'g'), '@').replace(new RegExp("{DOT}", 'g'), '.');
		$(this).removeClass('opacity-0').html(content);
	}

	$('.obfuscated').each(deObfuscateEmail);


	//
	// js pour le compteur
	//
	const counterUp = window.counterUp.default;

	const callback = entries => {
		entries.forEach( entry => {
			const el = entry.target;

			if(entry.isIntersecting) {
				counterUp(el, {
					delay: 10,
					duration: 1000,
				});
			}
		} )
	}

	$('.compteur').each(function() {
		const IO = new IntersectionObserver(
			callback,
			{ threshold: 1 }
		);

		IO.observe(this);
	});


	//
	// js pour afficher/masquer le bouton pour retourner en haut de page
	//
	if($('.scrollto').length) {
		var prevScrollpos = window.pageYOffset;

		window.onscroll = function() {
			if($(window).outerHeight() >= 356) {
				var currentScrollPos = window.pageYOffset;

				if(prevScrollpos <= currentScrollPos || currentScrollPos <= 0) {
					$('body:not(.show-nav) .scrollto').css('bottom', '');
				} else {
					if($(window).outerWidth() >= 448) {
						$('body:not(.show-nav) .scrollto').css('bottom', '24px');
					} else {
						$('body:not(.show-nav) .scrollto').css('bottom', '62px');
					}
				}

				prevScrollpos = currentScrollPos;
			}
		}
	}


	//
	// js pour placer le bouton pour retourner en haut de page
	//
	function displayRetour() {
		if($('.scrollto').length) {
			$('.scrollto').css('margin-left', $('body > div.mx-auto').width()-$('.scrollto').outerWidth().toFixed(0)).removeClass('opacity-0');
		}
	}

	displayRetour();

	$(window).resize(function() {
		displayRetour();
	});


	//
	// js pour mettre à jour les input[type="number"]
	//
	$('input[type="number"]').inputSpinner();


	//
	// js pour modifier le comportement par défaut de fancybox
	//
	$('[data-fancybox]').fancybox({
		animationEffect: 'zoom-in-out',
		backFocus: false,
		loop: true,
		transitionEffect: 'slide'
	});
});


//
// js pour activer/desactiver le mode passive afin d'améliorer les performances
//
$.event.special.touchmove = {
	setup: function(_, ns, handle) {
		if(ns.includes("noPreventDefault")) {
			this.addEventListener("touchmove", handle, { passive: false });
		} else {
			this.addEventListener("touchmove", handle, { passive: true });
		}
	}
};