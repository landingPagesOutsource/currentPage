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

  
  var n = new Date;
  year = n.getFullYear(), $(".year").html(year), $(window).scroll((function () {
    var n = $(window).scrollTop();
    $(window).width() > 300 && n > 600 ? $(".nav").addClass("sticky") : $(".nav").removeClass("sticky")
  })), $((function () {
    var n = function (n, e) {
      this.el = n || {}, this.multiple = e || !1, this.el.find(".dropdownlink").on("click", {
        el: this.el,
        multiple: this.multiple
      }, this.dropdown)
    };
    n.prototype.dropdown = function (n) {
      var e = n.data.el,
        o = $(this),
        i = o.next();
      i.slideToggle(), o.parent().toggleClass("open"), n.data.multiple || e.find(".submenuItems").not(i).slideUp().parent().removeClass("open")
    };
    new n($("#accordion-menu-1"), !1) 
    new n($("#accordion-menu-2"), !1)
  }))


  /*********  animation  *********/




    /*********  roles-screen  *********/

  $(".roles-display__menu-btn").on("click", function() {
    $(".roles-display__menu-btn").removeClass("active");
    $(this).addClass("active");

    $(".roles__item").removeClass("active");
    var slide = $(this).attr("data-slide");
    $(slide).addClass("active");
  });
  

});
