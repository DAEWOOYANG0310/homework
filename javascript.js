// **문제1) 배열과 객체 만들기**

// - 다음 사진과 같이 **3명의 이름**, **나이**, **성별**에 대한 정보가 존재합니다.
// 다음의 정보를 배열과 객체를 활용하여 하나의 변수에 담고, 해당 변수를 console.log로 출력하세요.
// - **🍯 hint**: 객체들의 배열로 만들어보세요

//**문제2) 문제1에서 만든 데이터를 html에 보여주기**

// - 문제1에서 만든 객체들의 배열을 이용하여 html에 다음과 같이 보여주세요.
// - **팁:** `forEach`를 활용해보세요.

const persons = [
  {
    이름: "철수",
    나이: "19",
    성별: "남",
  },
  {
    이름: "유리",
    나이: "21",
    성별: "여",
  },
  {
    이름: "짱구",
    나이: "20",
    성별: "남",
  },
];

console.log(persons);
const personContainer = document.querySelector(".person-container");
persons.forEach((person) => {
  const { 이름, 나이, 성별 } = person;

  let people = `
  <div class= "people">
  <div> <h2>이름:${이름}</h2></div>
  <div> <h3>나이:${나이}</h3></div>
  <div> <h3>성별: ${성별}</h3></div>
  </div>
  `;
  personContainer.insertAdjacentHTML("beforeend", people);
});

// **문제3) find 메소드**

// - 문제1에서 만든 객체들의 배열을 활용하여 성별이 여자인 데이터를 한 명 찾아 콘솔에 출력해보세요.

const findDate = persons.find((gender) => {
  return gender.성별 === "여";
});
console.log(findDate);
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// **문제4) filter 메소드**

// - 문제1에서 만든 객체들의 배열을 활용하여 성별이 남자인 데이터를 필터링하여 콘솔에 출력해보세요.
const filterData = persons.filter((gender) => {
  return gender.성별 === "남";
});
console.log(filterData);
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// **문제5) map 연습 문제**

// - 문제1에서 만든 객체들의 배열을 활용하여 **모든 데이터의 나이에 10을 더한 새로운 배열**을 콘솔에 출력해보세요.
// - 단, 문제1에서 만든 **기존 데이터는 변경되면 안됩니다.**
// - 기존 데이터가 변경되지 않았는지 확인하기 위해 **기존 데이터와 새로운 배열을 모두 콘솔에 출력**해보세요.
const mapDate = persons.map((age) => {
  return {
    이름: age.이름,
    나이: Number(age.나이) + 10,
    성별: age.성별,
  };
});
console.log(mapDate);
//////////////////////////////////////////////////////////////////////////////////////////////////////////

// **문제6) sort 연습 문제**

// - 문제1에서 만든 객체들의 배열을 활용하여 **나이순으로 정렬해보세요. (내림차순으로 정렬)**
// - ⚠️ sort는 기존의 데이터를 변경하는 함수입니다. **spread operator로 복사본 생성 후** 진행해보세요.
// - 기존 데이터가 변경되지 않았는지 확인하기 위해 **기존 데이터와 새로운 배열을 모두 콘솔에 출력**해보세요.
const updatePersons = [...persons];

let sortData = persons.sort((a, b) => {
  return a.나이 - b.나이;
});

console.log(sortData);
console.log(updatePersons);
//////////////////////////////////////////////////////////////////////////////////////////////////////////
// **문제7) destructuring (구조 분해 할당) 문법 활용 예시**

// - 다음의 데이터를 활용하세요.

const user = {
  이름: "병수",
  나이: 20,
  주소: "시골",
};

const { 이름, 나이, 주소 } = user;
console.log(`${이름}${나이}${주소}`);
//user 데이터를 로컬스토리지에 저장하세요. 이때 로컬 스토리지의 key는 user로 저장합니다.
// 단, value에 [object Object] 처럼 저장되면 안됩니다.

localStorage.setItem("user", JSON.stringify(user));
// 로컬 스토리지에 저장된 데이터(user)를 조회한 후 콘솔에 출력해보세요.
// 단, 문자열이 아니라 객체로 출력되어야 합니다.

const storedUser = localStorage.getItem("user");

console.log(JSON.parse(storedUser));
//조회한 로컬 스토리지 데이터의 나이를 30으로 변경 후 다시 로컬 스토리지에 저장해보세요.

const changeAge = JSON.parse(storedUser);
changeAge.나이 = 30;
localStorage.setItem("user", JSON.stringify(changeAge));

//조회한 로컬 스토리지의 데이터(user)를 삭제하는 코드를 작성하는 코드를 작성해보세요.
//그리고 다시 user 데이터 조회 후 null이 출력되는지 확인하세요.
localStorage.removeItem("user");

const removeStorage = localStorage.getItem("user");
console.log(removeStorage);
