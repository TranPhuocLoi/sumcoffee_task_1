$(document).ready(function () {

  $(".search_inner").click(function () {
    $(".header_search").toggle("100");
  });

  awe_backtotop();

  $('.wrapper-slider').slick({
    dots: true,
    centerMode: true,
    centerPadding: '0px',
    arrows: true,
    slidesToShow: 1,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1
        }
      },
      {
          breakpoint: 480,
          settings: {
          arrows: true,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1
        }
      }
    ]
  });

  $('.button-play').click(function (e) {
    var urlvideo = $(this).attr('data-url');
    $("#myModalYoutube .wrap_youtube_modal iframe").attr('src', urlvideo);
  })

  $("#myModalYoutube").on('hidden.bs.modal', function (e) {
    $("#myModalYoutube iframe").attr("src", $("#myModalYoutube iframe").attr("src"));
  });

  awe_owl();

  $(".wrapper-questions .col-click").each(function () {
    var colclick = $(this),
      contentshow = $('.content_question');
    $(this).find('.title').click(function (e) {

      $('.col-click').removeClass('clicked');

      if ($('.col-click').hasClass('clicked')) {
        $('.col-click').removeClass('clicked');
      } else {
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


});

function awe_owl() {
  $('.owl-carousel:not(.not-dqowl)').each(function () {
    var xs_item = $(this).attr('data-xs-items');
    var md_item = $(this).attr('data-md-items');
    var lg_item = $(this).attr('data-lg-items');
    var sm_item = $(this).attr('data-sm-items');
    var margin = $(this).attr('data-margin');
    var dot = $(this).attr('data-dot');
    var nav = $(this).attr('data-nav');
    var height = $(this).attr('data-height');
    var play = $(this).attr('data-play');
    var loop = $(this).attr('data-loop');
    if (typeof margin !== typeof undefined && margin !== false) {
    } else {
      margin = 30;
    }
    if (typeof xs_item !== typeof undefined && xs_item !== false) {
    } else {
      xs_item = 1;
    }
    if (typeof sm_item !== typeof undefined && sm_item !== false) {

    } else {
      sm_item = 3;
    }
    if (typeof md_item !== typeof undefined && md_item !== false) {
    } else {
      md_item = 3;
    }
    if (typeof lg_item !== typeof undefined && lg_item !== false) {
    } else {
      lg_item = 3;
    }
    if (typeof dot !== typeof undefined && dot !== true) {
      dot = true;
    } else {
      dot = false;
    }
    $(this).owlCarousel({
      loop: loop,
      margin: Number(margin),
      responsiveClass: true,
      dots: dot,
      nav: nav,
      autoplay: play,
      autoplayTimeout: 3000,
      autoplayHoverPause: true,
      autoHeight: false,
      responsive: {
        0: {
          items: Number(xs_item)
        },
        600: {
          items: Number(sm_item)
        },
        1000: {
          items: Number(md_item)
        },
        1200: {
          items: Number(lg_item)
        }
      }
    })
  })
} window.awe_owl = awe_owl;

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
} window.awe_backtotop = awe_backtotop;

$(window).on("load resize", function () {
  if (jQuery(window).width() >= 1367) {

    if ($('.toolbox_scroll').length) {
      backToTop = function () {
        var min_height = $('.header').height(),
          section1 = $('.section-01').height(),
          height_banner = $('.toolbox_scroll').height(),
          footer_height = $('.footer').height(),
          toal_height_1 = $('.footer').offset().top;
        if ($('.footer').offset().top <= ($('.toolbox_scroll').offset().top + $('.toolbox_scroll').height())) {
          $('.toolbox_scroll').removeClass('show');
        } else {
          if ($(this).scrollTop() >= min_height + section1) {
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

$(document).on('click', '.overlay, .close-popup, .btn-continue, .fancybox-close', function () {
  awe_hidePopup('.awe-popup');
  setTimeout(function () {
    $('.loading').removeClass('loaded-content');
  }, 500);
  return false;
})

$(document).on('click', '.register_click', function (e) {
  $('.op_login').toggleClass('op_login_true');
  $('.modal_dichvu').show();
});
$(document).ready(function () {
  $('.op_login').click(function (e) {
    $('.op_login').removeClass('op_login_true');
    $('.modal_dichvu').hide();
  });
  $('#closed_dichvu').on('click', function (e) {
    e.preventDefault();
    $('.op_login').removeClass('op_login_true');
    $('.modal_dichvu').hide();
  });
  var test = $('.guilienhe_thanhcong').text();
  if (test != '') {
    $('#datlich_thanhcong').modal();
  }
});

function awe_showPopup(selector) {
  $(selector).addClass('active');
} window.awe_showPopup = awe_showPopup;

function awe_hidePopup(selector) {
  $(selector).removeClass('active');
} window.awe_hidePopup = awe_hidePopup;

function preventNonNumericalInput(e) {
  e = e || window.event;
  var charCode = (typeof e.which == "undefined") ? e.keyCode : e.which;
  var charStr = String.fromCharCode(charCode);

  if (!charStr.match(/^[0-9]+$/))
    e.preventDefault();
}``