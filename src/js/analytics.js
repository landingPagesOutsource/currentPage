$(document).ready(function(){
  $(".cta_line_button").click(function () {
    dataLayer.push({
    event: 'semrush',
    eventCategory: 'lp:increase-your-bottom-line',
    eventAction: 'click:line-button',
    'eventLabel': 'Register Now',
    'eventValue': null });
  });

  $(".cta_hero_button").click(function () {
    dataLayer.push({
    event: 'semrush',
    eventCategory: 'lp:increase-your-bottom-line',
    eventAction: 'click:hero-button',
    'eventLabel': 'Register Now',
    'eventValue': null });
  });
});
