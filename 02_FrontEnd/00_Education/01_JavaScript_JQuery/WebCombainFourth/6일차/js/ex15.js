/* 
let 변수이름 = new Swiper('.swiper-wrapper의 부모태그',{
    옵션이름 : '값',
    옵션이름 : '값',
    옵션이름 : {
        옵션2이름 : '값',
        옵션2이름 : '값',
    }
})
*/
const slide01 = new Swiper('.slide_list', {
    loop: true,
    pagination: {
        el: '.slide_wrap .pager',
        clickable : true
    },
    navigation: {
        nextEl : '.slide_wrap .btnR',
        prevEl : '.slide_wrap .btnL'
    },
    // scroll bar는 loop:true와 함께 사용할 수 없다
    scrollbar: {
        el: '.slide_wrap .scrollbar'
    },
    // 자동재생
    autoplay: {
        delay: 4000
    },
    // 슬라이드 움직이는 속도
    speed: 1000
})

const pdList = new Swiper('.product_list', {
    // 슬라이드 보여지는 개수
    slidesPerView : 2,
    // 슬라이드 양 옆에 마진(여백) 주기
    spaceBetween : 3
})