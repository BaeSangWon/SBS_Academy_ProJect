const layOut = new Swiper('.contList', {
    // 세로방향 슬라이드로 움직이게 만듬
    direction: 'vertical',
    pagination: {
        el: '.contPager',
        clickable: true
    },
    // 마우스 휠
    mousewheel: {}
})