// document.ready
$(function(){


//郵便番号を入力し検索を押すまでは結果を非表示にしておく
		// document.getElementById("content").style.display ="none"
        $("#content").hide();
        $("#fail").hide();
        
		function button(){
			var input = document.getElementById("content");
		if(input.style.display=="block"){

		}else{
			//noneで非表示
		    input.style.display ="none";
			//blockで表示
		    input.style.display ="block";
		}
		}



  //ボタンの要素を取得
     var button = document.getElementById("button");
    //var button = $("#button");


  // ボタンをクリックした時の処理
    button.addEventListener("click", function(results) {
        console.log(results);
      results.preventDefault();

      $("#content").hide();

      // 入力フォームの値を取得
      var input = document.getElementById("input").value;
      console.log(input);

　　　　
      var url = "http://api.openweathermap.org/data/2.5/weather?zip="+input+",jp&units=metric&appid=cbba4c511a7d1b008943497079bab999";
           console.log(url);

      $.ajax({
          url: "http://api.openweathermap.org/data/2.5/weather?zip="+input+",jp&units=metric&appid=cbba4c511a7d1b008943497079bab999",
          cache: false,
        }).done(function(results) {
          console.log(results);

          var main = results['main'];
          console.log('main ==============');
          console.log(main);

          var temp = main['temp'];
          console.log('temp ============');
          console.log(temp);
          change1(temp);

          var temp_max = main['temp_max'];
          console.log('temp ============');
          console.log(temp);
          change2(temp_max);

          var temp_min = main['temp_min'];
          console.log('temp ============');
          console.log(temp_min);
          change3(temp_min);


          var img = document.createElement('img');
            img.src = "http://openweathermap.org/img/w/"+results.weather[0].icon+".png";
            img.alt = results.weather[0].main;
            document.getElementById('icon').appendChild(img);
            $("#fail").hide();
            $("#content").show();

        }).fail(function(results) {
          console.log(results.responseJSON);
          $("#content").hide();
          $("#fail").show();
        });
  })


        function change1(temp){
         document.getElementById('answer-temp').innerHTML = temp ;
        }

        function change2(temp_max){
         document.getElementById('answer-max').innerHTML = temp_max;
        }

        function change3(temp_min){
         document.getElementById('answer-min').innerHTML = temp_min;
        }

        // function change4(icon){
         // document.getElementById('icon').innerHTML = icon;
        // }

});
