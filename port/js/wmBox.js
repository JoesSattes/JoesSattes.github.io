(function($){
	$.wmBox = function(){
		$('body').prepend('<div class="wmBox_overlay"><div class="wmBox_centerWrap"><div class="wmBox_centerer">');
	};
	$('[data-popup]').click(function(e){
		e.preventDefault();
		$('.wmBox_overlay').fadeIn(750);
		var mySrc = $(this).attr('data-popup');
		$('.wmBox_overlay .wmBox_centerer').html('<div class="wmBox_contentWrap"><div class="wmBox_scaleWrap"><div class="wmBox_closeBtn"><p>x</p></div><iframe src="'+mySrc+'">');
		
		$('.wmBox_overlay iframe').click(function(e){
			e.stopPropagation();
		});
		$('.wmBox_overlay').click(function(e){
			e.preventDefault();
			$('.wmBox_overlay').fadeOut(750);
		});
	});
}(jQuery));