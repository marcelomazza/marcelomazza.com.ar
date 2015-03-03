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

	},

	animateHeadline: function() {

		setInterval(function() {

			var $elementVisible = $('span.is-visible');
		  
		    if (!$elementVisible.is(':last-child')) {
		      
		      $elementVisible.removeClass('is-visible').addClass('is-hidden').next().addClass('is-visible').removeClass('is-hidden');

		    } else {
		      
		       $elementVisible.removeClass('is-visible').addClass('is-hidden');

			   $('.tagline').find('span:first-child').removeClass('is-hidden').addClass('is-visible');
		      
		    }
		  
		  
		}, 2000);

	}

};

portfolioUI.init();