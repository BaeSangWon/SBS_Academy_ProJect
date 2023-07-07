$(document).ready(function(){
    // 메뉴버튼 클릭 시 사이드메뉴 + 백그라운드 배경 나타남
    $('.btn_m').click(function(){
       $('nav').animate({right: 0}, 300) 
       $('.bkbg').animate({left: 0}, 300)
    })

    // 닫기버튼 클릭 시 사이드메뉴 + 백그라운드 배경 사라짐
    $('.close_sideM').click(function(){
        $('nav').animate({right: -300}, 300) 
        $('.bkbg').animate({left: -500}, 300)
    })
})