let image = $('.photoBox')
let pager = $('.pager li')
let c = 0 

// ('셀렉터').이벤트() : 스크립트에 의해 추가되는 영역(동적인 영역)에는 이벤트 적용 안됨
// ('셀렉터').on(이벤트) : 스크립트에 의해 추가되는 영역(동적인 영역)에도 이벤트 적용 가능
pager.on({
    click: function () {
        let i = $(this).index();
        // 현재 화면상의 이미지
        let currentImg = image.eq(c);
        // 클릭으로 화면에 들어올 예정인 이미지
        let newImg = image.eq(i);

        // 변수 i와 c의 값을 비교해서 동작 방향을 다르게 설정
        // i == c -> 활성화 중인 버튼을 클릭했다. 여기서 명령 종료
        // i > c -> 활성화 중인 버튼의 오른쪽 버튼을 클릭. 위에서 아래으로 이동
        // i < c -> 활성화 중인 버튼의 왼쪽 버튼을 클릭. 아래에서 위로 이동
        if (i == c) return false;
        if (i > c) {
            currentImg.stop().animate({ top: '100%' });
            newImg.css({ top: '-100%' }).stop().animate({ top: 0 });
        }
        if (i < c) {
            currentImg.stop().animate({ top: '-100%' });
            newImg.css({ top: '100%' }).stop().animate({ top: 0 });
        }
        c = i;
        pager.removeClass('active');
        pager.eq(i).addClass('active');
    },
});


