$('.pdTabBtn ul li').click(function(){
    let i = $(this).index()
    $('.pdTabBtn ul li').removeClass('active')
    $(this).addClass('active')
    $('.pdList').removeClass('view')
    $('.pdList').eq(i).addClass('view')
    $('.pdList').slick('setPosition')
})

$('.pdList').slick({
    arrows: false,
    dots: true,
    slidesToShow: 2,
    // 반응형 작업시에 모바일이 먼저 계산되도록 설정!
    mobileFirst: true,
    responsive: [
        {   
            // 화면너비값이 767px을 초과하였을 때 셋팅
            breakpoint: 767,
            settings: {
                slidesToShow: 4
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 5,
                dots: false
            }
        }
    ]
})