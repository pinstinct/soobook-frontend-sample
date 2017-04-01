function signup(username, password, nickname) {
  $.ajax({
    url: 'https://soobook.devlim.net/api/user/signup/',
    type: 'POST',
    dataType: 'json',
    data: {
      username: username,
      password: password,
      nickname: nickname,
    }
  })
  .done(function(response) {
    console.log(response);
  })
  .fail(function(response) {
    console.log(response);
  });
}
