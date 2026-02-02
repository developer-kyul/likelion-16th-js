// --------------------------------------------------------------------------
// 1. 나이 별 입장료 계산

function getEntranceFeeByAge(age) {
  let fee

  if (age < 13) {
    fee = 2000
  } else if (age < 65) {
    fee = 5000
  } else {
    fee = 3000
  }

  return fee
}

const entranceFees = [
  getEntranceFeeByAge(21),
  getEntranceFeeByAge(10),
  getEntranceFeeByAge(73),
]

console.log(entranceFees) // [5000, 2000, 3000]

// --------------------------------------------------------------------------
// 2. 로그인 환영 메시지

function getWelcomeMessage(isLoggedIn) {
  const message = isLoggedIn ? '회원님, 환영합니다!' : '로그인이 필요합니다.'
  return message
}

console.log(getWelcomeMessage(true)) // '회원님, 환영합니다!'
console.log(getWelcomeMessage(false)) // '로그인이 필요합니다.'

// --------------------------------------------------------------------------
// 3. 짝수/홀수 판별

function checkEvenOdd(number) {
  const result = number % 2 === 0 ? '짝' : '홀'
  return result
}

console.log(checkEvenOdd(10)) // '짝'
console.log(checkEvenOdd(7)) // '홀'

// --------------------------------------------------------------------------
// 4. 코드 리팩토링

const temperature = 30
const status = temperature >= 28 ? '폭염' : '적정'

console.log(status) // '폭염'

// --------------------------------------------------------------------------
// 5. 점수 별 등급 구분

function getGradeByScore(score) {
  let grade

  if (score >= 90) {
    grade = 'A'
  } else if (score >= 80) {
    grade = 'B'
  } else if (score >= 70) {
    grade = 'C'
  } else if (score >= 60) {
    grade = 'D'
  } else {
    grade = 'F'
  }

  return grade
}

const grades = [
  getGradeByScore(75),
  getGradeByScore(82),
  getGradeByScore(96),
  getGradeByScore(50),
]

console.log(grades) // ['C', 'B', 'A', 'F']
