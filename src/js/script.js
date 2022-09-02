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

    /*********    Scroll to    *********/

    $('a[href^="#"]').bind('click.smoothscroll', function (e) {
      e.preventDefault();

      var target = this.hash,
        $target = $(target);

      $('html, body').stop().animate({
        'scrollTop': $target.offset().top
      }, 800, 'swing', function () {
        window.location.hash = target;
      });
    });
  
  /*********    Popup after Marketo form submitting   *********/
  var popupOverlay = document.getElementById('on-success-popup');
  var popupCloseBtn = document.getElementById('on-success-popup_close');

  function toggleBodyScroll(data) { 
    if (data) {
      document.body.classList.remove('body-noscroll');
      document.documentElement.classList.remove('body-noscroll');
      return;
    }
    document.body.classList.add('body-noscroll');
    document.documentElement.classList.add('body-noscroll');
  }

  if (popupOverlay) {
    MktoForms2.whenReady(function (form) {
      var formElement = form.getFormElem()[0];
      var submitBtn = formElement.querySelector('button[type="submit"]');
      var submitBtnText = submitBtn.textContent;
      form.onSuccess(function () {
        popupOverlay.classList.add('active');
        toggleBodyScroll(false);
        var formElement = form.getFormElem()[0];
        formElement.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = submitBtnText;
        return false;
      });
    });
  
    popupOverlay.addEventListener('click', function (event) {
      if (event.target === popupOverlay ||  popupCloseBtn.contains(event.target)) {
        popupOverlay.classList.remove('active');
        toggleBodyScroll(true);
      }
    });    
  }  
});
