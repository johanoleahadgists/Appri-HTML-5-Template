(function ($) {
    "use strict";


  

    $('#mobile-menu').meanmenu({
      meanScreenWidth: "991",
      meanMenuContainer: '.mobile-menu',

    });







    $("[data-background]").each(function () {
        $(this).css("background-image", "url(" + $(this).attr("data-background") + ")")
    });



    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });



    $('.testimonial-active').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.test-img-active'
      });
      $('.test-img-active').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.testimonial-active',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        centerPadding: '0px',
        arrows: false,
        autoplay: true,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }

        ]
      });





$('.test-popup-link').magnificPopup({
  type: 'image'

});


$('.brand-active').owlCarousel({
  loop:true,
  margin:30,
  nav:false,
  responsive:{
      0:{
          items:1
      },
      600:{
          items:3
      },
      1000:{
          items:4
      }
  }
})




})(jQuery);