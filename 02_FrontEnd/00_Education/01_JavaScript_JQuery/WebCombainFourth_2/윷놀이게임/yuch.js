$(document).ready(function(){
    
    //버튼을 클릭했을때
    $('button').click(function(){
        //0. nak클래스를 처음부터제거
        $('.yuch_play > div.yuch04').removeClass('nak');

        //0. 클릭하자마자 버튼 사용 불가능 처리
        $(this).prop('disabled',true);

        //1. rotate클래스가 추가 - 마지막에 삭제
        $('.yuch_play > div').addClass('rotate');

        //2. rotate 애니메이션 후 랜덤 명령 실행
        setTimeout(function(){
            //3. 낙처리 - 10번 중 한번 처리
            //1~10사이의 랜덤한 정수를 담는 변수
            var nak = Math.floor(Math.random() * 9) + 1;

            if(nak == 7){ //1~10의 어떤숫자를 써도 됨
                $('.yuch_play > div.yuch04').addClass('nak');
            }

            //4. 각각의 윷이 랜덤하게 처리
            var random01, random02, random03, random04;

            //4개를 한번에 처리하기 위해 반복문
            for(var i=1;i<=4;i++){
                //각각 변수에 1과 2를 랜덤하게 담기
                eval('random0' + i + '= Math.floor(Math.random() * 2) + 1;');

                //현재 반복하고 있는 변수 담기
                var ran = eval('random0' + i);

                if(ran == 1){ //1과같다면
                    //앞면보이게 처리
                    $('.yuch_play > div.yuch0' + i).removeClass('active');
                }else{ //2와 같으면
                    //뒷면이 보이게 처리
                    $('.yuch_play > div.yuch0' + i).addClass('active');
                }
            }

            //5. rotate제거해서 다시 클릭시 애니메이션 적용
            $('.yuch_play > div').removeClass('rotate');


            //6. 버튼을 다시 사용하게 처리
            $('button').prop('disabled',false);
        },600);
    });
});