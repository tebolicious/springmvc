/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function ($, Drupal, window, document, undefined) {


// To understand behaviors, see https://drupal.org/node/756722#behaviors
Drupal.behaviors.footerShuffle = {
  attach: function(context, settings) {
    // Move the Mission block inside the social links block for positioning purposes
    $('#block-menu-block-11').append($('#block-block-1'));
  }
};

Drupal.behaviors.topHatMenu = {
  attach: function(context, settings) {
    // Helper markup for top hat menu
    $('#block-menu-block-10 .menu-block-wrapper').prepend('<h3 class="title">Sites</h3>');
    $('#block-menu-block-10 h3.title').click(function(){
      $('#block-menu-block-10 ul.menu').toggle('fast');
    });
  }
};

Drupal.behaviors.regionMatchHeight = {
  attach: function(context, settings) {
    // Move the Mission block inside the social links block for positioning purposes
    $('.node-type-region .panel-col-full-top', context).each(function() {
      $(this).find('.panel-pane').matchHeight();
    })
  }
};

Drupal.behaviors.overviewLinkParent = {
  attach: function(context, settings) {
    // Apply overview class to parent of overview links
    $('.pane-menu-block-6 .overview', context).each(function() {
      $(this).parent().addClass('overview');
    })
  }
};

Drupal.behaviors.filterLabelReplaceResources = {
  attach: function(context, settings) {
    // Replace first item with label in dropdown filters
    $('.view-resource-list .views-exposed-widget', context).each(function() {
      var label = $(this).find('.selector > span:contains("- Any -")');
      var text = 'Any';
      var first = $(this).find('select > option:first-child');
      label.text(text);
      first.text(text);
    })
    
    $('.view-resource-list .views-widget-per-page, .section-user .views-widget-per-page', context).each(function() {
      var text = $(this).find('label').text();
      var label = $(this).find('.selector > span');
      $(this).find('label').hide();
      label.prepend('<span class="label">' + text + '</span>');
    })
  }
};

Drupal.behaviors.filterLabelReplaceEventsScholarships = {
  attach: function(context, settings) {
    // Replace first item with label in dropdown filters
    $('.view-advising-center-list .views-exposed-widget, .view-event-list .views-exposed-widget, .view-scholarship-list .views-exposed-widget, .section-user .views-exposed-widget', context).each(function() {
      var label = $(this).find('.selector > span:contains("- Any -")');
      var text = $(this).find('label').text();
      var first = $(this).find('select > option:first-child');
      label.text(text);
      first.text(text);
    })
  }
};

Drupal.behaviors.filterResourcesGrouping = {
  attach: function(context, settings) {
    $('.view-resource-list .views-exposed-widget', context).each(function() {
      $(this).find('.description').appendTo($(this).find('.form-item'));
    });
  }
};

Drupal.behaviors.filterMoveSearch = {
  attach: function(context, settings) {
    $('.view-resource-list .views-exposed-form', context).each(function() {
      $(this).find('.form-type-textfield').append($(this).find('.views-submit-button'));
    });
  }
};


Drupal.behaviors.filtersLabel = {
  attach: function(context, settings) {
    // Prepend label text to views filters
    $('.view-advising-center-list .view-filters .views-exposed-widgets, .view-event-list .view-filters .views-exposed-widgets, .view-scholarship-list .view-filters .views-exposed-widgets', context).each(function() {
      $(this).prepend('<h4>Sort by:</h4>');
    })
  }
};

Drupal.behaviors.videoFiltersLabel = {
  attach: function(context, settings) {
    // Prepend label text to views filters
    $('.view-videos .view-filters .views-exposed-widgets', context).each(function() {
      $(this).prepend('<h4>Find by:</h4>');
    })
  }
};

Drupal.behaviors.moveFilterHeader = {
  attach: function(context, settings) {
    // Prepend label text to views filters
    $('.view-scholarship-list', context).each(function() {
      $('.view-filters').after($(this).find('.view-header > p'));
    });
    $('.view-resource-list, .view-event-list, .view-advising-center-list, .view-videos', context).each(function() {
      $('.view-filters').after($(this).find('.view-header'));
    })
    
  }
};

Drupal.behaviors.listingDivLink = {
  attach: function(context, settings) {
    $('.view-advising-center-list .views-row, .view-scholarship-list .views-row, .view-event-list .views-row', context).each(function() {
      var link = $(this).find('.views-field-title a').attr('href');
      $(this).wrapInner('<a href="' + link + '"></a>');
    })
    
  }
};

Drupal.behaviors.listingRegionDivLink = {
  attach: function(context, settings) {
    $('.view-region-list .views-row article', context).each(function() {
      var link = $(this).find('.field-title-field a').attr('href');
      $(this).wrapInner('<a class="link-wrapper" href="' + link + '"></a>');
    })
    
  }
};

Drupal.behaviors.videoListDivLink = {
  attach: function(context, settings) {
    $('.view-videos .views-row', context).each(function() {
      var link = $(this).find('.views-field-rendered a').attr('href');
      $(this).wrapInner('<a class="link-wrapper" href="' + link + '"></a>');
    })
    
  }
};

Drupal.behaviors.contentDivLink = {
  attach: function(context, settings) {
    $('.section-user .ui-accordion-content ul li', context).each(function() {
      var link = $(this).find('h4 a').attr('href');
      $(this).wrapInner('<a href="' + link + '"></a>');
    })
    
  }
};

Drupal.behaviors.searchDivLink = {
  attach: function(context, settings) {
    $('.search-results .search-result', context).each(function() {
      var link = $(this).find('h3 a').attr('href');
      $(this).wrapInner('<a href="' + link + '"></a>');
    })
  }
};

Drupal.behaviors.listingTableRowLink = {
  attach: function(context, settings) {
      $(".view-resource-list table tr").click(function() {
          window.document.location = $(this).find('.views-field-title a').attr("href");
      });
  }
};

Drupal.behaviors.heiTableRowLink = {
  attach: function(context, settings) {
    $('.view-hei-news-list table tr', context).each(function() {
      var link = $(this).find('.views-field-title a').attr('href');
      $(this).children("td").not('.views-field-title').wrapInner('<a href="' + link + '"></a>');
    })
  }
};

Drupal.behaviors.heiMatchHeight = {
  attach: function(context, settings) {
    // Apply matchHeight as needed
    $('.view-hei-news-list table tr').each(function() {
      $(this).find('td > *').matchHeight();
    });
  }
}

Drupal.behaviors.matchHeight = {
  attach: function(context, settings) {
    // Apply matchHeight as needed
    $('.view-resource-list table tr').each(function() {
      $(this).find('td > *').matchHeight();
    });
  }
}

Drupal.behaviors.countCarousel = {
  attach: function(context, settings) {
    var slideCount = $('.slider-for .slick-slide:not(.slick-cloned)').length;
    $('.slider-nav', context).each(function() {
      $(this).addClass('items-'+ slideCount);
    });
  }
}


})(jQuery, Drupal, this, this.document);
;
/**
 * @file
 * Contains custom functionality related to positioning and moving elements
 * based on the browser size. All mobile/responsive JS should go here.
 */

