(function($) {

	$.fn.contentGallery = function() {
		return this.each(function() {
			var container = $(this);
			var canvas = container.find('.gridelement-contentgallery-canvas');
			var elements = container.find('.gridelement-contentgallery-thumbnails').find('.contentgallery-element');

			// initialize markup
			(function(){
				elements.each(function(){
					var element = $(this);
					var elementContent = element.find('.contentgallery-content');
					var thumbnail = element.find('.contentgallery-thumbnail');
					thumbnail.data('elementContent', elementContent);
					elementContent.appendTo(canvas);
				});
			}());

			var elementContents = canvas.find('.contentgallery-content');

			// thumbnails click event
			(function(){
				elements.find('.contentgallery-thumbnail').on('click', function(){
					elementContents.hide();
					$(this).data('elementContent').show().trigger('initializeChildren');
				}).first().click();
			}());

		});
	};

	$(function() {
		$('.gridelement-contentgallery').contentGallery();
	});

}(jQuery));
