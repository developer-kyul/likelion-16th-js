// 상태 전환을 위한 활성 클래스
const ACTIVE_CLASS = 'off-canvas-is-open'

// 제어할 요소(객체) 참조
const body = document.body
const siteContainer = document.querySelector('.site-container')
// const openButton = siteContainer.querySelector('.offcanvas-open-button')
const openButton = siteContainer.querySelector('[data-desc="오프캔버스 열기 버튼"]')

// 클릭(click) 이벤트 리스너 등록
openButton.addEventListener('click', () => {
  // 구현해야 할 기능 (오프캔버스 메뉴 열기/닫기)
  // 각 컨테이너의 상위 요소(예: html 또는 body)에 활성 클래스 토글
  body.classList.toggle(ACTIVE_CLASS)
})