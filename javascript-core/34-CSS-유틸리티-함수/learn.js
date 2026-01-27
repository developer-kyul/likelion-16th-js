// --------------------------------------------------------------------------
// 실습: 스타일 제어 유틸리티 함수 작성 (Utilities)
// --------------------------------------------------------------------------

// [실습] getStyle() 함수
// 1. 요소(element)와 CSS 속성 이름(propertyName)을 인자로 받습니다.
// 2. getComputedStyle()을 사용하여 요소의 계산된 스타일 값을 반환하는 로직을 작성하세요.
console.groupCollapsed('getStyle() 함수 작성')

/* 추상화된 기능 구현 */

{
  // 첫 번째 버전
  // function getStyleV1(element, propertyName) {
  //   const elementStyleSnapshot = getComputedStyle(element)
  //   const propertyVaue = elementStyleSnapshot.getPropertyValue(propertyName)
  //   return propertyVaue
  // }

  // 두 번째 버전
  // function getStyleV2(element, propertyName) {
  //   if (element === null || element.nodeType !== document.ELEMENT_NODE) {
  //     console.warn('전달된 element는 문서의 요소가 아닙니다. 확인해보세요.')
  //     return null
  //   }

  //   const elementStyleSnapshot = getComputedStyle(element)

  //   if (typeof propertyName !== 'string') {
  //     console.warn('전달된 propertyName은 CSS 속성명을 문자열로 전달해야 합니다.')
  //     return null
  //   }

  //   const propertyVaue = elementStyleSnapshot.getPropertyValue(propertyName)
  //   return propertyVaue
  // }

  function getStyle(element, propertyName) {
    // 방어적 프로그래밍
    // 조건: element가 문서의 요소가 맞는가?
    // 틀리다면 아무 것도 없음을 명시적으로 반환
    //        경고 메시지를 콘솔 패널에 출력
    if (element === null || element.nodeType !== document.ELEMENT_NODE) {
      console.warn('전달된 element는 문서의 요소가 아닙니다. 확인해보세요.')
      return null
    }

    // 맞다면 프로그램 계속 실행
    const elementStyleSnapshot = getComputedStyle(element)

    // 방어적 프로그래밍
    // 전달된 propertyName의 타입이 문자열이 아니라면?
    // 아무 것도 없음을 명시적으로 반환
    // 경고 메시지를 콘솔 패널에 출력
    if (typeof propertyName !== 'string') {
      console.warn(
        '전달된 propertyName은 CSS 속성명을 문자열로 전달해야 합니다.',
      )
      return null
    }

    const propertyVaue = elementStyleSnapshot.getPropertyValue(propertyName)
    return propertyVaue
  }

  // 오류 발생 가능성이 있는 코드
  // const strongElement = document.querySelector('.unknown strong')
  // console.log( getStyle(strongElement, 21234) )

  // 유효한 코드
  const strongElement = document.querySelector('.prose p:first-of-type strong')
  console.log(getStyle(strongElement, 'font-weight'))
  console.log(getStyle(strongElement, 'font-size'))
  console.log(getStyle(strongElement, 'color'))
  console.log(getStyle(strongElement, 'letter-spacing'))
  console.log(getStyle(strongElement, 'word-spacing'))
}

