/* 
기본 Logic
1) 버튼 클릭시 지정된 요소에 'down' Class 부여
2) 'flag' 와 'down' 이름을 동시에 가진 요소 30도 회전
3) 클릭 후 일정 시간이 지나면 'down' Class 삭제
4) 버튼이 클릭된 후 1초 뒤 원위치 하도록

*/


$('#btn1').on('click', blueDown);
$('#btn2').on('click', whiteDown);
$('#btn3').on('click', blueDotDown);

function blueDown(){
    $('.blue').addClass('down')

    // 1초 뒤 원위치
    setTimeout(reset, 1000)
}

function whiteDown(){
    $('.white').addClass('down')
    setTimeout(reset, 1000)
}

function blueDotDown(){
    $('.blue.dot').addClass('down')
    setTimeout(reset, 1000)
}

// 움직임이 발생한 깃발을 원위치 하는 함수
function reset(){
    $('.flag').removeClass('down')
}