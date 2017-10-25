(function($){
  function equalizeHeights(selector) {
    var heights = new Array();

    // Loop to get all element heights
    $(selector).each(function() {

      // Need to let sizes be whatever they want so no overflow on resize
      $(this).css('min-height', '0');
      $(this).css('max-height', 'none');
      $(this).css('height', 'auto');

      // Then add size (no units) to array
      heights.push($(this).height());
    });

    // Find max height of all elements
    var max = Math.max.apply( Math, heights );

    // Set all heights to max height
    $(selector).each(function() {
      $(this).css('height', max + 'px');
    }); 
  }

  $(window).on('load', function() {
    console.log('loaded');
    setTimeout(function () {
      equalizeHeights('.specialize');
    
    equalizeHeights('.t_fio');

    },1000);

    // Fix heights on page load
    

    // Fix heights on window resize
    var iv = null;
    $(window).on('resize',function() {
console.log('resize');
      if(iv !== null) {
        window.clearTimeout(iv);
      }

      // Needs to be a timeout function so it doesn't fire every ms of resize
      iv = setTimeout(function() {
              equalizeHeights('.specialize');
              equalizeHeights('.t_fio');
      }, 200);
    });
  });
})(jQuery);