jQuery(function($){
	
	
/*
	$('.ce-countdown').countEverest({
		//Set your target date here!
		day: 30,
		month: 3,
		year: 2016
	});	
*/		
	
	$(document).ready(function(){
	    $(".site-inner, .widget").fitVids({ ignore: '.stretch'});
	  });
	
    // Scroll the whole document when secondary nav anchors are clicked
    $('.genesis-nav-menu.menu-secondary').localScroll({
       target:'body',
       duration: 900
    });
    
    $('.home-top, #home-widgets, #home-widgets-bottom, .widget-area').localScroll({
       target:'body',
       duration: 900
    });
 
	$('.nav-secondary').headroom({
		"offset": 350,
		"tolerance": 5,
		"classes": {
			"initial": "animated",
			"pinned": "slideDown",
			"unpinned": "slideUp"
		},
		//Slideup if menu is expanded and scrolling down on mobile
		"onUnpin" : function(){
			if( $(window).width() < 780 ){
				$(this.elem).find('ul.menu-secondary').slideUp();
			}
		}
	});
	
	// Image Section Height
	var windowHeight = $( window ).height() - 150;

	$( '.window-height' ) .css({'height': windowHeight +'px'});
		
	$( window ).resize(function(){
	
		var windowHeight = $( window ).height();
	
		$( '.window-height' ) .css({'height': windowHeight +'px'});
	
	});
	   	
	/*$.localScroll({
    	duration: 900,
    });*/
	
	//table even odd style addition
	$('table tr').each(function(index){
		if( index % 2 == 0 ){
			$(this).addClass('odd');
		}else{
			$(this).addClass('even');
		}
	});

	//Expandable Terminal Additional Logic
	$('.bean-panel .bean-panel-collapse').each(function(){
		if( $(this).hasClass('in') ){
			$(this).parent().find('.bean-panel-title').addClass('active');
			$(this).parent().find('.bean-panel-heading').addClass('active');
		}
	});

	$('.bean-panel .bean-panel-title').click(function(){
		if( $(this).hasClass('active') ){
			$(this).removeClass('active').parent().removeClass('active');
		}else{
			$(this).addClass('active').parent().addClass('active');
		}
	});
   
	$('.su-alert .alert-close').click(function(){
		$(this).parent().fadeOut();
   	});

    //Collapsable UL
    $('.menu-collapsible ul.sub-menu').hide();
	$('.menu-collapsible li.menu-item-has-children').each(function(){
		$(this).find('a').first().append('<span class="expand-click"></span>');
    });
    $('.menu-collapsible li.menu-item-has-children').addClass('closed').addClass('menu-expandable').click(function(){
    	if( $(this).hasClass('closed') ){
    		$(this).find('.expand-click').addClass('open');
    		$(this).removeClass('closed').addClass('expanded').find('ul.sub-menu').first().slideDown();

    		return false;	
    	}    	
    });
	
	$(document).on('click', '.menu-collapsible .expand-click', function(){
   		$(this).removeClass('open').parent().parent().removeClass('expanded').addClass('closed').find('ul.sub-menu').first().slideUp();
		return false;
	});

	if( $(window).width() < 770 ){
		$('.menu-collapsible').addClass('mobile');
	}

    $(window).resize(function(){
    	if($(window).width() < 770) {
			$('.menu-collapsible').addClass('mobile');
    		$('.menu-collapsible ul.menu').hide();
    	}else{
			$('.menu-collapsible').removeClass('mobile');
    		$('.menu-collapsible ul.menu').show();
    	}
    });

	$(document).on('click', '.menu-collapsible.mobile .widget-title', function(){
		$(this).parent().find('ul.menu').slideToggle();
	});

	/* Search Logic
	----------------------- */
	initialVal = $('.site-header .wrap .widget.widget_search input[type="text"]').val();
	$('.site-header .widget.widget_search input[type="submit"]').click(function(){
		searchInput = $('.site-header .wrap .widget.widget_search input[type="text"]');
		if( searchInput.val() == initialVal || searchInput.val() == '' ){
			if( $(this).hasClass('open') ){
				$(this).removeClass('open');
				searchInput.fadeOut();
			}else{
				$(this).addClass('open');
				searchInput.fadeIn();
			}
			return false;
		}else{
			//Send Form	
		}
	});
	
	/* Areas of Study
	-------------------------------- */
	var areasWrap = $('#areas-study #content ul li.parent');
	for( i = 0; i < areasWrap.length; i+=2 ){
		areasWrap.slice(i, i + 2).wrapAll("<ul class='col' />");
	}	

	var areasWrapInterior = $('.aos-nav.by-school ul li.parent');
	for( i = 0; i < areasWrapInterior.length; i+=2 ){
		areasWrapInterior.slice(i, i + 2).wrapAll("<ul class='col' />");
	}
	
	var areasWrapInterior = $('.aos-nav.by-program ul li.parent');
	for( i = 1; i < areasWrapInterior.length; i+=2 ){
		areasWrapInterior.slice(i, i + 2).wrapAll("<ul class='col' />");
	}	
	
	$('.aos-nav .col').last().addClass('last');
	
	$('.studies-expand').click(function(){
		var slideCont = $(this).parent().find('.menu-areas-of-study-container');
		slideCont.css('height',slideCont.outerHeight()).slideToggle(500,'easeOutSine');
		//$('.menu-areas-of-study-container').slideToggle(500,'easeOutSine');
		goToByScroll($('.menu-areas-of-study-container'),60);
	});	

	$('.su-alert-mobile').click(function(){
		var slideCont = $(this).parent().find('.su-alert');
		slideCont.css('height',slideCont.outerHeight()).slideToggle(500,'easeOutSine');
	});

	$(document).on('click', '.want-to-expand', function(){
		$('.footer-expand').slideToggle(500,'easeOutSine');
		goToByScroll($('.footer-expand'),60);
	});
	
	$('.ubermenu-responsive-toggle').click(function(){
		if( !$('.ubermenu').hasClass('ubermenu-responsive-collapse') ){
			//Do nothing			
		}else{
			if( $('.iam-nav-screen').hasClass('open') ){
				$('.iam-nav-screen').slideUp().removeClass('open');
			} 
		}
	});
	
	/* I Am Navigation
	---------------------------------- */
	$('.i-am-nav-button').on('click', function(){
		if( $(this).hasClass('mobile') ){
			if( !$('.ubermenu').hasClass('ubermenu-responsive-collapse') ){
				$('.ubermenu').addClass('ubermenu-responsive-collapse');
			}
			$('.iam-nav-screen.mobile').slideToggle().toggleClass('open');
		}else{
			$('.iam-nav-screen').removeAttr('style');
			var contHeight = $('.i-am-nav').outerHeight();
			var contWidth = $('.i-am-nav').outerWidth();

			var winHeight = $(window).height();
			var winWidth = $(window).width();
	
			$('.i-am-nav').css({
				'position': 'absolute',
				'top': (winHeight - contHeight)/2,
				//'left': (winWidth - contWidth)/2
			});

	       	var docHeight = $(document).height();

			$('.iam-nav-screen').css({
				'display': 'none',
				'visibility': 'visible',
				'height': docHeight
			}).fadeIn().addClass('open');
		}
	});
		
	/* Search Form
	---------------------------------- */
	
	$('.searchform input[type="text"]').attr('autofocus','autofocus');
	
	$('a.su-search-icon').click(function(){
		var searchHeight = $('.su-search-modal .wrap').outerHeight();
		var winHeight = $(window).height();
	
		$('.su-search-modal .wrap').css({
			'position': 'absolute',
			'top': (winHeight - searchHeight)/2
		});

		$('.su-search-modal').css({
			'display': 'none',
			'visibility': 'visible'
		}).fadeIn().addClass('open');
		
	});

	$('.su-search-mobile-icon').click(function(){
		$('body').promise().done(function(){
			$('.su-search-modal .wrap').css({
				'position': 'absolute',
				'top': '100px',
			});

			$('.su-search-modal').css({
				'display': 'none',
				'visibility': 'visible'
			}).fadeIn().addClass('open');

			if( !$('.ubermenu').hasClass('ubermenu-responsive-collapse') ){
				$('.ubermenu').slideUp().addClass('ubermenu-responsive-collapse').promise().done(function(){
					$('.ubermenu').removeAttr('style');	
				});

			}

			if( $('.iam-nav-screen').hasClass('open') ){
				$('.iam-nav-screen').slideUp().removeClass('open');
			}
		});
	});
	
	$('.su-search-modal .close-screen').click(function(){
		$('.su-search-modal').fadeOut(function(){
			$(this).css({
				'visibility': 'hidden',
				'display': 'block'
			});
		}).removeClass('open');
	});	
	
	var funcNavMobile = $('.func-nav').clone().find('ul')
	var funcNavCount = $('.func-nav').clone().find('li').length;
	
	funcNavMobile.find('li').each(function(index){
		$(this).addClass('functional-mobile ubermenu-item ubermenu-column').addClass('menu-item').find('a').wrapInner('<span class="wpmega-link-title ubermenu-target-title ubermenu-target-text" />');
		if( (index + 1) == funcNavCount ){
			$(this).addClass('last');
		}
	});
	
	$('ul.ubermenu-nav').append(funcNavMobile.html());

	
	
	$(document).on('click', '.iam-close', function(){
		$(this).parent().parent().removeClass('open').find('.sub-menu').slideUp();
		$(this).remove();
		return false;
	});
	
	var onResize = function() {
		if( $(window).width() <= 480 ){
			$('.iam-nav-screen, .i-am-nav').removeAttr('style');
			$('.i-am-nav-button, .iam-nav-screen').addClass('mobile');
		}else if( $(window).width() >= 480 ){
			$('.i-am-nav-button, .iam-nav-screen').removeClass('mobile');
		}
	};
	
	$(window).resize(onResize);
	
	onResize();
	
	$('.iam-nav-screen .close-screen').click(function(){
		$('.iam-nav-screen').fadeOut(function(){
			$(this).css({
				'visibility': 'hidden',
				'display': 'block'
			}).removeClass('open');
		})
	});
	
	$('.iam-nav-screen.mobile ul.menu li.menu-item-has-children > a').on('click', function(e) {
		if( !$(this).parent().hasClass('open') ) {
			$(this).append('<a class="iam-close">&#215;</a>').parent().addClass('open').find('.sub-menu').slideDown();
			return false;
		}
	});
	
	// Inject YouTube API script
	var tag = document.createElement('script');
	tag.src = "//www.youtube.com/player_api";
	var firstScriptTag = document.getElementsByTagName('script')[0];
	firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

	/* Featured resize
	------------------------ */	
	if( $('#featured-home .wrap .left .videoWrapper').is('*') ){
		$('.mas-item').click(function(){
			if( !$(this).hasClass('active') ){
				$('.mas-item').removeClass('active');
				$(this).addClass('active');
				videoSwitch = $(this).attr('data-video');
				_this = $('#featured-home .videoWrapper .switch');
				_this.after(_this.clone().addClass('clone')).promise().done(function(){
					_thisClone = _this.parent().find('.clone'); 
					_thisClone.html(videoSwitch).promise().done(function(){
						setTimeout(function(){
							_this.fadeOut(500, function(){
								_this.remove();
								var vidTypeCheck = _thisClone.find('iframe').attr('id');
								_thisClone.removeClass('clone');
								if( vidTypeCheck == 'video' ){
									youtubeclick();
								}else if( vidTypeCheck == 'vimeo-video' ){
									vimeoplay();
								}
							});
						}, 500);
					});
				});
			}			
		});
	}

	
	$('#su-social-stream').after($('.title-area').clone().addClass('footer-logo')); 
	$('.title-area.footer-logo').wrap('<div class="footer-logo-container" />');
	$(window).resize(function(){
		if( $('#featured-home .wrap .left .videoWrapper').is('*') ){
			featuredHeight = $('#featured-home .wrap .left .videoWrapper iframe').height();
		}else{
			featuredHeight = $('#featured-home .wrap .left img').height();
		}
		if( featuredHeight <= 600 ){
			$('#featured-home .wrap .mas-container').css('height', featuredHeight);
		}else{
			$('#featured-home .wrap .mas-container').css('height', '560');
		}
	});
	


	/* Conservatory Programs
	------------------------------ */
	$('.cons-pgm').hover(function(){
		$(this).find('.imghover').fadeIn(400);
	},function(){
		$(this).find('.imghover').fadeOut(200);
	});
	
	$('.footer-widgets .wrap').prepend('<div class="want-to-expand suicon-angle-circled-down">Quicklinks</div>');
	$('.footer-widgets .widget-area').wrapAll('<div class="footer-expand" />');
	$('.footer-expand').append('<div class="clear"></div>');
	
	
	/* Why Shenandoah Logic
	---------------------------- */
	//$('.whystu-slides').before($('.whystu-slider').clone().addClass('mobile'));
	$('.whystu-img:first').find('.whysu-yellowbg').fadeIn(600);
	$('.whystu-img').click(function(){
		_this = $(this)
		
		$('.whystu-img.active').find('.whysu-yellowbg').fadeOut(600);
		$('.whystu-img.active').find('.whysu-bluebg').fadeIn(600);
		
		$(this).find('.whysu-bluebg').fadeOut(600);
		$(this).find('.whysu-yellowbg').fadeIn(600, function(){
			$('.whystu-img').removeClass('active');
			_this.addClass('active');
		});
		
		var whyID = $(this).attr('rel');
		$('.whystu-slides .whystu-cont').hide();
		$('.whystu-slides .whystu-cont[rel="' + whyID + '"]').fadeIn(800);
	});
	
	/* WhySU Accessibility
  ------------------------------ */
  
  // The class for the container div

var $container = '#whystu-stthomas';

// The setup

$($container +' ul').attr('role','tablist');
$($container +' [role="tablist"] li').attr('role','presentation');
$('[role="tablist"] a').attr({
    'role' : 'tab',
    'tabindex' : '-1'
});

// Make each aria-controls correspond id of targeted section (re href)

$('[role="tablist"] a').each(function() {
  $(this).attr(
    'aria-controls', $(this).attr('href').substring(1)
  );
});

// Make the first tab selected by default and allow it focus

$('[role="tablist"] li:first-child a').attr({
    'aria-selected' : 'true',
    'tabindex' : '0'
});

// Make each section focusable and give it the tabpanel role

$($container +' section').attr({
  'role' : 'tabpanel'
});

// Make first child of each panel focusable programmatically

$($container +' section > *:first-child').attr({
    'tabindex' : '0'
});

// Make all but the first section hidden (ARIA state and display CSS)

$('[role="tabpanel"]:not(:first-of-type)').attr({
  'aria-hidden' : 'true'
});


// Change focus between tabs with arrow keys

$('[role="tab"]').on('keydown', function(e) {

  // define current, previous and next (possible) tabs

  var $original = $(this);
  var $prev = $(this).parents('li').prev().children('[role="tab"]');
  var $next = $(this).parents('li').next().children('[role="tab"]');
  var $target;

  // find the direction (prev or next)

  switch (e.keyCode) {
    case 37:
      $target = $prev;
      break;
    case 39:
      $target = $next;
      break;
    default:
      $target = false
      break;
  }

  if ($target.length) {
      $original.attr({
        'tabindex' : '-1',
        'aria-selected' : null
      });
      $target.attr({
        'tabindex' : '0',
        'aria-selected' : true
      }).focus();
  }

  // Hide panels

  $($container +' [role="tabpanel"]')
    .attr('aria-hidden', 'true');

  // Show panel which corresponds to target

  $('#' + $(document.activeElement).attr('href').substring(1))
    .attr('aria-hidden', null);

});

// Handle click on tab to show + focus tabpanel

$('[role="tab"]').on('click', function(e) {

  e.preventDefault();

  // remove focusability [sic] and aria-selected

  $('[role="tab"]').attr({
    'tabindex': '-1',
    'aria-selected' : null
    });

  // replace above on clicked tab

  $(this).attr({
    'aria-selected' : true,
    'tabindex' : '0'
  });

  // Hide panels

  $($container +' [role="tabpanel"]').attr('aria-hidden', 'true');

  // show corresponding panel

  $('#' + $(this).attr('href').substring(1))
    .attr('aria-hidden', null);

});

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
	
	$('.feat-event-slider').flexslider({
		'directionNav': true,
		'controlNav': false
	});
	
	// Quick Nav Selected State (why is this here?)
	$('.quickNavSelected select').change(function(){
		$('.selectedTitle').text($(this).val());
		$('.quick-facts-nav li[rel="' + $(this).val() + '"]').click();
	});
	
	// Featured Container Logic
	featuredEffects('#featured-home .wrap .mas-item .stretch .featured-content');
	$(window).resize(function(){
		featuredEffects('#featured-home .wrap .mas-item .stretch .featured-content');
	});

	if( $(window).width() <= 480 ){
		$('.i-am-nav-button, .iam-nav-screen').addClass('mobile');
	}else if( $(window).width() >= 480 ){
		$('.i-am-nav-button, .iam-nav-screen').removeClass('mobile');
	}

	// WhySU Video iFrame resizing (why is this here?)
	$('.whystu-image iframe').each(function(){
		var containerHeight = $(this).parent().parent().parent().height();
		var videoHeight = $(this).height();
		var videoOffset = (containerHeight - videoHeight)/2;
		$(this).css('margin-top',videoOffset).parent().css('height',containerHeight);
	});
	
	
	// AOS menu flexslider code (is it being used?)
	$('.aos-select li').click(function(){
		if( $(this).hasClass('flex-active') ){
			$(this).removeClass('flex-active');			
			$('.aos-nav li').removeClass('selected').removeClass('de-selected');
		}else{
			$('.aos-select li').removeClass('flex-active');
			$(this).addClass('flex-active');
			
			$('.aos-nav li').removeClass('selected').removeClass('de-selected');
			var selectedVal = $(this).attr('rel');
			$('.aos-nav li').each(function(index){
				if( $(this).hasClass(selectedVal) ){
					$(this).addClass('selected');
				}else{
					$(this).addClass('de-selected');
				}
			});
		}
	});
	
	$('.aos-navigation .quick-fact-title').click(function(){
		$('.aos-nav li').removeClass('de-selected').removeClass('selected');
	});
	
	var aosNavMobile = '<div class="aos-nav-mobile">';
	aosNavMobile += '<span class="aos-nav-title quick-fact-title">' + $('.aos-navigation .quick-fact-title').html() + '</span>';
	aosNavMobile += '<div class="quickNavSelected">';
	aosNavMobile += '<span class="selectedTitle">Select Degree Type</span>';
	aosNavMobile += '<select id="aos-mobilenav-select">';
	aosNavMobile += '<option rel="0">Select Degree Type</option>';
	$('.aos-navigation ul li').each(function(){
		aosNavMobile += '<option value="' + $(this).text() + '" rel="' + $(this).attr('rel') + '">' + $(this).text() + '</option>';
	});
	aosNavMobile += '</select>';
	aosNavMobile += '</div>';
	aosNavMobile += '</div>';
	
	$($('.aos-navigation')).after(aosNavMobile);
	
	$('#aos-mobilenav-select').change(function(){
		var selectedVal = $(this).find('option:selected').attr('rel');
		var selectedValClean = $(this).find('option:selected').val();
		$('.aos-nav-mobile .selectedTitle').html(selectedValClean);
		$('.aos-nav li').removeClass('selected').removeClass('de-selected');
		if( selectedVal != '0' ){
			$('.aos-nav li').each(function(index){
				if( $(this).hasClass(selectedVal) ){
					$(this).addClass('selected');
				}else{
					$(this).addClass('de-selected');
				}
			});
		}
	});

	$(document).on('click','.mobileSidenav-display', function(){
		if( $(this).hasClass('jump') ){
			_this = $(this).parent().find('ul.genesis-nav-menu');
			_this.css('height',_this.outerHeight()).slideToggle();		
		}else{
			_this = $(this).parent().find('ul.secondary');
			_this.css('height',_this.outerHeight()).slideToggle();		
		}
	});

	$(document).on('click', '.action-nav .act-apply', function(){
		_this = $(this).parent().find('ul.apply-now-nav');
		_this.css('height',_this.outerHeight()).slideToggle();		
	});

	$('.filter-click').click(function(){
		_this = $(this).parent().find('ul#menu-news-filter');
		_this.css('height',_this.outerHeight()).slideToggle();		
	});

	//Library Search
	$('.yui-content div').hide().first().addClass('active').show();
	$('ul.yui-nav a').click(function(e) {
		$('ul.yui-nav a').parent().removeClass('selected');
		$(this).parent().addClass('selected');
		$('.yui-content div').hide();
		$('.yui-content div' + $(this).attr('href')).show();
		return false;
		e.preventDefault();
	});

	$('.i-am-nav ul li.menu-item-has-children').hover(function(){
		$(this).animate({backgroundColor: 'rgba(0,255,0,0.4)'});
		//.find('ul').animate({opacity: 1, height: 'toggle'}, 600);
	},function(){
		//$(this).find('ul').animate({opacity: 0, height: 'toggle'}, 600);
	});

	$('.footer-left').after($('.action-nav').clone().addClass('footer-nav'));
	
	$(document).bind('keydown', function(e) { 
        if (e.which == 27) {
			if( $('.su-modal').hasClass('open') ){
				if( $('.su-modal.open').hasClass('su-search-modal') ){
					$('body').removeClass('modalnoscroll');
					$('.su-search-modal').fadeOut(function(){
						$(this).css({
							'visibility': 'hidden',
							'display': 'block'
						});
					}).removeClass('open');
				}else if( $('.su-modal.open').hasClass('su-contact-modal') ){
					$('.su-contact-modal').find('.gform_page.active').fadeOut();
					$('.su-contact-modal').fadeOut(function(){
						$(this).css({
							'visibility': 'hidden',
							'display': 'block'
						});
					}).removeClass('open').addClass('closed');	
					$('body').removeClass('modalnoscroll');
				}else if( $('.su-modal.open').hasClass('iam-nav-screen') ){
					$('.iam-nav-screen').fadeOut(function(){
						$(this).css({
							'visibility': 'hidden',
							'display': 'block'
						}).removeClass('open');
					})
				}
			} 
        }
    }); 
    
    //Gallery fancybox
    $('.gallery-item a').fancybox();

	if( $('.gallery').is('*') ){
		$('.gallery').each(function(){
			$(this).find('img').parent().attr('rel','suImageGroup')
		});
	}
	
	//Mobile logic for jump links
	$('.nav-secondary .wrap').prepend('<div class="mobileSidenav-display jump"><span class="expand-title">Additional Links</span></div>');
	
	var gfCurSlide = 1;
	var curSlide = 0;
	var completedSlide = 0;
	$(document).bind('gform_post_render', function(event, form_id, current_page){
		if( $(window).width() < 600 ){
			//jQuery('html,body').animate({scrollTop: 0}, 0, 'easeOutSine', function(){});
		}

		$('.su-contact-modal form').attr('action','/');
		$('.gfield_description.validation_message').fadeIn();

		//Set number of slide completed
		if( completedSlide != current_page ){
			if( current_page > completedSlide ){
				completedSlide = current_page - 1;
			}
		}
		//Add select styling
		jQuery('.su-contact-modal select').each(function(){
			jQuery(this).wrap('<div class="su-contact-select-display" />');
			jQuery(this).parent().prepend('<span class="drop-val">' + jQuery(this).find('option:selected').val() + '</span>');
		});

		//Turn off autocomplete
		jQuery('.su-contact-modal input').attr('autocomplete', 'off');
	
		//Reset page size for each step
		gfresize(1);
		
		//Reset placeholders
		su_contact_placeholders();

		//Add sliding wrapper
		$('.su-contact-modal .gform_body').wrapInner('<div class="gform_slide_wrapper" />');
		$('.gform_slide_wrapper').css('margin-left',-curSlide);
	

		if( gfCurSlide != current_page ){
			// Remove current active state
			$('.su-contact-modal .gform_page').removeClass('active');
			
			// Set ID for slide that was just completed and will fade away
			gfFadeSlide = gfCurSlide;

			// Store completed slide ID
			gfCurSlide = current_page;
			
			//Get position to slide to
			curSlide = $('.su-contact-modal #gform_page_60_' + current_page).position().left;

			$('.su-contact-modal .gform_page').last().addClass('last-step');

			if( $('.su-contact-modal #gform_page_60_' + current_page + ' table' ).is('*') ){
				var suContactReview = '<div class="su-contact-review">';
				$('table font').each(function(){
					suContactReview += '<div class="su-contact-entry">' + $(this).html() + '</div>';
				});
				suContactReview += '</div>';
				$('.su-contact-modal #gform_page_60_' + current_page + ' table' ).before(suContactReview).hide();

				$('.su-contact-modal #gform_page_60_' + gfFadeSlide).css('visibility','visible').fadeOut(1000).css('visbility','hidden');
				$('.su-contact-modal .gform_slide_wrapper').animate({'margin-left': -curSlide}, 1000, 'easeInOutQuart', function(){
					if( $('.su-contact-modal #gform_page_60_' + current_page + ' table' ).is('*') ){
						fadeInReview();
					}
				});

				var searchHeight = jQuery('.su-contact-modal .wrap .gform_wrapper').height();
				var searchWinHeight = jQuery(window).height();

				function fadeInReview(){
					if( searchWinHeight < searchHeight || jQuery(window).width() < 600 ){
						var topAdjust = '100px';
					}else{
						var topAdjust = (searchWinHeight - searchHeight)/2;
					}
					
					jQuery('.su-contact-modal .wrap').animate({
						'top': topAdjust
					}, 1, function(){
						$('.su-contact-modal #gform_page_60_' + current_page).addClass('active').css({
							'visibility': 'visible'
						}).promise().done(function(){
							$('.su-contact-review').css({
								'display': 'none',
								'visibility': 'visible'
							}).fadeIn(400);
						});
					});
				}

			}else{
				var searchHeight = jQuery('.su-contact-modal .wrap .gform_wrapper').height();
				var searchWinHeight = jQuery(window).height();

				if( $('.su-contact-modal #gform_page_60_' + gfFadeSlide ).hasClass('last-step') ){
					$('.su-contact-modal #gform_page_60_' + gfFadeSlide ).hide();

					if( searchWinHeight < searchHeight || jQuery(window).width() < 600 ){
						var topAdjust = '100px';
					}else{
						var topAdjust = (searchWinHeight - searchHeight)/2;
					}
					jQuery('.su-contact-modal .wrap').animate({
						'top': topAdjust
					});
					$('.gform_slide_wrapper').animate({'margin-left': -curSlide}, 1000, 'easeInOutQuart', function(){
						$('.su-contact-modal #gform_page_60_' + current_page).css({'opacity': 0, 'visibility': 'visible'}).animate({'opacity': 1}, 400).addClass('active');
					});
				}else{
					$('.su-contact-modal #gform_page_60_' + gfFadeSlide).css('visibility','visible').fadeOut(1000).css('visbility','hidden');
					$('.su-contact-modal #gform_page_60_' + current_page).css('visibility','visible').fadeIn(1000).css('visbility','hidden');
					$('.su-contact-modal #gform_page_60_' + current_page).addClass('active');
					$('.gform_slide_wrapper').animate({'margin-left': -curSlide}, 1000, 'easeInOutQuart');
				}
			}

			$('.su-contact-modal .gform_page').slice(0,(completedSlide)).addClass('completed');
		
		
		}else{
			$('.su-contact-modal #gform_page_60_' + current_page).addClass('active');
		}
		
		/*
		if( $('#gform_page_60_' + current_page + ' table' ).is('*') ){
			var suContactReview = '<div class="su-contact-review">';
			$('table font').each(function(){
				suContactReview += '<div class="su-contact-entry">' + $(this).html() + '</div>';
			});
			suContactReview += '</div>';
			$('#gform_page_60_' + current_page + ' table' ).before(suContactReview).hide();

			var searchHeight = jQuery('.su-contact-modal .wrap .gform_wrapper').height();
			var searchWinHeight = jQuery(window).height();
			function fadeInReview(){
				jQuery('.su-contact-modal .wrap').animate({
					'top': (searchWinHeight - searchHeight)/2
				}, 1, function(){
					$('#gform_page_60_' + current_page).addClass('active').css({
						'visibility': 'visible'
					}).promise().done(function(){
						$('.su-contact-review').css({
							'display': 'none',
							'visibility': 'visible'
						}).fadeIn(400);
					});
				});
			}
		}
		*/

	});

	$(document).on('click', '.gform_page_footer', function(){
		$(this)[0].onclick = null;
	});

	jQuery(document).on('change','.su-contact-modal select', function(){
		$(this).parent().find('.drop-val').text($(this).val());
	});
	
	gfresizeload();
	
	$(window).resize(function(){
		if( $('.su-contact-modal').hasClass('open') ){
			gfresize();
		}
	});

	su_contact_placeholders();
	
	$(document).on('focus', '.su-contact-modal input[type="text"]', function(){
		$(this).addClass('clicked');
	});

	function su_contact_placeholders(){	
		$('.su-contact-modal input[type="text"]').each(function(){
			
			if( $(this).parent().parent().hasClass('ginput_complex' ) && $(this).val() == '' ){
				$(this).val($(this).parent().find('label').text());
			}    
			$(this).attr('data-initValue', $(this).val());
		}).focus(function(){
			if( $(this).val() == $(this).attr('data-initValue') ){
				$(this).val('');
			}
		}).blur(function(){
			if( $(this).val() == '' ){
				$(this).val($(this).attr('data-initValue'));
				$(this).removeClass('clicked');
			} 
		});
	}
	/*
	$(document).on('click', '.tribe-events-has-events a', function(){
	
		var d = new Date($('.tribe-mini-calendar-today a').attr('data-day'));
		var month_names = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
		var day_names = ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];		
		var month = d.getMonth();
		var day = d.getDay();
		var dayDate = d.getDate();
		var year = d.getFullYear();
		
		var dateFormat = day_names[day] + ', ' + month_names[month] + ' ' + dayDate + ', ' + year;
		$('h3.su-cal-cur-date').text(dateFormat);
	});
	*/
});

