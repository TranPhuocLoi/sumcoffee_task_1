$(document).ready(function ($) {
	"use strict";
	awe_backtotop();
	awe_owl();
	awe_category();
	awe_tab();
	if(navigator.userAgent.indexOf("Speed Insights") == -1) {
		awe_lazyloadImage();
	}
});

$(document).on('click','.overlay, .close-popup, .btn-continue, .fancybox-close', function() {   
	awe_hidePopup('.awe-popup'); 	
	setTimeout(function(){
		$('.loading').removeClass('loaded-content');
	},500);
	return false;
})


/********************************************************
	# LazyLoad
	********************************************************/
function awe_lazyloadImage() {
	var i = $("[data-lazyload]");
	i.length > 0 && i.each(function() {
		var i = $(this), e = i.attr("data-lazyload");
		i.appear(function() {
			i.removeAttr("height").attr("src", e);
		}, {
			accX: 0,
			accY: 120
		}, "easeInCubic");
	});
} window.awe_lazyloadImage=awe_lazyloadImage;

/********************************************************
# SHOW NOITICE
********************************************************/
function awe_showNoitice(selector) {
	$(selector).animate({right: '0'}, 500);
	setTimeout(function() {
		$(selector).animate({right: '-300px'}, 500);
	}, 3500);
}  window.awe_showNoitice=awe_showNoitice;

/********************************************************
# SHOW LOADING
********************************************************/
function awe_showLoading(selector) {
	var loading = $('.loader').html();
	$(selector).addClass("loading").append(loading); 
}  window.awe_showLoading=awe_showLoading;

/********************************************************
# HIDE LOADING
********************************************************/
function awe_hideLoading(selector) {
	$(selector).removeClass("loading"); 
	$(selector + ' .loading-icon').remove();
}  window.awe_hideLoading=awe_hideLoading;

/********************************************************
# SHOW POPUP
********************************************************/
function awe_showPopup(selector) {
	$(selector).addClass('active');
}  window.awe_showPopup=awe_showPopup;

/********************************************************
# HIDE POPUP
********************************************************/
function awe_hidePopup(selector) {
	$(selector).removeClass('active');
}  window.awe_hidePopup=awe_hidePopup;

/********************************************************
# CONVERT VIETNAMESE
********************************************************/
function awe_convertVietnamese(str) { 
	str= str.toLowerCase();
	str= str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g,"a"); 
	str= str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g,"e"); 
	str= str.replace(/ì|í|ị|ỉ|ĩ/g,"i"); 
	str= str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g,"o"); 
	str= str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g,"u"); 
	str= str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g,"y"); 
	str= str.replace(/đ/g,"d"); 
	str= str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\"|\&|\#|\[|\]|~|$|_/g,"-");
	str= str.replace(/-+-/g,"-");
	str= str.replace(/^\-+|\-+$/g,""); 
	return str; 
} window.awe_convertVietnamese=awe_convertVietnamese;


/********************************************************
# SIDEBAR CATEOGRY
********************************************************/
function awe_category(){
	$('.nav-category .fa-angle-down').click(function(e){
		$(this).parent().toggleClass('active');
	});
} window.awe_category=awe_category;


/********************************************************
# ACCORDION
********************************************************/
function awe_accordion(){
	$('.accordion .nav-link').click(function(e){
		e.preventDefault;
		$(this).parent().toggleClass('active');
	})
} window.awe_accordion=awe_accordion;

/********************************************************
# OWL CAROUSEL
********************************************************/
function awe_owl() { 
	$('.owl-carousel:not(.not-dqowl)').each( function(){
		var xs_item = $(this).attr('data-xs-items');
		var md_item = $(this).attr('data-md-items');
		var lg_item = $(this).attr('data-lg-items');
		var sm_item = $(this).attr('data-sm-items');	
		var margin=$(this).attr('data-margin');
		var dot=$(this).attr('data-dot');
		var nav=$(this).attr('data-nav');
		var height=$(this).attr('data-height');
		var play=$(this).attr('data-play');
		var loop=$(this).attr('data-loop');
		if (typeof margin !== typeof undefined && margin !== false) {    
		} else{
			margin = 30;
		}
		if (typeof xs_item !== typeof undefined && xs_item !== false) {    
		} else{
			xs_item = 1;
		}
		if (typeof sm_item !== typeof undefined && sm_item !== false) {    

		} else{
			sm_item = 3;
		}	
		if (typeof md_item !== typeof undefined && md_item !== false) {    
		} else{
			md_item = 3;
		}
		if (typeof lg_item !== typeof undefined && lg_item !== false) {    
		} else{
			lg_item = 3;
		}
		if (typeof dot !== typeof undefined && dot !== true) {   
			dot= true;
		} else{
			dot = false;
		}
		$(this).owlCarousel({
			loop:loop,
			margin:Number(margin),
			responsiveClass:true,
			dots:dot,
			nav:nav,
			autoplay:play,
			autoplayTimeout:3000,
			autoplayHoverPause:true,
			autoHeight:false,
			responsive:{
				0:{
					items:Number(xs_item)				
				},
				600:{
					items:Number(sm_item)				
				},
				1000:{
					items:Number(md_item)				
				},
				1200:{
					items:Number(lg_item)				
				}
			}
		})
	})
} window.awe_owl=awe_owl;

