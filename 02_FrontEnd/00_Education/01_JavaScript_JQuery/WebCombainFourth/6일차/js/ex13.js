$('.pdTabBtn ul li').click(function(){
    let i = $(this).index()
    $('.pdTabBtn ul li').removeClass('active')
    $(this).addClass('active')
    $('.pdList').removeClass('view')
    $('.pdList').eq(i).addClass('view')
    // display:none 처리가 된 슬라이드 영역을 화면에 노출시키면, 슬릭영역이 제대로 자리를 잡지 못한다.
    // 최초 한번 슬라이드가 동작한 후에는 슬라이드가 정상적으로 자리를 잡는다.
    // 그래서 setPosition 옵션을 사용하도록 해두었다
    $('.pdList').slick('setPosition')
})

$('.pdList').slick({
    arrows: false,
    dots: true,
    slidesToShow: 2
})