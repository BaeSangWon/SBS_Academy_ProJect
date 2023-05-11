

// -------------------------------------------- 1. 태그 컬러 변경 -------------------------------------------------

// JQuery
$('.p1').css({
    color : 'red'
})

// JavaScript
document.getElementById('p2').style.color = 'blue'

// -------------------------------------------- 2. 텍스트 변경 ---------------------------------------------------

// JQuery
let languageName = "제이쿼리"
$('.box2 .p3').text(languageName)

let p4 =  $('.box2 .p4').text()
$('.box2 .p5').text(p4)

let userName = $('.box2 .p4').text()
$('.box2 .p4').html(`<strong>${userName}</strong>님 환영합니다`)

// JavaScript
document.getElementById('p_6').innerText
document.getElementById('p_7').innerHTML="Java"

// -------------------------------------------- 3. CSS 명령 ------------------------------------------------------

// JQuery
$('.box3').css({
    width: '100%',
    height: 50,
    color : 'navy',
    backgroundColor: 'yellow',
    border : '2px solid #000',
    marginTop : 20,
    textAlign : 'center',
    lineHeight : '50px',        // lineHeight의 경우 명확히 px단위를 써줘야함 부모의 높이값을 그대로 수치만 적을 경우 텍스트 세로 가운데 정렬 안됨
})

let box4 = $('.box4').css('display')
box4 = 'none'
if(box4 == 'none'){
    $('.box4').css({
        border: '5px solid yellow'
    })
} else {
    $('.box4').css({
        border : 0
    })
}

// JavaScript
let box4Text = document.getElementById('box-4')
box4Text.style.backgroundColor = "gold"
box4Text.style.color = "blue"
box4Text.style.fontWeight = "bolder"
box4Text.style.textAlign = "center"
box4Text.style.lineHeight = "70px"

let box4Display = document.getElementById('box-4')
if(box4Display.offsetWidth > 0 && box4Display.offsetHeight > 0){    // element.offsetWidth > 0 && element.offsetHeight > 0) 일경우 display : none와 같음
    box4Display.style.color = 'green'                               // 즉 offsetWidth && offsetHeight > 0 이라는 것은 요소가 자리를 차지하고 보여지는 상태라는 뜻
}else {
    box4Display.style.color = 'blue'
}

// -------------------------------------------- 4. Class 추가 / 제거 ------------------------------------------------------

// JQuery
let box5 = $('.box5').css('display')
console.log(box5)
if(box5 == 'block'){
    $('.box5').addClass('on')
} else {
    $('.box5').removeClass('on')
}

$('#box-6').click(function(){
    if($(this).hasClass("clicked")){
        $(this).removeClass("clicked")
    }else {
        $(this).addClass("clicked")
    }
    let alertMsg = $('#box-6')[0].className
    alert(alertMsg)
})

// JavaScript
let box5Add = document.getElementById('box-5')
box5Add.className += ' new'                // 클래스 이름 추가 시 스페이스도 추가해야 함
box5Add.classList.add('off')               // element.className += ' 이름'; 과 달리 스페이스를 추가해주지 않아도 됨 
                                           // classList.add('name1' , 'name2', 'name3' 등...) 한번에 여러개 클래스 추가 가능
box5Add.addEventListener('click' , getClassItemName)

function getClassItemName(){
    const CLASSLENGTH = document.getElementById('box-5').classList.length
    for(let i = 0; i < CLASSLENGTH; i++){
    alert(document.getElementById('box-5').classList.item(i));
    }
}

if(box5Add.classList.length == 1){
    box5Add.style.backgroundColor = 'black'
    box5Add.style.color = 'white'
} else if(box5Add.classList.length == 2){
    box5Add.style.backgroundColor = 'blue'
    box5Add.style.color = 'black'
} else if(box5Add.classList.length >= 3){
    box5Add.style.backgroundColor = 'pink'
    box5Add.style.color = 'red'
    box5Add.style.fontWeight = 'bolder'
}