/********************************************************
# BACKTOTOP
********************************************************/
function awe_backtotop() { 
	if ($('.back-to-top').length) {
		var scrollTrigger = 100, // px
			backToTop = function () {
				var scrollTop = $(window).scrollTop();
				if (scrollTop > scrollTrigger) {
					$('.back-to-top').addClass('show');
				} else {
					$('.back-to-top').removeClass('show');
				}
			};
		backToTop();
		$(window).on('scroll', function () {
			backToTop();
		});
		$('.back-to-top').on('click', function (e) {
			e.preventDefault();
			$('html,body').animate({
				scrollTop: 0
			}, 700);
		});
	}
} window.awe_backtotop=awe_backtotop;

$(window).on("load resize",function(){
	if(jQuery(window).width() >= 1367){

		if ($('.toolbox_scroll').length) {
			backToTop = function () {
				var min_height = $('.header').height(),
					awe_section_1 = $('.awe-section-1').height(),
					height_banner = $('.toolbox_scroll').height(),
					footer_height = $('.footer').height(),
					toal_height_1 = $('.footer').offset().top;
				if ( $('.footer').offset().top <= ($('.toolbox_scroll').offset().top +$('.toolbox_scroll').height())){
					$('.toolbox_scroll').removeClass('show');
				} else {
					if ($(this).scrollTop() >= min_height + awe_section_1){
						$('.toolbox_scroll').addClass('show');
					}
					else {
						$('.toolbox_scroll').removeClass('show');
					}
				}
			};
			backToTop();
			$(window).on('scroll', function () {
				backToTop();
			});
		}

	}
});

/*JS CHECK SĐT NHẬP TEXT*/
function preventNonNumericalInput(e) {
	e = e || window.event;
	var charCode = (typeof e.which == "undefined") ? e.keyCode : e.which;
	var charStr = String.fromCharCode(charCode);

	if (!charStr.match(/^[0-9]+$/))
		e.preventDefault();
}

/********************************************************
# TAB
********************************************************/
function awe_tab() {
	$(".e-tabs").each( function(){
		$(this).find('.tabs-title li:first-child').addClass('current');
		$(this).find('.tab-content').first().addClass('current');

		$(this).find('.tabs-title li').click(function(){
			var tab_id = $(this).attr('data-tab');
			var url = $(this).attr('data-url');
			$(this).closest('.e-tabs').find('.tab-viewall').attr('href',url);
			$(this).closest('.e-tabs').find('.tabs-title li').removeClass('current');
			$(this).closest('.e-tabs').find('.tab-content').removeClass('current');
			$(this).addClass('current');
			$(this).closest('.e-tabs').find("#"+tab_id).addClass('current');
		});    
	});
} window.awe_tab=awe_tab;

/********************************************************
# DROPDOWN
********************************************************/
$('.dropdown-toggle').click(function() {
	$(this).parent().toggleClass('open'); 	
}); 
$('.btn-close').click(function() {
	$(this).parents('.dropdown').toggleClass('open');
}); 
$('body').click(function(event) {
	if (!$(event.target).closest('.dropdown').length) {
		$('.dropdown').removeClass('open');
	};
});





/************************************/
/*Show hide Recoverpass*/
$('.recv-text #rcv-pass').click(function(){
	$('.form_recover_').slideToggle('500');
});
/*End*/

$('a.btn-support').click(function(e){
	e.stopPropagation();
	$('.support-content').slideToggle();
});
$('.support-content').click(function(e){
	e.stopPropagation();
});
$(document).click(function(){
	$('.support-content').slideUp();
});




