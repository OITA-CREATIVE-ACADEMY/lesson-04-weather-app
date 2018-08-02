//　　*** お天気アプリ　jsファイル ***   //
$(function () {
 //ボタンを押下すると郵便番号からURLを生成
  $('.search-button').click(function(){
  //前回の結果（気温・天気画像）を消去する
    $('.clear').text('');
    $("img").removeAttr("src");

  //郵便番号を取得する
    var postalCode = $('input').val();
    console.log(postalCode);

  //郵便番号の桁数・種類をチェックする
    if (postalCode.match(/^\d{3}-\d{4}$/)){
      console.log("マッチしました");

    } else if(postalCode.match(/^[0-9]{7}$/)) {
      console.log("数字だけになっているので、ハイフンを加えます");

    //sliceでpostalCodeを3桁と4桁に分割、3桁と4桁をハイフンでつないでpostalCodeとする
      postalCode = postalCode.slice(0,3) + "-" + postalCode.slice(3,7);
      console.log(postalCode);

    } else {
      alert("数字の桁数・ハイフン位置が合わないか、数字以外が入力されています");
    };

      //取得した値を使ってurlを作成する
    var url = 'http://api.openweathermap.org/data/2.5/weather?zip=' + postalCode + ',jp&units=metric&appid=4a246ba92f71832905ebc48a7c4b3c2b'
    console.log(url);
    request(url);
  });

//取り出したデータから情報を取り出して整理・出力する
  function request(url){
    $.ajax({
       url: url,
       type: "GET",
       dataType: "json",
       cache: false
     }).done(function(results) {
       console.log(results);

      //入力値が正しい場合、背景の色を水色に変更
       $("body, h5").css({
           "background-color": "#CCFFFF",
       });


    //お天気マークデータを配列より入手し、urlに当てはめる
       var mark = results.weather[0].icon;
       console.log(mark);
       var markUrl = "https://openweathermap.org/img/w/" + mark + ".png"
       $("#logo").attr("src" , markUrl);

    //各気温を取得し、htmlに反映させる
       var temp = results.main.temp;
       console.log(temp);
       $(".now").text("現在の気温は… " +  temp + "℃");

       var temp_max = results.main.temp_max;
       console.log(temp_max);
       $(".max").text("最高気温　" + temp_max + "℃");

       var temp_min = results.main.temp_min;
       console.log(temp_min);
       $(".min").text("最低気温　" + temp_min + "℃");

    //今日の日付と曜日を取得
       var today = new Date();
       var month = today.getMonth() + 1;
       var date = today.getDate();
       var day = today.getDay();
       var weekChars = ["日", "月", "火", "水", "木", "金", "土"];

       var allData = (month + "月" + date + "日(" + weekChars[day] + ")");

    //htmlに反映
       $(".todayData").text(allData);

    //h5を表示させる
       $("h5").css({
           "display": "block"
       });

// ========== 入力値が正しくない場合の処理 ========== //
     }).fail(function(results) {
    //入力された郵便番号が該当しなかった場合、メッセージを表示
       console.log(results);
       var errorMessage = results.responseJSON.message ;
       $('.error-message-1').text('該当する住所が見つかりません');
       $(".error-message-2").text("****" + errorMessage + "****");
    //入力値が正しくない場合、背景の色をピンクに変更
       $("body").css({
           "background-color": "pink",
           "font-weight": "bold"
       });
    //h5を隠す
       $("h5").css({
           "display": "none"
       });
     });
  };
});
