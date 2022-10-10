// let func = function(arg1, arg2, ...argN) {
//     return expression;
// };

//위 함수 선언문을 아래 화살표 함수로 변경 

//let func = (arg1, arg2, ...argN) => expression


let sum = (a,b) => a + b;

// 위 화살표 함수는 아래 함수의 축약 버전입니다.

let sum = function(a,b){
    return a + b;
};

alert (sum(1,2)); // 3

let double = n => n * 2;
// let double = function(n) {return n * 2}와 거의 동일함

alert (double(3)); //6

let sayHi = () => alert("안녕하세요!");

sayHi();

let age = prompt("나이를 알려주세요.", 18);

let welcome = (age < 18) ?
    () => alert('안녕') :
    () => alert("안녕하세요!");

welcome();