$(document).ready(function () {

  // header
  $(".cta_line_button").click(function () {
    dataLayer.push({
      event: "semrush",
      eventCategory: "lp:grow-small-business",
      eventAction: "click:line_button",
      eventLabel: "try semrush free",
      eventValue: null,
    });
  });

  // main
  $(".cta_main_button").click(function () {
    dataLayer.push({
      event: "semrush",
      eventCategory: "lp:grow-small-business",
      eventAction: "click:main_button",
      eventLabel: "try semrush free",
      eventValue: null,
    });
  });

  // help
  $(".cta_help_button").click(function () {
    dataLayer.push({
      event: "semrush",
      eventCategory: "lp:grow-small-business",
      eventAction: "click:help_button",
      eventLabel: "Learn more",
      eventValue: null,
    });
  });

  // cta
  $(".cta_footer_button").click(function () {
    dataLayer.push({
      event: "semrush",
      eventCategory: "lp:grow-small-business",
      eventAction: "click:footer_button",
      eventLabel: "try semrush free",
      eventValue: null,
    });
  });

});
