// --------------------------------------------------------------------------
// 1. 카드 클릭 이벤트 위임

const cardList = document.querySelector('.card-list')

if (cardList) {
  cardList.addEventListener('click', (e) => {
    const anchor = e.target.closest('a')

    if (anchor && cardList.contains(anchor)) {
      e.preventDefault()
      console.log('이동 경로: ' + anchor.getAttribute('href'))
      console.log('텍스트: ' + anchor.textContent.trim())
    }
  })
}

// --------------------------------------------------------------------------
// 2. 동적으로 추가된 요소 삭제

const todoList = document.querySelector('.todo-list')

if (todoList) {
  todoList.addEventListener('click', (e) => {
    const removeBtn = e.target.closest('.button-remove')

    if (removeBtn) {
      const listItem = removeBtn.closest('li')

      if (listItem) {
        listItem.remove()
        console.log('항목이 삭제되었습니다.')
      }
    }
  })
}

// --------------------------------------------------------------------------
// 3. 데이터 속성을 활용한 액션 분기

const fileList = document.querySelector('.file-list')

if (fileList) {
  fileList.addEventListener('click', (e) => {
    const button = e.target.closest('button')

    if (button) {
      const action = button.dataset.action
      const listItem = button.closest('li')

      if (listItem) {
        const fileNameElement = listItem.querySelector('.filename')

        if (fileNameElement) {
          const fileName = fileNameElement.textContent

          if (action === 'view') {
            alert('파일을 엽니다: ' + fileName)
          } else if (action === 'delete') {
            alert('파일을 삭제합니다: ' + fileName)
          }
        }
      }
    }
  })
}
