// Welcome to Rich Products!
(function($) {

  "use strict";

  //Cache for selectors
  var selectors = {};

  /**
   * Main Site Object
   */
  var Rich = {
    // Constructor (called  on DOM ready)
    init: function() {
      $(document).on("scroll", this.onScroll);
      this.onScroll(); // trigger the onScroll once.

      return this;
    },
    // Handles the scrolling effects
    onScroll: function() {
      // Cache
      var $doc   = selectors.document,
          $jumbo = selectors.jumbotron,
          $nav   = selectors.nav;

      var jumH   = $jumbo.outerHeight(),
          top    = $doc.scrollTop(),
          inView = top < jumH, // is jumbotron in view?
          piv    = Math.round((jumH - top) / jumH * 100) / 100; // Percent of the image in view

      // Only trigger repaint if inView
      if(inView){
        $jumbo.css({
          "background-position" : "center " + (top*0.5) + "px", // Parallax Background Effect
          "opacity" : piv // Opacity fade on scroll
        });
      }

      // Add header class if past jumbotron
      var MENU_HEIGHT = 100, // desired menu height trigger point
          action = top < (jumH-MENU_HEIGHT) ? "removeClass" : "addClass";
      $nav[action]("past-jumbo");

      return this;
    }
  };

  // Dom Ready
  $(function() {

    /**
      * Selectors
      */
    selectors.document  = $(document);
    // Header Section
    selectors.jumbotron = $(".jumbotron");
    selectors.nav       = $(".navbar-default");

    Rich.init();
  });

})(jQuery);