/* 리마인드 (기능 추상화 → 방어적 프로그래밍) */
{
  // 대상 요소
  const body = document.body
  const main = body.querySelector('main')
  const lastChild = body.children[body.children.length - 1]

  // 추상화된 기능 없이 로직을 사용한다면?
  const bodyStyleSnapshot = getComputedStyle(body)
  const viewportHeight = bodyStyleSnapshot.getPropertyValue('height')
  console.log(viewportHeight)

  // vs
  
  // 추상화된 기능을 사용한다면?
  console.log(getStyle(body, 'height'))

  // 추상화된 기능 없이 로직을 사용한다면?
  const mainStyleSnapshot = getComputedStyle(main)
  const mainWidth = mainStyleSnapshot.getPropertyValue('width')
  console.log(mainWidth)

  // vs
  
  // 추상화된 기능을 사용한다면?
  console.log(getStyle(main, 'width'))

  // 추상화된 기능 없이 로직을 사용한다면?
  const lastChildStyleSnapshot = getComputedStyle(lastChild)
  const lastChildFontSize = lastChildStyleSnapshot.getPropertyValue('font-size')
  console.log(lastChildFontSize)

  // vs
  
  // 추상화된 기능을 사용한다면?
  console.log(getStyle(lastChild, 'font-size'))


  
  // 추상화된 기능을 정의해 사용한다면?
  function getStyle(element, propertyName) {
    const elementStyleSnapshot = getComputedStyle(element)
    const propertyValue = elementStyleSnapshot.getPropertyValue(propertyName)
    return propertyValue
  }


  // const 계산된속성값 = getStyle(요소, 속성이름)
}

console.groupEnd()

// [실습] setStyle() 함수
// 1. 요소, 속성 이름, 스타일 값을 인자로 받습니다.
// 2. 요소의 style 속성을 사용해 값을 설정하세요.
// 3. 메서드 체이닝이 가능하도록 요소를 반환(return)하세요.
console.groupCollapsed('setStyle() 함수 작성')

// 이곳에 코드를 작성하세요.

// 기능 추상화 없이 로직을 작성한다면?
{
  const body = document.body
  const main = body.querySelector('main')

  body.style.setProperty('background-color', 'gold')
  main.style.setProperty('border', '6px solid currentColor')
  main.style.setProperty('padding', 24 + 'px')

}

// 기능을 추상화해 로직을 재사용한다면?
{
  const body = document.body
  const main = body.querySelector('main')

  // 추상화된 기능 정의
  function setStyle(element, propName, propValue) {
    element.style.setProperty(propName, propValue)
  }

  setStyle(body, 'background-color', 'tan')
  setStyle(main, 'border-width', 2 + 'px')
  setStyle(main, 'padding', 24 * 2 + 'px')

}

// 리마인드 타임 (기능 추상화)
{
  // 요소에 헤드라인 스타일을 설정
  const body = document.body
  const heading2 = document.querySelector('h2')

  // body.style.setProperty('background-color', '#101010')
  setStyle(body, 'background-color', '#101010')

  // heading2.style.setProperty('padding', '0.3em 0.6em')
  setStyle(heading2, 'padding', '0.3em 0.6em')
  // heading2.style.setProperty('border', '8px solid currentColor')
  setStyle(heading2, 'border', '8px solid currentColor')
  // heading2.style.setProperty('border-radius', '6px')
  setStyle(heading2, 'border-radius', '6px')
  // heading2.style.setProperty('color', '#ffcb29')
  setStyle(heading2, 'color', '#00cbff')

  // 기능 추상화 (복잡한 로직을 안으로 숨겨서 외부에서는 손쉽게 기능 사용)
  function setStyle(element, propName, propValue) {
    element.style.setProperty(propName, propValue)
    // return undefined (암묵적 반환, void)
  }
}

// 방어적 프로그래밍 + 메서드 체이닝
{
  setStyle(document.body)
  setStyle(document.body, 'padding')
  setStyle(document.body, 'padding', '30px')
  
  function setStyle(element, propName, propValue) {
    if (element === null || element.nodeType !== document.ELEMENT_NODE) {
      console.warn('element 인자로 전달된 것은 요소 노드가 아닙니다.')
      return null
    }

    if (!propName || !propValue) {
      console.warn('propName 또는 propValue 인자는 유효한 값 전달이 필요합니다.')
      return null
    }

    element.style.setProperty(propName, propValue)

    return element
  }
  
}

console.groupEnd()

