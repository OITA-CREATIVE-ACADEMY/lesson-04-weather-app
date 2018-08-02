$(function() {
  // ボタンの要素を取得
  var button = document.getElementById("button");
  // ボタンをクリックした時の処理
  button.addEventListener("click", function(e) {

  e.preventDefault();

      // 入力フォームの値を取得
      var textForm = document.getElementById("textForm").value;


        $.ajax({
            url: 'http://api.openweathermap.org/data/2.5/weather?zip=' + textForm + ',jp&units=metric&appid=f989467e34cb3f5f4faf325d0fba0187',
            cache: false
          })
          .done(function(results) {
            // 成功した時
            console.log(results);

            var main = results["main"];
            var temp = main["temp"];
            console.log(temp);

            var main = results["main"];
            var temp_max = main["temp_max"];
            console.log(temp_max);

            var main = results["main"];
            var temp_min = main["temp_min"];
            console.log(temp_min);

            var temp_dom = document.getElementById("temp");
            $(temp_dom).text(temp);

            var temp_dom = document.getElementById("temp_max");
            $(temp_dom).text(temp_max);

            var temp_dom = document.getElementById("temp_min");
            $(temp_dom).text(temp_min);


            var weather = results["weather"];
            var aaa = weather[0];
            var icon = aaa["icon"];
            console.log(icon);

            var img_url = "http://openweathermap.org/img/w/"+icon+".png";
            var icon_dom = document.getElementById("icon");
            $(icon_dom).attr("src",img_url);


          })
          .fail(function(results) {
            console.log(results.responseJSON);
            // 失敗した時


          });
          $('search').click(function(event){

          });




  });




});
