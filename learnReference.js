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