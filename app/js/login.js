function login(username, password) {
  $.ajax({
    url: 'https://soobook.devlim.net/api/user/login/',
    type: 'POST',
    dataType: 'json',
    data: {
      username: username,
      password: password,
    }
  })
  .done(function(response) {
    console.log(response);
    var tokenKey = response.key;
    setCookie('SoobookToken', tokenKey, 90);
  })
  .fail(function(response) {
    console.log(response);
  });
}
