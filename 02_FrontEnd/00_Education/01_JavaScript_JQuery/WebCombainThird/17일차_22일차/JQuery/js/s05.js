// 버튼을 클릭할 때 탭(tab)이 바뀌도록 
$('.btn p').click(function(){
    // 변수 i에 현재 선택하는 요소에 대한 순서값 저장
    let i = $(this).index()
    console.log(i)

    // 전체 대상을 비활성화 한뒤 클릭하는 대상에 'on'이라는 클래스 이름 추가
    $('.btn p').removeClass('on')
    // this 가 가르키는 대상는 'btn p' 클래스
    $(this).addClass('on')
    // 클릭하는 시점에 활성화 된 패널이 다를 수 있으니 모든 패널을 비활성화 시킨다
    $('.pannel .inner').removeClass('view')
    // 패널 중 i번째 패널만 선택해서 활성화 시킨다
    // 활성화 된 시점에 'view'라는 클래스가 추가됨과 동시에 .inner.view 조건에 충족한 요소만 활성화되어 '탭 i의 내용' 이라는 문구가 출력된다
    $('.pannel .inner').eq(i).addClass('view')
})