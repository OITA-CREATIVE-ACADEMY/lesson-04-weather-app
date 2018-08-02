// $(document).redry(function(){});
$(function($){
  $('.btn').click(function () {
    var PostalCode = $('#input-1').val();
    console.log(PostalCode);
$.ajax({
    url: 'http://api.openweathermap.org/data/2.5/weather?zip='+ PostalCode +',jp&units=metric&appid=0a424652be80d8340d176592369e8274',
    cache: false
  }).done(function(results) {
    console.log(results);

    var mainTemp = results["main"]["temp"];
    $('#mainTemp').text(mainTemp);

    var mainTempMax = results["main"]["temp_max"];
    $('#mainTempMax').text(mainTempMax);

    var mainTempMin = results["main"]["temp_min"];
    $('#mainTempMin').text(mainTempMin);

    var name = results["name"];
    $('#name').text(name);

    var main = results["weather"][0]["main"];
    $('#main').text(main);

    var icon = results["weather"][0]["icon"];
    var iconImg = '<img src="http://openweathermap.org/img/w/' + icon + '.png">';
    $('#iconImg').html(iconImg);
    console.log(iconImg);

    $('.weatherBoxs').removeClass('hiddenSection');
    $('.alertSection').addClass('hiddenSection');

  }).fail(function(results) {
    console.log(results.responseJSON);
    $('.alertSection').removeClass('hiddenSection');
    $('.weatherBoxs').addClass('hiddenSection');
  });
  });
});
