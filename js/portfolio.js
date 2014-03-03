// Module Pattern
// http://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript

var portfolioUI = {

	init: function() {

		this.bindLocalScroll();
		this.bindSwitchColors();
		this.bindNavToggle();

	},

	bindLocalScroll: function() {

		$('.js-local-scroll').on('click', function(e) {

			e.preventDefault();

			portfolioUI.getScrollTarget($(this));

		});
		
	},

	getScrollTarget: function(elem) {

		var target = elem.attr('href');

		var targetOffset = $(target).offset().top - 140;

		this.animateScroll(targetOffset);

	},

	animateScroll: function(offset) {

		$('html, body').animate({scrollTop:offset}, 'slow');

	},

	bindSwitchColors: function() {

		$('.js-switch-colors').on('click', function(e) {

			e.preventDefault();

			$('body').toggleClass('switch');

		});
		
	},

	bindNavToggle: function() {

		$('.js-nav-toggle').on('click', function(e) {

			e.preventDefault();

			$('nav').toggleClass('is-active');

		});

	}

};

portfolioUI.init();