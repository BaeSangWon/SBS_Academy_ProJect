$('.box1').mouseover(function(){
    $('.box1 p').delay(2000).stop().fadeOut()
}).mouseout(function(){
    $('.box1 p').delay(2000).stop().fadeIn()
})