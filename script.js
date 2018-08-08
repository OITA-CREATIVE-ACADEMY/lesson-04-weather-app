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
      type:'GET'
      cache: false,
      timeout:10000,
    })

    .done(function(data) {
          // 通信成功時の処理を記述
          console.log(data);
          console.log(data.main);
          console.log(data.main.temp);
      dataType "text"
  　　});

  　   var temp_max = results.main.temp_max;
       　　console.log(temp_max);

       $(".max").text("最高気温" + temp_max + "℃");

       var temp_min = results.main.temp_min;
       　　console.log(temp_min);
       $(".min").text("最低気温" + temp_min + "℃");

       $(fanction(){
      var event={
        'click',
      };
      //   <div id="target">
        $("#target").on(events.join(''),function(e){
　　　});


    .fail(function(error) {
        // 通信失敗時の処理を記述
    });
