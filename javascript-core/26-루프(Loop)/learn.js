// --------------------------------------------------------------------------
// 실습: 반복문 (Loops & Iteration)
// --------------------------------------------------------------------------
// * while : 조건이 참인 동안 계속해서 방을 점검합니다.
// * for : 정해진 횟수만큼 손님에게 인사합니다.
// * for...of : 배열 장부의 손님 이름을 하나씩 꺼냅니다.
// * for...in : 객체 장부의 상세 정보(Key)를 확인합니다.
// --------------------------------------------------------------------------

// --------------------------------------------------------------------------
// 조건(if) 문 vs 반복(while) 문
// --------------------------------------------------------------------------

// if 문 (조건 흐름 제어문)
// 조건: ifCount가 5보다 작을 경우 "참"
// 조건이 "참"이면 코드 블록 1회 실행
let ifCount = 0;
if (ifCount < 5) {
  ifCount = ifCount + 1;
  console.log(ifCount);
}

// while 문 (반복 흐름 제어문)
// 조건: whileCount가 5보다 작을 경우 "참"
// 조건이 "참"일 동안, 코드 블록 반복 실행 🔄
let whileCount = 0;
let dontOver = true;
while (dontOver) {
  // whileCount = whileCount + 1
  // whileCount += 1
  // whileCount++
  // console.log(++whileCount)
  if (whileCount >= 5) {
    dontOver = false;
  }

  console.log(whileCount);
  whileCount += 2;
}

// ⚠️ 반복문이 멈추지 않으면???
// JavaScript는 한 번에 하나의 일만 할 수 있어
// 먼저한 일이 멈추지 않으면 다음 일을 하지 못해요.
// "무한 반복(Infinite Loop)"에 빠지지 않게
// 반복문 사용 시 주의가 필요합니다.
console.log("언제 멈춰?? 😡");

// --------------------------------------------------------------------------
// while 문
// --------------------------------------------------------------------------

const draw = (n) => "화면에 " + n + "번째 그림을 그리다.";

// 화면에 [n]번 드로잉하고 싶다.
let count = 0;
const REPEAT_COUNT = 10; // n번

while (count < REPEAT_COUNT) {
  count += 1;
  // continue: [1], [2], 3, 4, [5]
  // break: [1], [2], 3(중단)

  if (count >= 3 && count <= 4) {
    continue; // 현재 코드에서 아래 코드 건너띄고 다시 while 조건 확인 이동
  }

  if (count === 9) {
    break; // 반복문 종료
  }

  draw(count);
  console.log(count); // 1, 2
}

// 연명부
const people = ["한돌", "두돌", "세돌", "네돌", "...", "백돌"];
//                0      1      2     3 ,   ... , 100

// 연명부를 반복 순환
// 찾는 사람이 있다면 반복을 그만 멈춰라.
const search = "백돌";

// 반복문
let index = 0,
  personName = "";

while (index < people.length /* 0 < 4 */) {
  personName = people.at(index); // '한돌'
  // 검색한 who와 personName이 같다면?
  // 반복을 그만 멈춰라.
  if (personName === search) {
    break; // 반복문 중단
  }
  // 반복문 중단되면 아래 코드는 실행 안되요.
  index += 1;
}

console.log(personName);

// --------------------------------------------------------------------------
// do...while 문
// --------------------------------------------------------------------------

// while(조건) {
//   블록 안에 실행할 코드
// }

// do it - 한다 (조건과 상관없이 반드시 1회는 실행)
// while - ~동안 (반복: 조건이 참인 동안)

let i = 0; // 반복횟수: iterationCount

do {
  console.log(i);
  i += 1;
} while (i === 0);

console.log(i);

// --------------------------------------------------------------------------
// for 문
// --------------------------------------------------------------------------

// while 문 -> for 문 변경
{
  const TARGET_COUNT = 3; // 목표 값 (20번 반복 (0~19))

  // while 문 (실행 흐름)
  // 반복 횟수
  while (whileCount < TARGET_COUNT) {
    console.log(whileCount);
    whileCount += 1;
  }

  // for 문 (실행 흐름)
  // for (/* 1 */ let forCount = 0; /* 2, 5 */forCount < TARGET_COUNT; /* 4, 7 */forCount += 1) {
  //   console.log(forCount) /* 3, 6 */
  // }

  // // for문 -> while문 변신 단계: 0
  // for (let forCount = 0; forCount < TARGET_COUNT; forCount += 1) {
  //   console.log(forCount)
  // }

  // // for문 -> while문 변신 단계: 1
  // let forCount = 0;
  // for (forCount < TARGET_COUNT; forCount += 1) {
  //   console.log(forCount)
  // }

  // // for문 -> while문 변신 단계: 2
  // let forCount = 0
  // for (forCount < TARGET_COUNT) {
  //   console.log(forCount)
  //   forCount += 1
  // }

  // // for문 -> while문 변신 단계: 3
  // let forCount = 0
  // while (forCount < TARGET_COUNT) {
  //   console.log(forCount)
  //   forCount += 1
  // }
}

// 전형적인 for문
for (let i = 0; i <= 9; i++) {
  console.log(i);
}

// --------------------------------------------------------------------------
// 배열 반복 (정순: 오름차순/역순: 내림차순)
// --------------------------------------------------------------------------

const numbers = ["하나", "둘", "셋", "넷", "다섯", "여섯", "일곱"];
//                 0     1     2    3     4      5      6

// 배열 순환 (while, for, do...while)
{
  // while
  let i = 0; // iterator (반복자, 'i'로 축약해서 사용)
  while (i < numbers.length) {
    const number = numbers[i];
    console.log(number);
    i++;
  }
}

{
  // do...while
  let i = 0;
  do {
    const number = numbers[i];
    console.log(number);
    i++;
  } while (i < numbers.length);
}

{
  // for
  for (let i = 0; i < numbers.length; ++i) {
    const number = numbers[i];
    console.log(number);
  }
}

{
  for (let i = 0; i < numbers.length; i = i + 1) {
    const number = numbers[i];
    console.log(number);
  }
}

{
  const books = [
    "HTML 공장",
    "CSS 드레스샵",
    "JavaScript 트레이닝룸",
    "리액트 마스터",
    "Next.js 메타 프레임워크",
  ];
  // 도서 이름 출력 (반복)

  for (let i = 0; i < books.length; i++) {
    const bookName = books[i];
    console.log(bookName);
  }
}

// 역순(내림차순) 반복 처리
const webFrameworks = [
  "react", // 0
  "vue.js", // 1
  "svelte", // 2
  "angular", // 3
  "solid.js", // 4 -> webFrameworks.length - 1
];

// for문
for (let i = webFrameworks.length - 1; i >= 0; i = i - 1) {
  const frameworkName = webFrameworks[i];
  console.log(i, frameworkName);
}

// --------------------------------------------------------------------------
// for...of 문
// --------------------------------------------------------------------------

// --------------------------------------------------------------------------
// for...in 문 (객체 반복)
// --------------------------------------------------------------------------

// --------------------------------------------------------------------------
// 핵심 요약!
// --------------------------------------------------------------------------
// 1. while 문은 반복 횟수가 정해지지 않았을 때 유리합니다.
// 2. for 문은 인덱스(i)가 필요하거나 정해진 범위 반복에 최적입니다.
// 3. 배열 순회 시에는 가독성이 좋은 for...of를 적극 활용하세요.
// 4. 객체의 속성을 훑을 때는 for...in을 사용합니다.
// 5. break는 루프 탈출, continue는 이번 차례만 건너뛰기입니다.
// --------------------------------------------------------------------------
