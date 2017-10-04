	/* Quick Facts Flexslider
	------------------------------ */
	$('.quick-facts-slide').each(function(index){
		var _this = $(this);
		
		var quickFactsMarkup = '<div class="quickfactsnav slider-'+ index +'" role="listbox" aria-label="Quick Facts Navigation"><span class="quick-fact-title"><div class="rightarrow"></div>' + $(this).find('.slides').attr('rel') + '</span>';
		quickFactsMarkup += '<ul class="quick-facts-nav">';
	
		var mobileFactsMarkup = '<div class="quickfactsnavmobile"><span class="quick-fact-title"><div class="rightarrow"></div>' + $(this).find('.slides' ).attr('rel') + '</span>';
		mobileFactsMarkup += '<span class="quickNavSelected"><span class="selectedTitle">Academics</span>';
		mobileFactsMarkup += '<select id="mobileQuickFacts" name="mobileQuickFacts" role="listbox" aria-label="Quick Facts Navigation">';

		$(this).find('img').each(function(){
			quickFactsMarkup += '<li rel="' + $(this).attr('alt') + '"><a href="javascript:;">' + $(this).attr('alt') + '</a></li>';
			mobileFactsMarkup += '<option value="' + $(this).attr('alt') + '">' + $(this).attr('alt') + '</option>';
		}).promise().done(function(){
			var navInstantiate = '.quickfactsnav.slider-'+ index + ' .quick-facts-nav li';
			quickFactsMarkup += '</ul></div>';
			mobileFactsMarkup += '</select></span></div>';
			$( $(this).parent().parent().parent() ).after(quickFactsMarkup);
			$( $(this).parent().parent().parent() ).after(mobileFactsMarkup);

			_this.flexslider({
				animation: 'slide',
				animationLoop: false,
				manualControls: navInstantiate,
				directionNav: false,
				slideshow: false,
			});
		});
	});