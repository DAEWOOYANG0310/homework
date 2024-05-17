// 3초 후에 “3초 후에 출력되는 텍스트입니다.” 라는 콘솔로그가 출력되도록 코드를 작성해보세요.
const text = document.querySelector(".text");

setTimeout(() => {
  text.style.display = "block";
}, 3000);

setTimeout(() => {
  console.log("“3초 후에 출력되는 텍스트입니다.”");
}, 3000);
///////////////////////////////////////////////////////////////////////
// id가 counter인 태그에 0이라는 숫자가 존재합니다. setInterval을 이용하여 1초에 1씩 카운트되게 만든 후,
//  카운트가 5가 되면 “종료”라는 콘솔로그가 출력되게 만들보세요. 단, clearInterval을 통해 카운트 5가 되면
//  현재 setInterval 함수를 종료해야 합니다.
const counter = document.querySelector("#counter");
let count = Number(counter.textContent);
setInterval(() => {
  if (count < 5) {
    count = count + 1;
    counter.textContent = count;
  } else {
    counter.style.display = "none";
  }
}, 1000);
