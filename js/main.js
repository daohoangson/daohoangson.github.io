(function($, document, window) {

	var $document = $(document);
	var $window = $(window);
	var windowIsTall = ($window.width() < $window.height());
	var $headerRow = $('.header-row');

	var topBarMinHeight = function() {
		var $topBar = $('.topbar');
		var topBarHeight = $topBar.height();
		var windowHeight = $window.height() - $('#work').outerHeight();
		var extraSpacing = Math.floor((windowHeight - topBarHeight) / 2);

		var css = '';
		css += '.topbar { min-height: ' + windowHeight + 'px; }';
		css += '.topbar { padding-top: ' + extraSpacing + 'px; }';
		css += '.topbar .social { margin-top: ' + extraSpacing + 'px; }';

		$('<style type="text/css" id="main-js" />').text(css).appendTo($('head'));
	};
	if (!windowIsTall) {
		topBarMinHeight();
	}

	var lastScrollTop = -1;
	var headerRowCollapsed = false;
	var documentScroll = function(e) {
		var scrollTop = $document.scrollTop();
		var scrollDelta = scrollTop - lastScrollTop;
		lastScrollTop = scrollTop;

		if (scrollTop > 100) {
			if (scrollDelta > 0 && !headerRowCollapsed) {
				$headerRow.addClass('collapsed');
				headerRowCollapsed = true;

				lastScrollTop = 0;
				$document.scrollTop(0);
			}
		} else if (scrollTop < 1) {
			if (scrollDelta < 0 && headerRowCollapsed) {
				$headerRow.removeClass('collapsed');
				headerRowCollapsed = false;
			}
		}
	};
	if (!windowIsTall) {
		$document.scroll(documentScroll);
	}

})(jQuery, document, this);