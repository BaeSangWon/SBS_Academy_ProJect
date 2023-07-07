// 1) 애니메이션이 없는 움직임
// $('.gnb').mouseover(function(){
//     $(this).css({
//         height : 410
//     })

       // show() = display:none , hide() = display:block
       // hover와 같은 효과는 stop()을 사용하지 않아도 된다
//     $('.gnbBg').show()
// }).mouseout(function(){
//     $(this).css({
//         height : 40
//     })
//     $('.gnbBg').hide()
// })

// 2) 애니메이션이 있는 움직임
$('.gnb').mouseover(function(){
    $(this).stop().animate({
        height : 410
    })
    $('.gnbBg').stop().slideDown()
}).mouseout(function(){
    $(this).stop().animate({
        height : 40
    })
    $('.gnbBg').stop().slideUp()
})