$(document).ready(function(){

    // 최초 글자 숨긴 상태 설정 
    $('div').hide();
    
    $('#showText').click(function(){
        $('div').show();
    })
    $('#hideText').click(function(){
        $('div').hide();
    })
})