$.ajax({
  url: 'http://api.openweathermap.org/data/2.5/weather?zip=870-1143,jp&units=metric&appid=0a424652be80d8340d176592369e8274',
  cache: false
}).done(function(results) {
  console.log(results);

  var main = results["main"];
  //////////or////////////var main = results.main;
  console.log("main.temp");
  console.log(main);

  var tenp = main["temp"];
  console.log("main ========");
  console.log(tenp);

}).fail(function(results) {
  console.log(results.responseJSON);

});

$(function(){
    $('#search_button').click(function(){
      if($('form input[name="text"]').val() == "") {
            alert("郵便番号を入力して下さい。");
            return false;
          }
                var search_catch = $("#text").val();
                var space = search_catch.replace(/　/g," ").split(" ");
                var totalNumber = space.length;
                alert(space[0]);
            });


    });



















//$('#button').on('click', function() {
//  if (870 - 1143) {　　　　　　　　　　//検索ボタンのJQがifで正しいのか？
    //var weather-icon = results["weather"]　　　htlmに出力　コンソール結果をhtmlに

    //console.log(icon);      //"icon":"04d"
                             //"temp":301.15,
                              //"temp_min":301.15,
                             //"temp_max":301.15

//  } else {
//    console.log("該当する住所がみつかりません")
//  }
//});

//検索用テキスト（郵便番号）　検索ボタン
//現在の温度　最高気温　最低気温
//document ready function
//temp :301.15
//temp_min :301.15
//temp_max:301.15
