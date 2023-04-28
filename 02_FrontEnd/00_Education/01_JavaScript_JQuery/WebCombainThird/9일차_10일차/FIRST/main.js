let computerNumber = 0   
let chances = 7 
let gameOver = false

// 중복된 숫자 입력 방지를 위한 배열 선언
let userValueList = []

// getElementById : 버튼과 같이 단일 항목 하나를 가져올 때 사용, 동일항목이 존재하면 최상단에 1개만 출력 / querySelector : 여러개의 항목을 가져올 때 사용
// 두개의 차이점은 반환하는 타입이 다르다 getElementById : html 태그 요소 반환 / querySelector : NodeList
let playButton = document.getElementById('play-button')   // id(ById), class(ByClassName), tag(ByTagName)에 따라 다르게 사용된다
// let userInput = document.querySelector('#user-input')  // querySelector : 제공한 선택자와 일치하는 요소 반환 (id = # , class = .)
let userInput = document.getElementById('user-input')
let ressultArea = document.getElementById('result-area')
let resetButton = document.getElementById('reset-button')
let chanceArea = document.getElementById('chance-area')



// addEventListener('이벤트이름' , 이벤트 발생시 실행시킬 함수)
playButton.addEventListener('click', play)
// 함수의 이름만 전달하는 이유는 click 했을 때 이벤트가 발생하여야 하기 때문이다
// 함수() 로 적을 경우 클릭 여부와 상관없이 호출로 인해 바로 실행되어 진다
resetButton.addEventListener('click' , reset)

// 간단한 기능만 구현하는 함수의 경우 익명으로 선언 후 사용 가능
// 1회성으로 사용 시 활용!!
userInput.addEventListener('focus' , function(){
    userInput.value = ""
})


// 난수 생성 함수
function pickRandomNumber(){
    computerNumber = Math.floor(Math.random() * 100) + 1         // Math.random : 0 ~ 1사이의 숫자 랜덤하게 생성 , 1 ~ 100 안의 숫자 지정을 위해 * 100을 해준 값 + 1을 해준뒤 소수점을 버린다 
    console.log(computerNumber)                                   
}

// go 버튼 눌렀을 때 이벤트 발생하는 함수
function play(){
    // input 에 입력되는 값은 value에 저장된다
    const USER_VALUE = userInput.value      // value : input 태그가 가지고 있는 속성
    console.log(USER_VALUE)
    if(USER_VALUE < computerNumber){
        // console.log("up!!")
        ressultArea.textContent = "upup!!"
    }else if(USER_VALUE > computerNumber){
        // console.log("down!!")
        ressultArea.textContent = "down!!"
    }else {
        // console.log("딩동댕!!")
        ressultArea.textContent = "딩동댕!!"
        // 정답일 경우 go 버튼 비활성화
        gameOver = true
    }

    // 1부터 100사이 외 숫자 입력 시 기회가 감소되지 않고 종료
    if(USER_VALUE < 1 || USER_VALUE > 100){
        ressultArea.textContent = "1부터 100사이의 숫자를 입력해주세요"
        return
    }
    if(userValueList.includes(USER_VALUE)){
        ressultArea.textContent ="이미 입력된 숫자입니다"
        return
    }

    // go버튼이 실행될 때마다 기회가 1회씩 감소
    chances--

    // 입력한 값을 배열에 추가할 때 '입력된 숫자' 여부를 먼저 점검 후 해당 조건이 false 일때 그 값을 배열에 추가하는 로직
    userValueList.push(USER_VALUE)

    // console.log("남은 기회" + chances + "번")
    chanceArea.textContent = `남은 기회 : ${chances}번`
    if(chances == 0){
        gameOver = true
    }
    // gameOver == true라는것은 위 조건에서 chances == 0이라는 조건이 참이기 때문에
    if(gameOver){
        // disabled : input 태그의 속성
        playButton.disabled = true
    }
}

// 숫자 입력 후 엔터를 눌렀을 때 go버튼을 누른것과 동일하게 동작하기
userInput.addEventListener('keyup', function(){
    if(window.event.keyCode == 13){
        play()
        userInput.value =''
    }
})

// rest 버튼 눌렀을 때 이벤트 발생하는 함수
function reset(){
    // reset 버튼을 누르면 난수 초기화
    pickRandomNumber()
    userInput.value = ''
    ressultArea.textContent = "결과출력"
    chances = 7
    chanceArea.textContent = `남은 기회 : ${chances}번`
    // console.log("리셋")
   
}

/* 
노드의 속성값
textContent : 노드(HTML문서)의 text 값을 반환
innerText : 노드의 text 값을 반환, textContent와 비슷하지만 차이점이 있다
textContent 는 모든 요소를 반환하는 반면 innerText는 사람이 읽을 수 있는 요소만 가져온다
(글자사이에 공백이 많다면 textContent는 그대로 가져오지만 innerText는 한칸만 가지고 온다)
innerHTML : HTML 요소를 반환
*/



/* 
Math : 자바스크립트에서 유용하게 사용되어지는 객체 중 하나. 수학적인 내용의 함수들을 가지고 있다

Math.random() : 0 ~ 1 사이의 값을 반환(1은 미초함)
Math.floor() : 소수점을 버린다
Math.ceil() : 소수점을 올린다
Math.round() : 소수점을 반올림한다
Math.max() : 여러개의 값 중 제일 큰 값을 반환
Math.min() : 여러개의 값 중 제일 작은 값을 반환
*/
pickRandomNumber()