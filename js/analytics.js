$(document).ready(function () {

  // header
  $(".cta_line_button").click(function () {
    dataLayer.push({
      event: "semrush",
      eventCategory: "lp:grow-small-business-v",
      eventAction: "click:line_button",
      eventLabel: "try semrush free",
      eventValue: null,
    });
  });

  // main
  $(".cta_main_button").click(function () {
    dataLayer.push({
      event: "semrush",
      eventCategory: "lp:grow-small-business-v",
      eventAction: "click:main_button",
      eventLabel: "try semrush free",
      eventValue: null,
    });
  });

  // cta
  $(".cta_cta_button").click(function () {
    dataLayer.push({
      event: "semrush",
      eventCategory: "lp:grow-small-business-v",
      eventAction: "click:cta_button",
      eventLabel: "try semrush free",
      eventValue: null,
    });
  });

  // cta
  $(".cta_footer_button").click(function () {
    dataLayer.push({
      event: "semrush",
      eventCategory: "lp:grow-small-business-v",
      eventAction: "click:footer_button",
      eventLabel: "try semrush free",
      eventValue: null,
    });
  });

});
