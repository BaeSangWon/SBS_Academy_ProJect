// $('.box1').css('backgroundColor', 'blue')
$('.box1').css({
    width: '50%',
    height: 300,
    backgroundColor: 'green'
})

// 변수 t에 클래스 .box .p21의 display 값(block) 저장
let t = $('.box2 .p21').css('display')
t = "none"
if(t == 'none'){
    $('.box2 .p22').css({
        border: '5px solid #000'
    })
} else {
    $('.box2 .p22').css({
        border: 0
    })
}