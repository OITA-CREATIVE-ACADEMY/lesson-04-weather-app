$(function () {
  $(".navbar-nav li a").click(function (event) {
    $(".navbar-collapse").collapse('hide');
  });
});

$(function () {
  // #で始まるリンクをクリックしたら実行されます
  $('a[href^="#"]').click(function () {
    // スクロールの速度
    var speed = 1000; // ミリ秒で記述
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $('body,html').animate({ scrollTop: position }, speed, 'swing');
    return false;
  });
});

//画像スライダー
$('.slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1300,
});

//画像fade手動
// $('.slider').slick({
//   dots: true,
//   infinite: true,
//   speed: 500,
//   fade: true,
//   cssEase: 'linear'

// });

//スクロールイベント左から
$('.animated-element').waypoint({
  handler: function (direction) {
    if (direction == 'down') {
      //ブラウザの表示域に表示されたときに実行する処理
      $(this.element).addClass('slideInLeft');
      $(this.element).css('display', 'block');
    } else {
      //要素が見えなくなったときに実行する処理
      $(this.element).removeClass('slideInLeft');
      $(this.element).css('display', 'none');
    }
  },
  offset: '80%'
});

//スクロールイベント右から
// $('.animated-element-right').waypoint({
//   handler: function (direction) {
//     if (direction == 'down') {
//       $(this.element).addClass('slideInRight');
//       $(this.element).css('opacity',1);
//     } else {
//       //要素が見えなくなったときに実行する処理
//       $(this.element).removeClass('slideInRight');
//       $(this.element).css('opacity',0);

//     }
//   },
//   offset: '80%'
// });

//短く書いたら
$('.animated-element').waypoint({
  handler: function (direction) {
    if (direction == 'down') {
      //ブラウザの表示域に表示されたときに実行する処理
      var data = $(this.element).attr(クラス名);
      console,log(data);

      $(this.element).addClass('data');
      $(this.distory();
    }
  },
  offset: '80%'
});

//ギャラリー画像フェードイン
$('.img-box').waypoint({
  handler: function (direction) {
    if (direction == 'down') {
      $(this.element).addClass('fadeIn');
      $(this.element).css('opacity', 1);
    } else {
      //要素が見えなくなったときに実行する処理
      $(this.element).removeClass('fadeIn');
      $(this.element).css('opacity', 0);
    }
  },
  offset: '80%'
});

// var waypoint = new Waypoint({
//   element: document.getElementById('waypoint'),
//   handler: function(direction) {
//     console.log('Scrolled to waypoint!')
//   }
// })