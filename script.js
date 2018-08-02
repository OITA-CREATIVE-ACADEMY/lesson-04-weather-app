$(document).ready(function(){
  const API_KEY = '17aa5e017dcc6a456f9fac25f3f27e2d';
  const API_ENDPOINT = 'http://api.openweathermap.org/data/2.5/weather?zip=';
  const ICON_URL = 'http://openweathermap.org/img/w/';

  // 最初はお天気情報を非表示
  $('.first-info').hide();
  $('.second-info').hide();

  // エンターキーが押された時の処理
  $('#postcode').keypress(function( e ){
    if(e.which == 13) {
      doSearchWeather();
      return false;
    }
  });
  // クリックイベント
  $('button').click(doSearchWeather);

  function doSearchWeather() {
    // 入力ボックスの値を取得
    var zipCode = $('.zip-code').val();
    var zipCode = zipCode.trim();
    console.log(zipCode);

    // ハイフンが入っていない場合、ハイフンをつける
    if(zipCode.length == 7 && !isNaN(zipCode)){
      var zipCode = zipCode.replace(/^(\d+)(\d{4})/, '$1-$2');
    }

    var url = API_ENDPOINT + zipCode + ',jp&units=metric&appid=' + API_KEY
    ajaxRequest(url);
  }

  // ajaxを使用してAPIをコールする
  function ajaxRequest(url) {
    $.ajax({
      url: url,
      cache: false
    }).done(function(results) {
      console.log(results);

      // 値を取得
      var week = ['日', '月', '火', '水', '木', '金', '土'];
      var date = new Date(results['dt'] * 1000);
      var yy = date.getFullYear();
      var mm = date.getMonth() + 1;
      var dd = date.getDate();
      var dy = week[date.getDay()];
      // var hr = date.getHours();
      // var min = date.getMinutes();
      // console.log(hr + '時' + min + '分');
      var dateToday = yy + '年' + mm + '月' + dd + '日' + '(' + dy +')';

      var iconImage = ICON_URL + results['weather'][0]['icon'] + '.png';
      var temp = results['main']['temp'] + '℃';
      var tempMax = results['main']['temp_max'] + '℃';
      var tempMin = results['main']['temp_min'] + '℃';

      // 取得した値を挿入
      $('#date').text(dateToday);
      $('#icon').attr('src', iconImage);
      $('#temperature').text(temp);
      $('#max-temp').text(tempMax);
      $('#min-temp').text(tempMin);

      // 表示・非表示
      $('.first-info').hide();
      $('.second-info').show();

    }).fail(function(results) {
      console.log(results.responseJSON);
      $('.info').text('該当する住所が見つかりません');
      // 表示・非表示
      $('.first-info').show();
      $('.second-info').hide();
    });
  }
})
