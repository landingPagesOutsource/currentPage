$(document).ready(function () {

  // header
  $(".cta_line_button").click(function () {
    dataLayer.push({
      event: "semrush",
      eventCategory: "lp:smb-stories-tamika",
      eventAction: "click:line_button",
      eventLabel: "Try It Free",
      eventValue: null,
    });
  });

  // main
  $(".cta_main_button").click(function () {
    dataLayer.push({
      event: "semrush",
      eventCategory: "lp:smb-stories-tamika",
      eventAction: "click:main_button",
      eventLabel: "Try It Free",
      eventValue: null,
    });
  });

  // step 1
  $(".cta_step-1_button").click(function () {
    dataLayer.push({
      event: "semrush",
      eventCategory: "lp:smb-stories-tamika",
      eventAction: "click:step-1_button",
      eventLabel: "Find my perfect keywords",
      eventValue: null,
    });
  });

  // step 2
  $(".cta_step-2_button").click(function () {
    dataLayer.push({
      event: "semrush",
      eventCategory: "lp:smb-stories-tamika",
      eventAction: "click:step-2_button",
      eventLabel: "Research your competitors",
      eventValue: null,
    });
  });

  // step 3
  $(".cta_step-3_button").click(function () {
    dataLayer.push({
      event: "semrush",
      eventCategory: "lp:smb-stories-tamika",
      eventAction: "click:step-3_button",
      eventLabel: "Audit your listings",
      eventValue: null,
    });
  });

  // footer
  $(".cta_footer_button").click(function () {
    dataLayer.push({
      event: "semrush",
      eventCategory: "lp:smb-stories-tamika",
      eventAction: "click:footer_button",
      eventLabel: "Try It Free",
      eventValue: null,
    });
  });

});
