const API_KEY = '1202602912c77f34a592df715d808a5e';
const API_ENDPOINT = 'http://api.openweathermap.org/data/2.5/weather/';
const ICON_URL = 'https://openweathermap.org/img/w/';

$(function(){
  // ウィンドウロードの処理がないと最初に何も表示されません
$(window).on('load', function () {
  $('#button').click();
})
    $('#button').click(function(){
        //textboxに入力した郵便番号をtergetに取得する
        let zipcode = $('#input').val();
        if(zipcode.indexOf('-') == -1){
           zipcode = zipcode.slice(0,3)+"-"+zipcode.slice(3);
        }
        let zip = zipcode + ',' + 'jp'
        //openweathermapにurlを引数として、天気情報を獲得させる
        ajaxRequest(zip);
    });
    function ajaxRequest (zip) {
    //ajaxの呼び出し
    $.ajax({
      url: API_ENDPOINT,
      type: 'GET',
      data: { zip: zip, units: 'metric', appid: API_KEY },
      cache: false
    /* 獲得成功*/
    }).done(function(results) {
      console.log(results);
      // 都市名取得する
      let city_name = results.name;
      $('#city_title').text(`現在の${city_name}の気温は`);
      $('#temp').text(results.main.temp+"℃");
      //天気アイコンのurlを取得する
      let icon_url = ICON_URL + results.weather[0].icon + ".png";
      $('#icon').attr({
          src: icon_url
        });
      //天気アイコンを取得する　？？？
      let obj = document.images['icon'];
      //天気アイコンの高さを90pxにする
      obj.height = 70;
      $('#max_temp').text("最高気温"+results.main.temp_max+"℃");
      $('#min_temp').text("最低気温"+results.main.temp_min+"℃");
      // 結果を表示
      $('#result').removeClass('hidden');
      $('#error').addClass('hidden');
    /* 獲得失敗*/
    }).fail(function(results) {
      console.log(results.responseJSON);
      $('#error').text("該当する住所はありません").show();
      // エラーを表示
      $('#result').addClass('hidden');
      $('#error').removeClass('hidden');
    });
  }
});