function gfresize(type){
	jQuery('.su-contact-modal .gform_page').show();
	var gfResizeWidth = jQuery('.su-contact-modal .gform_wrapper').outerWidth() + 4;
	jQuery('.su-contact-modal .gform_page').css('width',gfResizeWidth);

	if( type != 1 ){
	    var formID = jQuery('.su-contact-modal .gform_page.active').attr('id').split("_")[3];
		//var formID = jQuery('.su-contact-modal .gform_page.active').attr('id');
		var resizeLeftPosID = formID - 1;
		var resizeLeftPos = gfResizeWidth * resizeLeftPosID;
	
		if( jQuery('.gform_slide_wrapper').attr('style') ){
			jQuery('.gform_slide_wrapper').css('margin-left',-resizeLeftPos);
		}
	}
}

function gfresizeload(){
	var gfResizeWidth = jQuery('.su-contact-modal .gform_wrapper').outerWidth() + 4;
	//var gfResizeWidth = Math.round($(window).width() * ($('.su-contact-modal .gform_wrapper').outerWidth()/100)) + 4;
	jQuery('.su-contact-modal .gform_page').css('width',gfResizeWidth);
}

jQuery(window).load(function($){
	/*
	var searchHeight = jQuery('.su-contact-modal .wrap .gform_wrapper').height();
	var searchWinHeight = jQuery(window).height();
	
	jQuery('.su-contact-modal .wrap').css({
		'position': 'absolute',
		'top': (searchWinHeight - searchHeight)/2
	});
	
	jQuery('.su-contact-modal select').each(function(){
		jQuery(this).wrap('<div class="su-contact-select-display" />');
		jQuery(this).parent().prepend('<span class="drop-val">' + jQuery(this).find('option:selected').val() + '</span>');
	});

	jQuery('.su-contact-modal input').attr('autocomplete', 'off');
	jQuery('.su-contact-modal .gform_page').first().addClass('active');

	jQuery('.su-contact-modal form').attr('action','/');
	*/
	
	contactModalPosition(1);

	if( jQuery('#featured-home .wrap .left .videoWrapper').is('*') ){
		featuredHeight = jQuery('#featured-home .wrap .left .videoWrapper iframe').height();
	}else{
		featuredHeight = jQuery('#featured-home .wrap .left img').height();
	}
	if( featuredHeight <= 600 ){
		jQuery('#featured-home .wrap .mas-container').css('height', featuredHeight);
	}else{
		jQuery('#featured-home .wrap .mas-container').css('height', '560');
	}
      
    if( jQuery(window).width() > 600  ){
   	jQuery( '#featured-home .wrap .mas-item .stretch' ).hover(function(){
		var slidepos = jQuery(this).attr('data-pos');
		var slideposside = 'margin-' + slidepos;

		var cssOne = {};
		cssOne[slideposside] = 0;
		
		jQuery(this).find('.featured-title-bg').fadeOut();
		jQuery(this).find('.featured-bg').fadeIn(600);
		jQuery(this).find('.featured-content').animate({'bottom': 0}, 600, 'easeOutQuad', function(){
			jQuery(this).find('.ftd-content').animate(cssOne, 400, 'easeOutQuad').fadeIn();
		});
	},function(){
		var topReset = jQuery(this).find('.ftd-content').outerHeight();	
		var sideReset = jQuery(this).outerWidth();
		var slideposside = 'margin-' + jQuery(this).attr('data-pos');
				
		var cssOne = {};
		cssOne[slideposside] = -sideReset;

		jQuery(this).find('.ftd-content').animate(cssOne, 200, 'easeOutQuad', function(){
			jQuery(this).parent().animate({'bottom': -topReset}, 200, 'easeOutQuad');
			jQuery(this).parent().parent().find('.featured-bg').fadeOut(400);
		});
		jQuery(this).find('.featured-title-bg').fadeIn(1000);
	});
	}

	if( jQuery(".videoWrapper").is("*") ){
		jQuery(".videoWrapper iframe").each(function(){
			var key = 'www.youtube.com';
			youtubeCheck = jQuery(this).attr('src').search(key);
			if( youtubeCheck != -1 ){
				var ifr_source = jQuery(this).attr('src');
				var wmode = "wmode=transparent";
				if(ifr_source.indexOf('?') != -1){
					jQuery(this).attr('src',ifr_source+'&'+wmode);
				}else{
					jQuery(this).attr('src',ifr_source+'?'+wmode);
				}
			}
		});
	}


});

