function checkAge1(age) {
    if (age > 18) {
      return true;
    } else {
      return confirm('보호자의 동의를 받으셨나요?');
    }
  }

  function checkAge2(age) {
    return age > 18 ? true : confirm('보호자의 동의를 받으셨나요?');
    }

  function checkAge3(age){
    return (age > 18 || confirm('보호자의 동의를 받으셨나요?'));
  }

checkAge1(11);
checkAge2(11);
checkAge3(11);

function getMin(a,b) {
    return a > b ? b : a
}

getMin(2,5);
getMin(3,-1);
getMin(1,1);

function getPow(x,n) {
    if(n && n > 1){
        return (x ** n);
    }
    else{
        alert('자연수를 입력하세요');
    }
}

let x = prompt('x를 입력하세요');
let n = prompt('n를 입력하세요');
getPow(x,n);