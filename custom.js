jQuery(function($) {

  // Define Theme specific functions
  var Theme = {
    // Anchored Header with Waypoints.js
    header: function(header) {
      $(header).waypoint('sticky');
    },
    // Mobile Submenu expand + collapse
    submenu: function(menu) {
      $(menu).each(function() {
        var menu = $(this);
        menu.addClass("submenu");
        menu.prepend(menu.prev("a.wsite-menu-item"));
        menu.prepend('<span>&nbsp;</span>');
        menu.children('span').click(function() {
          menu.toggleClass('open');
        });
      });
    },
    // Swiping mobile galleries wwith Hammer.js
    swipeGallery: function() {
      setTimeout(function() {
        var touchGallery = document.getElementsByClassName("fancybox-wrap")[0];
        var mc = new Hammer(touchGallery);
        mc.on("panleft panright", function(ev) {
          if (ev.type == "panleft") {
            $("a.fancybox-next").trigger("click");
          } else if (ev.type == "panright") {
            $("a.fancybox-prev").trigger("click");
          }
          Theme.swipeGallery();
        });
      }, 500);
    },
    swipeInit: function() {
      if ('ontouchstart' in window) {
        $("body").on("click", "a.w-fancybox", function() {
          Theme.swipeGallery();
        });
      }
    },
    hideCart: function(){
      $('#banner, #main, #footer').on('click', function () {
          $('#wsite-mini-cart').fadeOut("fast");
      });
    }
  }

  $(document).ready(function() {
    Theme.header('#header');
    Theme.submenu('#mobile-nav .wsite-menu-item-wrap .wsite-menu-wrap');
    Theme.swipeInit();
    Theme.hideCart();
  });

});
