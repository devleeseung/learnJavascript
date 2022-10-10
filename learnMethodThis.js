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

  // 단축 구문을 사용하니 더 깔끔해 보이네요.
user = {
    sayHi() { // "sayHi: function()"과 동일합니다.
      alert("Hello");
    }
  };