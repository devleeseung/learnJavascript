function sayHi(){
    alert("Hello");
}

let sayHi = function(){
    alert("Hello");
}

function sayHi(){  // (1) 함수 생성
    alert("Hello");
}

let func = sayHi;  // (2) 함수 복사

func();            // (3) 복사한 함수를 실행(정상적으로 실행)
                    // 본해 함수도 정상적으로 실행
sayHi();
