(function ($) {

  Drupal.behaviors.edusaMiscUniform = {
    attach: function (context, settings) {
      $('.view-filters select', context).uniform();
    }
  };

})(jQuery);
;
(function ($) {
Drupal.behaviors.edusaScholarshipListForm = {
  attach: function (context, settings) {
    var $state_field = $(':input[name=field_user_state_value]', context);
    var $country_field = $(':input[name=field_country_target_id]', context);

    $state_field.once('state-change').change(function() {
      $country_field.val('');
      $.uniform.update();
    });
    $country_field.once('country-change').change(function() {
      $state_field.val('');
      $.uniform.update();
    });
  }
};
})(jQuery);
;
