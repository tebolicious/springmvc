(function ($) {
   
  Drupal.behaviors.edusaSlickCarousel = {
    attach: function (context, settings) {
        // Carousel
      
      // make the active slide the active slide in the navigation
      $('.slider-nav').on('init', function(e, slick){
        $('.slider-nav .item').removeClass('slick-active');
        var active = $('.slider-for .slick-active').attr('data-slick-index');
        $('.slider-nav .item[data-slick-index="' + active + '"]').addClass('slick-active');
      });
      
      // make the active slide the active slide in the navigation (upon change)
      $('.slider-for').on('afterChange', function(slick) {
        $('.slider-nav .item').removeClass('slick-active');
        var active = $('.slider-for .slick-active').attr('data-slick-index');
        $('.slider-nav .item[data-slick-index="' + active + '"]').addClass('slick-active');
      });
      
      $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        focusOnSelect: true,
        asNavFor: '.slider-nav',
        arrows: true,
      });
      $('.slider-nav').slick({
        slidesToShow: 5,
        asNavFor: '.slider-for',
        focusOnSelect: true,
      });

      // Carousel - Full Width 
      $('.carousel-full').slick({
        dots: true,
        arrows: false,
        autoplay: true,
        pauseOnHover: true,
      }); 
    }
  };
  
})(jQuery);;