// [실습] removeStyle() 함수
// 1. 요소, 속성 이름 값을 인자로 받습니다.
// 2. 요소의 style.removeProperty 메서드를 활용하세요.
// 3. 메서드 체이닝이 가능하도록 요소를 반환(return)하세요.
console.groupCollapsed('removeStyle() 함수 작성')

// 기능 추상화 없이 사용할 경우 (웹에 내장된 기본 함수를 사용)
{
  const body = document.body
  const main = body.querySelector('main')
  // 요구사항: 특정 요소의 인라인 스타일을 삭제하고 싶다.
  body.style.removeProperty('padding')
  body.style.removeProperty('background-color')

  main.style.removeProperty('border')
  main.style.removeProperty('padding')
}

// 기능 추상화 하여 사용할 경우 (사용자 정의한 유틸리티 함수 사용)
{
  const body = document.body
  const main = body.querySelector('main')

  // 요구사항: 특정 요소의 인라인 스타일을 삭제하고 싶다.
  // 스타일 유틸리티 함수
  function removeStyle(element, propertyName) {
    element.style.removeProperty(propertyName)  
  }

  removeStyle(body, 'padding')
  removeStyle(body, 'background-color')
  removeStyle(main, 'border')
  removeStyle(main, 'padding')
}

// 기능 추상화 + 방어적 프로그래밍 (오류 가능성에서 코드 보호)
{

  const body = document.body

  function removeStyle(element, propertyName) {
    if (!element || element.nodeType !== document.ELEMENT_NODE) {
      console.warn('element 인자는 문서의 요소 노드여야 합니다.')
      return null
    }

    if (!propertyName/* undefined | null */) {
      console.warn('propertyName 인자가 유효하지 않은 값입니다.')
      return null
    }

    element.style.removeProperty(propertyName)  
  }

  removeStyle()                // ❌ Error → ⚠️ Warning
  removeStyle(body)            // ❌ Error → ⚠️ Warning
  removeStyle(body, 'padding') // ✅
}

console.groupEnd()

// [실습] css() 함수
// 1. 위에서 작성한 getStyle과 setStyle, removeStyle을 내부에서 활용하세요.
// 2. propertyValue가 있으면 '설정(set)'하고, 없으면 '읽기(get)'를 수행하도록 조건문을 작성하세요.
// 3. propertyValue가 null인 경우, 삭제(remove)하도록 조건 처리합니다.
// 4. (심화) propertyName이 객체({})인 경우, 재귀 호출을 통해 여러 스타일을 한 번에 적용하세요.

console.group('css() 함수 작성')

// 개별 유틸리티 함수를 사용하는 경우
// - getStyle
// - setStyle
// - removeStyle
{
  const tipBoxHeading = document.querySelector('.tip-box h3')

  // 스타일 설정(쓰기, 수정)
  setStyle(tipBoxHeading, 'font-size', 32 + 'px')
  
  // 스타일 확인(읽기, 조회)
  const tipBoxHeadingFontSize = getStyle(tipBoxHeading, 'font-size')
  console.log(tipBoxHeadingFontSize)

  // 스타일 삭제
  removeStyle(tipBoxHeading, 'font-size')

  function getStyle(element, propertyName) {
    return getComputedStyle(element).getPropertyValue(propertyName)
  }

  function setStyle(element, propertyName, propertyValue) {
    element.style.setProperty(propertyName, propertyValue)
  }

  function removeStyle(element, propertyName) {
    element.style.removeProperty(propertyName)
  }
}

