
var Site = {
  init: function () {
    this.initOverLay();
    this.initTyper();
    this.initScrollTo();
    this.initToggle();
    this.initSlidePortFolio();
    this.imageReady();
    this.portfolio();
  },
  initOverLay: function () {
    setTimeout(function(){
      $('body').addClass('loaded');
    }, 3000);
  },
  initTyper: function () {
    setTimeout(function(){
      typer('header .header-content .wrapper-typer').cursor(false)
        .line('<h3 class="text-normal"> Wellcome</h3>')
        .pause(300)
        .back('all')
        .continue('<h3 class="text-normal">We are Panda Developers!!!<span class="cursor-soft">|</span></h3>')
        .pause(1000)
        .back('all')
        .continue('<h3> We Build </h3>')
        .line('<h2 class="m-b-20">Website for smart People</h2>')
        .line('<p> Created with Passion, Delivered with Care, Updated to Perfection!<span class="cursor-soft">|</span> </p>', 0)
        .end(function () {$('header .header-show-more').removeClass('hidden')});
    }, 5000);
  },
  initScrollTo: function () {
    $('[data-scroll]').click(function(event) {
        event.preventDefault();
        $('body').stop().animate({
            scrollTop: ($($(this).data('scroll')).offset().top) + 'px'
        }, 1000);
    });
  },
  initToggle: function () {
    $('[data-toggle]').on('click', function() {
        $($(this).data('toggleXs')).slideToggle('medium');
    });
  },
  initSiteHeader: function () {
    var top = $(document).scrollTop(),
        nav = $('nav.nav');
      if (top > 10) {
          nav.addClass('fixed-top');
      } else {
          nav.removeClass('fixed-top');
      }
  },
  initSlidePortFolio: function () {
    $("#portfolio-slideshow").owlCarousel({
        items : 3,
        pagination : false,
        navigation : false,
        itemsDesktop: [1199, 3],
        itemsDesktopSmall: [979, 3],
        itemsTablet: [768,2],
        itemsTabletSmall: [480, 1],
        itemsMobile: [360, 1],
        transitionStyle : "fade",
        loop: true,
        autoPlay: 4000,
        navigationText : ["", ""]
    });
  },
  imageReady: function () {
    $('img').each(function(index) {
      var alt = "panda-developer-team";
      if(!$(this).attr('alt')){
        $(this).attr('alt', alt + '_' + index);
      }
    });
  },

  portfolio : function(){
    $('body').on('click', '.portfolio-image', function(e){
        $('body').css('overflow','hidden');
        e.preventDefault();

        $('#CloseModal').click(function(){ 
            $(this).parents('#ModalPortolio').hide();
            $('body').css('overflow','auto');
        });

        $('#ModalPortolio').removeClass('hidden').show();

        $('#ModalPortolio picture img').attr('src', $(this).attr('data-modal-image'));
        $('#ModalPortolio #ModalTitle ').html($(this).attr('data-modal-title'));
        $('#ModalPortolio #modal__link').attr('href',$(this).attr('data-modal-url'));
        $('#ModalPortolio #modal__link').html($(this).attr('data-modal-url'));
        $('#ModalPortolio #modal__link__2').attr('href',$(this).attr('data-modal-url'));
    });
  }
};

jQuery(document).ready(function($) {
    Site.init();
});

$(window).scroll(function() {
  Site.initSiteHeader();
});

$(window).on('load resize', function() {});
