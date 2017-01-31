(function ($) {
Drupal.behaviors.edusaAdvisingCenterListForm = {
  attach: function (context, settings) {
    var $region_field = $(':input[name=field_region_target_id]', context);
    var $country_field = $(':input[name=field_country_target_id]', context);
    $region_field.once('region-change').change(function() {
      $country_field.val('');
      $.uniform.update();
    });
    $country_field.once('country-change').change(function() {
      $region_field.val('');
      $.uniform.update();
    });
  }
};
})(jQuery);
;
(function ($) {

  Drupal.behaviors.edusaMiscUniform = {
    attach: function (context, settings) {
      $('.view-filters select', context).uniform();
    }
  };

})(jQuery);
;
