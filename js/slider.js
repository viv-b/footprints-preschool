$(document).ready(function(){
    
    // Setup to automatically animate to next slide.
    var TIMEOUT = 6000;
    
    /* Repeat the slide activation by checking the box every 'timeout' interval */
    var interval = setInterval(handleNext, TIMEOUT);
    
    function handleNext() {
    
      var $radios = $('input[class*="slide-radio"]');
      var $activeRadio = $('input[class*="slide-radio"]:checked');
    
      var currentIndex = $activeRadio.index();
      var radiosLength = $radios.length;
    
      $radios
        .attr('checked', false);
    
      if (currentIndex >= radiosLength - 1) {
    
        $radios
          .first()
          .attr('checked', true);
    
      } else {
    
        $activeRadio
          .next('input[class*="slide-radio"]')
          .attr('checked', true);
    
      }
    
    }
    
    // If sldier manually triggered by clicking label turn off the automatic slider
    $( ".slider-pagination label" ).click(function() {
        clearInterval(interval);
    });

});