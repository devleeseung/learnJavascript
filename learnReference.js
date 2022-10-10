let user = { name: "John" };

let admin = user; // 참조값을 복사함 

admin.name = "Pete" // admin 참조 값에 의해 변경됨

alert(user.name); // pete가 출력됨 user 참조 값을 이용해 변경사항을 확인함

let a = {};
let b = a; //참조에 의한 복사

alert( a == b ); // 두 변수는 같은 객체를 참조
alert( a === b );

let a = {};
let b = {}; // 독힙된 두 객체

alert( a == b ); // false

let user = {
    name: "John",
    age: 30
};

let clone = {}; // 새로운 빈 객체

//빈 객체에 user 프로퍼티 전부를 복사해 넣습니다.
for (let key in user) {
    clone[key] = user[key];
}

//이제 clone은 완전히 독립적인 복제본이 되었습니다.
clone.name = "Pete"; // clone의 데이터를 변경합니다.

alert( user.name ); // 기존 객체에는 여전히 John이 있습니다.