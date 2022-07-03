$(function(){
    // 첫 슬라이드에서는 주메뉴가 투명이었다가. 스크롤을 내리면 두번째 슬라이드부터 하얀색이 되게 하는 것
    //화면이 스크롤 되어서 첫번째 section 지나가면 header에 active설정
    $(window).scroll(function(){
        //section.s1의 높이값을 sh변수에 저장
        var sh=$('.s1').height();
        //window의 scrollTop값을 wh변수에 저장
        var wh=$(window).scrollTop();
        //만약 s1의 높이값보다 window의 scrollTop값이 커지면
        if(wh > sh){
            //header에 active설정
            $('header').addClass('active'); 
        //s1의 높이값보다 window의 scrollTop값이 크지 않으면    
        }else{
            //header에서 active제거
            $('header').removeClass('active');  
        }
    });//window scroll event



    //메인메뉴에 마우스오버했을 때 서브메뉴와 서브메뉴배경 나옴 (pc버전)
    $('.header_wrap > nav').hover(function(){
        $('.header_wrap > nav .sub').stop().slideDown();
        $('.sub_bg').stop().slideDown();
        $('.header_wrap').addClass('active');
    },
    //메인메뉴에서 마우스 아웃했을 때 서브메뉴와 서브메뉴배경 들어감
    function(){
        $('.header_wrap > nav .sub').stop().slideUp();
        $('.sub_bg').stop().slideUp();
        $('.header_wrap').removeClass('active');
    });
    //header에 마우스 오버했을 때 
    $('header').hover(function(){
        $('.header_wrap').addClass('active');
    },
    //header에서 마우스아웃했을 때
    function(){
        $('.header_wrap').removeClass('active');
    });

    //swiper slide (visual)
    var swiper = new Swiper(".mySwiper", {
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        effect:'fade',
        loop:true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        }
      });
    // swiper slide(product)
    var swiper = new Swiper(".mySwiper2", {
        spaceBetween: 0,
        slidesPerGroup: 3,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        // 모바일일때는 두번째 슬라이드가 1, 태블릿은 2개, PC는 3개가 나옴
        breakpoints:{
            1024:{
                slidesPerView: 3,
                slidesPerGroup:3
            },
            768:{
                slidesPerView: 2,
                slidesPerGroup: 2
            },
            480:{
                slidesPerView: 1,
                slidesPerGroup: 1
            }
        }
    });
    // 위로 버튼 클릭하면 화면 맨 위로 이동
    $('.fa-arrow-up').click(function(){
        $('html,body').animate({'scrollTop':0});
    });

    //menu_btn 버튼을 클릭하면 #navi 나옴
    $('.menu_btn').click(function(){
        $('#navi').animate({'right':0});
        return false;
    });

    // fa-arrow-right 버튼을 클릭하면 #navi 들어감
    $('.fa-arrow-right').click(function(){
        $('#navi').animate({'right':'-100vw'});
        return false;
    });
    // 태블릿, 모바일 버전 내비게이션(세로 아코디언 메뉴)
    $('#navi nav > ul > li > a').click(function(){
        //만약 클릭한 메뉴에 active가 설정되어 있지 않다면 / !=(비교연산자)
        if($(this).attr('class') != 'active'){
            //모든 서브메뉴 들어감
            $('#navi nav .sub').slideUp();
            //모든 메뉴에서 active 제거
            $('#navi nav > ul > li > a').removeClass('active');
            //클릭한 메뉴의 서브메뉴만 나옴, next(): 다음 형제객체 가리킴
            $(this).next().slideDown();
            // 클릭한 메뉴에만 active 설정
            $(this).addClass('active');

        }else{
            // 클릭한 메뉴에서 active 제거
            $(this).removeClass('active');
            // 클릭한 메뉴의 서브메뉴 들어감
            $(this).next().slideUp();
        }
    });
}); //document reay