/***************************************/
$(document).ready(function(){
	var wDW = $(window).width();
	/*Footer*/
	if(wDW > 767){
		$('.toggle-mn').show();
	}else {
		$('.footer-click > .cliked').click(function(){
			$(this).toggleClass('open_');
			$(this).next('ul').slideToggle("fast");
			$(this).next('div').slideToggle("fast");
		});
	}
	
	if (wDW > 992) {
		$(".button_clicked").click(function(){ 
			$('.search_pc').slideToggle('fast');
		})
	}
	$(".search_inner .fa").click(function(){ 
    $('.header_search').slideToggle('fast');
  })
});
$('.cate_padding  li .fa').click(function() {
	$(this).closest('li').find('> ul').slideToggle("fast");
	$(this).closest('i').toggleClass('fa-caret-down fa-caret-up');
	return false;              
}); 


$('.button-menu').click(function(){
	$('.menu_mobile').slideToggle('fast');
});

$('.ul_collections li > .fa').click(function(){
	$(this).parent().toggleClass('current');
	$(this).toggleClass('fa-angle-down fa-angle-up');
	$(this).next('ul').slideToggle("fast");
	$(this).next('div').slideToggle("fast");
});


$('.opacity_menu').click(function(e){
	$('.menu_mobile').removeClass('open_sidebar_menu');
	$('.opacity_menu').removeClass('open_opacity');
});


/*dang ky click*/


$(document).on('click', '.register_click', function(e) {
	$('.op_login').toggleClass('op_login_true');
	$('.modal_dichvu').show();
});
$(document).ready(function(){
	$('.op_login').click(function(e){
		$('.op_login').removeClass('op_login_true');
		$('.modal_dichvu').hide();
	});
	$('#closed_dichvu').on('click', function(e){
		e.preventDefault();
		$('.op_login').removeClass('op_login_true');
		$('.modal_dichvu').hide();
	});
	var test = $('.guilienhe_thanhcong').text();
	if (test != '') {
		$('#datlich_thanhcong').modal();
	}
});

/*Modal videoo blog**/

$('.button_play').click(function(e){
	var urlvideo = $(this).attr('data-url');
	$("#myModalYoutube .wrap_youtube_modal iframe").attr('src', urlvideo);
})


$("#myModalYoutube").on('hidden.bs.modal', function (e) {
	$("#myModalYoutube iframe").attr("src", $("#myModalYoutube iframe").attr("src"));
});


/**/
$(".wrap_cauhoi .col-click").each( function(){ 
	var colclick = $(this),
		contentshow = $('.content_question');
	$(this).find('.title').click(function(e){
		
		$('.col-click').removeClass('clicked');
		
		if ($('.col-click').hasClass('clicked')) {
			$('.col-click').removeClass('clicked');
		}else {
			$(this).parent('.col-click').addClass('clicked');
		}
		
		if ($(this).hasClass('opened')) {
			$(this).removeClass('opened');
			$(contentshow).hide();
		} else {
			$('.col-click .title').removeClass('opened');
			$(this).addClass('opened');
			$(contentshow).hide();
			$(colclick).find(contentshow).show();
		}
	});
});

$(window).on("load resize", function (e) {
	var wDW = $(window).width();
	var size_image = $(".wrap_image_js .item_image").size();
	if (wDW > 1200) {
		var y=3;
	} else if (wDW > 992 && wDW < 1199)  {
		var y=3;
	} else if (wDW >= 768 && wDW < 991) {
		var y=3;
	} else {
		var y=3;
	}

	
	$('.wrap_image_js .item_image:lt('+y+')').show();
	$('#loadMoreImage').click(function () {

		if (wDW > 1200) {
			
			y= (y+3 <= size_image) ? y+3 : size_image;

		} else if (wDW > 992 && wDW < 1199)  {
			
			y= (y+3 <= size_image) ? y+3 : size_image;
		} else if (wDW >= 768 && wDW < 991) {
			
			y= (y+3 <= size_image) ? y+3 : size_image;
		} else {
			
			y= (y+2 <= size_image) ? y+2 : size_image;
		}

		
		$('.wrap_image_js .item_image:lt('+y+')').show();

		
		if($('.item_image:visible').length == size_image) {
			$('#loadMoreImage').addClass('disabled');
		}

	});
});