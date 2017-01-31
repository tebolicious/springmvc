(function ($) {

  Drupal.behaviors.edusaMiscUniform = {
    attach: function (context, settings) {
      $('.view-filters select', context).uniform();
    }
  };

})(jQuery);
;
