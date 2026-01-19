// --------------------------------------------------------------------------
// v1. 최대한 간단하게 코드 작성
// --------------------------------------------------------------------------
// document.querySelector('.modal-open-button')
//   .addEventListener('click', () => {
//     document.body.classList.add('modal-dialog-is-open')
//   })

// document.querySelector('.modal-close-button')
//   .addEventListener('click', () => {
//     document.body.classList.remove('modal-dialog-is-open')
//   })

// --------------------------------------------------------------------------
// v2. 변수 사용 (문서 객체 기억)
// --------------------------------------------------------------------------
// const body = document.body
// const openButton = body.querySelector('.modal-open-button')
// const closeButton = body.querySelector('.modal-close-button')

// openButton.addEventListener('click', () => {
//   body.classList.add('modal-dialog-is-open')
// })

// closeButton.addEventListener('click', () => {
//   body.classList.remove('modal-dialog-is-open')
// })

// --------------------------------------------------------------------------
// v3. 함수 선언 또는 화살표 함수 표현식 사용 (기능 재사용)
// --------------------------------------------------------------------------
const body = document.body
const openButton = body.querySelector('.modal-open-button')
const closeButton = body.querySelector('.modal-close-button')

// 화살표 함수 표현식
// const openModal = _ => body.classList.add('modal-dialog-is-open')
// const closeModal = _ => body.classList.remove('modal-dialog-is-open')

// 함수 표현식
// const openModal = function() {
//   body.classList.add('modal-dialog-is-open')
// }
// const closeModal = function() {
//   body.classList.remove('modal-dialog-is-open')
// }

// 이벤트 리스너 추가
openButton.addEventListener('click', openModal)
closeButton.addEventListener('click', closeModal)

// 함수 선언문
function openModal() {
  body.classList.add('modal-dialog-is-open')
}

function closeModal() {
  body.classList.remove('modal-dialog-is-open')
}