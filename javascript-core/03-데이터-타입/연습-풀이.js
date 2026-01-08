// --------------------------------------------------------------------------
// 연습: 다음 코드의 출력 결과를 예측해 주석으로 작성하세요.
// --------------------------------------------------------------------------

console.log(typeof 'JavaScript')      // 예측 값 작성: 'string'
console.log(typeof 24)                // 예측 값 작성: 'number'
console.log(typeof true)              // 예측 값 작성: 'boolean'
console.log(typeof undefined)          // 예측 값 작성: 'undefined' 
console.log(typeof null)              // 예측 값 작성: 'object'
console.log(typeof Symbol('id'))      // 예측 값 작성: 'symbol'
console.log(typeof 123n)              // 예측 값 작성: 'bigint'
console.log(typeof [4, 7, 3])         // 예측 값 작성: 'object'
console.log(typeof { name: '우인' })   // 예측 값 작성: 'object' 
console.log(typeof function() {})     // 예측 값 작성: 'function'


// --------------------------------------------------------------------------
// 연습: 각 타입에 맞는 값을 변수에 할당하세요.
// --------------------------------------------------------------------------

// 당신의 이름을 저장하는 문자열 변수 my_name
let my_name = '한정주'

// 당신의 나이를 저장하는 숫자 변수 my_age
let my_age = 34

// 학생인지 여부를 저장하는 불리언 변수 is_student
let is_student = false

// 아파트 호수가 없음을 나타내는 null 변수 apt_number
let apt_number = null

// 아직 값이 정해지지 않은 변수 future_job
let future_job = undefined

// 좋아하는 과일 3개를 담은 배열 favorite_fruit
const favorite_fruit = ['사과', '배', '귤']

// 당신의 정보를 담은 객체 my_info (이름, 나이 포함)
const my_info = { name: '우주영', age: 22 }

// "안녕하세요"를 출력하는 함수 sayHello
const sayHello = function() { console.log('안녕하세요') }

// 각 변수의 타입을 확인해보세요.
console.log('my_name의 타입:', typeof my_name)
console.log('my_age의 타입:', typeof my_age)
console.log('is_student의 타입:', typeof is_student)
console.log('apt_number의 타입:', typeof apt_number)
console.log('future_job의 타입:', typeof future_job)
console.log('favorite_fruit의 타입:', typeof favorite_fruit)
console.log('my_info의 타입:', typeof my_info)
console.log('sayHello의 타입:', typeof sayHello)


// --------------------------------------------------------------------------
// 연습: 다음 코드를 실행하고 결과를 예측한 후 확인하세요.
// --------------------------------------------------------------------------

// null의 타입
const user = null
console.log('user의 타입:', typeof user)
// 질문: null의 타입이 'object'인 이유는 무엇일까요?
// 답: JavaScript 초기 버전의 버그입니다. 
//    null은 타입 태그가 000(객체)으로 저장되어 있어서 typeof가 'object'를 반환합니다.
//    이 버그는 너무 오래되어 수정하면 기존 코드들이 망가질 수 있어서 그대로 두고 있습니다.


// 문자 vs 숫자
const score1 = '100'
const score2 = 100

console.log('score1 =', score1, 'score1의 타입:', typeof score1)
console.log('score2 =', score2, 'score2의 타입:', typeof score2)
// 질문: 두 변수의 값은 같아 보이지만 타입이 다릅니다. 왜 그럴까요?
// 답: score1은 따옴표('')로 감싸져 있어서 문자열(텍스트)이고, score2는 따옴표 없이 숫자 그대로 작성되어 숫자 타입입니다.
//    보기에는 똑같이 100이지만, 컴퓨터는 문자 '100'과 숫자 100을 다르게 저장합니다.


// undefined vs null
let user_name
const user_age = null

console.log('user_name의 타입:', typeof user_name)
console.log('user_age의 타입:', typeof user_age)
console.log('user_name의 값 =', user_name)
console.log('user_age의 값 =', user_age)
// 질문: undefined와 null의 차이는 무엇일까요?
// 답: undefined는 "값을 아직 정하지 않았다"는 뜻입니다. (자동으로 부여됨)
//    null은 "의도적으로 비어있다"는 뜻입니다. (개발자가 직접 설정)
//    예) 직업을 아직 입력 안 함 → undefined
//       현재 직업이 없어 '무직' 입력 → null


// 배열과 객체의 타입
const numbers = [1, 2, 3, 4, 5]
const person = { name: '지서현', age: 19 }
const sayHi = function() { console.log('안녕!') }

console.log('numbers의 타입:', typeof numbers)
console.log('person의 타입:', typeof person)
console.log('sayHi의 타입:', typeof sayHi)
// 질문: 배열, 객체, 함수의 typeof 결과를 정리해보세요.
// 배열: object (배열도 객체의 한 종류입니다.)
// 객체: object
// 함수: function (함수만 특별하게 'function'으로 표시됩니다.)


// 타입 변환 실험
const num1 = 10
const num2 = '10'

console.log('num1 + 5 =', num1 + 5, 'num1의 타입:', typeof num1)
console.log('num2 + 5 =', num2 + 5, 'num2의 타입:', typeof num2)
// 질문: 왜 결과가 다를까요?
// 답: num1은 숫자이므로 10 + 5 = 15 (수학 계산)
//     num2는 문자열이므로 '10' + 5 = '105' (문자 연결)
//     문자열에 숫자를 더하면 숫자가 문자로 바뀌어서 붙습니다.


// BigInt vs Number
const big_number = 9007199254740991n  // BigInt
const normal_number = 100              // Number

console.log('big_number:', big_number, 'big_number의 타입:', typeof big_number)
console.log('normal_number:', normal_number, 'normal_number의 타입:', typeof normal_number)
// 질문: BigInt 뒤에 'n'이 붙는 이유는 무엇일까요?
// 답: 'n'은 "이 숫자는 BigInt 타입이다."라고 표시하는 기호입니다.
//     일반 Number는 매우 큰 숫자를 정확하게 표현할 수 없어서,
//     아주 큰 숫자를 다룰 때는 BigInt를 사용하고 뒤에 n을 붙입니다.


// Symbol의 고유성
const id1 = Symbol('id')
const id2 = Symbol('id')

console.log('id1:', id1, 'id1의 타입:', typeof id1)
console.log('id2:', id2, 'id2의 타입:', typeof id2)
console.log('id1.description:', id1.description)
console.log('id2.description:', id2.description)
// 질문: 같은 'id'로 만들었는데 id1과 id2는 같을까요, 다를까요?
// 답: 다릅니다! Symbol은 매번 새롭고 고유한 값을 만듭니다.
//     같은 Symbol('id')을 사용해도 id1과 id2는 완전히 다른 Symbol입니다.
//     마치 쌍둥이처럼 똑같이 생겼어도 다른 사람인 것과 비슷합니다.