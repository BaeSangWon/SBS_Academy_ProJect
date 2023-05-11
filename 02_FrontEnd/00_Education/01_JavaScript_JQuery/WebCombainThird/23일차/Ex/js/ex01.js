/* 
기본 Logic
1. 버튼 클릭 이벤트
1) 클릭한 버튼의 순서값 저장
2) 버튼 전체 비활성화
3) 클릭한 버튼 활성화
4) 사진 전체 비활성화
5) 클릭한 버튼과 동일한 순서값을 가진 사진 활성화
*/

$('.btn li').click(function(){
    let i = $(this).index()
    console.log(i)

    $('.btn li').removeClass('on')
    $(this).addClass('on')
    $('.photo li').css({
        display : "none"
    })
    $('.photo li').eq(i).css({
        display : "block"
    })
})