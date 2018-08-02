$(function(){
  const API_KEY = 'c66a05961255acefbdf29781bd83f6c2';
  const API_ENDPOINT = 'http://api.openweathermap.org/data/2.5/weather/';
  const ICON_URL = 'http://openweathermap.org/img/w/';

  $('.zipcode').focus();
  $('#button').click(function() {
    var zipcode = $('.zipcode').val();
    if (zipcode.indexOf('-') == -1) {
      var zipcode = zipcode.slice(0, 3) + '-' + zipcode.slice(3)
    }
    var zip = zipcode + ',' + 'jp';

    $.ajax({
      url: API_ENDPOINT,
      type: 'GET',
      data: { zip: zip, units: 'metric', appid: API_KEY },
      cache: false
    }).done(function(data) {
      console.log(data);
      var main = data["main"];
      var temp = main["temp"];
      var tempMax = main["temp_max"];
      var tempMin = main["temp_min"];
      var weather = data["weather"];
      var iconId = weather["0"]["icon"];

      $('.content').html('<figure class="icon"><img src="' + ICON_URL + iconId + '.png"></figure><div class="temp"><p class="average">' + temp + '℃</p><p class="max"> 最高気温' + tempMax + '℃</p><p class="min"> 最低気温' + tempMin + '℃</p></div>');

    }).fail(function(data) {
      console.log(data.responseJSON);
      $('.content').html('<p class="not-found">該当する住所が見つかりません</p>');

    });
    return false;
  });
});
