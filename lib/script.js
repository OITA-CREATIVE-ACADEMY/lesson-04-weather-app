$('.success').hide();
$('.error').hide();

$('button[name="submit"]').click(function () {
  var zipStr = $('input[name="search"]').val();
  console.log(zipStr);
  ajaxRequest(zipStr);
});

function ajaxRequest(zipcode) {
  $.ajax({
    url: `http://api.openweathermap.org/data/2.5/weather?zip=${zipcode},jp&units=metric&appid=0a424652be80d8340d176592369e8274`,
    cache: false
  }).done(function(results) {
    console.log(results);

    var main = results["main"];
    console.log(main);

    var temp = main["temp"];
    console.log(temp);

    var weather = results["weather"];

    //var icon = weather["icon"]
    console.log(weather)

    var temp = main["temp"];

    var temp_max = main["temp_max"];

    var temp_min = main["temp_min"];

    var icon = weather[0]["icon"];


    $('.temp').text( temp + "℃" );

    $('.temp_max').text( temp_max + "℃");

    $('.temp_min').text( temp_min + "℃");

    var weatherIconURL = "http://openweathermap.org/img/w/" + icon + ".png";

    $('.icon').attr( "src", weatherIconURL);


    $('.success').show();
    $('.error').hide();

  }).fail(function(results) {
    console.log(results.responseJSON);

    $('.success').hide();
    $('.error').show();

  });
}

$(document).ready(function(){

});
