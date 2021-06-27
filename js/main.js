$(function(){
  // 都道府県の取得
  $('.area ul li').click(function(){
    var name = $(this).text();
    $('#pref').text(name);
    $('.map').fadeOut();
    $('body,html').css('overflow', 'visible');
    return false;
  });

  $('#pref').click(function(){
    $('.map').fadeIn();
    $("html,body").css("overflow", "hidden");
    return false;
  });

  $('.map').click(function(){
    $('.map').fadeOut();
    $('body,html').css('overflow', 'visible');
    return false;
  });


  // スクロール関係
  // topへ戻るボタン
  $('#to_top').hide();
    $(window).scroll(function(){
    if($(this).scrollTop()>600){
      $('#to_top').fadeIn();
    }else{
      $('#to_top').fadeOut();
      return false;
    }
  });

  $('#to_top').click(function() {
    $('html,body').animate({ 'scrollTop': 0 }, 400);
    return false;
  });


// メニューをクリックするとスクロール
  $('#header_nav ul li a').click(function(){
    var href =$(this).attr('href');
    var position = $(href).offset().top;
    $('html, body').animate({'scrollTop': position}, 400);
    return false;
  });


  // バーガーメニュー
  $("#burger").click(function () {
    if($(this).hasClass('active')){
      $(this).removeClass('active');
      $('#sp_nav_wrapper').removeClass('active');
      $("html,body").css("overflow", "visible");
      return false;
    }else{
      $(this).addClass('active');
      $('#sp_nav_wrapper').addClass('active');
      $("html,body").css("overflow", "hidden");
      return false;
    }
  });

  $('#sp_nav_menu ul li a').click(function(){
    $("#burger").removeClass('active');
    $('#sp_nav_wrapper').removeClass('active');
    $('body,html').css('overflow', 'visible');
  });

  $('#sp_nav_wrapper').click(function(){
    $("#burger").removeClass('active');
    $('#sp_nav_wrapper').removeClass('active');
    $('body,html').css('overflow', 'visible');
  });

  // サイズを変えた時にハンバーガーメニューの処理を消す
  $(window).on('load resize', function(){
      var w = $(window).width();
      var x = 1025;

    if (w <= x) {
      $('#burger').removeClass('active');
      $('#sp_nav_wrapper').removeClass('active')
      $("html,body").css("overflow", "visible");
    }
  });


  //アコーディオンをクリックした時の動作
  $('.q').on('click', function() {
    var findElm = $(this).next(".answer");
    $(findElm).slideToggle();
    if($(this).hasClass('close')){
      $(this).removeClass('close');
    }else{
      $(this).addClass('close');
    }
  });


  $(window).on('load', function(){
    $('.accordion-area li:first-of-type section').addClass("open"); 
    $(".open").each(function(index, element){	
      var Title =$(element).children('.q');
      $(Title).addClass('close');
      var answer =$(element).children('.answer');
      $(answer).slideDown(500);
    });
  });


});




