// --------------------------------------------------------------------------
// 실습: 폼 필드 선택하기 (form.elements)
// --------------------------------------------------------------------------

// 학습: 폼 필드 접근
;(() => {
  const form = document.querySelector('.user-registration-form')
  // HTMLFormElement 객체
  // console.dir(form)
  
  // HTMLFormControlsCollection 객체 { length, namedItem }
  // console.log(form.elements)
  // 폼 컨트롤 객체에 접근
  // id, name 속성 또는 인덱스(index) 사용 접근 가능
  // console.log(form.elements[0]) // 수집된 인덱스로 접근
  // console.log(form.elements.userid) // name 속성으로 접근
  // console.log(form.elements['user-nickname']) // id 속성으로 접근

  // 폼 컨트롤 반복 처리
  // for 문
  ;(() => {
    for (let i = 0, l = form.elements.length; i<l; ++i) {
      const element = form.elements[i]
      console.log(element)
    }
  }) //()
  
  // for...of 문
  ;(() => {
    for (const formControl of form.elements) {
      console.log(formControl)
    }
  }) //()

  // forEach() 메서드 (배열화)
  ;(() => {
    Array
      .from(form.elements)
      .forEach((formControl, index) => {
        console.log(index, formControl)
      })
  }) //()

}) //()

// 실습: 로그인 폼
;(() => {

  // 로그인 폼에 사용자가 입력한 아이디, 비밀번호 값을 읽어와 
  // 콘솔 패널에 출력합니다. (form.elements 활용)

  const form = document.getElementById('login-form')
  
  form.addEventListener('submit', (e) => {
    // 브라우저 기본 작동 방지
    e.preventDefault()

    // 폼 컨트롤 콜렉션 접근
    const formControls = form.elements
    // 아이디 컨트롤 값
    const { value: idValue } = formControls.userid
    // 패스워드 컨트롤 값
    const { value: passwordValue } = formControls.password

    // 콘솔 패널에 출력
    console.log({ idValue, passwordValue })

    // 폼 초기화
    const formElement = e.currentTarget
    formElement.reset()
  })
  
})()


// --------------------------------------------------------------------------
// 핵심 정리
// --------------------------------------------------------------------------
// - 순서가 중요하다면? -> index
// - 데이터 구조가 중요하다면? -> name
// - 특정 고유 요소가 필요하다면? -> id (대괄호 표기 주의)
// --------------------------------------------------------------------------