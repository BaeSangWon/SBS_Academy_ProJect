/* 
기본 Logic
1) 할일(li)을 추가할 대상(ul)선택
2) 할일(li) 목록 생성
3) 파라메타 값으로 전달 받은 인자값(할일) 입력
4) to-do-list에 할일 추가
*/

// 할일(li)을 추가할 대상(ul) 선택
const toDoList = document.querySelector('#to-do-list')

function newPlan(text){
    // 할일(li) 생성
    const li = document.createElement('li')

    // 생성된 할일(li)에 파라메타로 전달된 인자값 내용(텍스트) 추가
    li.textContent = text
    
    // '<li>'HTML/CSS 공부하기'</li> 형태로 만들어진 할일 추가
    toDoList.append(li)
}

newPlan('HTML/CSS 공부하기')
newPlan('JAVASCRIPT 공부하기')
newPlan('DATABASE 공부하기')