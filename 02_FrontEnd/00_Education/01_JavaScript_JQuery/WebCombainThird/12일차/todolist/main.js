/* 
[기본 Logic]
1. 유저가 값을 input에 입력한다.
2. + 버튼을 클릭하면 아이템이 더해진다. 할일이 추가된다.
3. 삭제 버튼을 클릭하면 할일이 삭제된다.
4. 체크 버튼을 누르면 할일이 끝나면서, 줄이 그어진다
5. 진행 중, 완료 탭을 누르면 언더바가 이동한다.
6. 완료 탭에는 완료 아이템만, 진행 중 탭에는 진행중인 아이템만 보여진다. 모두 탭을 누르면 전체 아이템을 보여준다
*/

// taskList : 입력된 할일 목록 저장용 변수
let taskList = []

// mode : event.target.id 값을 저장용 변수
// mode의 초기값이 빈 배열로 선언된 경우 초기에 할일 입력 시 입력된 내용이 출력되지 않고, '모두(mode = 'all')를 클릭하여야 내용이 보여진다 (하단 if문 참(true) 조건)
// 따라서 입력된 할일 리스트를 바로 출력해주기 위해 mode 초기값을 'all' 상태로 저장한다
let mode ='all'

// filterList : 체크박스에 체크가 되지 않은 할일 항목 저장용 변수
let filterList = []

let taskInput = document.getElementById('task-input')
let addButton = document.getElementById('add-button')
let tabs = document.querySelectorAll('.task-tabs div')
// console.log(tabs)

addButton.addEventListener('click' , addTask)

// 입력창에 마우스 커서 팝업 시 내용 삭제
taskInput.addEventListener('focus', function(){
    taskInput.value = ""
})

// 키보드 Enter key 입력 시 추가 버튼 눌른 것과 동일한 효과 적용
taskInput.addEventListener('keyup', function(){
    if(window.event.keyCode == 13){
        addTask()
        // addButton.click()
        // taskInput.value = ""
    }    
})

// 모두, 진행중, 완료 tab 기능 구현
for(let i = 1 ; i < tabs.length; i++){
    tabs[i].addEventListener('click' , function(event){filter(event)})
}

// 할일 추가 함수
// 1) input에 입력한 값을 가지고와 taskList 변수에 배열로 저장
function addTask(){
    // let taskContent = taskInput.value
    // task 객체에 input에 입력된 내용 + 진행중 or 완료 여부까지 포함된 값 저장
    let task = {
        id: randomIDGenerate(),             // 입력된 할일에 각각 유일한 ID값을 부여
        taskContent: taskInput.value,       // input에 입력된 내용을 저장하는 요소
        isComplete : false                  // 진행중 or 완료여부를 판단할 수 있는 요소
    }
    taskList.push(task)
    // console.log(task)
    // taskInput.value = ""
    render()
}

// 추가한 할일 출력 함수
// 1) for문 : taskList 배열에 길이값을 순차적으로 비교
// 2) if문 : 할일이 완료 상태라면 task-done을 호출하여 가운데 줄을 긋는 상태로 만든다
// 3) task-board의 전체 요소(태그포함)를 resultHTML에 저장
// 4) 체크 버튼 클릭 시 할일의 체크 여부 상태에 따라 "진행중" "완료" 상태를 구분하는 이벤트 실행
// 5) list 배열에 할일 상태가 '모두'일 경우 할일리스트(taskList) 전부를 '진행중' 상태일 경우 filterList 정보를 저장 및 출력
function render(){
    let list = []           // taskList(할일) 배열에 입력된 내용을 mode('모두', '진행중', '완료') 상태에 따라 list 배열에 저장 및 출력
    if(mode == 'all'){
        list = taskList
    } else if(mode == 'ongoing' || mode == 'done'){             // mode = 'all' 인 상태를 제외하고 filterList 정보 출력
        list = filterList
    }
    let resultHTML = ''   
    for(let i = 0; i < list.length; i++){
        if(list[i].isComplete == true){
            // task-done class에 가운데 줄을 긋은 css 반영
            resultHTML += `
            <div class="task">
                <div class="task-done">${list[i].taskContent}</div>
                <div>
                    <button onclick="toggleComplete('${list[i].id}')"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                    <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                  </svg></button> 
                    <button onclick="deleteTask('${list[i].id}')"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                  </svg></button>
                </div>
            </div>`
        } else {
            //task 내부 요소 전부를 resultHTML에 누적시켜서 저장
            // - taskList 배열에 있는 객체 요소중 입력된 내용 요소만 resultHTML에 저장
            resultHTML += `
            <div class="task">
                <div class="task-done-2">${list[i].taskContent}</div>
                <div>
                    <button onclick="toggleComplete('${list[i].id}')"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check" viewBox="0 0 16 16">
                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"/>
                  </svg></button> 
                    <button onclick="deleteTask('${list[i].id}')"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash3" viewBox="0 0 16 16">
                    <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z"/>
                  </svg></button>
                </div>
            </div>`
        }
        // button onclick : addEventListener을 대신해 HTML요소에 바로 동적 이벤트 적용 -> onclick="toggleComplete()"  
    }
    // ${taskList[i].taskContent} : taskList 배열에 저장된 값중 내용 요소 , '${taskList[i].id : taskList 배열에 저장된 값중 내용의 고유ID 요소
    document.getElementById('task-board').innerHTML = resultHTML
    // 추가 버튼을 눌렀을 경우에 할일 입력창의 내용 삭제
    taskInput.value = ""
}

