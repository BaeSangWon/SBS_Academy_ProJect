// 좌 -> 우측으로의 스크롤의 움직임에 따라 배경 색상 변경
$('.box1').scroll(function(){
    $(this).css({
        backgroundColor: "red"
    })
})

// 좌 -> 우측으로의 스크롤의 움직임이 250px을 넘어가는 순간 배경 색상 변경
$('.box2').scroll(function(){
    let s = $(this).scrollLeft()
    if(s >= 250){
        $(this).css({
            backgroundColor : "yellow"
        })
    } else {
        $(this).css({
            backgroundColor : "lightsteelblue"
        })
    }
})

// 위 -> 아래로의 스크롤의 움직임이 350px을 넘어가는 순간 'active'클래스 추가, 이미지(b33_icon) 사진을 x축으로 -200px <-> 0px 이동
$('.box3').scroll(function(){
    let s = $(this).scrollTop()
    if(s >= 350){
        $('.b33').addClass('active')
    } else {
        $('.b33').removeClass('active')
    }
})

// 브라우저 스크롤 이벤트
// Javascript에서 브라우저는 window라고 표현되어진다
$(window).scroll(function(){
    let i = $(window).scrollTop()
    // offset : target이 가지고 있는 고유 정보
    let b1 = $('.box1').offset().top
    let b2 = $('.box2').offset().top
    if(i >= b2){
        $('body').css({
            backgroundColor : "green"
        })
    } else if(i >= b1){
        $('body').css({
            backgroundColor : "blue"
        })
    } else {
        $('body').css({
            backgroundColor : "#fff"
        })
    }
})
