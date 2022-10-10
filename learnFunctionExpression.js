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

function ask(question, yes, no){
    if (confirm(question)) yes()
    else no();
}

function showOk(){
    alert("동의하셨습니다");    
}

function showCancel(){
    alert("취소 버튼을 누르셨습니다.")
}

//사용법: 함수 showOk와 showCancel가 ask 함수의 인수로 전달됨
ask("동의하십니까?", showOk, showCancel);

ask("동의하십니까?", 
function() {alert("동의하셨습니다.")}, 
function() {alert("취소 버튼을 누르셨습니다.")}
);

sayHi("john"); // Hello, john

function sayHi(name) {
    alert(`Hello, ${name}`);
}

sayHi("John"); //error!

let sayHi = function(name){
    alert(`Hello, ${name}`);
}

let age = prompt("나이를 알려주세요", 18);

//조건에 따라 함수를 선언함
if(age < 18){
    function welcome(){
        alert("안녕!");
    }
} else{
    
    function welcome(){
        alert("안녕하세요!");
    }

}

//함수를 나중에 호출합니다 
welcome(); // Error: welcome is not defined

let age = 16;

if (age < 18){
    welcome();              // (실행)

    function welcome(){
        alert("안녕!");     //함수 선언문은 함수가 선언된 블록 내 어디 에서든 유효
    }                       

    welcome();              // (실행)

} else {
    function welcome() {
        alert("안녕하세요!");
    }
}

// 여기는 중괄호 밖이기 때문에 
// 증괄호 안에서 선언한 함수 선언문을 호출할 수 없습니다.

welcome(); //Error!: welcome is not defined



let age = prompt("나이를 알려주세요",18);

let welcome;

if (age < 18){
    welcome = function(){
        alert("안녕!");  
    };                   

} else {
    welcome = function(){
        alert("안녕하세요!");  
    };     
}

// 여기는 중괄호 밖이기 때문에 
// 증괄호 안에서 선언한 함수 선언문을 호출할 수 없습니다.

welcome();