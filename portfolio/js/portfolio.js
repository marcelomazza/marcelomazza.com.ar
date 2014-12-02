// Module Pattern
// http://addyosmani.com/resources/essentialjsdesignpatterns/book/#modulepatternjavascript

var portfolioUI = {

	init: function() {

		this.bindLocalScroll();
		this.bindNavToggle();
		this.bindOnScroll();

	},

	bindLocalScroll: function() {

		$('.js-local-scroll').on('click', function(e) {

			e.preventDefault();

			var hash = this.hash;

			var targetScroll = $(hash).offset().top;

			portfolioUI.animateScroll(targetScroll, hash);

		});
		
	},

		animateScroll: function(targetScroll, hash) {

			$('html, body').animate({scrollTop:targetScroll}, 'slow', function() {

				window.location.hash = hash;

			});

		},

	bindNavToggle: function() {

		$('.js-nav-toggle').on('click', function(e) {

			e.preventDefault();

			$('nav').toggleClass('is-active');

		});

	},

	bindOnScroll: function() {

		var $header = $(' header'),
		    didScroll = false;

		$(window).scroll(function(){
		    didScroll = true;
		});

		setInterval(function() {
		    if ( didScroll ) {
		        didScroll = false;
		        hasScrolled();
		    }
		}, 500);

		function hasScrolled() {
		    var st = $(this).scrollTop();

	        $header.removeClass('nav-large').addClass('nav-short');
	        
	        if (st === 0) {
	            $header.removeClass('nav-short').addClass('nav-large');
	        }
		    
		}

	}

};

portfolioUI.init();