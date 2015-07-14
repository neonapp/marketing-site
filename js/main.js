function sizeHero() {
  var wh = $(window).height();
  var ww = $(window).width();
  $('.hero').height(wh);
  $('.hero').width(ww);
}

$(document).ready(function() {
  sizeHero();
});

$(window).resize(function() {
  sizeHero();
});
