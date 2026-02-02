// --------------------------------------------------------------------------
// 실습: Array 호텔 운영 시스템
// --------------------------------------------------------------------------
// * 배열(Array) : 데이터의 목록을 저장하는 특별한 객체
// * 인덱스(Index) : 호텔의 방 번호와 같으며, 반드시 '0'부터 시작함
// * .length : 호텔에 체크인한 총 손님의 수
// * .at() : 뒤에서부터 방을 찾을 수 있는 만능 마스터 키
// --------------------------------------------------------------------------


// --------------------------------------------------------------------------
// 배열 객체 생성
// --------------------------------------------------------------------------

// const members = [] // 배열 객체 (Array Object)
const shoppingCart = [ '김', '참치', '오이', '단무지', '맛살' ]

console.log(shoppingCart)

// JavaScript 생성자 함수 (Constructor: 객체 생성하는 함수)
// 요구사항: 배열(Array) 객체를 생성하고 싶다.
// 정석적인 방법: new 생성자_함수()

// 우리가 그동안 사용해봤던 빌트인(내장) 생성자 함수
// new String() or + ''
// new Number() or +'10'
// new Boolean() or !!
// BigInt(10) or 10n

const likeLionMembers = new Array('야무', '파랑', '노랑')
console.log(likeLionMembers)

const likeLionMembersArray = ['야무', '파랑', '노랑']
console.log(likeLionMembersArray)


// --------------------------------------------------------------------------
// 다양한 값 담기
// --------------------------------------------------------------------------

const allDatas = [
  2026, // 숫자 값 (0)
  '2026년', // 문자 값 (1)
  true, // 논리 값 (2)
  null, // null 값 (3)
  undefined, // undefined 값 (4)
  Symbol(), // Symbol 값 (5)
  BigInt(2026), // BigInt 값 (6)
  {}, // new Object(), // 생성된 객체 (7)
  [], // new Array(), // 생성된 배열 (객체) (8)
  function() {} // new Function(), // 생성된 함수 (객체) (9)
]

console.log(allDatas)


// --------------------------------------------------------------------------
// 배열이 포함하는 항목의 총 개수
// --------------------------------------------------------------------------

const allDatasCount = allDatas.length
console.log(allDatasCount)


// --------------------------------------------------------------------------
// 배열 항목 꺼내기 (항목의 위치를 인덱스로 가져옴)
// --------------------------------------------------------------------------

const firstData = allDatas[0]
console.log(firstData, typeof firstData)
const thirdData = allDatas[3 - 1]
console.log(thirdData, typeof thirdData)

const unknownData = allDatas[100]
console.log(unknownData)

if(!unknownData) {
  console.log('allDatas는 100번째 인덱스가 없어요!')
}

// --------------------------------------------------------------------------
// 마지막 항목에 접근하는 방법 (전체 개수 - 1 또는 .at(-1))
// --------------------------------------------------------------------------

// 전통적이고, 많이 사용되던 방법
let lastData = allDatas[allDatasCount - 1]
console.log(lastData)
console.log(typeof lastData)

// 오늘날 사용 가능한 세련된 방법 (권장)
lastData = allDatas.at(-1)
console.log(lastData)
console.log(typeof lastData)


// --------------------------------------------------------------------------
// 배열 인덱스의 항목 수정
// --------------------------------------------------------------------------

// 인덱스를 사용해 새 항목 추가
console.log(allDatas[9]) // [숫자(0), ..., 함수(9)]
allDatas[10] = 'add item' // [숫자(0), ..., 함수(9), 문자(10)]
console.log(allDatas)
console.log(allDatas.length)

// ✅ 좋은 습관
allDatas[allDatas.length] = '멋사 16기!!'

// ❌ 나쁜 습관 (메모리 낭비, 버그 유발 가능성 높음)
// allDatas[12] = '멋사 16기!!'

console.log(allDatas)


// 인덱스를 사용해 항목 수정
// 1번 인덱스의 값을 수정

// 1번방의 항목 가져오기(읽기)
const secondItem = allDatas[1]
console.log(secondItem)

// 1번방에 계산된 값 항목으로 설정하기(쓰기)
allDatas[1] = parseInt(secondItem, 10)
console.log(allDatas)



// --------------------------------------------------------------------------
// 린터(Linter) 점검 실습: 아래 코드의 '빨간 줄' 원인을 찾아보세요.
// --------------------------------------------------------------------------

const cart = ['두부', '양파', '대파']

// // ⚠️ 여기서 린터가 'no-const-assign' 경고를 보냅니다.
// cart = ['계란', '우유']

console.log(cart)

// 배열 값 비우기(모두 제거)
cart.length = 0
console.log(cart)

// 새 값으로 채우기 ('계란', '우유')
cart[0] = '계란'
cart[1] = '우유'
console.log(cart)

// --------------------------------------------------------------------------
// 실습 풀이
// --------------------------------------------------------------------------

// 정석적 방식으로 배열 객체 생성
// const webTechniques = new Array('HTML', 'CSS', 'JavaScript')
const webTechniques = []
webTechniques[webTechniques.length] = 'HTML'
webTechniques[webTechniques.length] = 'CSS'
webTechniques[webTechniques.length] = 'JavaScript'
console.log(webTechniques)

const instructors = ['야무', '슬비']
console.log(instructors)

const yamoo9 = instructors[0]
console.log(yamoo9)

instructors[1] = '김데레사'
console.log(instructors[1])
console.log(instructors)