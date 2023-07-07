// 움직임을 줄 요소(대상 - 지구본) 값 초기화
let gigu = null

$(document).ready(function(){
    initialize();
    event_gigu();
})

// 전역변수를 초기화 하는 함수
function initialize(){
    // 움직임을 줄 요소(대상 - 지구본) 선택
    gigu = $('#gigu')    
}

// 이벤트와 관련된 내용을 함수로 등록
function event_gigu(){
    // 버튼 클릭 이벤트 
    $('#btnStart').click(function(){
        // 지구본 움직이기
        // 지구본 위치 값 구하기
        let x = parseInt($('#txtX').val())
        let y = parseInt($('#txtY').val())
        // 위치값에 따라 지정된 요소가 움직임을 실행하는 함수
        moveGigu(x, y);
    });
}

// 지구본의 움직이는 기능 구현 함수
function moveGigu(x, y){
    // 대상이 움직이는 범위 영역 지정
    if((x >= 0 && x <= 500) && (y >= 0 && y <= 300)){
        gigu.css({
            left : x,
            top : y
        })
    }else {
        alert("입력된 값이 범위를 벗어났습니다.")
    }
}
