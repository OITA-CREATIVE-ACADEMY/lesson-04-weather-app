// var URL = "http://api.openweathermap.org/data/2.5/weather?zip=870-1143,jp&units=metric&appid=0a424652be80d8340d176592369e8274";

$(function(){
  // HTMLが読み込まれた時

  $('.search-btn').click(function() {
    console.log('search-btn - click');

    var zipcode = $('.zipcode').val();
    var URL = "http://api.openweathermap.org/data/2.5/weather?zip=" + zipcode + ",jp&units=metric&appid=0a424652be80d8340d176592369e8274";
    console.log(URL);

    $.ajax({
       url: URL,
       type: 'GET',
       dataType: 'json',
       // フォーム要素の内容をハッシュ形式に変換
       // data: $('form').serializeArray(),
       timeout: 5000,
     })
     .done(function(data) {
         // 通信成功時の処理を記述
         console.log(data);
         console.log(data.main);
         console.log(data.main.temp);
         console.log(data['main']['temp']);
         $('.temp').prepend(data['main']['temp']);
     })
     .fail(function() {
         // 通信失敗時の処理を記述
     });
  });
});
