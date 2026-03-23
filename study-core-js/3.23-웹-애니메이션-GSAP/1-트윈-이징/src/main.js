import './style.css'

checkLibraryCall('gsap', `
  GSAP 라이브러리를 불러와야 합니다.
  <script src="https://unpkg.com/gsap/dist/gsap.min.js"></script>
`)

const card = document.querySelector('[data-card]')
const toButton = document.querySelector('[data-action="to"]')
const setButton = document.querySelector('[data-action="set"]')
const fromButton = document.querySelector('[data-action="from"]')
const fromToButton = document.querySelector('[data-action="fromTo"]')

fromButton?.addEventListener('click', handleFrom)
toButton?.addEventListener('click', handleTo)
fromToButton?.addEventListener('click', handleFromTo)
setButton?.addEventListener('click', handleSet)

// --------------------------------------------------------------------------
// 이벤트 리스너

function handleSet() {
  console.log('gsap.set(target, vars): 즉시 초기화 (트윈 아님)')
  
  // gsap.set() 메서드를 사용해 대상을 제어해보세요. 
  // - 제어 대상: card
  // - 제어 속성: x, y, scale, opacity, rotation
  
}

function handleFrom() {
  console.log('gsap.from(target, vars): 시작점 -> 현재로 복귀 (등장 효과)')

  // gsap.from() 메서드를 사용해 대상을 애니메이션 해보세요.
  // - 제어 대상: card
  // - 제이 속성: duration, ease
  // - Ease Visualizer (https://gsap.com/docs/v3/Eases/CustomEase/#description)
  //   - power4.out: 아주 빠르고 시원하게 멈춤
  //   - back.out(1.7): 목표치를 살짝 넘었다가 돌아옴
  //   - elastic.out(1, 0.3): 쫀득한 젤리 같은 느낌
  //   - bounce.out: 통통 튀는 느낌
}

function handleTo() {
  console.log('gsap.to(target, vars): 현재 -> 목표로 이동')

  // gsap.to() 메서드를 사용해 대상을 애니메이션 해보세요.
  // - 제어 대상: card
}

function handleFromTo() {
  console.log('gsap.fromTo(target, fromVars, toVars): 시작점 -> 끝점 완벽 제어')

  // gsap.fromTo() 메서드를 사용해 대상을 애니메이션 해보세요.
  // - 제어 대상: card
  // - from: vars 객체 설정
  // - to: vars 객체 설정
}

function handleReset() {
  console.log('gsap.set() 메서드를 사용해 초기화')

}

// --------------------------------------------------------------------------
// 유틸리티

function checkLibraryCall(libraryName, errorMessage) {
  if (!(libraryName in globalThis)) {
    throw new Error(errorMessage)
  }
}
