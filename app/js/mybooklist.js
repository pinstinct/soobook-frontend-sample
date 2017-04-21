function mybooklist() {
  var token = 'Token ' + getCookie('SoobookToken');
  $.ajax({
    url: 'https://soobook.devlim.net/api/book/mybook/',
    type: 'GET',
    headers: {
      Authorization: token,
    },
  })
  .done(function(response) {
    console.log(response);
    for (var i = 0; i < response.results.length; i++){
      var currentMyBook = response.results[i];
      // mybook list
      console.log(currentMyBook)

      // 서버시간을 local 시간대로 변경
      var utctime = currentMyBook.updated_date;
      var utcLocaltime = moment.utc(utctime).toDate();
      // 시간 포맷 변경
      var localtime = moment(utcLocaltime).local().format('YYYY-MM-DD HH:mm:ss');
      console.log(localtime)

    }
  })
  .fail(function(response) {
    console.log(response)
  });
}
