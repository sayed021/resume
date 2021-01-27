(function() {jQuery.fatNav(); }());
jQuery(window).on('resize', function(event) {
    var win_width = jQuery(window).width();
    // mobile menu start 
    if (win_width > 1024) {
        jQuery('.fat-nav').removeClass('active').css("display", "none");
        jQuery('.hamburger').removeClass('active');  
    }
    // mobile menu end
});

jQuery(document).ready(function() {
    // mobile menu start 
    var fatContent = jQuery( '#header-menu').html();
    var fatNav = '<div class="fat-nav__wrapper" id="fatmenu"><ul>' + fatContent + '</ul></div>';
    jQuery( '.fat-nav' ).html( fatNav );
    jQuery('#fatmenu ul li.menu-item-has-children').append("<span class='toggle_button'><small></small></span>");
    jQuery('#fatmenu ul ul').hide();
    jQuery('ul li.menu-item-has-children > .toggle_button').click(function(event) {
        if(jQuery(this).parent().children('ul').hasClass('submenu') ) {
            jQuery(this).parent().children('ul').removeClass("submenu").slideUp(400);
            jQuery(this).removeClass( 'active_item' );
        }
        else{
            jQuery(this).parent().children('ul').addClass("submenu").slideDown(400);
            jQuery(this).addClass( 'active_item' );
        }
    });
    // mobile menu end

    // faq toggle start 
    jQuery(document).on('click', '.faqs .row h4', function() {
        if (jQuery(this).hasClass('active')) {
            jQuery(this).removeClass('active');
            jQuery(this).next('.content').slideUp(300);
            return 0;
        }else {
            jQuery('.faqs h4').removeClass('active');
            jQuery(document).find('.faqs .content').slideUp(300);
            jQuery(this).addClass('active');
            jQuery(this).next('.content').slideDown(300);
        }
    });
    // faq toggle end

    jQuery(document).on('click', '.member-box .btn-popup', function(event) {
      event.preventDefault();
      if ($(this).hasClass('close')) {
        $(".member-info").removeClass('show-popup');
        $(this).removeClass('close');
        $('.member-box').children('.popup-info').slideUp(300);
      }else {
        $(".member-info").removeClass('show-popup');
        $('.member-box .btn-popup').removeClass('close');
        $(this).parents(".member-info").addClass('show-popup');
        $('.member-box').children('.popup-info').fadeOut(0);
        $(this).addClass('close').parents('.member-box').children('.popup-info').slideDown(300);
      }
    });

    jQuery(".programs-wrap").on('click', '.program', function(event) {
      // event.preventDefault();
      var target = jQuery(event.target);
      if (target.is(jQuery(this).find('.swim-pop-area')) || target.is(jQuery(this).find('.swim-pop-area *'))){
          return 0;
      }
      if (jQuery(this).hasClass('active')) {
        jQuery(this).removeClass('active');
        jQuery(this).find('.swim-pop-area').fadeOut(300);
      }else {
        jQuery(".programs-wrap .program").removeClass('active');
        jQuery('.swim-pop-area').fadeOut(300);
        jQuery(this).addClass('active');
        jQuery(this).find('.swim-pop-area').fadeIn(300);
      }
    });
});

jQuery(window).on('load',  function(event) {
    //swiper sldier banner
    // var swiper = new Swiper('.banner-slider');
    var swiper = new Swiper('.banner-slider', {
      pagination: '.swiper-pagination',
      paginationClickable: true,
      nextButton: '.swiper-button-next',
      prevButton: '.swiper-button-prev',
      spaceBetween: 30,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      autoplayDisableOnInteraction: false
    });
    
    swiper = new Swiper('.ts-content');

    swiper = new Swiper('.carousel-container', {
      slidesPerView: 4,
      spaceBetween: 0,
      centeredSlides: true,
      grabCursor: true,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        1024: {
          slidesPerView: 4
        },
        768: {
          slidesPerView: 3
        },
        640: {
          slidesPerView: 2
        },
        320: {
          slidesPerView: 1
        }
      }
    });

    // first faq togle
    jQuery(document).find('.faqs .row:eq(0) h4:eq(0)').addClass('active').next('.content').slideDown(300);
});
