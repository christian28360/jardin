var $j = jQuery.noConflict();
$j(document).ready(function(){

	if($j('#news_slider .slide').length < 2){
		$j('#news_slider_navigation .navigation').hide();
	}else{
		$j('#news_slider').cycle({
			fx: 'scrollHorz',
			prev: '#previous_slide',
			next: '#next_slide',
			pager: '#nav_slide',
			pagerAnchorBuilder: pagerFactory,
			speed:    500, 
	    	timeout:  5000,
	    	pause:   1
		});
	}
	
	if($j('#boutique_slider .slide').length >= 2){
		$j('#boutique_slider').cycle({
			fx: 'scrollHorz',
			speed: 300,
			prev: '#boutique_slider_previous',
			next: '#boutique_slider_next',
			pager: '#boutique_slider_navigation',
			pagerAnchorBuilder: pagerFactory
		});
		$j('#boutique_slider').cycle('pause');
	}
	
	/*$j('#jardinage_slider').cycle({
		fx: 'scrollVert',
		rev:1,
		speed: 300,
		pager: '#jardinage_slider_navigation',
		pagerAnchorBuilder: pagerFactory
	});
	$j('#jardinage_slider').cycle('pause');*/
	
	
	if($j('#fiches_slider .slide').length >= 2){
		$j('#fiches_slider').cycle({
			fx: 'scrollVert',
			rev:1,
			speed: 300,
			prev: '#popular_previous_slide',
			next: '#popular_next_slide',
			pager: '#fiches_slider_navigation',
			pagerAnchorBuilder: pagerFactory
		});
		$j('#fiches_slider').cycle('pause');
	}
	
	if($j('#sidebar_recettes_slider .slide').length >= 2){
		$j('#sidebar_recettes_slider').cycle({
			fx: 'scrollVert',
			rev:1,
			speed: 300,
			prev: '#sidebar_recettes_slider_previous_slide',
			next: '#sidebar_recettes_slider_next_slide',
			pager: '#sidebar_recettes_slider_navigation',
			pagerAnchorBuilder: pagerFactory
		});
		$j('#sidebar_recettes_slider').cycle('pause');
	}
	
	
	if($j('#sidebar_jardinage_slider .slide').length >= 2){
		$j('#sidebar_jardinage_slider').cycle({
			fx: 'scrollVert',
			rev:1,
			speed: 300,
			prev: '#sidebar_jardinage_slider_previous_slide',
			next: '#sidebar_jardinage_slider_next_slide',
			pager: '#sidebar_jardinage_slider_navigation',
			pagerAnchorBuilder: pagerFactory
		});
		$j('#sidebar_jardinage_slider').cycle('pause');
	}else{
	
	}
	
	if($j('#sidebar_articles_relatifs_slider .slide').length > 1){
		$j('#sidebar_articles_relatifs_slider').cycle({
			fx: 'scrollVert',
			rev:1,
			speed: 300,
			prev: '#sidebar_articles_relatifs_previous_slide',
			next: '#sidebar_articles_relatifs_next_slide',
			pager: '#sidebar_articles_relatifs_slider_navigation',
			pagerAnchorBuilder: pagerFactory
		});
		$j('#sidebar_articles_relatifs_slider').cycle('pause');
	}else{
		$j('#sidebar_articles_relatifs_previous_slide').hide();
		$j('#sidebar_articles_relatifs_next_slide').hide();
		if($j('#sidebar_articles_relatifs_slider .slide').length == 0)	$j('#sidebar #secondary_sliders').hide();
	}
	
	function pagerFactory(idx, slide) {
		var s = idx > 2 ? ' style="display:none"' : '';
		return '<li><a href="#"></a></li>';
	};
	
	if($j('.article_single').length > 0){
		$j('.article_single h2').each(function(){
			if($j(this).html() != ''){
				var color = ($j('#article_single').hasClass('article_recette')) ? '_brown' : '';
				if($j(this).attr('id') == 'forum_title') color =  '_parme';
				$j(this).before('<div class="corner_top'+color+'"></div>');
			}else{
				$j(this).css('padding','0');
				$j(this).css('height','1px');		
			}
		});
	}
	if($j('.page').length > 0){
		$j('.page h2').each(function(){
			if($j(this).html() != ''){
				var color = ($j(this).attr('id') == 'forum_title') ? '_parme' : '';
				$j(this).before('<div class="corner_top'+color+'"></div>');
			}else{
				$j(this).css('padding','0');
				$j(this).css('height','1px');
			}
		});
	}
	
	$j('#ecrire_commentaire').bind('click',function(){
		$j(this).fadeOut();
		$j('#respond').fadeIn();
	});
	
	$j('#get_next_comments').bind('click',function(){
		var count = 0;
		$j('.jm_commentaire').each(function(){
			if($j(this).css('display') == 'none' && count <= 4){
				$j(this).fadeIn();
				count++;
			}
			if($j(this).css('display') != 'none')	$j(this).addClass('commentaire_shown');
		});
		if($j('.commentaire_shown').length == $j('.jm_commentaire').length) $j(this).fadeOut();
	});
	
	$j('#send_friend_title a').bind('click',function(){
		$j('#send_friend').toggle();
	});
	
	$j('.comment-reply-link').bind('click',function(){
		$j('#respond').fadeIn();
		$j('#ecrire_commentaire').fadeOut();
	});
	
	$j('#inscription_newsletter_email, .input_text, ').bind('focus',function(){
		$j(this).val('');
		$j(this).unbind('focus');
	});
	
	if($j('#background_ad_url').length > 0){
		$j('body').bind('click',function(e){
			if(e.target.nodeName == 'BODY')	window.open($j('#background_ad_url').val(),'_blank');
		});
	}

	if (navigator.platform != "iPad"){
		$j("img").not(".slides_content img").lazyload({
			effect:"fadeIn"
		});
	}

	if (navigator.userAgent.indexOf('Safari') != -1 && navigator.userAgent.indexOf('Chrome') == -1) {
		$j(".encart_previous").css({
			'marginLeft':'105px',
			'marginTop':'0px'	
		});
		$j(".encart_next").css({
			'marginTop':'0px'	
		});
	 }
	 
	
	if($j("#post_bottom_tabs a").length > 0){ 
		$j("#post_bottom_tabs a").bind('click',function(){
			$j("#post_bottom_tabs a").removeClass('current');
			$j(this).addClass('current');
			$j('.tab_content').hide();
			$j("#tab_content_"+$j(this).attr('id').replace('_tab','')).fadeIn('slow');
		}); 
		
		if($j("#post_bottom_tabs a.current").length <= 1)
			$j("#tab_content_"+$j("#post_bottom_tabs a.current").attr('id').replace('_tab','')).show();
		else
			$j("#tab_content_"+$j("#post_bottom_tabs a:first-child").attr('id').replace('_tab','')).show();
	}
	
	
	$j("#tab_content_forum_link_to_comments").bind('click',function(){
		$j('#commentaires_tab').trigger('click');
		return false;
	});
});