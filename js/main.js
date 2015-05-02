(function($, document, window) {

	var $document = $(document);
	var $window = $(window);
	var $body = $('body');
	var $nav = $('nav');

	var showNavLimit = $('.profile.card .email').position().top;
	var navShown = false;
	var scrollSpy = false;
	var documentScroll = function(e) {
		var scrollTop = $document.scrollTop();

		if (scrollTop > showNavLimit) {
			if (!navShown) {
				$body.addClass('show-nav');
				navShown = true;

				if (!scrollSpy) {
					$body.scrollspy({
						target: 'nav',
						offset: 0
					});
					scrollSpy = true;
				}
			}
		} else {
			if (navShown) {
				$body.removeClass('show-nav');
				navShown = false;
			}
		}
	};
	$document.scroll(documentScroll);

	// tooltips
	$('.Tooltip').tooltip();

})(jQuery, document, this);