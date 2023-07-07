// '쿠폰받기' 버튼 클릭 시 팝업창 팝업
$('#popup-trigger').click(function(){
    $('#popup').fadeIn(800)
})

// '확인' 버튼 클릭 시 팝업창 닫기
$('#close-btn').click(function(){
    $('#popup').fadeOut(0)
})

// 키보드 'ESC'키 누르면 팝업창 닫기
$(document).keydown(function(e){
    if(e.which == '27'){
        $('#popup').fadeOut(0)
    }
})