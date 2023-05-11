$('.btn1').click(function(){
    $('.box .pan').show(5000)
})

$('.bt2').click(function(){
    $('.box1 .pan').hide(5000)
})

$('.bt3').click(function(){
    $('.box1 .pan').toggle(2000)
})

$('.bt4').click(function(){
    $('.box1 .pan').slideDown(2000)
})

$('.bt5').click(function(){
    $('.box1 .pan').slideUp(2000)
})

$('.bt6').click(function(){
    $('.box1 .pan').slideToggle(2000)
})

$('.bt7').click(function(){
    $('.box1 .pan').fadeIn(2000)
})

$('.bt8').click(function(){
    $('.box1 .pan').fadeOut(2000)
})

$('.bt9').click(function(){
    $('.box1 .pan').fadeToggle(2000)
})


$('.box2 button').click(function(){
    $('.box2 .b21').slideToggle(5000)
    $('.box2 .b22').slideToggle(5000, 'linear')
})

$('.box3 button').click(function(){
    $('.box3 .p31').fadeIn(5000).css({
        backgroundColor: 'blue'
    })
    $('.box3 .p32').fadeIn(5000, function(){
        $(this).css({
            backgroundColor: 'blue'
        })
    })
})