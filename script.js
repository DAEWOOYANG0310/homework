const user = {
  이름: "병수",
  나이: 20,
  주소: "시골",
};

//user 데이터를 로컬스토리지에 저장하세요. 이때 로컬 스토리지의 key는 user로 저장합니다.
// 단, value에 [object Object] 처럼 저장되면 안됩니다.
localStorage.setItem("user", JSON.stringify(user));
// 로컬 스토리지에 저장된 데이터(user)를 조회한 후 콘솔에 출력해보세요.
// 단, 문자열이 아니라 객체로 출력되어야 합니다.
const storaged = localStorage.getItem("user");
console.log(JSON.parse(storaged));

//조회한 로컬 스토리지 데이터의 나이를 30으로 변경 후 다시 로컬 스토리지에 저장해보세요.
const changeAge = JSON.parse(storaged);
changeAge.나이 = 30;
localStorage.setItem("user", JSON.stringify(changeAge));
//조회한 로컬 스토리지의 데이터(user)를 삭제하는 코드를 작성하는 코드를 작성해보세요.
localStorage.removeItem("user");
//그리고 다시 user 데이터 조회 후 null이 출력되는지 확인하세요.
const removed = localStorage.getItem("user");
console.log(removed);

// 문제1) 아래 API 문서를 확인하고, 게시물 목록을 조회하여 콘솔에 출력해보세요.
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((post) => {
      console.log(`ID: ${post.id}`);
      console.log(`Title: ${post.title}`);
      console.log(`Body: ${post.body}`);
      console.log(`User ID: ${post.userId}`);
      console.log("-------------------");
    });
  })
  .catch((error) => console.error(error));
