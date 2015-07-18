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
    init: function(){
      $(document).on("scroll", this.parallax);
    },
    // Handles the jumbotron parallax
    parallax: function(){
      var $doc   = selectors.document,
          $jumbo = selectors.jumbotron,
          top    = $doc.scrollTop(),
          inView = top < $jumbo.outerHeight();
      if(inView){
        $jumbo.css({"background-position" : "center " + (top*0.5) + "px"});
      }
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

    Rich.init();
  });

})(jQuery);
