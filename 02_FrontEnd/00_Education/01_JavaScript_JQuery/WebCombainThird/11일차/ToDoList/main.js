
// DOMContentLoaded : HTML문서를 완전히 불러오고 분석했을 때 이벤트 발생
/* 
    람다식 함수 
    - 코드간략화를 위해 사용
    - 선언한 시점에 this를 확보하기 때문에, 한번 확보된 값은 고정으로 설정되어 변경되지 않는다
      즉, 다른 곳에서 함수를 호출하여도 처음에 호출되었을 때 설정된 값이 계속 출력된다
*/
document.addEventListener('DOMContentLoaded', () => {
    const toDo = document.querySelector('#toDo')
    const addButton = document.querySelector('#addButton')
    const toDoList = document.querySelector('#toDoList')

    addButton.addEventListener('click', (event) => {
        // createElement : 지정한 태그네임(div) 생성
        const item = document.createElement('div') 
        const checkBox = document.createElement('input') 
        // element.setAttribute( 'attributename(속성이름)', 'attributevalue(속성값)' )
        checkBox.setAttribute('type','checkbox')

        const text = document.createElement('span') 
        text.textContent = toDo.value

        const removeButton = document.createElement('button') 
        removeButton.textContent = '삭제'

        removeButton.addEventListener('click', (event) => {
            // currentTarget : 이벤트 핸들러가 부착된 것을 가리킨다
            // - event.target 는 부모로부터 이벤트가 위임되어 발생하는 자식의 위치, 내가 클릭한 자식 요소 반환
            // - event.currentTarget 는 이벤트가 부착된 부모의 위치 반환
            // parentNode : 부모노드, childNodes : 자식노드 리스트, nextSibling : 다음 형제노드, previousSibling : 이전 형제노드
            // removeChild : 부모에서 포함된 자식 노드가 존재할 경우 일치하는 ID, Class 등과 같은 속성을 통해 자식 노드를 제거
            event.currentTarget.parentNode.parentNode.removeChild(event.currentTarget.parentNode)
})

        checkBox.addEventListener('change', (event) => {
            if(checkBox.checked){
                // 체크박스에 체크될 경우 텍스트 중간에 선을 만든다
                text.style.textDecorationLine = "line-through"
            }else{
                text.style.textDecorationLine = "none"
            }
        })
        // append 메서드 : 노드객체(Node object)나 DOMString(text) 사용가능  
        // append 메서드는 return 값 반환 x 
        // appendChild 메서드는 오직 Node 객체만 받을 수 있으며 한번에 하나의 노드만 추가 가능
        /* 
           append 와 appendChild 사용예시
           - append : item.append(div,span,p)
           - appendChild : item.appendChild(text)
        */
        item.appendChild(checkBox)
        item.appendChild(text)
        item.appendChild(removeButton)
        toDoList.appendChild(item)
        toDo.value = ''
        })
})

// 키보드 Enter Key를 눌렀을 때 add버튼 클릭과 동일한 이벤트 적용
// click() 함수 : 마우스 왼쪽버튼으로 선택 요소를 클릭하면 발생
// ※addButton의 이벤트 발생 조건이 'click'이기 때문에 입력창에 내용 입력 후 Enter을 입력하면 addButton을 마우스 왼쪽버튼으로 클릭 실행
// 즉, Enter key 입력 = addButton.addEventListener('click', event)와 같은 내용
toDo.addEventListener('keyup', function(){
    if(window.event.keyCode == 13){
        addButton.click()
    }    
})


