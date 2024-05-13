document.querySelector(".btn2").addEventListener("click", function () {
  document.querySelector(".title").innerHTML = "제목아니다.";
});
document.querySelector(".btn1").addEventListener("click", function () {
  document.querySelector(".title").innerHTML = "제목이다.";
});

// - sum이라는 이름의 함수를 만들어보세요.
// - sum 함수는 num1, num2라는 파라미터를 가집니다.
// - sum 함수는 파라미터로 받은 num1과 num2를 더하여 콘솔로 출력하는 함수입니다.
// - sum 함수를 실행한 후 num1과 num2가 더해진 결과가 개발자도구의 콘솔에 잘 출력되는지 확인해보세요.
function sum(num1, num2) {
  return num1 + num2;
}
console.log(sum(1, 2));

//**문제4) 조건문**

// - isEvenOrOdd라는 이름의 함수를 만들어보세요.
// - isEvenOrOdd 함수는 num이라는 파라미터를 가집니다.
// - 주어진 숫자 num이 짝수인지 홀수인지 판별하여 "짝수입니다" 또는 "홀수입니다"를 출력하는 함수를 작성하세요.
// - isEvenOrOdd를 실행하여 개발자도구의 콘솔에 잘 출력되는지 확인해보세요.

function isEvenOrOdd(num) {
  if (num % 2 === 0) {
    console.log("짝수입니다");
  } else {
    console.log("홀수입니다");
  }
}

isEvenOrOdd(1);
isEvenOrOdd(2);

// **문제5) 변수**

// - 이름과 나이를 저장할 변수를 선언하고 값을 할당하세요. 변수 이름은 알아서 정해보세요.
// - 콘솔창에 아래와 같이 나오도록 만들어보세요.

const person = {
  이름: "양대우",
  나이: 26,
};
console.log("이름:" + person.이름);
console.log("이름:" + person.나이);

const { 이름, 나이 } = person;
console.log(`이름:${이름}
나이:${나이}
`);
