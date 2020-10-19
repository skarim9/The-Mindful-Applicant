$('#PW, #CPW').on('keyup', function () {
  var password = $('#PW').val();
  var confirm_password = $('#CPW').val();
  if (!password && !confirm_password) {
    $('#message').html('');
  }
  else if (password === confirm_password) {
    $('#message').html('&#x2705;');
  } else
    $('#message').html('&#x274C;');
});
