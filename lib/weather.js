$(document).ready(function () {

    let defname = ("870-0026");　//検索初期値
    $('#zip').val(defname);

    $('#searchBtn').click(function () {  //検索ボタン押すと

        let target = $('#zip').val();  //郵便番号取得
        if (target.indexOf('-') == -1){
            target = target.slice(0,3) + "-" + target.slice(3);
        }
 
        let apiKey = 'appid=ebe55440ce43321e3960ff9a04bceae9';

        $.ajax({
            url: 'http://api.openweathermap.org/data/2.5/weather?zip=' + target + ',jp&units=metric&' + apiKey,
            type: "GET",
            dataType: "json",
            cache: false

        }).done(function (results) {   //成功した時

            // $(".invalid-feedback").slideUp();
            $(".weatherCard").removeClass('hide');
            $(".zipCodeNone").hide();
            $(".weatherCard").show();

            let imgIcon = results.weather[0].icon; //天気アイコン取得
            $(".weatherImg").attr('src', 'http://openweathermap.org/img/w/' + imgIcon + '.png');
            
            let weatherTemp = Math.round(results.main.temp *10)/10 + '℃';       //現在の気温
            let weatherTempMax = '最高気温' + Math.round(results.main.temp_max) + '℃'; //最高気温
            let weatherTempMin = '最低気温' + Math.round(results.main.temp_min) + '℃'; //最低気温

                $("#temp").html(weatherTemp);
                $("#temp-max").html(weatherTempMax);
                $("#temp-min").html(weatherTempMin);
                console.log(results);
            
        }).fail(function (results) {   //失敗した時

            // $(".invalid-feedback").slideDown();
            $(".weatherCard").hide();
            $(".zipCodeNone").removeClass('hide');
            $(".zipCodeNone").show();
            
            console.log(results.responseJSON);
        });

    });
    
});

