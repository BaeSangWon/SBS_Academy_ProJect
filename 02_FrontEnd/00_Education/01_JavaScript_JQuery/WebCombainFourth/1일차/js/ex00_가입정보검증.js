/* 
기본 Logic
1. email과 password는 '문자열'
2. email에는 반드시 '@'가 포함되어야 함
3. email에 '@'가 없을 경우 '이메일 주소를 다시 확인해주세요' 메세지 팝업
4. 비밀번호 길이 체크
5. password에는 8~12자리가 들어가야 함
6. 8~12 자리가 아니라면 '비밀번호는 8~12 자리여야 합니다' 메세지 팝업
*/

function validate(email, password){
    // 입력받은 이메일과 패스워드를 저장할 배열 생성
    const message = [];

    // 입력된 이메일 정보에 '@' 포함 여부 확인 후 조건에 해당되는 메세지를 배열의 마지막에 추가
    if(email.indexOf("@") === -1){
        message.push("이메일 주소를 다시 확인해주세요.");
    }else {
        message.push("이메일 주소를 올바르게 입력했습니다.");
    }

    // 입력된 패스워드 길이가 8 ~ 12자리 여부 확인 후 조건에 해당되는 메세지를 배열의 마지막에 추가
    if(password.length < 8 || password.length > 12){
        message.push("비밀번호는 8 ~ 12자리여야 합니다.");
    }else {
        message.push("비밀번호를 올바르게 입력했습니다.");
    }

    // 각 조건에 부합하는 메세지 결과 출력
    console.log(message)
    return message;
}

validate("sjqcl3310@naver.com", "1q2w3e4r5t");
// [ '이메일 주소를 올바르게 입력했습니다.', '비밀번호를 올바르게 입력했습니다.' ]

validate("sjqcl3310.com", "122333");
// [ '이메일 주소를 다시 확인해주세요.', '비밀번호는 8 ~ 12자리여야 합니다.' ]

validate("sjqcl3310@daum.net", "12233323423ed3423423");
// [ '이메일 주소를 올바르게 입력했습니다.', '비밀번호는 8 ~ 12자리여야 합니다.' ]

validate("sjqcl3310.com", "abdd");
// [ '이메일 주소를 다시 확인해주세요.', '비밀번호는 8 ~ 12자리여야 합니다.' ]