(function ($, Drupal, window, document, R) {
  var edusaResponsive = {};

  // A list of breakpoints we are using. This variable is not actually used
  // anywhere important. Rather, it can be used as constants so you don't have
  // to hard-code your breakpoints everywhere. For example, you can use
  // "Breakpoints.TABLET" instead of "768".
  Breakpoints = {
    SMALL: 320,
    MEDIUM: 768,
    LARGE: 960,
  };

  /**
   * Toggle visibility of the Search box.
   */
  Drupal.behaviors.mobileSearch = {
    attach: function(context, settings) {

      Response.action(function() {
        var $searchBlock = $('#block-search-form');
        if (Response.band(0, Breakpoints.LARGE)) {
          // Move the Search box below the menu, and add a toggle button.
          $searchBlock.insertAfter($('#navigation')).hide();
          $('#header', context).once().append('<div class="search-toggle"><span></span></div>');
          $('.search-toggle').show();
          
          // Hide or show the Search box when the icon is clicked/tapped.
        $('.search-toggle', context).click(function(e) {
            if (e.handled !== true ) {
              $(this).toggleClass('open');
              $searchBlock.toggle('fast');
              e.handled = true;
            } 
            return false; 
          });
          // If the main menu is expanded, close it.
          if ($('#superfish-1-toggle.sf-expanded').length > 0) {
            $('#superfish-1-accordion, #superfish-2-accordion').hide();
            $('#superfish-1-toggle').removeClass('sf-expanded');
          }
        }
        if (Response.band(Breakpoints.LARGE)) {
          $('.search-toggle').removeClass('open').hide();
          $searchBlock.appendTo($('.region-header > .inner')).show();
        } 
      }); 

    }
  }


  Drupal.behaviors.mobileMenuShuffle = {
    attach: function(context, settings) {
      
      $.fn.outerHTML = function(){
        // IE, Chrome & Safari will comply with the non-standard outerHTML, all others (FF) will have a fall-back for cloning
        return (!this.length) ? this : (this[0].outerHTML || (
          function(el){
            var div = document.createElement('div');
            div.appendChild(el.cloneNode(true));
            var contents = div.innerHTML;
            div = null;
            return contents;
        })(this[0]));
      }

      Response.action(function() {

        var $accordions = $('#superfish-1-accordion, #superfish-2-accordion');

        if (Response.band(0, Breakpoints.MEDIUM)) {

          $('#block-superfish-2').appendTo($("#block-superfish-1"));
          $('#superfish-1-accordion, #superfish-2-accordion').hide();
          $('#superfish-1-toggle').toggle(function(e) {
            e.preventDefault;
            e.stopPropagation;
            $('#superfish-1-accordion, #superfish-2-accordion').slideDown('700', 'swing');
          },
          function() {
            $('#superfish-1-accordion, #superfish-2-accordion').slideUp('700', 'swing');
          });

        }
        if (Response.band(Breakpoints.MEDIUM)) {

          $('#block-superfish-2').appendTo($("#header"));

        }
      });

    }
  }

  Drupal.behaviors.overviewLink = {
    attach: function(context, settings) {
      // Overview link name changed to Overview for small screens only
      Response.action(function() {
        if (Response.band(0, Breakpoints.MEDIUM)) {
          $('#superfish-1-accordion, #superfish-2-accordion').each(function() {
            $(this).find('.overview').text('Overview');
          });
        }
      });
    }
  }

  Drupal.behaviors.translateLink = {
    attach: function(context, settings) {
      // Select Language text changed to Translate
      $(window).bind("load", function() {
        Response.action(function() {
         if (Response.band(0, Breakpoints.MEDIUM)) {
            $('.goog-te-menu-value span:first-of-type').text('Translate');
            $('.goog-te-gadget').fadeIn('fast');
            $(".goog-te-gadget").click(function () {
              $("#block-edusa-misc-google-translate>a").fadeIn('fast');
            });
          }
          else {
            $('.goog-te-menu-value span:first-of-type').text('Select Language');
          }
        });
      });
    }
  }

  Drupal.behaviors.fiveSteps = {
    attach: function(context, settings) {
      // Move 5 steps subnav to bottom of page on mobile screens
      Response.action(function() {
        if (Response.band(0, Breakpoints.MEDIUM)) {
          $('div.five-steps-subnavigation').insertBefore($('#footer'));
        }
        else {
          $('div.five-steps-subnavigation').insertBefore($('div.pane-edusa-social-share-buttons'));
        }
      });
    }
  }

  Drupal.behaviors.sideMenu = {
    attach: function(context, settings) {
      // Move left column nav to top of page (css hides the links)
      Response.action(function() {
        if (Response.band(0, Breakpoints.MEDIUM)) {
          $('div.pane-menu-block-6').insertBefore($('.panel-pane.pane-node-title'));
        }
        else {
          $('div.pane-menu-block-6').prependTo($('div.panel-col-first .inside'));
        }
      });
    }
  }

})(jQuery, Drupal, this, this.document, Response);
;
