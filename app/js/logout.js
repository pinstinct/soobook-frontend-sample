function logout() {
  var token = 'Token ' + getCookie('SoobookToken');
  $.ajax({
    url: 'https://soobook.devlim.net/api/user/logout/',
    type: 'POST',
    headers: {
      Authorization: token,
    }
  })
  .done(function(response) {
    console.log(response);
  })
  .fail(function(response) {
    console.log(response);
  });
}
