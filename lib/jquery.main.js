


$(document).ready(function() {

  // var btn = document.getElementById('btn');
  // var icon = document.getElementById('icon');
  // var temp_big = document.getElementById('temp_big');
  // var max = document.getElementById('max');
  // var min = document.getElementById('min');
  // var noMatch = document.getElementById('noMatch');
  // var message = document.getElementById('message');

  var btn = $('#btn').get(0);
  var icon = $('#icon').get(0);
  var temp_big = $('#temp_big').get(0);
  var max = $('#max').get(0);
  var min = $('#min').get(0);
  var noMatch = $('#noMatch').get(0);
  var message = $('#message').get(0);


  // document.getElementById("result").style.display ="none";
  // document.getElementById("noMatch").style.display ="none";
  $("#result").hide();
  $("#noMatch").hide();


//検索ボタンを押した時の処理
  $(btn).on('click', function(e){
    // console.log(e.target);
    // $(e.target).attr("style","background:red");
    e.preventDefault();
    // 入力フォームの値を取得
    //郵便番号を取ってくる
    // var zip = document.getElementById("zip").value;
    var zip = $("#zip").val();
    //ハイフンが入っていないとアラートを出す
    // var zip_result = zip.indexOf( '-' );
    // if(zip_result !== -1 ){
    //   console.log('ハイフンが含まれます');
    // }
    // else {
    //   alert('-(ハイフン)が抜けています');
    //   }

    //urlにzipで取得した値を入れる
    var url2 = "http://api.openweathermap.org/data/2.5/weather?zip=" + zip + ",jp&units=metric&appid=f8ea86b47df3e714c7acb15b4fd77aea";


    // 取得した値を別の入力フォームに表示 これはあとで消す
    // var resultForm = document.getElementById("resultForm");
    // resultForm.value = zip;


//置き換えた郵便番号のエリアの天気予報を取得
$.ajax({
    url: url2,
    cache: false
  }).done(function(results) {
    //boxクラスを表示する
    // document.getElementById("result").style.display ="block";
    $("#result").show();
    // document.getElementById("noMatch").style.display ="none";
    $("#noMatch").hide();


    //ここでconsoleに結果を表示する
    console.log(results);

    //検査結果から都市名を定義
    var cityname = results.name;
    console.log("city-name ===========")
    console.log(cityname)


    //検索結果からweatherを定義（アイコン用）
    var weather = results.weather;
    console.log("weather ===========")
    console.log(weather);

    var icon2 = weather["0"]["icon"]
    var url3 = "http://openweathermap.org/img/w/" + icon2 + ".png";
    // var icon_id = document.getElementById('icons');
    var icon_id = $("#icons").get(0);

    //検索結果からmainを定義
    var main = results.main;
    console.log("main ===========");
    console.log(main);

    //検索結果からtempを定義
    var temp2 = main["temp"];
    console.log("temp ===========");
    console.log(temp2);

    //検索結果からmaxを定義
    var max2 = main["temp_max"];
    console.log("temp ===========");
    console.log(max2);

    //検索結果からminを定義
    var min2 = main["temp_min"];
    console.log("temp ===========");
    console.log(min2);

    city_name.textContent = cityname;
    icon_id.src = url3;
    temp_big.textContent = temp2 +"℃";
    max.textContent = max2;
    min.textContent = min2;


  }).fail(function(results) {
    // document.getElementById("noMatch").style.display ="block";
    // document.getElementById("result").style.display ="none";
    $("#noMatch").show();
    $("#result").hide();

    // console.log(results.responseJSON);

  });




});
});
