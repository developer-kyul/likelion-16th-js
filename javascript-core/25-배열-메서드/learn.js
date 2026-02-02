// --------------------------------------------------------------------------
// 실습: 배열 조작 (Array Manipulation)
// --------------------------------------------------------------------------
// * indexOf() : 손님의 방 번호(인덱스)를 찾는 탐지기
// * push / pop : 호텔 끝방(마지막) 관리
// * unshift / shift : 호텔 입구(처음) 관리
// * splice() : 장부 중간을 수정하는 만능 도구
// * slice() : 원본 보존을 위한 장부 복사본 생성
// --------------------------------------------------------------------------

// --------------------------------------------------------------------------
// 손님 위치 파악하기
// --------------------------------------------------------------------------

const guestList = ['지율', '상연', '야무', '범쌤']
console.log(guestList)

// [퀴즈] '야무' 손님은 몇 번 방에 계실까요? (2)
console.log(typeof guestList.indexOf)
console.log(guestList.indexOf('야무'))
console.log(guestList.indexOf('슬비'))

// 사용자 정의 함수 hasItem 또는 hasElement 작성
// hasItem(배열, 항목) 또는 
// hasElement(배열, 항목) 값이 있으면 true 반환 없으면 false 반환

// 함수 작성
function hasElement(arrayObject, checkItem) {
  const value = arrayObject.indexOf(checkItem) // -1 또는 0 보다 큰 값
  return value > -1
}

// 함수 참조
const hasItem = hasElement


// 테스트 코드
console.log(hasElement(guestList, '야무')) // true
console.log(hasItem(guestList, '슬비')) // false


// --------------------------------------------------------------------------
// 손님 관리 (Unshift, Push, Pop, Shift)
// --------------------------------------------------------------------------

// --------------------------------------------------------------------------
// 앞방에 추가 (unshift)

console.log(guestList)
// [ '서현', '지율', '상연', '야무', '범쌤' ]
guestList.unshift('서현', '민주', '지호')
console.log(guestList)

// --------------------------------------------------------------------------
// 앞에서 제거 (shift)

guestList.shift()
guestList.shift()
guestList.shift()
console.log(guestList)

// --------------------------------------------------------------------------
// 끝방에 추가 (push)

// 인덱스를 사용해 안전하게 마지막 인덱스 위치에 새 항목 추가하는 방법
// guestList[guestList.length] = '심선생님'
// guestList[guestList.length] = '슬비'

// 1. 끝방(마지막)에 새로운 손님 모시기
guestList.push('심선생님', '슬비쌤')

// ['지율', '상연', '야무', '범쌤', '심선생님']
console.log(guestList)

// --------------------------------------------------------------------------
// 끝방에 제거 (pop)

console.log(guestList.pop())
console.log(guestList.pop())
console.log(guestList)


// --------------------------------------------------------------------------
// 만능 도구 splice()로 장부 중간 수정하기
// --------------------------------------------------------------------------
// 공식: splice(시작_인덱스, 제거_개수, 추가_할_항목)

const numbers = [1, 2, 5]
//               0, 1, 2

// const lastNumber = numbers.pop()
// console.log(lastNumber)
// numbers.push(3, 4, lastNumber)
// console.log(numbers)

// 중간(인덱스 2)에 3, 4를 추가하고 싶다면?
// console.log('장부 중간 수정 결과:', numbers) // [1, 2, 3, 4, 5]
numbers.splice(2, 0, 3, 4)
console.log(numbers)
//                      0, 1, 2, 3, 4


// 0 인덱스부터 시작해서 2개 제거
// numbers 배열에서 1, 2 항목(0, 1인덱스) 제거
// numbers.shift()
// console.log(numbers)
// numbers.shift()
// console.log(numbers)
// const removedNumbers = numbers.splice(0, 2)
// console.log(removedNumbers)
// console.log(numbers)

// 마지막 인덱스 - 3에서 3개 제거
// numbers.pop()
// console.log(numbers)
// numbers.pop()
// console.log(numbers)
// numbers.pop()
// console.log(numbers)

// const removeCount = 1
// const startIndex = numbers.length - removeCount
// const removedNumbers = numbers.splice(startIndex, removeCount)

// console.log(removedNumbers)
// console.log(numbers)

// 배열의 끝에서 [n]개 제거하는 함수(기능) 구현
// removeItemsFromLast(arrayObject, removeCount)
// 함수 이름 후보: popMany, dropRight, truncate
function popMany(arrayObject, removeCount) {
  // 코드 로직 작성
  const startIndex = arrayObject.length - removeCount
  const removedItems = arrayObject.splice(startIndex, removeCount)
  return removedItems
}

// const popMany = removeItemsFromLast
// const dropRight = popMany

// const removedItems = removeItemsFromLast(numbers, 3)
// console.log(numbers)
// console.log(removedItems) // 삭제된 항목이 포함된 새로운 배열 [2, 3, 4]


