/* Window onload fires after EVERYTHING is laoded */
$(window).on("load", function () {

	/* preloader */
    $("#loader").delay(500).fadeOut(); 
	$(".mask").delay(1000).fadeOut("slow");
	
	// Activate the first slide
    function activateSlide1() {     
        $("#slider_1").attr('checked', true);
    }

    // use setTimeout() to execute
    setTimeout(activateSlide1,1000);
 
});


$(document).ready(function(){
  
  
  if ( $('.extra-content').children().length == 0 ) {
	// div has no other tags inside it
	$(".extra-content").addClass("no-margin");
  }
  
  
  // STICKY TOP NAVIGATION -------------------
  
  $(function(){
    $(window).scroll(function() {
      
        if ($(this).scrollTop() > 100) {
        
          $('.navigation-wrapper').addClass('sticky-top');
          $('.nav-logo').addClass('shrink-nav-logo');
        
        } else {
        
          $('.navigation-wrapper').removeClass('sticky-top');
          $('.nav-logo').removeClass('shrink-nav-logo');
        
        }
        
    });
  });
  
});