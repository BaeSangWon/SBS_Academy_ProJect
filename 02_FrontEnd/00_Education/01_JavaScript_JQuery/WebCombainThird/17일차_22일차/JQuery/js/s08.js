$(window).resize(function(){
    b1BgColor()
})

// 통상적인 모니터 해상도 : 1920 x 1080
function b1BgColor(){
    let i = $(window).width()
    if(i >= 1000){
        $('.box1').css({
            backgroundColor : "red"
        })
    } else {
        $('.box1').css({
            backgroundColor : "blue"
        })
    }
}
    
    