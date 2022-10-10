let user = new Object(); //객체 생성자 문법
let user = {}; //객체 리터럴 문법

let user = {
    name: "John", // 키: "name", 값: "John"
    age: 30       // 키: "age", 값: 30
    "likes birds": true // 복수의 단어는 따옴표로 묶어야 한다
}

//프로피터 값 얻기
alert(user.name); // John
alert(user.age); // 30

user.isAdmin = true;

delete user.age;