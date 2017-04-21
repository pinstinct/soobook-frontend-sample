function mybookadd(book) {
  var token = 'Token ' + getCookie('SoobookToken');
  $.ajax({
    url: 'https://soobook.devlim.net/api/book/mybook/',
    type: 'POST',
    headers: {
      Authorization: token,
    },
    dataType: 'json',
    data: {
      book_id: book,
    }
  })
  .done(function(response) {
    console.log(response);
  })
  .fail(function(response) {
    console.log(response)
  });
}
