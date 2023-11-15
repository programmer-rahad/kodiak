$(document).ready(function () {
  // Dropdown Menu
  $("nav > ul > li").hover( 
    function () {
        if($(window).width() > 1055) {
            $("> ul", this).stop().slideDown(500);
        }
    },
    function () {
        if($(window).width() > 1055) {
            $("> ul", this).stop().slideUp(250);
        }
    },
  );

  // Mobile Menu
  $('.toggle-menu').click(function() {
    $('.mobile-menu-wrapper').addClass('open');
  })
  $('.mobile-menu-close').click(function() {
    $('.mobile-menu-wrapper').removeClass('open');
  })

  // Mobile Dropdown
  $('.mobile-menu-wrapper nav > ul > li').click(function(e) {
    $(this).siblings().find('ul').stop().slideUp();
    $('> ul',this).stop().slideToggle();
    e.preventDefault();
  })

  // Partner Section Owl Carousel
  $('.partners').owlCarousel({
    // items: 6,
    loop: true,
    autoplay: true,
    autoplayTimeout: 1500,
    margin: 20,
    dots: false,
    nav: true,
    navText: ['<i class="fas fa-caret-left"></i>','<i class="fas fa-caret-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      450: {
        items: 2
      },
      576: {
        items: 3
      },
      768: {
        items: 4
      },
      992: {
        items: 5
      },
      1200: {
        items: 6
      }
    }
  })

  // Video Popup
  $('.video-play a').magnificPopup({
    type: 'iframe'
  })

});
