$(document).ready(function () {

  $("a").not($(".header .header-wrap .center .logo a, .footer .footer-wrap .bottom .footer-logo a")).click(function(e){
    e.preventDefault();
  })

  // [언어 선택 클릭 시]
  $(".header .header-wrap .right .login ul li").eq(2).click(function(e){
    e.preventDefault();
    alert("이 기능은 현재 지원하지 않는 기능입니다.")
  })



  // [scroll]
  $(window).scroll(function(){
    let pos = $(window).scrollTop();
  
    if (pos > 149) {
      $(".floating ul li:last-child").addClass("on")
    } else {
      $(".floating ul li:last-child").removeClass("on")
    }
  
    if (pos > 0) {
      $(".header").css("background-color", "#fff")
    } else {
      $(".header").css("background-color", "")
    }
  })
  
  $(".floating ul li:last-child").click(function(){
    $("html, body").stop().animate({
        scrollTop: 0
    }, 600)
  })
  
  
  

  // [header]
  $(".header .header-wrap .center .nav ul li, .header .submenu .submenu-list").mouseover(function () {
    $(".header").css("background-color", "#fff")
    $(".header .submenu").addClass("on");
    
    
    let i = $(this).index();
    $(".header .submenu .submenu-wrap .submenu-list").hide().eq(i).show();
    
    $(".header .submenu .submenu-list").mouseover(function(){
      $(".header .header-wrap .center .nav ul li").removeClass("on").eq(i).addClass("on");
    })
    
  }) .mouseout(function () { 
    let header_pos = $(window).scrollTop();
    console.log(header_pos);
    $(".header .submenu").removeClass("on");
    
    if(header_pos > 0){
      $(".header").css("background-color", "#fff")
    } else {
      $(".header").css("background-color", "")
    }
  });


  
  $(".header .header-wrap .center .nav ul li").mouseout(function () {
  
  $(".header .submenu").mouseout(function(){
    $(".header .header-wrap .center .nav ul li").removeClass("on")
    $(".header .submenu .submenu-wrap .submenu-list").hide();
  })

  });
  


  // [main visual]
  $(".swiper .indicator .auto-btn").click(function(){
    $(this).toggleClass("on")

    if($(this).hasClass("on")){
      swiper.autoplay.stop()
    }else{
      swiper.autoplay.start()
    }
  })


  var swiper = new Swiper(".swiper.main-visual", {
    effect: "fade",
    fadeEffect: {
      crossFade: true
    },
    scrollbar: {
      el: ".swiper-scrollbar",
      hide: false,
      draggable: true,
    },
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    centeredSlides: true,
  });



  function scroll_down1(){
    $(".swiper .scroll .arrow img").eq(0).animate({
      bottom: "-30px",
    }, 999.9999999999479 ,"linear");
    $(".swiper .scroll .arrow img").eq(0).animate({
      opacity: 0,
    }, 100 ,"linear");
    $(".swiper .scroll .arrow img").eq(0).animate({
      bottom: 5,
    }, 100 ,"linear");
    $(".swiper .scroll .arrow img").eq(0).animate({
      opacity: 1,
    }, 200 ,"linear");
  }

  function scroll_down2(){
    $(".swiper .scroll .arrow img").eq(1).animate({
      bottom: "-35px",
    }, 700 ,"linear");
    $(".swiper .scroll .arrow img").eq(1).animate({
      opacity: 0,
    }, 400 ,"linear");
    $(".swiper .scroll .arrow img").eq(1).animate({
      bottom: 0,
    }, 100 ,"linear");
    $(".swiper .scroll .arrow img").eq(1).animate({
      opacity: 1,
    }, 200 ,"linear");
  } // ㄴ질문하기 > "linear" 일정속도로 동작 > 숫자 조정하기

    scroll_down1();
    scroll_down2();

  setInterval(function(){
    clearInterval(scroll_down1);
    clearInterval(scroll_down2);
    
    scroll_down1();
    scroll_down2();
  },1500)




  
  

// [special offer]
  var swiper2 = new Swiper(".swiper.special-list", {
    slidesPerView: 3,
    spaceBetween: 18,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    pagination:{
      el: ".swiper-pagination",
      clickable: true
    }
  });
  


  
  // [hotel&resort]
  $('#hotel1').prop('checked',true);
  $("input").eq(0).addClass("chk");
  $(".hotel .hotel-wrap .room-wrap .room-title .room-list").eq(0).find("ul li").eq(0).addClass("on");
  $(".hotel .hotel-wrap .bg-img .img-list").eq(0).find("img").eq(0).fadeIn();
  $(".hotel .hotel-wrap .room-wrap .room-img .img-list").eq(0).find("img").eq(0).fadeIn();

  $(".hotel .hotel-wrap .room-wrap .room-title label").click(function(){
    let click_index = $(".hotel .hotel-wrap .room-wrap .room-title label").index(this);
    $("input").removeClass("chk").eq(click_index).addClass("chk")

    $(".hotel .hotel-wrap .room-wrap .room-title .room-list ul li").removeClass("on");
    $(".hotel .hotel-wrap .room-wrap .room-title .room-list").eq(click_index).find("ul li").eq(0).addClass("on")

    $(".hotel .hotel-wrap .bg-img .img-list img, .hotel .hotel-wrap .room-wrap .room-img .img-list img").hide();

    $(".hotel .hotel-wrap .bg-img .img-list").eq(click_index).find("img").eq(0).fadeIn(500);
    $(".hotel .hotel-wrap .room-wrap .room-img .img-list").eq(click_index).find("img").eq(0).fadeIn(500);
  
  })

  // $(".hotel .hotel-wrap .room-wrap .room-title .room-list:nth-of-type(1) ul li").eq(0).addClass("on")

  // $(".hotel .hotel-wrap .room-wrap .room-title label").click(function(){
  //   let k = $(".hotel .hotel-wrap .room-wrap .room-title label").index(this);
  //   console.log(k)

  //   $(".hotel .hotel-wrap .room-wrap .room-title .room-list ul li").removeClass("on");
  //   $(".hotel .hotel-wrap .room-wrap .room-title .room-list:nth-of-type("+(k+1)+") ul li").eq(0).addClass("on");
  //   // ㄴ질문하기 > 자식을 찾는 find이용하면 좋다. / (문자열) ("데이터") ("+(변수)+")
  

  // })


  $(".hotel .hotel-wrap .room-wrap .room-title .room-list ul li").click(function(){
    let room_num = $(this).index();
    let hall_num = $("input").index($(".chk"));
    
    console.log(hall_num)
    
    $(".hotel .hotel-wrap .room-wrap .room-title .room-list ul li").removeClass("on");
    $(".hotel .hotel-wrap .room-wrap .room-title .room-list").eq(hall_num).find("ul li").eq(room_num).addClass("on")

    $(".hotel .hotel-wrap .bg-img .img-list img, .hotel .hotel-wrap .room-wrap .room-img .img-list img").hide();
    $(".hotel .hotel-wrap .bg-img .img-list").eq(hall_num).find("img").eq(room_num).fadeIn(500);
    $(".hotel .hotel-wrap .room-wrap .room-img .img-list").eq(hall_num).find("img").eq(room_num).fadeIn(500);

  })




  // [dining]
  var swiper3 = new Swiper(".swiper.dining-swiper", {
    freeMode: true,
    slidesPerView: "auto",
    mousewheel: true, 
    grabCursor: true,
    direction: "horizontal",
    scrollbar: {
      el: ".swiper-scrollbar",
      draggable: true,
    }
  });


  let prev_index = 0;
  $(".dining .dining-wrap .dining-menu ul li").eq(0).addClass("on")
  $(".dining .dining-wrap .dining-menu ul li").click(function(){
    let top_index = $(this).index();
    // console.log(prev_index)
    if(prev_index == top_index){
      return;
    }
    $(".dining .dining-wrap .dining-menu ul li").removeClass("on").eq(top_index).addClass("on")
    $(".dining .dining-wrap .dining-content .slide-area").eq(prev_index).css("position", "absolute").fadeOut(500);
    $(".dining .dining-wrap .dining-content .slide-area").eq(top_index).show().stop().css("left", "100%").css("position", "absolute").animate({
      left: 0+"%"
    }, 500).delay(500).css("position", "relative")
    prev_index = top_index;
  
  })




  // [insta]
  var swiper4 = new Swiper(".swiper.insta-swiper", {
    freeMode: true,
    slidesPerView: "auto",
    spaceBetween: 20,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
    },
    speed: 2000,
    // grabCursor: true,
  });

  $(".insta .insta-swiper").mouseover(function(){
    swiper4.autoplay.stop();
  }).mouseout(function(){
    swiper4.autoplay.start();
  })




// [reservation]
$(".header .header-wrap .right .resv .resv-btn").click(function(){
  if($(".header .header-wrap .right .resv .resv-menu").hasClass("animate__fadeInDown")){
    $(".header .header-wrap .right .resv .resv-menu").removeClass("animate__fadeInDown").addClass("animate__fadeOutUp");

    setTimeout(function() { 
      $(".header .header-wrap .right .resv .resv-menu").removeClass("animate__fadeOutUp"); 
    }, 850);

  } else {
    $(".header .header-wrap .right .resv .resv-menu").removeClass("animate__fadeOutUp").addClass("animate__fadeInDown");
  }

  $(".header .header-wrap .right .resv .resv-menu .resv-content .resv-list .select").removeClass("on");
})

$(".header .header-wrap .right .resv .resv-menu > ul li").eq(0).addClass("on")
$(".header .header-wrap .right .resv .resv-menu .resv-content .resv-list").eq(0).show();

$(".header .header-wrap .right .resv .resv-menu > ul li").click(function(){
  let tab_idx = $(this).index();
  $(".header .header-wrap .right .resv .resv-menu > ul li").removeClass("on").eq(tab_idx).addClass("on");
  $(".header .header-wrap .right .resv .resv-menu .resv-content .resv-list").hide().eq(tab_idx).show();

  $(".header .header-wrap .right .resv .resv-menu .resv-content .resv-list .select").removeClass("on");
})


let adult_count = 2;
let kids_count = 0;

$(".header .header-wrap .right .resv .resv-menu .resv-content .resv-list .people .adult span").text(adult_count)
$(".header .header-wrap .right .resv .resv-menu .resv-content .resv-list .people .kids span").text(kids_count)

$(".header .header-wrap .right .resv .resv-menu .resv-content .resv-list .people .adult img").click(function(){
  let count_idx = $(this).index();

  if (count_idx == 0) {
    adult_count--;
    if (adult_count < 0) {
      adult_count = 0;
    }
  } else {
    adult_count++;
    if (adult_count == 5) {
      adult_count = 4;
    }
  }

  $(".header .header-wrap .right .resv .resv-menu .resv-content .resv-list .people .adult span").text(adult_count)
})

$(".header .header-wrap .right .resv .resv-menu .resv-content .resv-list .people .kids img").click(function(){
  let count_idx = $(this).index();

  if (count_idx == 0) {
    kids_count--;
    if (kids_count < 0) {
      kids_count = 0;
    }
  } else {
  kids_count++;
    if (kids_count == 5) {
      kids_count = 4;
    }
  }

  $(".header .header-wrap .right .resv .resv-menu .resv-content .resv-list .people .kids span").text(kids_count)
})




$(".header .header-wrap .right .resv .resv-menu .resv-content .resv-list .select").click(function(){
  $(this).toggleClass("on");
  $(".window").show();
})
$(".window").click(function(){
  $(".header .header-wrap .right .resv .resv-menu .resv-content .resv-list .select").removeClass("on");
  $(".window").hide();
})

$(".header .header-wrap .right .resv .resv-menu .resv-content .resv-list .resv-date input").click(function(){
  $(".window").show();
})
$(".window").click(function(){
  $(".window").hide();
})


$(".header .header-wrap .right .resv .resv-menu .resv-content .resv-list .search").click(function(){
  $(".header .header-wrap .right .resv .resv-menu .resv-content .resv-list .select").removeClass("on");
})


// $("html").click(function(e){
//   if($(".header .header-wrap .right .resv .resv-menu .resv-content .resv-list .select").hasClass("area")){
//     $(".header .header-wrap .right .resv .resv-menu .resv-content .resv-list .select").removeClass("on")
//   }
// })



$(".header .header-wrap .right .resv .resv-menu .resv-content .resv-list").eq(0).find(".select ul li").click(function() {
  var text = $(this).html();
  // console.log(text)
  $(".header .header-wrap .right .resv .resv-menu .resv-content .resv-list").eq(0).find(".select p").html(text);
  $("#consultation-state-ul").toggleClass("on");
})

$(".header .header-wrap .right .resv .resv-menu .resv-content .resv-list").eq(1).find(".select ul li").click(function() {
  var text = $(this).html();
  // console.log(text)
  $(".header .header-wrap .right .resv .resv-menu .resv-content .resv-list").eq(1).find(".select p").html(text);
  $("#consultation-state-ul").toggleClass("on");
})






	
$('input[id="chk-inout"]').daterangepicker();

$('input[id="chk-inout"]').daterangepicker({
  locale: {
    "separator": " ~ ", 
    "format": 'YYYY.MM.DD', 
    "daysOfWeek": ["S", "M", "T", "W", "T", "F", "S"],
    "monthNames": ["01 .", "02 .", "03 .", "04 .", "05 .", "06 .", "07 .", "08 .", "09 .", "10 .", "11 .", "12 ."]
  },

  minYear: 2023,
  maxYear: 2053,
  autoApply: true,
  // "maxSpan": {
  //     "days": 30
  // },
  startDate: "2023.01.27",
  endDate: "2023.01.29",
  minDate: "2023.01.27",
  opens: "left"
});


$('input[id="chk-date"]').daterangepicker();

$('input[id="chk-date"]').daterangepicker({
  locale: {
    "format": 'YYYY.MM.DD', 
    "daysOfWeek": ["S", "M", "T", "W", "T", "F", "S"],
    "monthNames": ["01 .", "02 .", "03 .", "04 .", "05 .", "06 .", "07 .", "08 .", "09 .", "10 .", "11 .", "12 ."]
  },

  singleDatePicker: true,
  minYear: 2023,
  maxYear: 2053,
  autoApply: true,
  // "maxSpan": {
  //     "days": 30
  // },
  startDate: "2023.01.27",
  endDate: "2023.01.29",
  minDate: "2023.01.27",
  opens: "left"
});




// [m-nav]
$(".m-hbg ul").click(function(){
  $(this).toggleClass("on");
  $(".window2, .m-nav").toggleClass("on");
})









}); // jquery

