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

let user = {};

// set
user["likes birds"] = true;

//get 
alert(user["likes birds"]); //true

//delete
delete user["likes birds"];

let key = "likes birds";

//user["likes birds"] = true; 와 같습니다
user[key] = true;

let user = {
    name: "john",
    ahe: 30
};

let key = prompt("사용자의 어떤 정보를 얻고 싶으신가요?", "name");

//변수로 접근 
alert(user[key]); // john

//점 표기법르오는 불가능 

let user = {
    name: "john",
    age: 30
};

let key = "name";
alert(user.key) // undefined


let fruit = prompt("어떤 과일을 구매하시겠습니까?", "apple");

let bag = {
  [fruit]: 5, // 변수 fruit에서 프로퍼티 이름을 동적으로 받아 옵니다.
};

alert( bag.apple ); // fruit에 "apple"이 할당되었다면, 5가 출력

let fruit = prompt("어떤 과일을 구매하시겠습니까?", "apple");
let bag = {};

// 변수 fruit을 사용해 프로퍼티 이름을 만들었습니다.
bag[fruit] = 5;

let fruit = 'apple';
let bag = {
  [fruit + 'Computers']: 5 // bag.appleComputers = 5
};

function makeUser(name, age) {
    return{
        name: name,
        age: age,
        ///...등등 
    };
}

let user = makeUser("John", 30);
alert(user.name); //John

function makeUser(name, age) {
    return{
        name,
        age,
        ///...등등 
    };
}

// 예약어를 키로 사용해도 괜찮다.
let obj = {
    for: 1,
    let: 2,
    return: 3,
};

alert( obj.for + obj.let + obj.return );  // 6

let obj = {
    0: "test" // "0": "test"와 동일합니다.
  };
  
  // 숫자 0은 문자열 "0"으로 변환되기 때문에 두 얼럿 창은 같은 프로퍼티에 접근합니다,
  alert( obj["0"] ); // test
  alert( obj[0] ); // test (동일한 프로퍼티)

  let obj = {};
obj.__proto__ = 5; // 숫자를 할당합니다.
alert(obj.__proto__); // [object Object] - 숫자를 할당했지만 값은 객체가 되었습니다