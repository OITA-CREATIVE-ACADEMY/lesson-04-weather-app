/*
$(document).ready(function(){
$.ajax({
  url: 'http://api.openweathermap.org/data/2.5/weather?zip=870-1143,jp&units=metric&appid=362aae1346f8e0d5ff7186ea8345567d',
  cache: false
}).done(function(results) {
console.log(results);
*/

$(function(){
  //HTMLが読み込まれた時
  $('#success').hide();
  $('#result').hide();

//郵便番号取得
  $('#search').click(function(){
    var postcode = $('#postcode').val();
    //console.log(postcode);
    $.ajax({
      url: 'http://api.openweathermap.org/data/2.5/weather?zip='+postcode+',jp&units=metric&appid=362aae1346f8e0d5ff7186ea8345567d',
      cache: false
    }).done(function(results) {
      $('#default').hide();
      $('#result').hide();
      $('#success').show();

      //console.log(results)
      var weather = results["weather"];
      console.log("weather ============");
      console.log(weather);

      var main = results["main"];
      //console.log("main =============");
      //console.log(main);

      var icon = weather[0]["icon"];
      //console.log["icon"];
      //console.log(icon);
      $('#icon').attr("src","http://openweathermap.org/img/w/"+icon+".png");

      var temp = main["temp"];
      //console.log["temp"];
      //console.log(temp);
      $('#temp').text(temp);

      var temp_max = main["temp_max"];
      $('#temp_max').text(temp_max);

      var temp_min = main["temp_min"];
      $('#temp_min').text(temp_min);


    }).fail(function(results) {
      console.log("テスト");
      console.log(results.responseJSON);
      $('#default').hide();
      $('#success').hide();
      $('#result').show();

      //$('#result').text("エラーが発生しました。ステータス：" + jqXHR.status);
    });
  });
});
