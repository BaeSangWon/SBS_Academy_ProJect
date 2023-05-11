// 클릭시 색상 변경 #1
$('.box1 .bt11').click(function(){
    $('.box1 p').css ({
        backgroundColor:"red"
    })
})

$('.box1 .bt12').click(function(){
    $('.box1 p').css ({
        backgroundColor:"lawngreen"
    })
})

// 클릭시 목록(1 ~ 5) 변경
$('.box2 li').click(function(){
    $('.box2 li').removeClass('active')
    $(this).addClass('active')
})


// 클릭 시 색상 변경 #2
$('.box3 a').click(function(){
    $('.box3 p').css({
        backgroundColor:"gold"
    })
    // a 태그의 경우 href 속성 때문에 링크된 주소 또는 새로고침이 적용되기 때문에 return false를 적용해줄 것
    // return false 는 해당 함수를 종료하기 때문에 현재 상태에서 속성을 적용할 수 있음 (새로고침 x)
    return false
})


// 마우스 커서 팝업 시 숫자 증가 (자식요소에 마우스 팝업시에도 동일하게 효과 적용)
// 선택된 요소의 범위 내에서 마우스를 이동해도 숫자 증가
let x = 0
$('.box4').mouseover(function(){
    $('.count01').text(++x)
})

// 마우스 커서 팝업 시 숫자 증가 (자식요소에서는 숫자 증가 x)
// 마우스를 요소의 범위에 진입해야만 숫자 증가(즉, 마우스 커서를 요소 밖으로 완전히 나갔다 들어와야만 숫자 증가)
let y = 0
$('.box5').mouseenter(function(){
    $('.count02').text(++y)
})
