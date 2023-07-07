// 상
$('.btnT').click(function(){
    $('.sideT').animate({
        top:0
    })
})
$('.sideT .close').click(function(){
    $('.sideT').animate({
        top: '-100%'
    })
})


// 하
$('.btnB').click(function(){
    $('.sideB').animate({
        bottom:0
    })
})
$('.sideB .close').click(function(){
    $('.sideB').animate({
        bottom: '-100%'
    })
})

// 좌
$('.btnL').click(function(){
    $('.sideL').animate({
        left:0
    })
})
$('.sideL .close').click(function(){
    $('.sideL').animate({
        left: '-100%'
    })
})

// 우
$('.btnR').click(function(){
    $('.sideR').animate({
        right:0
    })
})
$('.sideR .close').click(function(){
    $('.sideR').animate({
        right: '-100%'
    })
})