(function($, document, window) {

	var $document = $(document);
	var $window = $(window);
	var $body = $('body');
	var $nav = $('nav');
	var profileCardHeight = $('.profile.card').height();

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