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

	bindNavToggle: function() {

		$('.js-nav-toggle').on('click', function(e) {

			e.preventDefault();

			$('nav').toggleClass('is-active');

		});

	},

	bindOnScroll: function() {

		// $(window).on('scroll', function() {

		// 	console.log('scrolling');
		// 	$('.js-header-no-scroll').removeClass('js-header-no-scroll');

		// });

	}

};

portfolioUI.init();


// // Hide Header on on scroll down
// var didScroll;
// var lastScrollTop = 0;
// var delta = 5;

// $(window).scroll(function(event){
//     didScroll = true;
// });

// setInterval(function() {
//     if (didScroll) {
//         hasScrolled();
//         didScroll = false;
//     }
// }, 250);

// setInterval(function() {
//     if (!didScroll) {
//     	hasNotScrolled();
//     }
// }, 5000);

// function hasScrolled() {
//     var st = $(this).scrollTop();

//     // Make sure they scroll more than delta
//     if (Math.abs(lastScrollTop - st) <= delta) {
//         return;
//     }
    
//     // If they scrolled down and are past the navbar, add class .nav-up.
//     // This is necessary so you never see what is "behind" the navbar.
//         // Scroll Down
//         $('header').removeClass('nav-up').addClass('nav-down');
//         // Scroll Up
//         if(st === 0) {
//             $('header').removeClass('nav-down').addClass('nav-up');
//         }
    
//     lastScrollTop = st;
// }

// function hasNotScrolled() {

// 	$('header').removeClass('nav-down').addClass('nav-up');

// }

// function hideNav() {

// 	$(window).on('mousemove', function() {

// 		$('header').removeClass('nav-up').addClass('nav-down');

// 	});

// }
