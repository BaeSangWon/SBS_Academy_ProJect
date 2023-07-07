// 홀수 선택
$('#odd-btn').click(function(){
    // 모든 div에 'selected' 클래스 제거
    $('.numbox').removeClass('selected')

    // each 함수를 이용하여 모든 div의 내용을 가져온다
    // 가져온 div 내용을 숫자 자료형으로 변환 하여 2로 나눈 나머지가 1일 경우 'selected' 클래스 추가
    $('.numbox').each(function(){
        if(Number($(this).text() % 2 === 1)){
            $(this).addClass('selected')
        // } else{
        //     $(this).removeClass('selected')
        }
    })
})

// 짝수 선택
$('#even-btn').click(function(){
    // 모든 div에 'selected' 클래스 제거
    $('.numbox').removeClass('selected')

    // each 함수를 이용하여 모든 div의 내용을 가져온다
    // 가져온 div 내용을 숫자 자료형으로 변환 하여 2로 나눈 나머지가 0일 경우 'selected' 클래스 추가
    $('.numbox').each(function(){
        if(Number($(this).text() % 2 === 0)){
            $(this).addClass('selected')
        // } else{
        //     $(this).removeClass('selected')
        }
    })
})