function contactModalPosition(typeCheck){	
	var searchHeight = jQuery('.su-contact-modal .wrap .gform_wrapper').height();
	var searchWinHeight = jQuery(window).height();

	if( searchWinHeight < searchHeight || jQuery(window).width() < 600 ){
		jQuery('.su-contact-modal .wrap').css({
			'position': 'absolute',
			'top': '100px'
		});
	}else{
		jQuery('.su-contact-modal .wrap').css({
			'position': 'absolute',
			'top': (searchWinHeight - searchHeight)/2
		});
	} 	
	
	if( typeCheck == 1 ){
		jQuery('.su-contact-modal select').each(function(){
			jQuery(this).wrap('<div class="su-contact-select-display" />');
			jQuery(this).parent().prepend('<span class="drop-val">' + jQuery(this).find('option:selected').val() + '</span>');
		});

		jQuery('.su-contact-modal input').attr('autocomplete', 'off');
		jQuery('.su-contact-modal .gform_page').first().addClass('active');

		jQuery('.su-contact-modal form').attr('action','/');
	}
}

function contactModalTop(){

}

function featuredEffects(elem){
	jQuery(elem).each(function(){
		var containerHeight = jQuery(this).outerHeight();
		var topOffset = jQuery(this).find('.ftd-content').outerHeight() + 5;	
		var sideOffset = jQuery(this).outerWidth();
		var sideWidth = jQuery(this).width();
		var slidepos = jQuery(this).parent().attr('data-pos');
		var slideposside = 'margin-' + slidepos;
	
		var cssOne = {};
		var cssOne = {
			//height: containerHeight,
			bottom: -topOffset
		};
					
		jQuery(this).css(cssOne).promise().done(function(){
			jQuery(this).find('.ftd-content').css({
				'width': sideWidth,
				'visibility': 'visible',
			});
	
			jQuery(this).find('.featured-title').css({
				'display': 'none',
				'visibility': 'visible'
			}).fadeIn();
		});
	
		var cssTwo = {};
		cssTwo[slideposside] = -sideOffset;
		if( slidepos == 'left' || slidepos == 'right' ){
			cssTwo["float"] = slidepos;
		}
				
		jQuery(this).find('.ftd-content').css(cssTwo);
	});
}

var player;

function youtubeclick() {
  // create the global player from the specific iframe (#video)
  player = new YT.Player('video', {
    events: {
      // call this function when player is ready to use
      'onReady': onPlayerReady
    }
  });
}


function onPlayerReady(event) {
	player.playVideo();
}

function vimeoplay(){
	var iframe = document.getElementById('vimeo-video');
	var player = $f(iframe);
	player.api("play");
}

function goToByScroll(element, offset){
    var scrollToPos = element.offset().top;
    var windowPos = jQuery( window ).scrollTop();
       	
    jQuery('html,body').animate({scrollTop: ( element.offset().top - offset + "px" )}, 500, 'easeOutSine', function(){});
}
