$(function () {

  console.log('Hello');
  $('#searchButton').click(function () {
    var zipCode = $('#search_city_input1').val();
    console.log(zipCode);

    var url = `http://api.openweathermap.org/data/2.5/weather?zip=${zipCode},jp&units=metric&appid=13cd661e6fc100c0de05716550ea45ff`;
    console.log(url);
    ajaxRequest(url);
  });


  function ajaxRequest (url) {
    $.ajax({
      url: url,
      type:"GET",
      cache: false,
      timeout:10000,
    })

    .done(function(data) {
          // 通信成功時の処理を記述
          console.log(data);
          console.log(data.main);
          console.log(data.main.temp);
          console.log(data['main']['temp']['temp_min']['temp_max']);
          //console.log(data['main']['temp_min']['temp_max']);
}


    .fail(function(error) {
        // 通信失敗時の処理を記述
    });
