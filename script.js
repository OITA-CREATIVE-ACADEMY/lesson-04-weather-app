const API_KEY = '1a109884fc9443979e196c449ce2f587';
const API_ENDPOINT = 'http://api.openweathermap.org/data/2.5/weather/';
const ICON_URL = 'https://openweathermap.org/img/w/';
$(document).ready(function(){


	//処理

  $('.search-btn').on('click',function(){
    event.preventDefault();
    let zipcode = $('#zipcode').val();
    // console.log('hello');
    // getCurrentWeather(zipcode);
    getElementById(zipcode);
  });

    function getElementById(zipcode){
        $.ajax({
            // url: API_ENDPOINT,
            // url: 'http://api.openweathermap.org/data/2.5/weather?zip=879-7762,jp&units=metric&appid=1a109884fc9443979e196c449ce2f587',
            url: `http://api.openweathermap.org/data/2.5/weather?zip=${zipcode},jp&units=metric&appid=1a109884fc9443979e196c449ce2f587`,
            type:"GET",
            data:{units: 'metric', appid: API_KEY},
            cache: false
          }).done(function(results) {
            console.log(results);
            var main = results["main"];
            // var main = results.main;
            var temp = main["temp"];
            console.log(temp);
            $('.temp').text('現在の気温は'+temp+'です');//現在の気温

            var temp_max = main["temp_max"];
            console.log(temp_max);
            $('.temp_max').text('最高気温は'+temp_max+'です');//最高気温

            var temp_min =main["temp_min"];
            console.log(temp_min);
            $('.temp_min').text('最低気温'+temp_min+'です');//最低気温

            var weather = results["weather"];
            console.log(weather);
            var array = weather[0];
            console.log(array);
            var icon = array["icon"];
            console.log(icon);
            $('.icon').attr( "src","http://openweathermap.org/img/w/"+icon+".png");//アイコン

          }).fail(function(results) {
            console.log('results.responseJSON');
            $('.result').removeClass('hidden');
            $('.error').addClass('hidden');

          });
      }

      });
      function showError(data) {
        $('.error').text('これでは出来ません');

        // エラーを表示
        $('.result').addClass('hidden');
        $('.error').removeClass('hidden');
      }
