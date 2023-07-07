function hello() {
    // 좌표값과 배경이미지의 크기를 난수로 대입하기 위한 값 할당
    let rnd1 = Math.floor(Math.random() * 20);          // 시작값 : 0 ~ 20
    let rnd2 = Math.floor(Math.random() * 40);          // 시작값 : 0 ~ 40
    let rnd3 = Math.floor(Math.random() * 3) + 100;     // 시작값 : 100 ~ 103

    // 글자흔들기
    $('.hello').css({
        bottom : rnd1, 
        left : rnd2
    })
    // 배경 확대
    $('.hello .text').css({
        "background-size" : rnd3 + "%"
    })
}

// 0.01초마다 hello 함수 호출
setInterval(hello, 10)