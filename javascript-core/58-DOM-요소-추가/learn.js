// --------------------------------------------------------------------------
// 실습: 요소 생성 및 추가 (createElement, appendChild, insertBefore)
// --------------------------------------------------------------------------

{
  // 요소(Element) 생성
  const orderedList = document.createElement('ol')

  // 생성된 요소에 속성 설정
  // - class 속성 (className, classList)
  orderedList.className = 'demo-ol'
  orderedList.className += ' ' + 'song-rank'
  orderedList.classList.add('list', 'dictionary')
  // - setAttributre()
  orderedList.setAttribute('aria-label', '가요 톱10')
  // - dataset
  orderedList.dataset.message = '2026년 2월 가요 톱10'
  // - textContent 속성
  orderedList.textContent = '<li>이렇게 넣으면 표준 위반!</li>'
  // - innerHTML 속성
  orderedList.innerHTML = `
    <li>K팝 노래 1</li>
    <li>K팝 노래 2</li>
    <li>K팝 노래 3</li>
  `

  // console.log(orderedList.className) // LEGACY
  // console.log(orderedList.classList.value) // MODERN
  // console.log(orderedList.outerHTML) // <ol></ol>

  // 부모 요소를 찾아, 부모의 마지막 자식 요소로 추가
  // 부모요소.appendChild(자식요소)
  const container = document.querySelector('.container')

  container.addEventListener('click', (e) => {
    const parentElement = e.currentTarget
    const appendButton = e.target.closest('.append-button')
    const addButton = e.target.closest('.add-button')

    if (addButton && orderedList.parentElement) {
      // console.log(orderedList) // 메모리 상에 기억된 요소
      // console.log(orderedList.parentElement) // null 아직 문서에 삽입되기 전
      // 새로운 <li></li> 요소 생성
      const li = document.createElement('li')
      const nextNumber = orderedList.children.length + 1
      li.textContent = `K팝 노래 ${nextNumber}`
      orderedList.appendChild(li)
    }

    if (appendButton) {
      // 부모요소의 마지막 자식 요소로 생성된 요소 추가
      parentElement.appendChild(orderedList)

      // 버튼 비활성화
      appendButton.disabled = true
      appendButton.style.cssText = 'cursor: not-allowed'
    }
  })

  const appendButton = container.querySelector('.append-button')
  // 사용자 버튼 클릭 시뮬레이션
  appendButton.click()

  // 부모요소.insertBefore(삽입할 요소, 삽입할 위치의 요소)
  // 'K팝 노래0' 리스트 아이템 요소 삽입

  // 삽입할 요소
  const newListItem = document.createElement('li')
  newListItem.textContent = 'K팝 노래 0'
  // console.log(newListItem.outerHTML)

  // 부모 요소와 삽입할 위치의 요소
  const list = container.querySelector('ol')
  const targetListItem = list.firstElementChild
  // console.log(targetListItem)

  // 부모요소.insertBefore(삽입할 요소, 삽입할 위치의 요소)
  list.insertBefore(newListItem, targetListItem)
}

// --------------------------------------------------------------------------

// [실습 1] 할 일 추가
// 1. form의 submit 이벤트를 차단하세요 (e.preventDefault())
// 2. input의 값을 읽어와서 새로운 <li> 요소를 만드세요.
// 3. .todo-list의 마지막 자식으로 추가하세요.
console.groupCollapsed('1. appendChild 실습 (Todo)')

{
  const practice1 = document.getElementById('practice1')
  const list = practice1.querySelector('.todo-list')

  practice1.addEventListener('submit', (e) => {
    const form = e.target.closest('.todo-form')
    if (!form) return

    // 브라우저의 기본 작동인 폼 action으로 입력 데이터 전송을 방지
    e.preventDefault()
    
    const input = form.querySelector('.todo-input')
    const userInput = input.value.trim()
    
    const newTodo = document.createElement('li')
    newTodo.textContent = userInput
    // console.log(newTodo.outerHTML)
    list.appendChild(newTodo)

    // 입력 필드의 값 비우기
    // input.value = ''

    // 폼 초기화
    form.reset()

  })

}

console.groupEnd()

// --------------------------------------------------------------------------
// [실습 2] 다른 요소 앞에 추가
// 1. "면을 넣고" 앞에 추가 버튼을 클릭하면 실행합니다.
// 2. '물이 끓으면 스프를 넣습니다.' 내용을 가진 <li>를 만드세요.
// 3. insertBefore를 사용하여 "면을 넣고" 항목 앞에 삽입하세요.
console.groupCollapsed('2. insertBefore 실습 (Recipe)')

// 이곳에 코드를 작성하세요

console.groupEnd()

// --------------------------------------------------------------------------
// [실습 3] 다른 목록으로 이동
// 1. 버튼을 클릭하면 "망고" 요소를 찾으세요.
// 2. appendChild를 사용하여 "안 좋아하는 과일" 목록으로 이동시키세요.
console.groupCollapsed('3. 요소 이동 실습 (Fruits)')

// 이곳에 코드를 작성하세요

console.groupEnd()

// --------------------------------------------------------------------------
// 핵심 요약!
// --------------------------------------------------------------------------
// 1. 2단계 공정: 요소는 '생성(createElement)' 후 반드시 '추가(appendChild 등)'해야 화면에 보입니다.
// 2. 이동 효과: 이미 존재하는 요소를 다시 appendChild 하면 복사가 아니라 '이동'합니다.
// 3. 기준점 찾기: insertBefore를 쓸 때는 부모.children이나 querySelector로 정확한 기준 요소를 잡아야 합니다.
// 4. 이벤트 주의: form에서 버튼을 누를 때는 페이지가 새로고침되지 않도록 주의하세요.
// --------------------------------------------------------------------------
