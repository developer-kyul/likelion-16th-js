// --------------------------------------------------------------------------
// 1. 이벤트 단계 비교

const outer = document.querySelector('.outer')
const middle = document.querySelector('.middle')
const inner = document.querySelector('.inner')

// 캡쳐링 단계 (세 번째 인자로 true 전달)
outer.addEventListener('click', () => console.log('캡쳐링: outer'), true)
middle.addEventListener('click', () => console.log('캡쳐링: middle'), true)
inner.addEventListener('click', () => console.log('캡쳐링: inner'), true)

// 버블링 단계 (기본값)
outer.addEventListener('click', () => console.log('버블링: outer'))
middle.addEventListener('click', () => console.log('버블링: middle'))
inner.addEventListener('click', () => console.log('버블링: inner'))

// --------------------------------------------------------------------------
// 2. 이벤트 전파 중지

// 위 구조에서 .inner 클릭 시 전파를 멈추도록 설정
document.querySelector('.inner').addEventListener('click', (e) => {
  // e.stopPropagation()을 호출하면 상위 요소로 이벤트가 전달되지 않습니다
  e.stopPropagation()
  console.log('inner 클릭됨 - 전파 중단')
})

// --------------------------------------------------------------------------
// 3. 중첩된 클릭 이벤트 제어

const card = document.querySelector('.card')
const deleteButton = document.querySelector('.button-delete')

// 부모 요소: 카드 전체 영역 클릭 시 실행
card.addEventListener('click', () => {
  alert('카드 클릭됨: 상세 페이지 이동')
})

// 자식 요소: 삭제 버튼 클릭 시 실행
deleteButton.addEventListener('click', (e) => {
  e.stopPropagation()

  console.log('삭제 버튼 클릭됨')
  alert('상품이 삭제되었습니다.')
})
