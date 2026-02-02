// --------------------------------------------------------------------------
// 1. 보기 전환 버튼 그룹

const toggleGroup = document.querySelector('.view-toggle')
const toggleButtons = toggleGroup.querySelectorAll('button')

toggleButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const viewMode = button.dataset.view

    toggleButtons.forEach((toggleButton) => {
      toggleButton.classList.remove('active')
      toggleButton.setAttribute('aria-pressed', 'false')
    })

    button.classList.add('active')
    button.setAttribute('aria-pressed', 'true')

    console.log('현재 선택된 뷰: ' + viewMode)
  })
})

// --------------------------------------------------------------------------
// 2. 상품 카드 목록

const cardButtons = document.querySelectorAll('.card-container .card button')

cardButtons.forEach((button) => {
  button.addEventListener('click', function () {
    const card = this.closest('.card')
    const title = card.querySelector('h3').textContent

    console.log('클릭한 상품명: ' + title)
  })
})
