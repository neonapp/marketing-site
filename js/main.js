$(document).ready(function() {
  $('#signup-submit').click(function () {
    var email = $('#signup-email').val();
    var url = '/subscribe?callback=?&email=' + email;
    $.get(url, function (response) {
      if (response.status === 'error') {
        alert(response.error);
      } else {
        $('#signup-email').val('');
        $('#form-wrapper').hide();
        $('.success-message').show();
      }
    })
    .fail(function(response) {
      // TODO: Display error message
      var msg = response.responseJSON ? response.responseJSON.error : 'Unable to reach server';
      alert(msg);
    });
  });
});
