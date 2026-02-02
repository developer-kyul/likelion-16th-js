// --------------------------------------------------------------------------
// 1. 링크 이동 방지

function handleLink(e) {
  e.preventDefault()
  console.log('링크 클릭됨')
}

// --------------------------------------------------------------------------
// 2. 체크 방지

function handleCheckbox(e) {
  e.preventDefault()
  alert('체크박스를 선택할 수 없습니다.')
}

// --------------------------------------------------------------------------
// 3. 폼 제출 방지

const registerForm = document.querySelector('.js-register-form')

registerForm.addEventListener('submit', (e) => {
  e.preventDefault()
  
  const username = registerForm.querySelector('#username').value
  console.log('입력된 이름: ' + username)
})

// --------------------------------------------------------------------------
// 4. 컨텍스트 메뉴 방지

const sandbox = document.querySelector('.sandbox')

sandbox.addEventListener('contextmenu', (e) => {
  e.preventDefault()
  alert('커스텀 메뉴가 열렸습니다!')
})