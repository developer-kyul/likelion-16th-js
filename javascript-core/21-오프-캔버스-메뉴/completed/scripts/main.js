// const siteContainer = document.querySelector('.site-container')
// console.log(siteContainer) // ⚠️ null

// 문제 발생 원인
// <head> 내부에서 <script>가 호출되면
// HTML 파서가 대기(일시정지)하므로 문서 객체가 아직 생성되지 않았다.


// 프로그램 상수
const OFFCANVAS_ACTIVE_CLASSNAME = 'off-canvas-is-open'

// 문제 해결 방법
// 사건(Event): 문서의 모든 HTML 코드가 DOM으로 구현된 후,
// 청취 후 행동(Handling): 콜백 함수를 실행해라. (비동기 처리)

globalThis.addEventListener('DOMContentLoaded', () => {
  // 문서에서 찾은 대상(객체) 기억
  const body = document.body
  const siteContainer = document.querySelector('.site-container')
  const openButton = siteContainer.querySelector('[data-id="open-button"]')
  
  // 메뉴 열기 버튼을 사용자가 클릭(마우스, 키보드)하면
  openButton.addEventListener('click', () => {
    // 이벤트가 감지되면 이벤트 리스너(콜백 함수)가 실행된다.
    // 웹 API에 의해 큐로 옮겨져 대기 중인 콜백 함수가 이벤트 루프에 의해 콜 스택으로 옮겨진다.
    // 콜 스택에서 실행된 콜백 함수는 결과를 반환하고 메모리 상에서 삭제된다.
    
    // TODO
    // <body> 요소에 활성 클래스를 제어(추가)
    // body.classList.add(OFFCANVAS_ACTIVE_CLASSNAME)

    // TODO
    // if (body.classList.contains(OFFCANVAS_ACTIVE_CLASSNAME)) {
    //   // <body> 요소에 활성 클래스가 있다면 활성 클래스 제거
    //   body.classList.remove(OFFCANVAS_ACTIVE_CLASSNAME)
    // } else {
    //   // <body> 요소에 활성 클래스가 없다면 활성 클래스 추가
    //   body.classList.add(OFFCANVAS_ACTIVE_CLASSNAME)
    // }

    // TODO
    // 토글 메서드 활용
    body.classList.toggle(OFFCANVAS_ACTIVE_CLASSNAME)
  })
})