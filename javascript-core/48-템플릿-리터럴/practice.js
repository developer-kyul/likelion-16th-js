// --------------------------------------------------------------------------
// 1. 인사말 생성기 만들기

const greetButton = document.querySelector('#button-greet')
const greetOutput = document.querySelector('.output')

greetButton.addEventListener('click', () => {
  // 값 가져오기
  const name = document.querySelector('#username').value.trim()
  const meal = document.querySelector('#meal').value

  // 유효성 검사 (빠른 반환)
  if (!name || !meal) {
    alert('이름을 입력하고 식사 종류를 선택해 주세요!')
    return
  }

  // 템플릿 리터럴로 메시지 만들기
  const greetingMessage = `안녕! ${name}, 맛있는 ${meal} 먹자.`

  // 화면에 출력하기
  greetOutput.textContent = greetingMessage
})

// --------------------------------------------------------------------------
// 2. 상품 카드 HTML 생성하기

const productData = {
  name: '무선 기계식 키보드',
  price: 125000,
  description: '타건감이 우수한 적축 키보드입니다. 멀티 페어링 지원.',
}

const app = document.querySelector('#app')
const renderButton = document.querySelector('#button-render')

// 상품 객체를 받아 HTML 문자열을 반환하는 함수 작성
function createCard(product) {
  // 템플릿 리터럴을 사용해 멀티라인 HTML 구조 생성
  const cardMarkup = `
    <div class="card">
      <h3>${product.name}</h3>
      <p class="price">${product.price.toLocaleString()}원</p>
      <p class="desc">${product.description}</p>
    </div>
  `
  return cardMarkup
}

renderButton.addEventListener('click', () => {
  // 함수를 실행하여 HTML 문자열을 얻고, 화면에 삽입
  const cardHtml = createCard(productData)
  app.innerHTML = cardHtml
})