// 유틸리티를 통합한 css 함수를 사용하는 경우 (다형성)
// - 읽기 (인자 2개)
// - 쓰기 (인자 3개)
// - 삭제 (인자 3개, 값이 null)
{
  // 이곳에 코드를 작성하세요.
  const code = document.querySelector('.code-example code')
  
  // 다형성 특징을 가지는 통합 유틸리티 함수 css() 활용

  // 쓰기
  css(code, 'color', '#34a853')
  css(code, 'background-color', '#054215')
  css(code, 'margin-block', '12px')
  css(code, 'padding', '24px')

  // 읽기
  const codeColor = css(code, 'color')
  console.log(codeColor)
  const codeBGColor = css(code, 'background-color')
  console.log(codeBGColor)

  // 삭제
  css(code, 'color', null)
  css(code, 'background-color', null)



  function css(element, propertyName, propertyValue) {
    // [읽기] 마지막 인자가 undefined인 경우
    if (propertyValue === undefined) {
      return getStyle(element, propertyName)
    }
    
    // [삭제] 마지막 인자가 null인 경우
    if (propertyValue === null) {
      return removeStyle(element, propertyName)
    }

    // [쓰기] 그 외 나머지 경우
    setStyle(element, propertyName, propertyValue)
  }


  function getStyle(element, propertyName) {
    return getComputedStyle(element).getPropertyValue(propertyName)
  }

  function setStyle(element, propertyName, propertyValue) {
    element.style.setProperty(propertyName, propertyValue)
  }

  function removeStyle(element, propertyName) {
    element.style.removeProperty(propertyName)
  }

}

console.groupEnd()

// --------------------------------------------------------------------------
// 핵심 요약!
// --------------------------------------------------------------------------
// 1. getStyle (읽기): 브라우저가 계산한 최종 스타일 값을 가져옵니다. (getComputedStyle)
// 2. setStyle (쓰기): 인라인 스타일을 적용하고, 연속 작업을 위해 요소를 다시 반환합니다. (체이닝)
// 3. removeStyle (삭제): 적용된 인라인 스타일을 깔끔하게 지워 초기화합니다.
// 4. css (유용): 상황에 따라 눈치껏 행동하는 통합 함수입니다. (다형성)
//    - 객체를 주면? -> 여러 스타일을 한 번에 싹 바꿈 (재귀)
//    - 값을 안 주면? -> 스타일 값을 물어봄 (읽기)
//    - 값을 주면? -> 스타일을 적용함 (쓰기)
//    - null을 주면? -> 스타일을 지움 (삭제)
// --------------------------------------------------------------------------



// --------------------------------------------------------------------------
// 함수 리팩토링(Refactoring)
// --------------------------------------------------------------------------

{
  const prose = document.querySelector('.prose')

  // getStyle
  function getStyle(el, prop) {
    // return getComputedStyle(el)[prop]
    return getComputedStyle(el).getPropertyValue(prop)
  }

  // setStyle
  function setStyle(el, prop, value) {
    // el.style[prop] = value
    el.style.setProperty(prop, value)
  }

  // removeStyle
  function removeStyle(el, prop) {
    // el.style[prop] = null
    el.style.removeProperty(prop)
  }

  // 세상에서 가장 사랑받는 라이브러리 jQuery 흉내내기!
  // 우리의 css() 유틸리티 함수 리팩토링
  css(prose, {
    'color': '#34a853',
    'background-color': '#051215',
    'margin-block': '12px',
    'padding': '24px',
  })

  // css
  function css(el, prop /* string or object */, value) {
    console.log({ el, prop, value })

    // A and B and C
    if (typeof prop === 'object' && prop && !Array.isArray(prop)) {
      // 재귀(recursion) 함수 활용
      // 객체를 순환(반복)하려면? -> for...in 문
      for (const key in prop) {
        const value = prop[key] // 객체의 속성에 접근하는 방법: 대괄호 표기법
        console.log(key/* 속성 */, value/* 값 */)
        // 재귀: 나(함수)를 내가 다시 불러요! (호출)
        // css(요소, 속성, 값)
        css(el, key, value)
      }

      // 함수 종료
      return
    }


    if (value === undefined) {
      return getStyle(el, prop)
    }

    if (value === null) {
      return removeStyle(el, prop)
    }

    setStyle(el, prop, value)
  }

}