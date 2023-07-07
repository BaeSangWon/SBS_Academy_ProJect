$('.gnb .d1').mouseover(function(){
    let h = $(this).find('.sub').height()
    $('.gnb .d1 .sub').hide()
    $(this).find('.sub').show()
    // $('.gnbBg').css({height : h}) 구문을 생략해도 무관함 (단, 해당 구문을 생략할 경우 컨텐츠만큼 높이값이 지정되는 것이 아니라 css에서 지정한 높이값으로 고정)
    $('.gnbBg').css({
         height : h
    })
    $('.gnbBg').show()
}).mouseout(function(){
    $(this).find('.sub').hide()
    $('.gnbBg').hide()
})


/* 
height()            : 셀렉터의 높이값을 저장한다.(여백을 제외하고 실제 컨텐츠가 적용되는 영역을 가리킨다)
innerHeight()       : 내부높이 + padding
outerHeight()       : 내부높이 + padding + border
outerHeight(true)   : 내부높이 + padding + border + margin

width()             : 같은 느낌의 너비값을 저장한다.(여백을 제외하고 실제 컨텐츠가 적용되는 영역을 가리킨다)
*/


