function sizeHero() {
  var wh = $(window).height();
  var ww = $(window).width();
  $('.hero').height(wh);
  $('.hero').width(ww);
}

$(document).ready(function() {
  $('#signup-submit').click(function () {
    var email = $('#signup-email').val();
    var url = '/subscribe?callback=?&email=' + email;
    $.get(url, function (response) {
      if (response.status === 'error') {
        alert(response.error);
      } else {
        $('#signup-email').val('');
        alert('Thank you for signing up!');
      }
    })
    .fail(function(response) {
      // TODO: Display error message
      var msg = response.responseJSON ? response.responseJSON.error : 'Unable to reach server';
      alert(msg);
    });
  });
  sizeHero();
});

$(window).resize(function() {
  sizeHero();
});
