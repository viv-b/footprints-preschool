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