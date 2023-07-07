let photoBox = $('.photoBox')
let btn = $('.pager li')
let c = 0 // 화면에 출력중인 이미지의 순서값을 저장(기준점을 잡는다)

btn.click(function(){
    let i = $(this).index()
    // 조건문이 한줄인데 return을 사용할 경우 중괄호 생략가능
    if(i == c) return false
    btn.removeClass('active')
    $(this).addClass('active')
    photoBox.eq(c).stop().animate({
        left: '-100%'
    })
    photoBox.eq(i).css({
        left: '100%'
    }).stop().animate({
        left : 0
    })
    c = i
})

