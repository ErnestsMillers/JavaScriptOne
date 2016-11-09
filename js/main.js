
$(function() {

// This one scrolls to id tags smoothly //

  $('a[href^="#"]').on('click', function(event) {
      var target = $(this.getAttribute('href'));
      if( target.length ) {
          event.preventDefault();
          $('html, body').stop().animate({
              scrollTop: target.offset().top
          }, 1000);
      }
  });

  $("#mySidenav").on(
  {
      mouseenter: function()
      {
        $(this).css('width', '230');
        $('#mySidenav ul').css({
          "paddingLeft": "30px",
          "paddingRight": "30px"
        });
      },
      mouseleave: function()
      {
        $(this).css('width', '210');
        $('#mySidenav ul').css({
          "paddingLeft": "20px",
          "paddingRight": "20px"
        });
      }
  });

  var pageHeight = $(window).height();
  console.log(pageHeight);

  $('#mySidenav ul').css('height', pageHeight);

});


$(document).ready(function(){
  // $sections incleudes all of the container divs that relate to menu items.
  var $sections = $('.section');

  // The user scrolls
  $(window).scroll(function(){

    // currentScroll is the number of pixels the window has been scrolled
    var currentScroll = $(this).scrollTop();

    // $currentSection is somewhere to place the section we must be looking at
    var $currentSection;

    // We check the position of each of the divs compared to the windows scroll positon
    $sections.each(function(){
      // divPosition is the position down the page in px of the current section we are testing
      var divPosition = $(this).offset().top;

      // If the divPosition is less the the currentScroll position the div we are testing has moved above the window edge.
      // the -1 is so that it includes the div 1px before the div leave the top of the window.
      if( divPosition - 1 < currentScroll ){
        // We have either read the section or are currently reading the section so we'll call it our current section
        $currentSection = $(this);

        // If the next div has also been read or we are currently reading it we will overwrite this value again. This will leave us with the LAST div that passed.
      }

      // This is the bit of code that uses the currentSection as its source of ID
      var id = $currentSection.attr('id');
   	 $('a').removeClass('active');
   	 $("[href=#"+id+"]").addClass('active');

    })

  });
});