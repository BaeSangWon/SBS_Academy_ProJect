/* 
기본 Logic
1. 현재날짜와 시작날짜의 값을 저장하는 변수 생성
2. 현재날짜에서 시작날짜를 뺀 결과값 반환 하는 변수 생성
3. 반환된 결과값을 일(day) 단위로 변환
*/

$('#calculate').on('click', calculateDate);

function calculateDate(){
    // 현재날짜 계산
    let now = new Date();
    console.log(now)

    // 시작날짜 계산
    let startDate = new Date($('#start').val());
    console.log(startDate)    

    // 결과값 반환 : (현재날짜 - 시작날짜) / sec / min / hour / day
    // 1000ms -> sec , 60sec -> min , 60 -> hour, 24hour -> day
    let betweenDate = (now.getTime() - startDate.getTime()) / 1000 / 60 / 60 / 24;
    console.log(betweenDate);

    // 반환된 결과값 반영 
    // 현재날짜 1일의 경우 결과값 카운트에서 빠지기 떄문에 +1 적용
    $('#day-count').text(Math.floor(betweenDate) + 1)
    

    // 입력된 값이 빈값일 때 '날짜를 입력해주세요' 알람 발생
    if($('#start').val() === ''){
        alert("날짜를 입력해주세요.");
    }
}