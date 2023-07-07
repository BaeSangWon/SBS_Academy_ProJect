// slick 기본 형태 (자동x, 좌우버튼ㅇ)
$('.s01').slick()

// 좌우버튼ㅇ, 페이저ㅇ
$('.s02').slick({
    // pager 버튼 생성
    dots: true
})

// 좌우버튼ㅇ, 페이저ㅇ, 자동재생
$('.s03').slick({
    dots: true,
    // 자동재생여부 결정
    autoplay: true,
    // 자동재생 되어지는 간격에 대한 속성
    autoplaySpeed: 3000,
    // 이동속도
    speed: 1000
})

// 케러셀
$('.s04').slick({
    // 한번에 보여지는 카드의 개수
    slidesToShow: 3,
    // 한번에 이동하는 카드의 수
    slidesToScroll: 2,
})
    
// 커스터마이징 버튼
$('.s05').slick({
    // arrows 옵션      : 좌우버튼, 기본값 true
    // prevArrow 옵션   : 이전버튼으로 사용할 대상을 선택
    // nextArrow 옵션   : 다음버튼으로 사용할 대상을 선택
    // appendDots 옵션  : 선택한 태그 안쪽에 페이저 생성
    prevArrow: '.slideBtn .btnPrev',
    nextArrow: '.slideBtn .btnNext',
    dots: true,
    appendDots: '.slideBtn .pager' 
})