//1. 클래스가 box인 div 태그 중 클릭된 div 태그에 `clicked` 클래스를 추가해보세요.
// - 아래의 **index.html**, **style.css** 코드를 활용하세요. (파일은 생성하세요.)
// - **script.js** 파일을 생성하여 연결하세요.
// - 🍯 **hint**: `id`가 `container`인 태그에 이벤트를 걸고, **이벤트 객체**의 `target` 속성을 활용하세요.

const container = document.querySelector("#container");
const box = document.querySelectorAll(".box");

for (let i = 0; i < box.length; i++) {
  box[i].addEventListener("click", (e) => {
    e.target.classList.toggle("clicked");
  });
}

//target 을 활용해서 하는방법 잘모르겠음

/////////////////////////////////////////////////////

// 1. 다음의 함수를 완성해보세요.
//     - 1번 문제에서 생성한 **script.js** 파일의 하단에 코드 작성하시면 됩니다.

function getSquare(number) {
  return number * number;
  // number의 제곱을 계산하여 반환하는 함수를 작성하세요.
}

const result = getSquare(5);
console.log(result); // 25 출력 (5의 제곱)
