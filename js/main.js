(function($, document, window) {

	var $document = $(document);
	var $window = $(window);
	var windowIsTall = ($window.width() < $window.height());
	var $body = $('body');
	var $nav = $('nav');
	var $profileCard = $('.profile.card');
	var profileCardHeight = $profileCard.height();

	var profileMinHeight = function() {
		var windowHeight = $window.height() - $('#work').outerHeight();
		var extraSpacing = Math.floor((windowHeight - profileCardHeight) / 2);

		var css = '';
		css += '.profile.card { min-height: ' + windowHeight + 'px; }';
		css += '.profile.card { padding-top: ' + extraSpacing + 'px; }';
		css += '.profile.card .social { margin-top: ' + extraSpacing + 'px; }';

		$('<style type="text/css" id="main-js" />').text(css).appendTo($('head'));
		profileCardHeight = Math.max(profileCardHeight, windowHeight);
	};
	if (!windowIsTall) {
		profileMinHeight();
	}

	var navShown = false;
	var documentScroll = function(e) {
		var scrollTop = $document.scrollTop();

		if (scrollTop > profileCardHeight / 2) {
			if (!navShown) {
				$body.addClass('show-nav');
				$nav.addClass('visible-md-block');
				$nav.addClass('visible-lg-block');
				navShown = true;
			}
		} else {
			if (navShown) {
				$body.removeClass('show-nav');
				$nav.removeClass('visible-md-block');
				$nav.removeClass('visible-lg-block');
				navShown = false;
			}
		}
	};
	$document.scroll(documentScroll);

})(jQuery, document, this);