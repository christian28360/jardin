function hideHomeAd(){
	jQuery('#home_ad').hide();
	html.css('overflow', 'scroll');
	jQuery('#home_ad_skip').unbind('click');
}

(function ($) {
$.fn.vAlign = function() {
	return this.each(function(i){
		var ah = $(this).height();
		var ph = $(this).parent().height();
		var mh = (ph - ah) / 2;
	$(this).css('margin-top', mh);
	});
};
})(jQuery);

jQuery(document).ready(function() {
	if(jQuery('#home_ad').length != 0){
		jQuery('#home_ad_content').vAlign();
		jQuery('#home_ad').show();
		var html = jQuery('html');
		html.css('overflow', 'hidden');
		
		jQuery('#home_ad_skip').bind('click', function() {
			hideHomeAd();
		});
		setTimeout("hideHomeAd()",5000);
	}
});
//alert('ok');