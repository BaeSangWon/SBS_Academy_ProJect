// find() : 셀렉터 영역 안쪽에 작성된 태그 중 원하는 대상을 선택한다

$('.gnb .d1').mouseover(function(){
    // 마우스 오버시 상단 메뉴에 모든 요소 비활성화
    $('.gnb .d1 .sub').hide()

    // 마우스가 올려지는 대상만 보여지도록 즉, sub 클래스의 부모요소
    // gnb(최상단 메뉴를 감싸는 wrap)와 d1(최상단 각각의 메뉴) 의 안쪽 요소 중 sub(sub 메뉴 전체) 선택
    $(this).find('.sub').show()
}).mouseout(function(){
    // 현재 마우스가 올려져 있는 대상의 sub 메뉴 숨겨지도록
    $(this).find('.sub').hide()
})