const logButton = document.querySelector('[data-log]')

// 왜? 이걸 배워야 하나?
// 리스너 함수를 분리해 이름을 부여하지 않고도
// 함수 외부에서 추가된 이벤트 리스너를 제거할 수 있다.

// 어떻게?

// 최신 브라우저에서 지원 중인 실험적 기능
// AbortController는 abort '(일을) 도중하차하다[중단시키다]'는 의미
// 일을 중단시킬 수 있는 조절 기능을 제공하는 객체
// 그런데 이 객체는 생성해야지만 사용 가능

// AbortController 객체를 생성하는 방법
const controller = new AbortController()

console.log(controller) // AbortController { signal }

// AbortController 객체의 signal 속성은 AbortSignal { aborted: boolean }

// addEventListener() 메서드의 세 번째 인자(옵션) 객체의 signal 키 값에 AbortSignal 객체 연결
// addEventListener(type, listener, options { signal: AbortSignal })

// 익명(이름이 없는) 함수를 리스너로 사용해서
// 리스너 제거가 가능하지 않은 상황
logButton.addEventListener(
  'click',
  () => {
    console.log('이벤트가 연결되어 있어요.')
    console.log(`
    현재는 문제는 이름 없는 함수가 
    직접 리스너로 등록되서 제거할 방법이 없어요.
  `)
  },
  {
    signal: controller.signal // AbortSignal { aborted, reason, onabourt }
  },
)


// 4초 뒤에 추가된 이벤트 리스너의 작업 중단하라!
setTimeout(() => {
    console.log('이벤트 리스닝을 중단하라! ❌')
    controller.abort()
}, 4000)