// --------------------------------------------------------------------------
// 리마인드
// --------------------------------------------------------------------------
// - 추상화
// - 다형성
// - 인터페이스
// - 리팩토링
// - 재귀 호출
// --------------------------------------------------------------------------

const prose = document.querySelector('.prose')
const heading = prose.querySelector('h2:first-of-type')
// console.log(heading)


// [스타일 읽기]

// 오류 발생 대신, 경고 테스트
// const warnTest1 = getStyle()
// const warnTest2 = getStyle(heading)

const headingColor = css(heading, 'color')
const headingFontSize = css(heading, 'font-size')
console.log(headingColor, headingFontSize)


// [스타일 쓰기]

const headingFontSizeValue = parseFloat(headingFontSize) + 64

css(heading, 'font-size', headingFontSizeValue + 'px')

// [스타일 삭제]
setTimeout(() => {
  console.log('마지막 인자로 null이 전달. 개발자의 의도는 삭제!')
  css(heading, 'font-size', null)
}, 3000)


// [편리한 스타일 설정! (객체 전달)]

css(heading, {
  'color': '#ffcb29',
  'background-color': '#1e2433',
  'letter-spacing': '0.24px',
  'text-decoration': 'overline',
})


// --------------------------------------------------------------------------


/** 
 * 요소의 스타일 속성 값을 가져옵니다.
 * @param {HTMLElement} element - 스타일을 가져올 HTML 요소
 * @param {string} propertyName - 가져올 CSS 속성 이름
 * @returns {string} 요청한 CSS 속성의 값
 */
function getStyle(element, propertyName) {
  const elementStyles = getComputedStyle(element)
  const value = elementStyles.getPropertyValue(propertyName)
  return value
}

/**
 * 요소의 스타일 속성을 설정합니다.
 * @param {HTMLElement} element - 스타일을 설정할 HTML 요소
 * @param {string} propertyName - 설정할 CSS 속성 이름
 * @param {string|number} propertyValue - 설정할 CSS 속성 값
 */
function setStyle(element, propertyName, propertyValue) {
  element.style.setProperty(propertyName, propertyValue)
}

/**
 * 요소의 스타일 속성을 제거합니다.
 * @param {HTMLElement} element - 스타일을 제거할 HTML 요소
 * @param {string} propertyName - 제거할 CSS 속성 이름
 */
function removeStyle(element, propertyName) {
  element.style.removeProperty(propertyName)
}

/**
 * 요소의 CSS 스타일을 가져오거나 설정합니다.
 * @param {HTMLElement} element - 대상 HTML 요소
 * @param {string|Object} propertyOrProperties - CSS 속성 이름 또는 속성-값 쌍의 객체
 * @param {string|number} [propertyValue] - CSS 속성 값 (propertyOrproperties가 문자열인 경우)
 * @returns {string|undefined} 값을 가져올 때는 CSS 속성 값을 반환하고, 설정할 때는 undefined를 반환
 */
function css(element, propertyOrProperties, propertyValue) {
  // 재귀 : '나(함수 자신)를 내 안에서 다시 부른다.'
  // 조건 : 두 번째 인자의 타입이 객체인 경우 → 객체 속성:값 순환(반복) → 재귀 호출
  if (isObject(propertyOrProperties)) {
    // 객체 속성(key):값(value) 순환(반복) 처리
    const properties = propertyOrProperties
    /* { key: value } */
    /* value = properties[key] */
    for(const prop in properties) {
      const value = properties[prop]
      // css(요소, 속성 이름, 속성 값)
      // console.log(element, prop, value)
      // 재귀 호출 (나 자신을 다시 부르자! 왜? 결국은 내가 그 일을 하는 기능이니까)
      css(element, prop, value)
    }
  }

  if (propertyValue === undefined) {
    // 스타일 속성 값 읽기 (값 반환)
    return getStyle(element, propertyOrProperties)
  }
  
  if (propertyValue === null) {
    // 스타일 속성 삭제
    removeStyle(element, propertyOrProperties)
  }

  // 스타일 속성 설정
  setStyle(element, propertyOrProperties, propertyValue)
}

// --------------------------------------------------------------------------
// 타입 검사 유틸리티 함수 (추상화)
// --------------------------------------------------------------------------
// - isObject
// - isElement
// --------------------------------------------------------------------------

/**
 * 주어진 데이터가 객체인지 확인합니다.
 * @param {any} data - 검사할 데이터
 * @returns {boolean} 객체 여부
 */
function isObject(data) {
  return typeof data === 'object' && data !== null && !Array.isArray(data)
}

/**
 * 요소 노드인지 확인해 결과를 불리언으로 반환합니다.
 * @param {Node} node - 문서의 노드 (요소, 텍스트, 주석, 도큐멘트 등)
 * @returns {boolean} 요소 노드 여부
 */
// eslint-disable-next-line no-unused-vars
function isElement(node) {
  return node && node.nodeType === document.ELEMENT_NODE
}
