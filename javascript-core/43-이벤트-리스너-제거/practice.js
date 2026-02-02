// --------------------------------------------------------------------------
// 이벤트 리스너 제어 실습

document.addEventListener('DOMContentLoaded', () => {
  const resetBtn = document.querySelector('[data-id="reset-button"]')
  const logBtn = document.querySelector('[data-id="log-button"]')
  const removeBtn = document.querySelector('[data-id="remove-button"]')
  const limitedBtn = document.querySelector('[data-id="limited-button"]')
  const output = document.querySelector('output')

  let clickCount = 0
  let limitedCount = 0

  // 1. 클릭 메시지 출력 핸들러
  function handleLogClick() {
    clickCount++
    output.textContent = '버튼이 ' + clickCount + '번 클릭되었습니다'
  }

  // 3. 3번만 클릭 가능 핸들러
  function handleLimitedClick() {
    limitedCount++
    if (limitedCount <= 3) {
      output.textContent = '제한 버튼 클릭: ' + limitedCount + '회'
    }

    if (limitedCount === 3) {
      limitedBtn.removeEventListener('click', handleLimitedClick)
      limitedBtn.disabled = true
      output.textContent = '3번 클릭 완료! 리스너가 제거되었습니다.'
    }
  }

  // 초기 상태로 리스너 연결하는 함수
  function init() {
    // 중복 등록 방지를 위해 제거 후 등록
    logBtn.removeEventListener('click', handleLogClick)
    limitedBtn.removeEventListener('click', handleLimitedClick)

    logBtn.addEventListener('click', handleLogClick)
    limitedBtn.addEventListener('click', handleLimitedClick)

    // 상태 변수 및 UI 초기화
    clickCount = 0
    limitedCount = 0
    limitedBtn.disabled = false
    output.textContent = '준비 완료! 버튼을 클릭해 보세요.'
  }

  // 2. 리스너 제거 버튼 이벤트
  removeBtn.addEventListener('click', () => {
    logBtn.removeEventListener('click', handleLogClick)
    output.textContent = '메시지 출력 이벤트가 제거되었습니다.'
  })

  // 4. 초기화 버튼 이벤트
  resetBtn.addEventListener('click', () => {
    init()
  })

  // 앱 시작
  init()
})
