$(document).ready(function(){
    // 지구 이미지 웹 요소(노드) 저장
    let gigu = $("#gigu");

    // 버튼 클릭 이벤트
    // 5초에 거쳐 왼쪽으로 430px 만큼 이동
    $('#btnStart').click(function(){
        gigu.animate({
            left : '480px'
        }, 5000);
    })
})