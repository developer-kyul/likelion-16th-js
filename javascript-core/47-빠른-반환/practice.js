// --------------------------------------------------------------------------
// 1. 회원 등급별 할인율 계산하기

function getDiscountRate(grade) {
  if (grade === 'VIP') return 20
  if (grade === 'GOLD') return 10
  if (grade === 'SILVER') return 5
  
  return 0
}

console.log(getDiscountRate('VIP'))    // 20
console.log(getDiscountRate('GOLD'))   // 10
console.log(getDiscountRate('BRONZE')) // 0

// --------------------------------------------------------------------------
// 2. 게시글 삭제 권한 검사하기

function deletePost(user) {
  // 로그인이 안 되어 있으면 즉시 반환
  if (!user.isLoggedIn) return '로그인이 필요합니다.'
  
  // 관리자가 아니면 즉시 반환
  if (!user.isAdmin) return '관리자 권한이 없습니다.'
  
  // 모든 관문을 통과함
  return '삭제 성공'
}

let result = deletePost({ isLoggedIn: false, isAdmin: false })
console.log(result) // '로그인이 필요합니다.'

result = deletePost({ isLoggedIn: true, isAdmin: false })  
console.log(result) // '관리자 권한이 없습니다.'

result = deletePost({ isLoggedIn: true, isAdmin: true })
console.log(result) // '삭제 성공'

// --------------------------------------------------------------------------
// 3. 클릭 시, 유효한 입력만 처리

const practice3 = document.querySelector('.practice3')
const form3 = practice3.querySelector('form')
const input3 = practice3.querySelector('input')
const output3 = practice3.querySelector('output')

form3.addEventListener('submit', (e) => {
  e.preventDefault()
  
  const value = input3.value.trim()

  // 빈 값일 경우 빠른 반환
  if (!value) {
    alert('이름을 입력해 주세요!')
    return
  }

  // 템플릿 리터럴 대신 문자열 연산 사용
  output3.textContent = '안녕하세요, ' + value + '님!'
})

// --------------------------------------------------------------------------
// 4. 점수 별, 등급 출력

const practice4 = document.querySelector('.practice4')
const input4 = practice4.querySelector('input')
const button4 = practice4.querySelector('button')
const output4 = practice4.querySelector('output')

function getScore(score) {
  if (score >= 90) return 'A'
  if (score >= 75) return 'B'
  if (score >= 60) return 'C'
  
  return 'F'
}

button4.addEventListener('click', () => {
  const score = Number(input4.value)
  
  // 입력값이 비어있거나 숫자가 아닐 때 빠른 반환
  if (input4.value === '' || isNaN(score)) {
    output4.textContent = '점수를 입력해 주세요'
    return
  }

  const grade = getScore(score)
  // 템플릿 리터럴 대신 문자열 연산 사용
  output4.textContent = '당신의 등급은 ' + grade + '입니다.'
})