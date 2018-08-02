
$(function () {
  $(".notFound").hide();
  $(".resultIcon").hide();

  $('#search_btn').click(function(){
    let zip = $("#zipcode").val();

    console.log(zip);

    var url = `http://api.openweathermap.org/data/2.5/weather?zip=${zip},jp&units=metric&appid=4b3e56021d6561722dd1464d49149f1d`
    console.log(url);
    ajaxRequest(url);
  });
});


function ajaxRequest(url) {
  $.ajax({
      url: url,
      cache: false
    }).done(function(results) {
      console.log(results);

　　　  var main =results["main"];
      console.log("main==========");
      console.log(main);


      var temp =main ["temp"];
      var tempMax =main["temp_max"];
      var tempMin =main["temp_min"];
      var weather = results["weather"];
      var weather0 =weather[0];
      var weatherIcon =weather0["icon"];

      $(".resultNowTemp").text("現在の気温:" +temp +"°C");
      $(".resultMaxTemp").text("最高気温："+ tempMax + "°C");
      $(".resultMinTemp").text("最低気温："+ tempMin + "°C");
      console.log("temp==========");
      console.log(temp);
      $(".notFound").hide();
      $(".resultIcon").show();
      var weatherIconURL= "http://openweathermap.org/img/w/" + weatherIcon +".png";
      console.log(weatherIconURL);
      console.log($("#weatherIcon"));
      $("#weatherIcon").attr('src',weatherIconURL);
      return;

    }).fail(function(results) {
      console.log(results.responseJSON);
      $(".notFound").show();
      $(".resultIcon").hide();
    });
}
