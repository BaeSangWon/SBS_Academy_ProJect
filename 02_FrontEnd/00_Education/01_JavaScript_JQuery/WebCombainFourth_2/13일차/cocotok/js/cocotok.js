// '전송' 버튼 클릭시 발생하는 이벤트
$('#send').on('click', sendmybubble);

// 'Enter' 키를 누를 경우 '전송' 버튼을 클릭한 것고 동일한 기능을 실행하도록 하는 이벤트
$('textarea').on('keyup', sendmessage);

function sendmessage(e){
    let key = e['key'];
    // console.log(key)
    let val = $('textarea').val();
    if(key == 'Enter' && !e.shiftKey){
        sendmybubble();
    }
}

function sendmybubble(){
    // trim() : 앞뒤의 공백요소 제거
    let message = $('textarea').val().trim();
    // 정규표현식, (/(\n|\r\n)/g, '<br>') : 모든 문자열을 줄바꿈 해줌
    let result =  message.replace(/(\n|\r\n)/g, '<br>');
    
    // 공백이 아닌 경우 전송
    if(message !=" "){
        $('.chatbox').append('<div class="my-bubble bubble">' + result + '</div>');
        $('textarea').val(' ');
    }else {
        $('textarea').val(' ');
    }
}