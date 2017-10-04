

jQuery(function($){
	
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
	
	$('.quickNavSelected select').change(function(){
		$('.selectedTitle').text($(this).val());
		$('.quick-facts-nav li[rel="' + $(this).val() + '"]').click();
	});
	
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
	

  
  // The class for the container div

var $container = '#whystu-stthomas';
	
		// WhySU Video iFrame resizing (why is this here?)
	$('.whystu-image iframe').each(function(){
		var containerHeight = $(this).parent().parent().parent().height();
		var videoHeight = $(this).height();
		var videoOffset = (containerHeight - videoHeight)/2;
		$(this).css('margin-top',videoOffset).parent().css('height',containerHeight);
	});

});


// Nav scripts




//$(document).ready(function() {
//    $(".nav-trigger").click(function(e) {
//        e.preventDefault();
//        $(".mob-nav").toggleClass("nav-is-visible");
//        $(".navigation").slideToggle({
//            speed: 125
//        });
//    });
//    var isInDesktopMode = ($(window).width() > 974);
//    $(window).resize(function() {
//        if ($(window).width() > 974) {
//            isInDesktopMode = true;
//            $(".navigation").show();
//            $(".mob-nav").removeClass("nav-is-visible");
//            $("ul.submenu-nav").removeAttr("style");
//        } else if (isInDesktopMode) {
//            isInDesktopMode = false;
//            $(".navigation").hide();
//        }
//    });
//    $(".main-nav li").has("ul").addClass("has-sub"), $(".has-sub").prepend('<span class="toggle-sub"><span class="screen-reader-text">Toggle</span></span>'), $(".toggle-sub").click(function() {
//        return $(this).closest("li").find(">.submenu-nav").slideToggle({
//            speed: 150
//        }), $(this).toggleClass("menu-visible"), !1
//    });
//    $(".search-toggle-mob").click(function() {
//        return $(".site-search").slideToggle({
//            speed: 150
//        })
//    });
//    $(".search-toggle").click(function() {
//        return $(".site-search").slideToggle({
//            speed: 150
//        })
//    });
//});

	
$(document).ready(function() {
	$(".nav-trigger").click(function(e) {
		e.preventDefault();
		$(".mob-nav").toggleClass("nav-is-visible");
		$(".navigation").slideToggle({
			speed: 125
		});
	});
	$(".page-mob-nav-trigger").click(function(e) {
		e.preventDefault();
		$(".sidebar-nav").toggleClass("sub-is-visible");
		$(".page-mob-nav-trigger").toggleClass("rotated");
		//$(".page-mob-nav-trigger").css({transform: 'rotate(180deg)'});
		$(".page-sub-menu").slideToggle({
			speed: 125
		});
	});
	var isInDesktopMode = ($(window).width() > 974);
	$(window).resize(function() {
		if ($(window).width() > 974) {
			isInDesktopMode = true;
			$(".navigation").show();
			$(".mob-nav").removeClass("nav-is-visible");
			$("ul.submenu-nav").removeAttr("style");

			$(".page-sub-menu").show();
			$(".sidebar-nav").removeClass("nav-is-visible");
			$("ul.page-sub-menu").removeAttr("style");
			$(".page-mob-nav-trigger").removeClass("rotated");

		} else if (isInDesktopMode) {
			isInDesktopMode = false;
			$(".navigation").hide();
			$(".page-sub-menu").hide();
		}
	});
	$(".main-nav li").has("ul").addClass("has-sub"), $(".has-sub").prepend('<span class="toggle-sub"><span class="screen-reader-text">Toggle</span></span>'), $(".toggle-sub").click(function() {
		return $(this).closest("li").find(">.submenu-nav").slideToggle({
			speed: 150
		}), $(this).toggleClass("menu-visible"), !1
	});
	$(".search-toggle-mob").click(function() {
		return $(".site-search").slideToggle({
			speed: 150
		})
	});
	$(".search-toggle").click(function() {
		return $(".site-search").slideToggle({
			speed: 150
		})
	});
});


$('.accordion-toggle').on('click', function(event) {
	event.preventDefault();
	var accordion = $(this);
	var accordionContent = accordion.next('.accordion-content');
	var accordionToggleIcon = $(this).children('.toggle-icon');
	accordion.toggleClass("open");
	accordionContent.slideToggle(250);
	if (accordion.hasClass("open")) {
		accordionToggleIcon.html("<span class='material-icons'>remove</span>");
	} else {
		accordionToggleIcon.html("<span class='material-icons'>add</span>");
	}
});