(function($) {

	$.fn.deferredInitialization = function (initCallback, reInitCallback) {
		return this.each(function() {
			var element = $(this);
			var delegationController = element.closest('[data-delegated-initialization-controller]');
			if (delegationController.length) {
				var initialized = false;
				delegationController.on('initializeChildren', function(){
					if (!initialized) {
						initCallback();
						initialized = true;
					} else {
						reInitCallback();
					}
				});
			} else {
				initCallback();
			}
		});
	};

}(jQuery));
