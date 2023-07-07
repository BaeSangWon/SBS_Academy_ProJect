let s = 2;
let photo = $('.sImgBox')
let pager = $('.sPager ul li')
let btnPrev = $('.sPrev')
let btnNext = $('.sNext')
let all = photo.size()
let play = $('.sPlay')
let stop = $('.sStop')
let autoPlay

// 초기값 세팅
photo.eq(s).css({
    left: 0
})
pager.eq(s).addClass('active')

// 페이저 클릭
pager.on({
    click: function(){
        let j = $(this).index()
        pager.removeClass('active')
        $(this).addClass('active')
        if(j > s) moveToLeft(j)
        if(j < s) moveToRight(j)
    }
})

// 좌우 버튼
btnPrev.on({
    click: function(){
        let n = s - 1
        if (n < 0) n = all - 1
        pager.eq(n).click()
    }
})
btnNext.on({
    click: function(){
        let n = s + 1
        if (n == all) n = 0
        pager.eq(n).click()
    }
})

// 재생/중지 버튼
stop.on({
    click: function(){
        clearInterval(autoPlay)
        stop.hide()
        play.show()
    }
})
play.on({
    click: function(){
        timer()
        play.hide()
        stop.show()
    }
})

// 함수 생성
function moveToLeft(i){
    let currentPhoto = photo.eq(s)
    let newPhoto = photo.eq(i)
    currentPhoto.stop().animate({left: '-100%'}, 1000)
    newPhoto.css({left: '100%'}).stop().animate({left: 0},1000)
    s = i
}
function moveToRight(i){
    let currentPhoto = photo.eq(s)
    let newPhoto = photo.eq(i)
    currentPhoto.stop().animate({left:'100%'},1000)
    newPhoto.css({left: '-100%'}).stop().animate({left: 0},1000)
    s = i
}
/* 
- 자동재생 명령
setInterval(함수, 시간)
설정한 시간의 간격마다 함수 명령을 반복해서 실행한다

- 자동재생 멈춤
clearInterval(변수)

setInterval() 단독으로 사용해도 실행되긴 하지만, 만약에 clearInterval()을 사용해서
자동재생을 컨트롤 해줘야하는 경우라면 setInterval()을 저장해둘 필요가 없다

let 변수 = setInterval(함수, 시간)
clearInterval()
*/
timer()
function timer(){
    autoPlay = setInterval(function(){
        let n = s + 1
        if (n == all) n = 0
        pager.eq(n).click()
    },3000)
}