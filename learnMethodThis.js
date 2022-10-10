let user = {
    name: "John",
    age: 30
};

user.sayHi = function(){
    alert("안녕하세요!");
};

user.sayHi(); // 안녕하세요!

// 함수 선언
function sayHi() {
    alert("안녕하세요!");
  };
  
  // 선언된 함수를 메서드로 등록
  user.sayHi = sayHi;

  user.sayHi(); // 안녕하세요!