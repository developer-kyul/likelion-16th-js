// --------------------------------------------------------------------------
// 1. passive 옵션 테스트

const targetBox = document.getElementById('target-box')
const checkPassive = document.getElementById('check-passive')
const log = document.getElementById('log')

let currentController = null

function attachListener() {
  // 기존 리스너 제거 (AbortController 활용)
  if (currentController) {
    currentController.abort()
  }

  // 컨트롤러 생성
  currentController = new AbortController()

  // 체크 상태 확인 (패시브 설정 여부)
  const isPassive = checkPassive.checked

  log.textContent = '현재 옵션: { passive: ' + isPassive + ' }'
  log.style.color = isPassive ? '#00f' : '#f00'

  targetBox.addEventListener(
    'wheel',
    (e) => {
      try {
        // 스크롤을 막으려는 시도
        e.preventDefault()
        log.textContent = '스크롤 차단 성공! (preventDefault 작동)'
      } catch (err) {
        // passive: true일 때 e.preventDefault() 호출 시 콘솔에 에러 출력
        console.error(
          '패시브 리스너에서는 브라우저의 기본 스크롤 동작을 막을 수 없습니다.\n',
          err,
        )
      }

      if (isPassive) {
        log.textContent = '스크롤 됨 (passive라 차단 실패, 콘솔 확인)'
      }
    },
    // signal과 passive 옵션을 객체 형태로 전달
    {
      passive: isPassive,
      signal: currentController.signal,
    },
  )
}

// 초기 실행 및 옵션 변경 이벤트 연결
attachListener()
checkPassive.addEventListener('change', attachListener)

// --------------------------------------------------------------------------
// 2. 이벤트 일괄 중지 (AbortController)

const buttonStart = document.getElementById('button-start')
const buttonStop = document.getElementById('button-stop')
const trackerArea = document.querySelector('.tracker-area')
const statusText = document.getElementById('status-text')
const coords = document.getElementById('coordinates')

let controller = null

// 추적 시작 버튼 클릭 시
buttonStart.addEventListener('click', () => {
  // 1. 새로운 AbortController 인스턴스 생성
  controller = new AbortController()

  // UI 상태 업데이트
  buttonStart.disabled = true
  buttonStop.disabled = false
  trackerArea.classList.add('active')
  statusText.textContent = '마우스를 움직이거나 클릭해보세요!'

  // 마우스 이동 이벤트 등록 (signal 포함)
  trackerArea.addEventListener(
    'mousemove',
    (e) => {
      coords.textContent = 'X: ' + e.offsetX + ', Y: ' + e.offsetY
    },
    { signal: controller.signal },
  )

  // 클릭 이벤트 등록 (signal 포함)
  trackerArea.addEventListener(
    'click',
    () => {
      trackerArea.style.backgroundColor = '#bbf7d0'
      setTimeout(() => {
        trackerArea.style.backgroundColor = '#e0f2fe'
      }, 200)
      console.log('클릭 감지됨!')
    },
    { signal: controller.signal },
  )
})

// 추적 중지 버튼 클릭 시 (이벤트 일괄 제거)
buttonStop.addEventListener('click', () => {
  if (controller) {
    // 2. signal과 연결된 모든 이벤트를 한 번에 제거
    controller.abort()

    // UI 및 변수 초기화
    buttonStart.disabled = false
    buttonStop.disabled = true
    trackerArea.classList.remove('active')
    statusText.textContent = '추적이 중지되었습니다.'
    coords.textContent = 'X: 0, Y: 0'
    controller = null
  }
})
