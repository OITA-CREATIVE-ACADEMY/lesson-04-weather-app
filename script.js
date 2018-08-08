
$(function () {

$("#weather-info").hide();
$("#alert-message").hide();


  // Enterキーで検索可能にする
  $("#zipcode").keypress(function (e) {
    if (e.which == 13) {
      $("#search_btn").click();
    }
  });

  // 検索ボタンのクリックイベント
  $("#search_btn").click(function () {

    // 郵便番号にハイフンがない場合は、自動で追加させてURLを書き換える
    var inputText = $("#zipcode").val();
    if (inputText.match(/-/)) {
      // ハイフンがあればなにもしない
    } else {
      var replaceurl = inputText;
      inputText = replaceurl.slice(0, 3) + "-" + replaceurl.slice(3);
    };

    console.log("inputText=======")
    console.log(inputText);

    var url = `http://api.openweathermap.org/data/2.5/weather?zip=${inputText},jp&units=metric&appid=a32f7060f21b3e0fe1efc4cfd6ca49af`;
    console.log(url);
    ajaxRequst(url);

    // ajaxにURLを渡して、jsonのデータを取得させる
    function ajaxRequst(url) {
      console.log('ajaxにURLを渡しました');

      　 //ajaxに有効なURLが渡ったらdone以下の処理、それ以外はfail以下の処理
      $.ajax({
        url: url,
        cache: false

        　 //doneの処理
      }).done(function (results) {
        console.log("results=======")
        console.log(results);

        // doneの時、お天気情報は表示して、エラーメッセージは隠す
        $('#weather-info').show();
        $('#alert-message').hide();

        　 //jsonのデータを取得して、変数に格納する
        var main = results["main"];
        console.log("main=======")
        console.log(main);

        var temp = main["temp"];
        console.log("temp======")
        console.log(temp);

        var tempmin = main["temp_min"];
        console.log("temp_min======")
        console.log(tempmin);

        var tempmax = main["temp_max"];
        console.log("temp_max======")
        console.log(tempmax);

        var weather = results["weather"];
        console.log("weather======")
        console.log(weather);

        var zero = weather["0"];
        console.log("0======")
        console.log(zero);

        var icon = zero["icon"];
        console.log("icon======")
        console.log(icon);
        var photo = `http://openweathermap.org/img/w/${icon}.png`;

        // jsonで取得したデータをHTMLで表示させる
        $('#temp').text(temp + "℃");
        $('#temp_min').text(tempmin + "℃");
        $('#temp_max').text(tempmax + "℃");
        $("#img").attr("src", photo)

        // failの処理
      }).fail(function (results) {
        console.log("alert-message")

        $('#alert').text("郵便番号がありません");
        $('#alert-message').show();
        $('#weather-info').hide();
      })
    }

  });
});
