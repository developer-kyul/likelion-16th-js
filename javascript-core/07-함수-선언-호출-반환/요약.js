// --------------------------------------------------------------------------
// 함수 요약
// --------------------------------------------------------------------------
// * 함수 선언(정의)
// * 함수 호출(사용, 실행)
// * 함수 반환(결과 값)
// * 함수 확장(매개변수, 인자)
// * 함수 종료(중단)
// * 함수 표현식: 변수 = 함수(값)
// --------------------------------------------------------------------------

// 함수 정의
// 1. 함수 선언문
function logger(nth, fightingMessage) {
  // 함수 안에 지역변수 선언
  let resultLog = '멋사 프론트엔드 부트캠프'
  const numberNth = parseInt(nth, 10)

  // 특정 상황(조건)이 확인되면 함수를 여기서 종료하겠다.
  // return resultLog + ' ' + numberNth + '기 여러분! 중도 이탈은 안되요!! 💦'
  // 종료 이후엔 코드 실행이 안됨

  // 암묵적으로 undefined 반환
  // return

  // 명시적으로 결과 값 반환
  return resultLog + ' ' + numberNth + '기 ' + fightingMessage
}

// 함수 실행(사용, 호출)
console.log(logger('16기', '여러분 힘내세요! 💪'))
console.log(logger(14, '멋진 개발자되세요! 😊'))
console.log(logger(12, '월급 많이 받으세요~ 🍀'))


// 2. 함수 표현식
// const 변수 = 함수(값)
const myLogger = function(nth, message) {
  let resultMessage = ''
  resultMessage += '멋사 ' + parseInt(nth, 10) + '기 여러분!'
  resultMessage += ' '
  resultMessage += message
  resultMessage += '🥳'

  return resultMessage
}

console.log(myLogger(16, '오늘도 행복하세요!'))

// 표 생성하는 함수(기능)
// JavaScript를 사용해 마크업 (구조 설계)
function 표_만들기(표_제목) {
  // const 표_마크업 = '<table><caption>' + 표_제목 + '</caption><tr><th scope="col">셀 제목 1</th><th scope="col">셀 제목 2</th></tr><tbody><tr><td>셀 내용 1</td><td>셀 내용 2</td></tr></tbody></table>'
  
  let 표_마크업 = ''
  표_마크업 += '<table>'
  표_마크업 += '  <caption>' + 표_제목 + '</caption>'
  표_마크업 += '  <tr>'
  표_마크업 += '    <th scope="col">셀 제목 1</th>'
  표_마크업 += '    <th scope="col">셀 제목 2</th>'
  표_마크업 += '  </tr>'
  표_마크업 += '  <tbody>'
  표_마크업 += '    <tr>'
  표_마크업 += '      <td>셀 내용 1</td>'
  표_마크업 += '      <td>셀 내용 2</td>'
  표_마크업 += '    </tr>'
  표_마크업 += '  </tbody>'
  표_마크업 += '</table>'

  return 표_마크업
}

console.log(표_만들기('JavaScript로 마크업하기!'))
console.log(표_만들기('HTML로 마크업하기!'))
