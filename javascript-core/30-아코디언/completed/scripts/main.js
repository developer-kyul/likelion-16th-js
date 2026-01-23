{
  // --------------------------------------------------------------------------
  // 모든 아코디언을 조작 (반복 처리)
  // --------------------------------------------------------------------------
  
  // .accordion__container 클래스 이름으로 문서의 객체를 참조
  const accordionContainer = document.querySelector('.accordion__container')  
  const accordions = accordionContainer.querySelectorAll('.accordion') // NodeList { item(), forEach(), length }
  // console.log(accordions) // NodeList [div.accordion, div.accordion, div.accordion, div.accordion]

  // 반복되는 코드
  // .accordion 클래스 이름으로 문서의 객체를 참조
  // const accordion = accordionContainer.querySelector('.accordion:nth-child(1)')

  // 찾은 문서의 객체에 클릭 이벤트 리스너 추가
  // accordion.addEventListener('click', () => {
    // 아코디언 콘텐츠 토글(열기/닫기)
    // accordion.classList.toggle('is-open')
  // })

  // while 문으로 반복 처리
  let index = 0
  let total = accordions.length

  while (index < total) {
    const accordion = accordions.item(index) // accordions[index]
    const accordionButton = accordion.querySelector('.accordion__header button')
    accordionButton.addEventListener('click', () => {
      console.log('while 문에서 연결된 이벤트 리스너')
      // accordion.classList.toggle('is-open')
    })

    index += 1
  }


  // for 문으로 반복 처리
  for (let index = 0, total = accordions.length; index < total; index += 1) {
    const accordion = accordions.item(index) // accordions[index]
    const accordionButton = accordion.querySelector('.accordion__header button')
    accordionButton.addEventListener('click', () => {
      console.log('for 문에서 연결된 이벤트 리스너')
      // accordion.classList.toggle('is-open')
    })
  }

  // for...of 문으로 반복 처리
  for (const accordion of accordions) {
    const accordionButton = accordion.querySelector('.accordion__header button')
    accordionButton.addEventListener('click', () => {
      console.log('for...of 문에서 연결된 이벤트 리스너')
      // accordion.classList.toggle('is-open')
    })
  }
  
  // forEach 메서드로 반복 처리
  accordions.forEach((accordion) => {
    const accordionButton = accordion.querySelector('.accordion__header button')
    accordionButton.addEventListener('click', () => {
      console.log('forEach 메서드에서 연결된 이벤트 리스너')
      accordion.classList.toggle('is-open')
    })
  })
  
}
