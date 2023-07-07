// 전체 playlist의 opacity를 1.5초에 걸쳐 0 -> 1로 바꿔주면서 서서히 나타나게 하는 효과 
// $('.play').animate({'opacity' : 1}, 1500)

// 현재 브라우저의 가장 아래의 위치 값 확인(현재 브라우저의 전체 높이 + 스크롤을 가장 아래로 내렸을 때의 위치값)
function scrollHandler(){
    let windowBottom = $(window).scrollTop() + $(window).height();
    // console.log(windowBottom);

    $('.play').each(function(){
        // console.log(this);
        let playList = $(this);

        // playlist 절반값 = 특정 playlist의 위에 있는 좌표 + playlist의 높이값
        let playlistHalf = playList.position().top + playList.outerHeight();

        // playlist 절반값이 현재 브라우저의 가장 아래의 위치 값보다 작은 경우
        // 즉, 스크롤이 전체 높이의 절반에 해당되지 않을 경우 1.5초에 걸쳐 playlist가 나타나도록 처리
        if(playlistHalf < windowBottom){
            playList.animate({'opacity' : '1'}, 1500)
        }
    });

    // 현재 브라우저의 가장 아래의 위치 값과 화면의 높이값이 같을 경우 
    // 즉, 스크롤이 가장아래에 있을 경우 top버튼이 보여지도록 하고, 스크롤을 위로 올리면 숨겨지도록 처리
    if(windowBottom == $(document).height()){
       $('.top-btn').fadeIn(); 
    } else{
        $('.top-btn').fadeOut();
    }
}

$(window).on('scroll', scrollHandler);

// top 버튼 클릭 시 1초에 걸쳐 최상단으로 스크롤 이동
$('.top-btn').on('click', function(){
    $('html , body').animate({scrollTop : 0}, 1000)
});