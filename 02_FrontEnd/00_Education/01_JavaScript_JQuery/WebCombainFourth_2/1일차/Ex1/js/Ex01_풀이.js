$(document).ready(function(){
    // 메뉴버튼을 누르면 사이드메뉴 + 검정배경 나타남
    $('.btn_m').click(function(){
        $('nav').animate({right:'0'}, 300)
        $('.bkbg').fadeIn()
    }) 

    // 닫기버튼을 누르면 사이드메뉴 + 검정배경 사라짐
    $('.close_sideM').click(function(){
        $('nav').animate({right:'-250px'}, 200)
        $('.bkbg').fadeOut()
    }) 

    // 검정배경 누르면 사이드메뉴 + 검정배경 사라짐
    $('.bkbg').click(function(){
        $('nav').animate({right:'-250px'}, 100)
        $(this).fadeOut()
    }) 
}) 