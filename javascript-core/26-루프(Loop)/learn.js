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
// 배열 반복 (정순(순방향): 오름차순/역순(역방향): 내림차순)
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
// for...of 문 (배열 또는 문자열 반복)
// --------------------------------------------------------------------------

for (const frameworkName of webFrameworks) {
  console.log(frameworkName);
}

for (const n of [1, 2, 3, 10, 100, 1000, 1e8]) {
  console.log(n);
}

const personList = [
  { name: "박주영", age: 22 },
  { name: "최한나", age: 31 },
  { name: "김상준", age: 29 },
];

for (const person of personList) {
  console.log(person.name);
  console.log(person.age);
}

for (let i = 0; i < personList.length; i++) {
  const person = personList[i];
  console.log(person.name);
  console.log(person.age);
}

const message = "오늘 하루 너무 추워요~";
console.log(message.length);

// message 문자열을 하나 하나 순환(반복)해서 값을 출력해보고 싶어요.
// while, do...while, for, for...of

for (const character of message) {
  console.log(character);
}

// length 속성 가짐
// 각 요소의 인덱스를 가짐
// for (const character /* character = '~' */ of '오늘 하루 너무 추워요~') {
//   console.log(character)
// }

for (let i = 0; i < message.length; i += 1) {
  const character = message[i];
  console.log(character);
}

// --------------------------------------------------------------------------
// for...in 문 (객체 반복)
// --------------------------------------------------------------------------

// for...of는 반복 가능한 객체만 사용 가능
// 일반 객체는 반복 가능하지 않아서 사용할 수 없어요

const teacher = {
  name: "김데레사",
  age: 21,
  career: 26,
  subjects: ["웹 표준/접근성", "HTML", "CSS", "Tailwind CSS", "Sass"],
};

// teacher 객체를 반복(속성 별, 값을 출력)
// for...of 문 쉽던데? 이걸 써볼까?
// for (const property of teacher) {
//   console.log(property)
// }

// 배열처럼 반복 가능한 객체만 for...of 문을 사용할 수 있어요.
for (const instructor of [teacher]) {
  console.log(instructor);
}

// 객체를 순환하려면 for...in 문을 사용하세요.

// '속성' in 객체

console.log(teacher);
console.log("name" in teacher);
console.log("subjects" in teacher);
console.log("age" in teacher);
console.log("career" in teacher);

for (const property in teacher) {
  const value = teacher[property];
  console.log(property);
  console.log(value);
}

// 객체 순환 (객체가 가진 속성을 모두 탐색해서 값을 확인)
const points = {
  x: 10,
  y: 13,
  z: 8,
};

const propName = "x"; // 'y', 'z'

console.log("z" in points);
console.log(points[propName]);
console.log(points["x"]);

for (const propName /* 'x', 'y', 'z' */ in points) {
  console.log(propName);
  // 값 = 객체['속성이름']
  const value = points[propName]; // 'x', 'y', 'z'
  console.log(value);
}

{
  // 배열도 for...in문 사용 가능! (권장 안함, 비교적 느려서)
  const personList = [
    { name: "박주영", age: 22 },
    { name: "최한나", age: 31 },
    { name: "김상준", age: 29 },
  ];

  // for...of문
  for (const person of personList) {
    console.log(person);
  }

  // for...in문
  // 배열에서 for...in문 사용할 수 있지만,
  // 성능이 좋지 않으니까 객체에 양보하세요.
  for (const index in personList) {
    // []
    // 0: {...}
    // 1: {...}
    // 2: {...}
    console.log(index);
    const person = personList[index];
    console.log(person);
  }
}

// --------------------------------------------------------------------------
// 핵심 요약!
// --------------------------------------------------------------------------
// 1. while 문은 반복 횟수가 정해지지 않았을 때 유리합니다.
// 2. for 문은 인덱스(i)가 필요하거나 정해진 범위 반복에 최적입니다.
// 3. 배열 순회 시에는 가독성이 좋은 for...of를 적극 활용하세요.
// 4. 객체의 속성을 훑을 때는 for...in을 사용합니다.
// 5. break는 루프 탈출, continue는 이번 차례만 건너뛰기입니다.
// --------------------------------------------------------------------------

// --------------------------------------------------------------------------
// 실습
// --------------------------------------------------------------------------

{
  // 1. [짝수 출력] for 문을 사용해 1부터 100까지의 숫자 중, 짝수만 출력
  // 2, 4, 6, ..., 100

  for (let i = 1; i <= 100; ++i) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }

  for (let i = 0; i < 101; i = i + 2) {
    if (i > 0) {
      console.log(i);
    }
  }

  // 2. [카운트다운] while 문을 사용해 숫자 10부터 1까지 역순으로 출력

  let countDown = 11;

  while (--countDown > 0) {
    console.log(countDown);
  }

  // 3. [과일바구니] for … of 문을 사용해 다음 배열의 과일 출력
  const fruits = ["사과", "바나나", "귤", "복숭아"];

  for (const fruit of fruits) {
    console.log(fruit);
  }

  // 4. [비밀번호 찾기] do … while 문을 사용해 입력된 비밀번호('3001') 매칭 검토 후 결과 출력
  let i = 0;
  let item; // undefined

  const list = ["0124", "8291", "8259", "3001", "9073"];
  const input = "3001";

  do {
    item = list[i];
    // i = i + 1
    // i += 1
    i++;
    console.log(item);
  } while (input !== item);

  console.log(item);

  // attempt = attempts[i + 3]
  // console.log(attempt)
  // console.log(attempt === input)

  // do {
  // 먼저 수행할 일 (또는 반복해서 수행할 일)
  // } while(조건)

  // 5. [성적표 출력] for … in 문을 사용해 객체의 key, value 출력
  const student = {
    name: "선호",
    grade: "A",
    age: 22,
  };

  for (const key in student) {
    console.log(key);
    console.log(student[key]);
  }

  // 6. [까다로운 반복문] `1`부터 `20`까지 반복
  //    - `5`부터 `10`까지는 건너띄고 나머지 출력
  //    - `17`이 되면 반복 종료

  // for, while, do...while
  // for...of, for...in

  for (let i = 1; i <= 20; ++i) {
    if (i > 4 && i < 11) continue;
    if (i === 17) break;
    console.log(i);
  }

  const numbers =
    "1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20".split(
      ", ",
    );

  for (const numString of numbers) {
    const n = Number(numString);
    if (n > 4 && n < 11) continue;
    if (n === 17) break;
    console.log(n);
  }
}
