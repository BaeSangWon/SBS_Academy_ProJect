/* 
[기본 Logic]
1. 유저가 값을 input에 입력한다.
2. + 버튼을 클릭하면 아이템이 더해진다. 할일이 추가된다.
3. 삭제 버튼을 클릭하면 할일이 삭제된다.
4. 체크 버튼을 누르면 할일이 끝나면서, 줄이 그어진다
5. 진행 중, 완료 탭을 누르면 언더바가 이동한다.
6. 완료 탭에는 완료 아이템만, 진행 중 탭에는 진행중인 아이템만 보여진다. 모두 탭을 누르면 전체 아이템을 보여준다
*/

let taskList = []

let taskInput = document.getElementById('task-input')
let addButton = document.getElementById('add-button')
let tabs = document.querySelectorAll('.task-tabs div')
console.log(tabs)

addButton.addEventListener('click' , addTask)

// 모두, 진행중, 완료 tab 기능 구현
for(let i = 1 ; i < tabs.length; i++){
    tabs[i].addEventListener('click' , function(event){filter(event)})
}

// 할일 추가 함수
// 1. input에 입력한 값을 가지고와 taskList 변수에 배열로 저장
function addTask(){
    // let taskContent = taskInput.value
    // task 객체에 input에 입력된 내용 + 진행중 or 완료 여부까지 포함된 값 저장
    let task = {
        id: randomIDGenerate(),             // 입력된 할일에 각각 유일한 ID값을 부여
        taskContent: taskInput.value,       // input에 입력된 내용을 저장하는 요소
        isComplete : false                  // 진행중 or 완료여부를 판단할 수 있는 요소
    }
    taskList.push(task)
    console.log(task)
    rander()
}

// 추가한 할일 출력 함수
// 1) for문 : taskList 배열에 길이값을 순차적으로 비교
// 2) if문 : 할일이 완료 상태라면 task-done을 호출하여 가운데 줄을 긋는 상태로 만든다
// 3) task-board의 전체 요소(태그포함)를 resultHTML에 저장
// 4) 체크 버튼 클릭 시 할일의 체크 여부 상태에 따라 "진행 중" "완료" 상태를 구분하는 이벤트 실행
function rander(){
    let resultHTML = ''   
    for(let i = 0; i < taskList.length; i++){
        if(taskList[i].isComplete == true){
            // task-done class에 가운데 줄을 긋은 css 반영
            resultHTML += `
            <div class="task">
                <div class="task-done">${taskList[i].taskContent}</div>
                <div>
                    <button onclick="toggleComplete('${taskList[i].id}')">체크</button> 
                    <button onclick="deleteTask('${taskList[i].id}')">삭제</button>
                </div>
            </div>`
        } else {
            //task 내부 요소 전부를 resultHTML에 누적시켜서 저장
            // - taskList 배열에 있는 객체 요소중 입력된 내용 요소만 resultHTML에 저장
            resultHTML += `
            <div class="task">
            <div>${taskList[i].taskContent}</div>
            <div>
                <button onclick="toggleComplete('${taskList[i].id}')">체크</button> 
                <button onclick="deleteTask('${taskList[i].id}')">삭제</button>
            </div>
            </div>`
        }
        // button onclick : addEventListener을 대신해 HTML요소에 바로 동적 이벤트 적용 -> onclick="toggleComplete()"  
    }
    // ${taskList[i].taskContent} : taskList 배열에 저장된 값중 내용 요소 , '${taskList[i].id : taskList 배열에 저장된 값중 내용의 고유ID 요소
    document.getElementById('task-board').innerHTML = resultHTML
}

// 체크버튼 클릭시 기능 실행 함수
// 1) 할일에 체크를 하면 완료상태로 변경
function toggleComplete(id){
    console.log(id)
    // taskList 배열의 값의 id가 전달받은 id와 같다면 해당 할일을 완료 상태로 변경
    for(let i = 0 ; i < taskList.length ; i++){
        if(taskList[i].id == id){
            // 체크박스 체크 해제시 '완료' 상태를 '진행중' 상태로 변경
            // not 연산자를 이용하여 결과를 반대로 바꾼다
            taskList[i].isComplete = !taskList[i].isComplete
            break
        }
    }
    rander()
    console.log(taskList)
}

// 삭제버튼 클릭시 기능 실행 함수
// 1) 할일 삭제 버튼 누르면 삭제 
function deleteTask(id){
    console.log(id)    
    // taskList 배열의 값의 id가 전달받은 id와 같다면 삭제를 누른 배열 요소 1개 삭제
    for(let i = 0 ; i < taskList.length ; i++){
        if(taskList[i].id == id){
            taskList.splice(i, 1)
            break
        }
    }
    rander     
}

// 모두, 진행중, 완료 tab 기능 실행 함수
//filter : 선택한 요소의 좌표값, 위치정보 등 모든 정보를 보여준다
function filter(event){
    console.log(event.target.id)
}


// 유일한 ID 값을 반환해주는 함수
function randomIDGenerate(){
    return Math.random().toString(36).substr(2, 16);
}
