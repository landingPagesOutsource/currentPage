$(document).ready(function () {
  
  /*********    Year    *********/
  var now = new Date();
  year = now.getFullYear();
  $('.year').html(year);

  /*********  Fixed header  *********/

  $(window).scroll(function () {
    var scroll_position = $(window).scrollTop();
    var mobil_width = $(window).width();
    if (mobil_width > 300) {
      if (scroll_position > 600) {
        $('.nav').addClass('sticky');
      } else {
        $('.nav').removeClass('sticky');
      }
    } else {
      $('.nav').removeClass('sticky');
    }
  });

});