// 특정 구간(인덱스 1부터 3개)의 손님을 배웅하려면?
// [2, 3, 4] 제거
console.log('남은 장부:', numbers) // [1, 5]
const deletedNumbers = numbers.splice(1, 3)
// 삭제된 항목들로 구성된 새로운 배열
console.log(deletedNumbers)
// 가지고 있던 항목이 삭제된 윈본 배열(변형됨)
console.log(numbers)


// --------------------------------------------------------------------------
// 안전한 백업 장부 만들기 (slice)
// --------------------------------------------------------------------------

const originalLog = ['데이터1', '데이터2', '데이터3']
//                      0   ,    1    ,   2
// let backupLog = originalLog.slice(0, originalLog.length) // 원본과 똑같은 사본 생성
let backupLog = originalLog.slice() // 원본과 똑같은 사본 생성

// originalLog.splice(originalLog.length - 2, 2)

// 사본(배열)에 끝에 '데이터4' 추가

// 사본을 수정해도 원본은 안전합니다. (불변성 유지)
console.log('원본 장부:', originalLog) 
console.log('백업 장부:', backupLog)


// --------------------------------------------------------------------------
// 핵심 요약!
// --------------------------------------------------------------------------
// 1. indexOf는 원시 값(문자, 숫자)을 찾을 때 최적입니다.
// 2. splice는 원본 배열을 직접 수정(Mutable)하므로 주의해서 사용해야 합니다.
// 3. slice는 원본을 건드리지 않고 새로운 배열을 반환(Immutable)합니다.
// 4. 배열의 시작 조작(unshift, shift)은 끝 조작(push, pop)보다 컴퓨터에게 더 힘든 작업입니다.
// --------------------------------------------------------------------------


// --------------------------------------------------------------------------
// 실습 문제 풀이
// --------------------------------------------------------------------------

// 아래 작성된 배열 데이터를 사용해 실습을 진행합니다. 
const people = [
  '세종대왕',
  '이순신',
  '김구',
  '유관순',
  '장영실',
  '신사임당',
]

const greatPeople = people.slice() // people 배열 복사
console.log(people === greatPeople) // false라면 복제된 것이 맞음 (다른 힙 주소 참조)

// 1. greatPeople 배열에서 '이순신' 항목의 인덱스를 확인합니다. (indexOf)
const leeSSIndex = greatPeople.indexOf('이순신')
console.log(leeSSIndex)
console.log(greatPeople.indexOf('야무'))

// 2. greatPeople 배열 시작 위치에 '정약용', '지석영'을 추가합니다. 
//     1. `unshift()` 활용
// greatPeople.unshift('정약용', '지석영')
//     2. `splice()` 활용
// greatPeople.splice(0, 0, '정약용', '지석영')
console.log(greatPeople)

// 3. greatPeople 배열 끝 위치에 '김유신', '을지문덕'을 추가합니다. 
//     1. `push()` 활용
// greatPeople.push('김유신', '을지문덕')
//     2. `splice()` 활용
// const lastGreatePeopleItem = greatPeople.at(-1)
// const startIndex = greatPeople.indexOf(lastGreatePeopleItem)
// console.log(startIndex)
// greatPeople.splice(startIndex, 0, '김유신', '을지문덕')
console.log(greatPeople)

// 4. greatPeople 배열 시작 위치에서 '세종대왕', '이순신'을 제거합니다.
//     1. `shift()` 활용
// console.log(greatPeople.shift())
// console.log(greatPeople.shift())
//     2. `splice()` 활용
// greatPeople.splice(0, 2)
console.log(greatPeople)

// 5. greatPeople 배열 끝 위치에서 '장영실', '신사임당'을 제거합니다.
//     1. `pop()` 활용
// console.log(greatPeople.pop())
// console.log(greatPeople.pop())
//     2. `splice()` 활용
// greatPeople.splice(greatPeople.length - 2, 2)
popMany(greatPeople, 2)
console.log(greatPeople)

function shiftMany(arrayObject, removeCount) {
  // 함수 로직 작성
  return arrayObject.splice(0, removeCount)
}

// 사용법
const removedGreatePeople = shiftMany(greatPeople, 3)
console.log(removedGreatePeople)
console.log(greatPeople)








// --------------------------------------------------------------------------
// 린터(Linter) 점검 실습: 아래 코드의 '잠재적 버그'를 예측해보세요.
// --------------------------------------------------------------------------

const fruits = ['사과', '바나나']

// ⚠️ 린터가 'no-unused-vars' 경고를 보낼 수 있습니다.
let lastFruit = fruits.pop()
console.log(lastFruit) // '바나나'

// 만약 pop()을 한 번 더 실행한다면, fruits는 어떤 상태가 될까요?
lastFruit = fruits.pop() 
console.log(lastFruit) // '사과' 

console.log(fruits) // []