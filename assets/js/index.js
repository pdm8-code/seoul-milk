$(document).ready(function(){
  $('.header .nav li a').mouseenter(function(){
    $(this).next().stop().slideDown(500);
  });

  $('.header .nav li').mouseleave(function(){
    $(this).find('.sub-menu').stop().slideUp(500);
  });

  //헤더 언어 클릭 이벤트
  $(".btn-menu .langs").on("click",function(){
    $(this).toggleClass("active");
    if($(this).hasClass("active")){
      $(".btn-menu .langs .langs-menu").slideDown();
    } else {
      $(".btn-menu .langs .langs-menu").slideUp();
    }
  });

  $('.btn-menu .langs .langs-menu a').on('click',function(){
    let _langs = $(this).text();
    $('.btn-menu .langs span').text(_langs);
  });



  // 비주얼2 클릭 이벤트
  $('.visual2 .container .about-menu a').on('click',function(){
    $('.visual2 .container .about-menu a').removeClass("active");
    $(this).addClass('active');
    
    $('.visual2 .container .bot-wrap').hide();

    let index = $(this).index();
    $('.visual2 .container .bot-wrap').eq(index).show();

    var bgImages = [
      'url(assets/img/visual2_img1.png) no-repeat center / cover',  // 첫 번째 bot-wrap의 배경 이미지
      'url(assets/img/visual2_img2.png) no-repeat center / cover',  // 두 번째 bot-wrap의 배경 이미지
      'url(assets/img/visual2_img3.png) no-repeat center / cover',  // 세 번째 bot-wrap의 배경 이미지
      'url(assets/img/visual2_img4.png) no-repeat center / cover',  // 네 번째 bot-wrap의 배경 이미지
      'url(assets/img/visual2_img5.png) no-repeat center / cover'   // 다섯 번째 bot-wrap의 배경 이미지
    ];
    $('.visual2').css('background', bgImages[index]);

  
  });

  //비주얼2 기본페이지 로드될때 화면
  $('.visual2 .container .bot-wrap').hide();
  $('.visual2 .container .bot-wrap').eq(0).show();

  //product 슬라이드
  let swiper = new Swiper('.productSwiper', {
    slidesPerView: 'auto',
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      1300: {
        slidesPerView: 3,
        centeredSlides: true,
      },
      1000: {
        slidesPerView: 2,
        centeredSlides: false,
        spaceBetween: 40
      },
      0: {
        slidesPerView: 1,
        centeredSlides: false,
        spaceBetween: 0
      },
    },
  });


  


  // 푸터 브랜드 sns 클릭 이벤트
  $('.footer .container .footer-top .sns-btn .sns-wrap').hide();
  $('.footer .container .footer-top .sns-btn').on('click',function(){
    $(this).toggleClass('active');
    if($(this).hasClass('active')){
      $('.footer .container .footer-top .sns-btn .sns-wrap').show();
    } else {
      $('.footer .container .footer-top .sns-btn .sns-wrap').hide();
    }
  });
  // 푸터 Family Site 클릭 이벤트
  $('.footer .container .family-btn .family-wrap').hide();
  $('.footer .container .family-btn').on('click',function(){
    $(this).toggleClass('active');
    if($(this).hasClass('active')){
      $('.footer .container .family-btn .family-wrap').show();
    } else {
      $('.footer .container .family-btn .family-wrap').hide();
    }
  });

  // 헤더 메뉴 바 클릭 이벤트
  $('.header .container .btn-menu .menu-bar').on('click',function(){
    $('.site-map').toggleClass('active');
    $('.header .container .nav').hide();
  });

  $('.site-map .sec1 .close-btn').on('click',function(){
    $('.site-map').removeClass('active');

    // 화면 너비가 940px 이하일 경우 nav를 보이지 않도록 유지
    if ($(window).width() > 940) {
      $('.header .container .nav').show();
    }
  });

  $(window).resize(function(){
    if($(this).width() > 958){
      $('.site-map').removeClass('active');
    }
  });


    // 화면 크기 변경 시 nav 상태 유지
  $(window).on('resize', function() {
    if ($(window).width() > 940) {
      // 화면이 940px 이상일 때는 nav가 항상 보여야 함
      $('.header .container .nav').show();
    } else {
      // 화면이 940px 이하일 때는 nav를 숨김
      $('.header .container .nav').hide();
    }
  });

  // 사이트맵 클릭 이벤트
  $('.sec2 .item span').on('click',function(){
    $('.sec2 .item .sub-menu').slideUp();

    if($(this).next('.sub-menu').is(':hidden')) {
      $(this).next('.sub-menu').slideDown();
    }
  });

  $('.site-map .sec3 button').on('click',function(){
    $('.site-map .sec3 button').removeClass('active');
    $(this).addClass('active');
  });

  // 탑 버튼 클릭시 이벤트
  $(window).scroll(function(){
    if($(this).scrollTop() > 100) {
      $(".top-btn").show();
    } else {
      $(".top-btn").hide();
    }
  });

  $(".top-btn").on('click',function() {
    $("html, body").animate({ scrollTop: 0 }, 500);
    return false;
  });





});