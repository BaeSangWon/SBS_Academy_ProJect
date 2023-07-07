/* 
기본 Logic
1) 클릭해야하는 대상 : 최상단 메뉴(main)
2) 클릭한 대상의 display 값 = 'block' 일 경우 sub 메뉴 보여주기

※ $('셀렉터')와 HTML 구조상의 관계를 통해서 요소 접근 및 선택하기
- $('셀렉터').parent()      :   부모요소로 접근하기
- $('셀렉터').parents()     :   상위요소로 접근하기
- $('셀렉터').siblings()    :   형제요소로 접근하기
- $('셀렉터').children()    :   자식요소로 접근하기
- $('셀렉터').find()        :   자손요소로 접근하기

*/

$('.gnb .main').click(function(){
    // 변수 d에 최상단 메뉴의 sub 메뉴 display 속성정보 저장
    let d = $(this).siblings('.sub').css('display')
    if(d == 'block'){
        // return을 사용하면 'null'을 리턴하게 되는데 유효성 검사에서 'null'을 받으면 통과 여부의
        // 불확실성 때문에 false를 써주는게 좋다
        return false
    }
    // 선택되는 최상단 메뉴의 sub메뉴를 펼쳐서 보여주고, 선택되지 않은 요소들은 접는다
    $('.gnb .sub').slideUp()
    $(this).siblings('.sub').slideDown()
    $('gnb .main').removeClass('on')
    $(this).addClass('on')
    return false
})
