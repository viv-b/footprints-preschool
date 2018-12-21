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
  
  // SCROLL TO ANCHOR LINK
  // From here: https://jonsuh.com/blog/better-scroll-to-anchor-links/
  
  $(".anchor-link").click(function(e) {
    e.preventDefault();
    
    if($(this).attr("data-speed") == "slow") {
        var speed= 2200;
    } else {
        var speed = 750;
    }
    // The 5000 below is in ms per 1,000 pixels. Example was set to 100 but a bit too fast
    anchorScroll( $(this), $($(this).attr("href")), speed );
  });
 
  function anchorScroll(this_obj, that_obj, base_speed) {
      
    var padding = 0; // added by Viv. Allow for height of to navigation bar
    
    var this_offset = this_obj.offset();
    var that_offset = that_obj.offset();
    var offset_diff = Math.abs(that_offset.top - this_offset.top);
 
    var speed = (offset_diff * base_speed) / 1000;
 
    $("html,body").animate({
      scrollTop: that_offset.top - padding
    }, speed);
  }
  
  
});