/*
Theme Name: Trila
Description: Ajax Based Creative Template
Author: Erilisdesign
Theme URI: http://erilisdesign.com/preview/themeforest/html/trila/
Author URI: http://themeforest.net/user/erilisdesign
Version: 1.0.2
License: https://themeforest.net/licenses/standard
*/

/*------------------------------------------------------------------
[Table of contents]

1. Preloader
2. Navigation
3. AjaxSite
4. Animations
5. Translate
6. Reveal Animations
7. Backgrounds
8. Fullscreen Sections Fix
9. Hero
10. Masonry
11. magnificPopup
12. Tabs
13. Accordions
14. Slider
15. Map
16. Mailchimp
17. Contact Form
-------------------------------------------------------------------*/

function setup($) {
	"use strict";
	// Vars
	var body = $('body'),
		ajaxSite = false,
		target,
		preloader = $('.preloader'),
		preloaderDelay = 1200,
		preloaderFadeOutTime = 500,
		fullscreenSection = $('section.fullscreen-element');

	// Mobile
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
		body.addClass('mobile');
	}

	function detectIE() {
		if (navigator.userAgent.indexOf('MSIE') != -1)
			var detectIEregexp = /MSIE (\d+\.\d+);/
		else
			var detectIEregexp = /Trident.*rv[ :]*(\d+\.\d+)/

		if (detectIEregexp.test(navigator.userAgent)){
			var ieversion=new Number(RegExp.$1)
			if (ieversion >= 10) {
				return true;
			}
		}
		return false;
	}

	function getWindowWidth() {
		return Math.max( $(window).width(), window.innerWidth);
	}

	function getWindowHeight() {
		return Math.max( $(window).height(), window.innerHeight);
	}


	// [1. Preloader]
	function init_ED_Preloader() {
		body.addClass('loaded');
		preloader.delay(preloaderDelay).fadeOut(preloaderFadeOutTime);
	}


	// [2. Navigation]
	function init_ED_Navigation() {
		var mainHeader = $('.main-header'),
			navBlock = $('.nav-block'),
			dropdown = $('li.dropdown'),
			dropdownToggle = $('a.dropdown-toggle'),
			scrollTo = $('a.scrollto'),
			navToggle = $('.nav-toggle');

		dropdownToggle.off('click');
		scrollTo.off('click');
		navToggle.off('click');

		// Dropdown
		dropdownToggle.on('click', function(e) {
			e.preventDefault();

			var parentDropdown = $(this).parent('li');
			
			if(!( body.hasClass('mobile') || 1024 >= getWindowWidth() )){
				if(parentDropdown.hasClass('open')){
					parentDropdown.removeClass('open');
				} else {
					dropdown.removeClass('open');
					parentDropdown.addClass('open');
				}
			} else {
				if(parentDropdown.hasClass('open')){
					parentDropdown.removeClass('open');
					parentDropdown.find('.dropdown-nav').first().slideUp(500);
				} else {
					parentDropdown.addClass('open');
					parentDropdown.find('.dropdown-nav').first().slideDown(500);
				}
			}
		});

		$(document).on('click touchstart', 'body', function(e){
			if(!$(e.target).parent('li').hasClass('dropdown')){
				$('.dropdown.open').removeClass('open');
			}
		});

		// Smooth Scroll
		scrollTo.on('click', function(e) {
			e.preventDefault();

			var target = $(this).attr('href');

			$.smoothScroll({
				offset: 0,
				easing: 'swing',
				speed: 800,
				scrollTarget: target,
				preventDefault: false
			});
		});

		if(!( body.hasClass('mobile') || 1024 >= getWindowWidth() )){

			if( navBlock.css('display') === 'none' || navToggle.hasClass('open') ){
				dropdown.removeClass('open');
				$('ul.dropdown-nav').css('display', '');
			}

			if(navBlock.css('display') === 'none'){
				navBlock.css('display', '');
			}

			if(navToggle.hasClass('open')){
				navToggle.removeClass('open');
			}

			$(window).on('scroll', function(){
				// Show 'back to top' button
				if ($(this).scrollTop() > 200) {
					$('a.backtotop').addClass('active');
				} else {
					$('a.backtotop').removeClass('active');
				}
			});

		} else {

			if(navBlock.css('display') === 'block'){
				navBlock.css('display', '');
			}

			if(navToggle.hasClass('open')){
				navBlock.css('display', 'block');
			}

			navToggle.on('click', function(e) {
				e.preventDefault();
				if(!$(this).hasClass('open')){
					$(this).addClass('open');
					navBlock.slideDown(500);
				} else {
					navBlock.slideUp(500);
					$(this).removeClass('open');
					dropdown.removeClass('open');
					$('ul.dropdown-nav').slideUp(500);
				}
			});

		}

	}


	// [3. AjaxSite]
	function init_ED_AjaxSite(){
		var EDPage = $('div.ed-page'),
			newLocation = '',
			isAnimating = false,
			firstLoad = false,
			navBlock = $('.nav-block'),
			navToggle = $('.nav-toggle');

		if(ajaxSite === false){
			return true;
		}

		// Ajax navigation
		function ajaxNavigation(){
			$('a.ajax-link').on('click', function(e){

				if($(this).attr('target') || !ajaxSite || $(this).attr('href') == '#'){
					return true;
				}
				e.preventDefault();

				var newPage = $(this).attr('href'),
					oldPage = window.location.pathname.substr(window.location.pathname.lastIndexOf('/') + 1);

				if(newPage == oldPage){
					return true;
				}

				// Load new page
				if( !isAnimating ) loadNewPage(newPage, true);
				firstLoad = true;
			});
		}
		ajaxNavigation();

		function showLoader(){
			preloader.css('display', 'block');
			if( preloader.css('display') === 'block'){
				body.addClass('page-is-changing');
				setTimeout( function(){
					if(body.hasClass('mobile') || 1024 >= getWindowWidth()) {
						if(navToggle.hasClass('open')){
							navToggle.removeClass('open');
							navBlock.css('display', 'none');
						}
					}
				}, 700 );
			}
		}

		function hideLoader(){
			body.addClass('page-is-loaded');
			setTimeout( function(){
				preloader.css('display', 'none');
				body.removeClass('page-is-changing page-is-loaded');
			}, 700 );
		}

		function changeURL(path, bool){
			if (typeof(window.history.pushState) == 'function') {
				if(path != window.location && bool){
					window.history.pushState({path: path},'',path);
				}
			} else {
				window.location.hash = '#!' + path;
			}
		}

		function scrollOnTop(){
			$('html, body').animate({ scrollTop: '0px' });
		}

		// Detect the 'popstate' event - user clicking the back button etc.
		$(window).on('popstate', function(e){
			if( firstLoad ) {
				var newPageArray = location.pathname.split('/'),
					newPage = newPageArray[newPageArray.length - 1];

				if( !isAnimating && newLocation != newPage ) loadNewPage(newPage, false);
			}
			firstLoad = true;
		});

		function loadNewPage(url, bool){
			url = ('' == url) ? 'index.html' : url;
			isAnimating = true;

			showLoader();

			setTimeout( function(){

				// Load new content and replace .ed-page content with the new one
				$.ajax({
					cache: false,
					url: url,
					type: 'GET',
					dataType: 'html',
					success: function(data){
						var content = $(data).find('#page').html(),
							showContentDelay = 1200,
							headerStyle = $(data).find('.main-header').attr('class');

						body.removeClass('reveal');
						EDPage.children().remove();	

						changeURL(url, bool);

						// Set New Title
						document.title = $(data).filter('title').text();

						$('.main-header').removeClass().addClass(headerStyle);
						EDPage.html(content);
						scrollOnTop();
						init_ED_RevealDetect();

						EDPage.imagesLoaded( function() {

							init_ED_Navigation();
							ajaxNavigation();
							init_ED_FullscreenFix();
							init_ED_Hero();
							init_ED_PageBackground();
							init_ED_MasonryLayout();
							init_ED_MagnificPopup();
							init_ED_Tabs();
							init_ED_Accordions();
							init_ED_Slider();
							init_ED_Maps();
							init_ED_Mailchimp();
							init_ED_ContactForm();

							setTimeout( function(){
								hideLoader();
							}, 500 );

							setTimeout( function(){
								init_ED_Animations();
								init_ED_Translate();
								init_ED_Reveal();

								isAnimating = false;
								newLocation = url;
							}, showContentDelay );

						});
					},
					error: function(jqXHR, textStatus, errorThrown){

						$('.main-container').append('<div id="status-modal" class="mfp-hide mfp-modal p-5"><p class="status-content">Error: ' + jqXHR.status  + ' ' + errorThrown + '</p><p class="mb-0"><a class="popup-modal-dismiss" href="#">Dismiss</a></p></div>');
						setTimeout( function(){
							hideLoader();
							isAnimating = false;
							if ($('#status-modal').length > 0) {
								$.magnificPopup.open({
									items: {
										src: '#status-modal' 
									},
									type: 'inline',
									midClick: true,
									closeMarkup: '',
									mainClass: 'mfp-zoom-in'
								});
								$('.popup-modal-dismiss').on('click', function (e) {
									e.preventDefault();
									$.magnificPopup.close();
									$('#status-modal').remove();
								});
							};
						}, 500 );

					}
				});

			}, 700 );
		}
	}


	// [4. Animations]
	function init_ED_Animations() {
		if( body.hasClass('mobile') || detectIE() ) {
			$('.animated').css({
				'display':'block',
				'visibility':'visible'
			});
		} else {
			$('.animated').each(function(){
				var aElement = $(this);
				new Waypoint({
					element: aElement,
					handler: function(direction) {
						var aElement = this.element;
						if ( !aElement.hasClass('visible') ) {
							var animation = aElement.attr('data-animation') || 'fadeInUp',
								animationDelay = parseInt(aElement.attr('data-animation-delay'), 10) || 0;
							if ( animationDelay ) {
								setTimeout(function(){
									aElement.addClass(animation + ' visible');
								}, animationDelay);
							} else {
								aElement.addClass(animation + ' visible');
							}
						}
						this.destroy();
					},
					offset: '100%'
				});
			});
		}
	}


	// [5. Translate]
	function init_ED_Translate() {
		
		if(!$('html').hasClass('csstransforms')){
			return true;
		}
		
		$('.translate-text').each(function(){
			var tElement = $(this);
			new Waypoint({
				element: tElement,
				handler: function(direction) {
					var aElement = this.element,
						translateDelay = parseInt(tElement.attr('data-translate-delay'), 10) || 0;
					if ( translateDelay ) {
						setTimeout(function(){
							tElement.addClass('is-animated');
						}, translateDelay);
					} else {
						tElement.addClass('is-animated');
					}
					this.destroy();
				},
				offset: '100%'
			});
		});
	}


	// [6. Reveal Animations]
	function init_ED_RevealDetect() {
		if( body.hasClass('mobile') || detectIE() ) {
			body.removeClass('reveal');
			return true;
		} else {
			body.addClass('reveal');
		}
	}

	function init_ED_Reveal() {
		if( !body.hasClass('reveal') ) {
			return true;
		}

		$('.reveal-element').each(function(){
			var rElement = $(this);
			new Waypoint({
				element: rElement,
				handler: function(direction) {
					revealElement(this.element);
					this.destroy();
				},
				offset: '100%'
			});
		});
	}

	function revealElement(rElement) {
		var rDuration = parseInt(rElement.attr('data-duration'), 10) || 400,
			rDelay = parseInt(rElement.attr('data-delay'), 10) || 0,
			rOffset = rDuration + rDelay,
			rDirection = rElement.attr('data-direction') || 'ltr',
			rEasing = rElement.attr('data-easing') || 'easeInOutQuad',
			rContent = rElement.find('.reveal-content'),
			rHighlight = rElement.find('.reveal-highlight');

		if (rElement.hasClass('active')){
			return true;
		}

		if(rDirection === 'ltr'){
			rHighlight.delay(rDelay).animate({
				width: '100%',
				left: '0'
			}, {
				easing: rEasing,
				duration: rDuration,
				complete: function() {
					rHighlight.delay(rDelay).animate({
						width: '0',
						left: '100%'
					}, {
						easing: rEasing,
						duration: rDuration,
						queue: false,
						step: function( now, fx ){
							rContent.css({'opacity': 1});
						}
					});
				}
			});
		} else if(rDirection === 'rtl'){
			rHighlight.delay(rDelay).animate({
				width: '100%',
				right: '0'
			}, {
				easing: rEasing,
				duration: rDuration,
				complete: function() {
					rHighlight.delay(rDelay).animate({
						width: '0',
						right: '100%'
					}, {
						easing: rEasing,
						duration: rDuration,
						queue: false,
						step: function( now, fx ){
							rContent.css({'opacity': 1});
						}
					});
				}
			});
		} else if(rDirection === 'ttb'){
			rHighlight.delay(rDelay).animate({
				height: '100%',
				top: '0'
			}, {
				easing: rEasing,
				duration: rDuration,
				complete: function() {
					rHighlight.delay(rDelay).animate({
						height: '0',
						top: '100%'
					}, {
						easing: rEasing,
						duration: rDuration,
						queue: false,
						step: function( now, fx ){
							rContent.css({'opacity': 1});
						}
					});
				}
			});
		} else if(rDirection === 'btt'){
			rHighlight.delay(rDelay).animate({
				height: '100%',
				bottom: '0'
			}, {
				easing: rEasing,
				duration: rDuration,
				complete: function() {
					rHighlight.delay(rDelay).animate({
						height: '0',
						bottom: '100%'
					}, {
						easing: rEasing,
						duration: rDuration,
						queue: false,
						step: function( now, fx ){
							rContent.css({'opacity': 1});
						}
					});
				}
			});
		} else {
			rHighlight.delay(rDelay).animate({
				width: '100%',
				left: '0'
			}, {
				easing: rEasing,
				duration: rDuration,
				complete: function() {
					rHighlight.delay(rDelay).animate({
						width: '0',
						left: '100%'
					}, {
						easing: rEasing,
						duration: rDuration,
						queue: false,
						step: function( now, fx ){
							rContent.css({'opacity': 1});
						}
					});
				}
			});
		}
		rElement.addClass('active');
	}


	// [7. Background]
	function init_ED_PageBackground() {
		var BGImageHolder = $('.bg-image-holder');

		BGImageHolder.each(function(){
			var bg = $(this),
				bgSrc = $(this).children('img').attr('src');

			bg.css('background-image','url("'+bgSrc+'")');
		});

		// Video
		if(body.hasClass('mobile')) {
			$('.video-wrapper').css('display', 'none');
		}

	}


	// [8. Fullscreen Sections Fix]
	function init_ED_FullscreenFix() {
		if(fullscreenSection.length > 0){
			if(!( 768 >= getWindowWidth() )) {
				fullscreenSection.each(function(){

					var elem = $(this),
						elemHeight = getWindowHeight(),
						elemContent = elem.find('.fe-container'),
						elemContentHeight = elemContent.outerHeight(),
						elemPaddingTop = parseInt(elem.css('padding-top'), 10),
						elemPaddingBottom = parseInt(elem.css('padding-bottom'), 10),
						elemTrueHeight = elemContentHeight + elemPaddingTop + elemPaddingBottom;

					if( elemHeight >= elemTrueHeight ){
						elem.css('height', '');
					} else if( elemHeight < elemTrueHeight ){
						elem.css('height', 'auto');
					}

				});
			} else {
				fullscreenSection.each(function(){
					$(this).css('height', 'auto');
				});
			}
		}
	}


	// [9. Hero]	
	function init_ED_Hero() {
		var hero = $('.ed-page-hero')

		if(hero.children('section').css('padding-bottom') === undefined) {
			return
		}

		var heroBottomPadding = parseInt(hero.children('section').css('padding-bottom').slice(0, -2), 10),
			addonA = $('.ed-page-hero .hero-addon-a'),
			addonAInner = $('.ed-page-hero .hero-addon-a .addon-inner'),
			addonB = $('.ed-page-hero .hero-addon-b'),
			parallaxElement = $('.ed-page-hero .parallax-onscroll'),
			opacityElement = $('.ed-page-hero .opacity-onscroll'),
			windowScrolled;

		if(body.hasClass('mobile')){
			return true;
		}	
			
		$(window).on('scroll', function(){
			windowScrolled = window.pageYOffset || document.documentElement.scrollTop;

			if (addonAInner.length > 0){
				addonAInner.css('transform','translateY(' + windowScrolled / 5 + 'px)');
			}
			if (addonB.length > 0){
				addonB.css('transform','translateY(' + windowScrolled / 5 * -1 + 'px)');
			}
			if (parallaxElement.length > 0) {
				if (parallaxElement.hasClass('parallax-inverse')) {
					parallaxElement.css('transform','translateY(' + windowScrolled / 5 * -1 + 'px)');
				} else {
					parallaxElement.css('transform','translateY(' + windowScrolled / 5 + 'px)');
				}
			}
			if (opacityElement.length > 0) {
				opacityElement.css('opacity',  ( 1 - windowScrolled / (addonA.outerHeight() - heroBottomPadding ) ));
			}
		});

	}


	// [10. Masonry]
	function init_ED_MasonryLayout() {
		if(document.querySelectorAll('.masonry-container').length > 0){
			if(!$().isotope) {
				console.log('MasonryLayout: isotope not defined.');
				return true;
			}

			if ($('.masonry-container').length > 0) {
				var $masonryContainer = $('.masonry-container');
				var $columnWidth = $masonryContainer.attr('data-column-width');

				if($columnWidth == null){
					var $columnWidth = '.masonry-item';
				}

				var $masonry = $masonryContainer.isotope({
					filter: '*',
					itemSelector : '.masonry-item',
					masonry: {
						columnWidth: $columnWidth
					},
					stagger: 0,
					transitionDuration: 0,
					hiddenStyle: {
						opacity: 0
					},
					visibleStyle: {
						opacity: 1
					},
					resize: false
				});

				$masonry.imagesLoaded().progress( function() {
					$masonry.isotope('layout');
				});
				
				$(window).on('resize', function(){
					$masonry.isotope({ transitionDuration: 0 });
					$masonry.isotope('layout');
				});

			}

			$('nav.masonry-filter ul a').on('click', function() {
				var selector = $(this).attr('data-filter');
				$masonryContainer.isotope({ filter: selector, transitionDuration: '0.5s', });
				$('nav.masonry-filter ul a').removeClass('active');
				$(this).addClass('active');
				return false;
			});
		}
	}


	// [11. magnificPopup]
	function init_ED_MagnificPopup() {
		if(	document.querySelectorAll('.mfp-image').length > 0 ||
			document.querySelectorAll('.mfp-gallery').length > 0 ||
			document.querySelectorAll('.mfp-iframe').length > 0 ||
			document.querySelectorAll('.mfp-ajax').length > 0 ||
			document.querySelectorAll('.open-popup-link').length > 0 ){

			if(!$().magnificPopup) {
				console.log('MagnificPopup: magnificPopup not defined.');
				return true;
			}

			$('.mfp-image').magnificPopup({
				type:'image',
				closeMarkup: '<button title="%title%" type="button" class="mfp-close"><i class="ion-android-close"></i></button>',
				removalDelay: 300,
				mainClass: 'mfp-fade'
			});

			$('.mfp-gallery').each(function() {
				$(this).magnificPopup({
					delegate: 'a',
					type: 'image',
					gallery: {
						enabled: true
					},
					arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
					closeMarkup: '<button title="%title%" type="button" class="mfp-close"><i class="ion-android-close"></i></button>',
					removalDelay: 300,
					mainClass: 'mfp-fade'
				});
			});

			$('.mfp-iframe').magnificPopup({
				type: 'iframe',
				iframe: {
					patterns: {
						youtube: {
							index: 'youtube.com/',
							id: 'v=',
							src: '//www.youtube.com/embed/%id%?autoplay=1'
						},
						vimeo: {
							index: 'vimeo.com/',
							id: '/',
							src: '//player.vimeo.com/video/%id%?autoplay=1'
						},
						gmaps: {
							index: '//maps.google.',
							src: '%id%&output=embed'
						}
					},
					srcAction: 'iframe_src'
				},
				closeMarkup: '<button title="%title%" type="button" class="mfp-close"><i class="ion-android-close"></i></button>',
				removalDelay: 300,
				mainClass: 'mfp-fade'
			});

			$('.mfp-ajax').magnificPopup({
				type: 'ajax',
				ajax: {
					settings: null,
					cursor: 'mfp-ajax-cur',
					tError: '<a href="%url%">The content</a> could not be loaded.'
				},
				midClick: true,
				closeMarkup: '<button title="%title%" type="button" class="mfp-close"><i class="ion-android-close"></i></button>',
				removalDelay: 300,
				mainClass: 'mfp-fade',
				callbacks: {
					ajaxContentAdded: function(mfpResponse) {
						init_ED_Slider();
					}
				}
			});

			$('.open-popup-link').magnificPopup({
				type: 'inline',
				midClick: true,
				closeMarkup: '<button title="%title%" type="button" class="mfp-close"><i class="ion-android-close"></i></button>',
				removalDelay: 300,
				mainClass: 'mfp-zoom-in'
			});

			$('.popup-modal-dismiss').on('click', function (e) {
				e.preventDefault();
				$.magnificPopup.close();
			});

		}
	}


	// [12. Tabs]
	function init_ED_Tabs() {
		var tab = $('.ed-tabs a');
		tab.off('click');

		tab.on('click', function(e) {
			e.preventDefault();

			var target = $(this).attr('href');

			if($(this).parents('li').hasClass('active')){
				return;
			}

			if($(target).hasClass('tab-content')){
				$('a[href="'+ target +'"]').parents('.ed-tabs').find('li').removeClass('active');
				$(target).parents('.ed-tabs-content').find('.tab-content').removeClass('active');
				$('a[href="'+ target +'"]').parents('li').addClass('active');
				$(target).addClass('active');
			} else {
				return;
			}
		});
	}


	// [13. Accordions]
	function init_ED_Accordions() {
		if ($('.accordion-toggle').length > 0) {
			$('.accordion-toggle').on('click', function() {

				var accordionMultiple = $(this).parents('.ed-accordion-group').attr('data-multiple');
				if( accordionMultiple === 'true' ){ accordionMultiple = true; } else { accordionMultiple = false; }

				if( !$(this).parents('.ed-accordion').hasClass('active') ) {
					if( !accordionMultiple === true ){
						$(this).parents('.ed-accordion-group').find('.ed-accordion').removeClass('active');
						$(this).parents('.ed-accordion-group').find('.accordion-content').stop(true,true).slideUp(400);
					}
					$(this).parents('.ed-accordion').addClass('active');
					$(this).parents('.ed-accordion').find('.accordion-content').stop(true,true).slideDown(400);
				} else {
					$(this).parents('.ed-accordion').removeClass('active');
					$(this).parents('.ed-accordion').find('.accordion-content').stop(true,true).slideUp(400);
				}

			});
		}
	}


	// [14. Slider]
	function init_ED_Slider() {
		if(document.querySelectorAll('.slider').length > 0){
			$('.slider').slick();
		}		
	}


	// [15. Map]
	function init_ED_Maps() {
		var gmap = $('.gmap');

		if (gmap.length > 0) {
			gmap.each(function() {
				var map_height = $(this).attr('data-height');

				if (map_height){
					gmap.css('height',map_height);
				}
			});
		}

		// GMap Contact
		if($('#gmap-contact').length > 0){

			var map = new GMaps({
				div: '#gmap-contact',
				lat: 37.752797,
				lng: -122.409132,
				zoom: 14,
				scrollwheel: false
			});

			map.addMarker({
				lat: 37.752797,
				lng: -122.409132,
				title: 'Lunar',
				infoWindow: {
					content: '<p class="mb-0">Cali Agency</p>'
				}
			});

		}

		// GMap Background
		if($('#gmap-background').length){

			var map = new GMaps({
				div: '#gmap-background',
				lat: 37.752797,
				lng: -122.409132,
				zoom: 14,
				scrollwheel: false
			});

			map.addMarker({
				lat: 37.752797,
				lng: -122.409132
			});

		}

	}


	// [16. Mailchimp]
	function init_ED_Mailchimp() {
		var subscribeForm = $('.subscribe-form');
		if( subscribeForm.length < 1 ){ return true; }

		subscribeForm.each( function(){
			var el = $(this),
				elResult = el.find('.subscribe-form-result');

			el.find('form').validate({
				submitHandler: function(form) {
					elResult.fadeOut( 500 );

					$(form).ajaxSubmit({
						target: elResult,
						dataType: 'json',
						resetForm: true,
						success: function( data ) {
							elResult.html( data.message ).fadeIn( 500 );
							if( data.alert != 'error' ) {
								$(form).clearForm();
								setTimeout(function(){
									elResult.fadeOut( 500 );
								}, 5000);
							};
						}
					});
				}
			});

		});
	}


	// [17. Contact Form]
	function init_ED_ContactForm() {
		var contactForm = $('.contact-form');
		if( contactForm.length < 1 ){ return true; }

		contactForm.each( function(){
			var el = $(this),
				elResult = el.find('.contact-form-result');

			el.find('form').validate({
				submitHandler: function(form) {
					elResult.fadeOut( 500 );

					$(form).ajaxSubmit({
						target: elResult,
						dataType: 'json',
						success: function( data ) {
							elResult.html( data.message ).fadeIn( 500 );
							if( data.alert != 'error' ) {
								$(form).clearForm();
								setTimeout(function(){
									elResult.fadeOut( 500 );
								}, 5000);
							};
						}
					});
				}
			});

		});
	}
	
	function init_ED_FirstLoaded() {
		setTimeout(function(){
			body.addClass('first-loaded');
		}, 700);
	}

	// window load function
	$(window).on('load', function() {
		$(window).scroll();
		init_ED_Preloader();
		init_ED_FirstLoaded();
	});

	// document.ready function
	jQuery(document).ready(function($) {
		$('html, body').scrollTop(0);

		init_ED_RevealDetect();
		init_ED_AjaxSite();
		init_ED_Navigation();
		init_ED_Hero();
		init_ED_PageBackground();
		init_ED_MasonryLayout();
		init_ED_Animations();
		init_ED_Translate();
		init_ED_Reveal();
		init_ED_MagnificPopup();
		init_ED_Tabs();
		init_ED_Accordions();
		init_ED_Slider();
		init_ED_Maps();
		init_ED_Mailchimp();
		init_ED_ContactForm();
	});

	// window.resize function
	$(window).on('resize', function () {
		init_ED_Navigation();
		init_ED_FullscreenFix();
		init_ED_Hero();
	});

};

setup(jQuery)

