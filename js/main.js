(function($, document, window) {

	var $document = $(document);
	var $window = $(window);
	var $headerRow = $('.header-row');

	var headerRowCollapsed = false;
	$document.scroll(function() {
		var scrollTop = $document.scrollTop();

		if (scrollTop > 100) {
			if (!headerRowCollapsed) {
				$headerRow.addClass('collapsed');
				headerRowCollapsed = true;
				$document.scrollTop(0);
			}
		} else if (scrollTop < -10) {
			if (headerRowCollapsed) {
				$headerRow.removeClass('collapsed');
				headerRowCollapsed = false;
			}
		}
	});

})(jQuery, document, this);