// 체크버튼 클릭시 기능 실행 함수
// 1) 할일에 체크를 하면 완료상태로 변경
function toggleComplete(id){
    // console.log(id)
    // taskList 배열의 값의 id가 전달받은 id와 같다면 해당 할일을 완료 상태로 변경
    for(let i = 0 ; i < taskList.length ; i++){
        if(taskList[i].id == id){
            // 체크박스 체크 해제시 '완료' 상태를 '진행중' 상태로 변경
            // not 연산자를 이용하여 결과를 반대로 바꾼다
            taskList[i].isComplete = !taskList[i].isComplete
            // 체크 여부에 따라 '진행중'탭과 '완료'탭에 있는 항목을 각각 이동(삭제) 한다
            // ex) '진행중'탭에서 항목에 체크할 경우 체크된 항목이 삭제되며, '완료'탭에서 항목이 보여짐과 동시에 체크버튼 -> 체크해제 버튼으로 바뀜 
            filterList.splice(i,1) 
            break
        }

    }
    render()
    
    // location.reload(true);
    // console.log(taskList)
}

// 삭제버튼 클릭시 기능 실행 함수
// 1) 할일 삭제 버튼 누르면 삭제 
// 2) 완료 탭에서 삭제 버튼 누르면 바로 삭제되도록 변경
function deleteTask(id){
    // console.log(id)    
    // taskList 배열의 값의 id가 전달받은 id와 같다면 삭제를 누른 배열 요소 1개 삭제
    for(let i = 0 ; i < taskList.length ; i++){
        if(taskList[i].id == id){
            taskList.splice(i, 1)
            break
        }
    }
    render()  
    // filterList 배열의 값과 id가 전달받은 id와 같다면 삭제를 누른 배열 요소 1개 삭제
    for(let i = 0 ; i < filterList.length ; i++){
        if(filterList[i].id == id){
            filterList.splice(i, 1)
            break
        }
    }    
    render()
}

