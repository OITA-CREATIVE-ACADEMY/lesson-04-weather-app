$(".resultError").hide();
$(".weeklyWeather").hide();
$("h2").hide();

// エラーメッセージは隠しておく

$(document).ready(function() {
  // HTMLを読み込んだ後で実行
  $("#searchButton").click(function() {
    //
    var zipcode = $("#zipcode").val();

    var weatherURL = "http://api.openweathermap.org/data/2.5/weather?zip=" + zipcode + ",jp&units=metric&appid=e89fa8dc9fbac3012af2da42ce383713";
    console.log(weatherURL);
    $(".resultError").hide();
    $(".resultIcon, .resultNowTemp, .resultMaxTemp, .resultMinTemp, h2").fadeIn("slow");

    $.ajax({
      url: weatherURL,
      cache: false
    }).done(function(results) {
      console.log(results);

      // 変数の定義
      var temp = results["main"]["temp"];
      var tempMax = results["main"]["temp_max"];
      var tempMin = results["main"]["temp_min"];
      var weatherIcon = results["weather"]["0"]["icon"];

      // HTMLに出力
      $(".resultNowTemp").text(temp + "℃");
      $(".resultMaxTemp").text("最高気温：" + tempMax + "℃");
      $(".resultMinTemp").text("最低気温：" + tempMin + "℃");
      var weatherIconURL = "http://openweathermap.org/img/w/" + weatherIcon + ".png";
      console.log(weatherIconURL);
      $("#weatherIcon").attr('src', weatherIconURL);
      return;

    }).fail(function(results) {
      // エラーが出た場合の処理
      console.log(results.responseJSON);
      $(".resultNowTemp, .resultMaxTemp, .resultMinTemp, .resultIcon, h2").hide();
      $(".resultError").fadeIn("fast");
      return;
    });

    //週間の天気予報の取得
    var weeklyWeatherURL = "https://api.openweathermap.org/data/2.5/forecast?zip=" + zipcode + ",jp&units=metric&appid=e89fa8dc9fbac3012af2da42ce383713";

    console.log(weeklyWeatherURL);

    $.ajax({
      url: weeklyWeatherURL,
      cache: false
    }).done(function(weeklyResults) {

      $(".weeklyWeather").fadeIn("slow");
      // var weeklyList = weeklyResults["list"];
      // console.log(weeklyList);

    // 日付データの変換
      function formatDate(date) {
      const m = date.getMonth() + 1
      const d = date.getDate();
      const day = '日月火水木金土'.charAt(date.getDay());
      return `${m}月${d}日 (${day})`;
      }
      // (例)=> 7月24日 (金)

      console.log(weeklyResults);

      // 変数の定義と出力を繰り返し構文で行う
      for (var i = 0; i < 5; i++) {
        var interval = 0;
        if (i === 0) {
          interval = 4;
        } else {
          interval = (i * 8) + 4;
        }
        console.log(interval);
        var weeklyDays = weeklyResults["list"][interval]["dt_txt"];
        var weeklyTemp = weeklyResults["list"][interval]["main"]["temp"];
        var weeklyIcon = weeklyResults["list"][interval]["weather"]["0"]["icon"];
        console.log(weeklyDays);
        const date = new Date(weeklyDays);
        // i=0からのスタートなので、1を足す
        var num = i+1;

        // 出力
        $(".weeklyDays"+num).text(formatDate(date));
        $(".weeklyTemp"+num).text(weeklyTemp+"℃");
        var weeklyIconURL = "http://openweathermap.org/img/w/" + weeklyIcon + ".png";
        $(".weeklyIcon"+num).attr('src', weeklyIconURL);
      }


    }).fail(function(weeklyResults) {
      console.log(weeklyResults.responseJSON);
      $(".weeklyWeather").hide();
    });
  });

});