// 모두, 진행중, 완료 tab 기능 실행 함수
// filter : 선택한 요소의 좌표값, 위치정보 등 모든 정보를 보여준다
// 1) if, for문 : mode : 'all, 'ongoing', 'done' 에 따라 할일 리스트를 다르게 보여준다
// 2) tab을 이동할 때 마다 밑줄 속성이 따라온다 (현재 선택한 탭이 어떤 것인지를 표시해주기 위함)
function filter(event){

    // let filterList = []   
    filterList = []
    // console.log(event.target.id)

    // mode : 'all, 'ongoing', 'done' 을 저장
    mode = event.target.id

    // 'under-line(밑줄)' 의 target 속성 중 너비, 높이 좌표 값 속성을 가지고 와서 탭의 각 항목을 누를때마다 따라가도록 설정
    // .style.width는 css에 반영해준 값을 그대로 적용한다
    // offsetWidth : margin을 제외한 padding, border 값까지 계산한 너비 값을 가져온다 
    document.getElementById('under-line').style.width = event.target.offsetWidth + 'px'  // under-line의 width값을 under-line이 가지는 영역만큼으로 바꾸겠다는 속성
    document.getElementById('under-line').style.top = '58px'
    document.getElementById('under-line').style.left = event.target.offsetLeft + 'px'    // offsetLeft : 해당요소의 위치값 만큼 이동하는 속성
    document.getElementById('under-line').animate({width:['0', '80px']},{durations:500,fill:'forwards',easing:'ease'})

    if(mode == 'all'){
        render()
        // 'all' , 'ongoing' , 'done' 상태에 따라 밑줄 및 글자 색상 변경
        // all : 밑줄(red), 글자색(white) , ongoing : 밑줄(yellow), 글자색(white)..
        document.getElementById('under-line').style.backgroundColor = 'red'  
        document.getElementById('all').style.color = 'white'
        document.getElementById('ongoing').style.color = 'black'
        document.getElementById('done').style.color = 'black'
    } else if(mode == 'ongoing'){
        document.getElementById('under-line').style.backgroundColor = 'yellow'
        document.getElementById('all').style.color = 'black'
        document.getElementById('ongoing').style.color = 'white'
        document.getElementById('done').style.color = 'black'
        for(let i = 0 ; i < taskList.length; i++){
            if(taskList[i].isComplete == false){        // 할일 리스트 중 '진행중' 상태인 요소만 리스트 배열에 추가
                filterList.push(taskList[i])       
            }
        }
        render()
    } else if(mode == 'done'){
        document.getElementById('under-line').style.backgroundColor = 'blue'
        document.getElementById('all').style.color = 'black'
        document.getElementById('ongoing').style.color = 'black'
        document.getElementById('done').style.color = 'white'
        for(let i = 0; i < taskList.length; i++){
            if(taskList[i].isComplete == true){        // 할일 리스트 중 '완료' 상태인 요소만 리스트 배열에 추가
                filterList.push(taskList[i])
            }    
        }
        // '덮어쓰기' : filter 함수 내에서 지역변수로 선언된 filterList의 값을 전역변수에 덮어쓰기를 할 경우
        // 입력된 할일 리스트 값을 빈 배열인 filterList = [] 값으로 덮어쓰기 때문에 filterList는 전역변수로 선언해준다
        // taskList = filterList  --> 이 경우 원래 담고 있는 할일 리스트의 값이 삭제됨(버전관리 x)
        render()
    }
    console.log(filterList)
}

// 유일한 ID 값을 반환해주는 함수
function randomIDGenerate(){
    return Math.random().toString(36).substr(2, 16);
}

/* 
5/2 과제 풀이
1. UnderLine 꾸미기

2. 체크 /  삭제버튼 꾸미기
=> css 적용

3. 체크 버튼 눌렀을 때 refresh 버튼으로 바꾸기
=> '진행중'탭에 있는 항목중 체크버튼 누른 항목 바로 '완료'탭으로 이동되는 것 처럼 보여지게
=> toggleComplete 함수 for문에  filterList.splice(i,1) 추가

4. Task 배경색 바뀌도록

5. Enter key 눌렀을 때 입력되도록
=> 1) taskInput.addEventListener('keyup', function(){
    if(window.event.keyCode == 13){
        addButton.click()
        taskInput.value = ""
    }    
})

=> 2) taskInput.addEventListener('keyup', function(){
    if(window.event.keyCode == 13){
        addTask()
    }    
})

6. input 창 클릭하면 input 창 내용 없애기 or Enter 쳤을 때 바로 input 창 내용 없애기
=> 1) taskInput.addEventListener('focus', function(){
      taskInput.value = ""
})

=> 2) render 함수 마지막 구문에
taskInput.value = "" 를 추가하면 추가버튼을 누름과 동시에 내용 삭제됨

=> 3) function addTask(){
    let task = {
        id: randomIDGenerate(),             
        taskContent: taskInput.value,       
        isComplete : false                  
    }
    taskList.push(task)
    taskInput.value = ""
    render()
}

7. 삭제 버튼 누르면 바로 삭제 되도록
=> deleteTask 함수에 for문 추가 
filterList.length 값이 전달받은 id와 같으면 삭제 버튼을 누른 filterList 요소 1개 삭제

for(let i = 0 ; i < filterList.length ; i++){
        if(filterList[i].id == id){
            filterList.splice(i, 1)

*/





