// --------------------------------------------------------------------------
// 실습: 탐색 메서드 (findIndex & find)
// --------------------------------------------------------------------------

// [실습 1] 거주지 일치 인덱스 출력
// 1. users 배열에서 사용자가 입력한 거주지(location)와 일치하는 첫 번째 인덱스를 찾으세요.
// 2. findIndex를 활용하고, 결과가 없을 시 -1이 나오는지 확인하세요.
console.groupCollapsed('1. findIndex 실습')

{
  const users = [
    { id: 'users-kcls', name: '하영', location: '서울' },
    { id: 'users-ekx1', name: '준수', location: '이천' },
    { id: 'users-cisk', name: '상준', location: '원주' },
    { id: 'users-ocls', name: '민주', location: '서울' },
  ]

  // 검색한 위치에 거주하는 사용자의 인덱스를 찾아 반환
  const findLocation = '서울'

  // 단계 1.
  let userInSeoulIndex = users.findIndex((user) => {
    if (user.location.includes(findLocation)) return true
    return false
  })

  // 단계 2.
  userInSeoulIndex = users.findIndex((user) => {
    return user.location.includes(findLocation)
  })

  // 단계 3.
  // 배열을 정순으로 조회해서 일치하는 요소가 나오면 해당 요소의 인덱스를 반환
  // 배열.findIndex(callbackFn)
  userInSeoulIndex = users.findIndex((user) =>
    user.location.includes(findLocation),
  )

  // [질문]
  // 선생님 여기에서 그럼 유저스의 마지막 항목의 지역이
  // 서울로 0번째 인덱스 위치하고 겹치는데 이 마지막 항목의
  // 서울을 찾으려면 어떻게 해야해요??

  // 배열을 역순으로 조회해서 일치하는 요소가 나오면 해당 요소의 인덱스를 반환
  // 배열.findLastIndex(callbackFn)
  userInSeoulIndex = users.findLastIndex((user) =>
    user.location.includes(findLocation),
  )

  console.log(userInSeoulIndex)
  if (userInSeoulIndex > -1) {
    console.log(users.at(userInSeoulIndex).name)
  }
}

console.groupEnd()

// [실습 2] 국적 일치 사용자 이름 출력
// 1. users 배열에서 특정 국적(nationality)을 가진 첫 번째 사용자를 찾으세요.
// 2. find를 활용해 객체를 찾고, 해당 객체의 name만 출력해 보세요.
console.groupCollapsed('2. find 실습')

// 간단한 배열에서 find() 메서드 사용
{
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  const wantNumber = 10

  // 단계 1.
  let foundNumber = numbers.find(function (number) {
    if (number === wantNumber) return true
    return false
  })

  // 단계 2.
  foundNumber = numbers.find(function (number) {
    return number === wantNumber
  })

  // 단계 3.
  foundNumber = numbers.find((number) => {
    return number === wantNumber
  })

  // 단계 4.
  foundNumber = numbers.find((number) => number === wantNumber)

  if (foundNumber) {
    console.log(foundNumber)
  } else {
    console.warn(
      `찾는 ${wantNumber} 숫자 값이 [${numbers}] 배열 안에 존재하지 않습니다.`,
    )
  }
}

// 복잡한 배열에서 find() 메서드 사용
{
  // 사용자 정보가 포함된 배열 users
  const users = [
    { id: 'users-kcls', name: '하영', hobby: '서핑', email: 'hay@naver.com', location: '서울' },
    { id: 'users-ekx1', name: '준수', hobby: '라이딩', email: 'jun@daum.net', location: '이천' },
    { id: 'users-cisk', name: '상준', hobby: '서핑', email: 'sang@gmail.com', location: '원주' },
    { id: 'users-ocls', name: '민주', hobby: '러닝', email: 'min@kakao.com', location: '서울' },
    { id: 'users-eika', name: '해영', hobby: '라이딩', email: 'hae@naver.com', location: '부산' },
    { id: 'users-2low', name: '민식', hobby: '서핑', email: 'sik@naver.com', location: '대전' },
  ]

  // [이름 or 취미 or 이메일 or 위치]으로 찾을 것인지?
  // 이메일이 'min@kakako.com' 또는 'min'을 포함한 사용자를 찾아라.
  let foundUser = null // 개발자가 의도를 가지고 추후 값이 변경될 수 있도록 명시적 초기화
  
  // 로직 (재사용 고려 -> 기능 작성 -> 함수 선언)
  // const searchTerm = '러닝'
  // const category = 'hobby'
  // foundUser = users.find((user) => user[category].includes(searchTerm))

  function findUser(userList, { category = 'name', search = '' } = {}) {
    return userList.find((user) => user[category].includes(search))
  }

  // foundUser = users.find((user) => user[category].includes(search)) 
  // 이 부분이  user['카테고리 속성 이름'].includes('사용자 검색어') 이렇게 들어가는건가요?

  foundUser = findUser(users, { category: 'hobby', search: '라이딩' })
  foundUser = findUser(users, { search: '민'/* , category: 'name' */ })


  if (foundUser) {
    // 사용자 검색어 및 카테고리에 의해 선택된 사용자 정보 foundUser
    // 예시) { id: 'users-ocls', name: '민주', hobby: '러닝', email: 'min@kakao.com', location: '서울' },

    // const { name, email, location } = foundUser 선생님 이부분이 구조분해 할당이 적용된걸까요?
    const { name, email, location } = foundUser
    console.log(name)
    console.log(email)
    console.log(location)
  } else {
    console.log('users 배열 안에는 찾는 사용자가 없습니다.')
  }

  {
    function findUser(userList, search, category = 'name') {
      return userList.find((user) => 
        user[category] ? user[category].includes(search) : false
      )
    }

    console.log(findUser(users, '준수'))
    console.log(findUser(users, 'hae', 'email'))
    console.log(findUser(users, '스위밍', 'hobby'))
  }
}

console.groupEnd()

// --------------------------------------------------------------------------
// 실습: 가공 및 필터링 (filter & map)
// --------------------------------------------------------------------------

// [실습 3] 국적 일치 사용자 그룹 출력
// 1. filter를 사용하여 특정 국적을 가진 모든 사용자를 모은 새 배열을 만드세요.
// 2. JSON.stringify(result, null, 2)를 사용하여 화면에 예쁘게 출력해 보세요.
console.groupCollapsed('3. filter 실습')

// 간단한 데이터 필터링
{
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 33, 24, 89, 903]

  // 3의 배수만 걸러내자. (3으로 나눠서 나머지가 0인 수)
  const multiplesOf3 = numbers.filter((number) => number % 3 === 0)
  console.log(multiplesOf3)
  
  // 2로 나눠 나머지가 0인 수만 걸러내자. (짝수만)
  const filteredEven = numbers.filter((n) => n % 2 === 0)
  console.log(filteredEven)
  
  // 홀수만 걸러내자.
  const filteredOdd = numbers.filter(n => n % 2 > 0)
  console.log(filteredOdd)
}


// 복잡한 데이터 필터링
{
  const users = [
    { id: 'USER-KCLS', name: '김하영', hobby: ['서핑', '요가'], email: 'hayoung@naver.com', location: '서울', age: 27 },
    { id: 'USER-EKX1', name: '박준수', hobby: ['라이딩', '등산'], email: 'junsu@daum.net', location: '이천', age: 32 },
    { id: 'USER-CISK', name: '이상준', hobby: ['서핑', '독서'], email: 'sangjun@gmail.com', location: '원주', age: 29 },
    { id: 'USER-OCLS', name: '최민주', hobby: ['러닝', '요가'], email: 'minju@kakao.com', location: '서울', age: 25 },
    { id: 'USER-EIKA', name: '정해영', hobby: ['라이딩', '수영'], email: 'haeyoung@naver.com', location: '부산', age: 31 },
    { id: 'USER-2LOW', name: '김민식', hobby: ['서핑', '클라이밍'], email: 'minsik@naver.com', location: '대전', age: 28 },
    { id: 'USER-9KMZ', name: '박지수', hobby: ['요가', '명상'], email: 'jisoo@gmail.com', location: '서울', age: 26 },
    { id: 'USER-7PQR', name: '이현우', hobby: ['등산', '캠핑'], email: 'hyunwoo@daum.net', location: '부산', age: 33 },
    { id: 'USER-3ABC', name: '최예지', hobby: ['서핑', '사진촬영'], email: 'jimin@naver.com', location: '제주', age: 30 },
    { id: 'USER-5XYZ', name: '정소희', hobby: ['러닝', '자전거'], email: 'sohee@kakao.com', location: '서울', age: 24 },
    { id: 'USER-8DEF', name: '김태호', hobby: ['요가', '명상'], email: 'taeho@gmail.com', location: '대구', age: 35 },
    { id: 'USER-4GHI', name: '박민지', hobby: ['라이딩', '수영'], email: 'minji@naver.com', location: '인천', age: 27 },
    { id: 'USER-1JKL', name: '이준호', hobby: ['등산', '낚시'], email: 'junho@daum.net', location: '서울', age: 31 },
    { id: 'USER-6MNO', name: '최세진', hobby: ['서핑', '스노우보드'], email: 'sejin@kakao.com', location: '부산', age: 29 },
    { id: 'USER-0PQR', name: '정유진', hobby: ['요가', '필라테스'], email: 'yujin@gmail.com', location: '광주', age: 28 },
    { id: 'USER-2STU', name: '김민수', hobby: ['러닝', '축구'], email: 'minsu@naver.com', location: '서울', age: 26 },
    { id: 'USER-5VWX', name: '박지훈', hobby: ['라이딩', '테니스'], email: 'jihoon@daum.net', location: '대전', age: 30 },
    { id: 'USER-7YZA', name: '이수진', hobby: ['등산', '요리'], email: 'soojin@kakao.com', location: '부산', age: 32 },
    { id: 'USER-9BCD', name: '최동현', hobby: ['서핑', '드론'], email: 'donghyun@gmail.com', location: '제주', age: 34 },
    { id: 'USER-4EFG', name: '정예지', hobby: ['요가', '그림'], email: 'yeji@naver.com', location: '서울', age: 25 }
  ]

  console.log(users.length)

  let foundPeople = null

  // 성이 '?'인 사람들만 걸러보세요.
  const firstName = '이'
  // foundPeople = users.filter((user) => user.name[0] === firstName)
  foundPeople = users.filter(({ name }) => name.charAt(0) === firstName)
  console.log(foundPeople.length)
  console.log(foundPeople)

  // 이름이 '??'인 사람들을 걸러보세요.
  const lastName = '예지'
  // 구조 분해 할당 사용하지 않을 경우
  foundPeople = users.filter((user) => user.name.slice(1) === lastName)
  // 구조 분해 할당 사용할 경우
  // foundPeople = users.filter(({ name }) => name.slice(1) === lastName)
  console.log(foundPeople.length)
  console.log(foundPeople)

  // 지역이 '??'인 사람들만 걸러보세요.
  const region = '제주'
  // 구조 분해 할당 사용하지 않을 경우
  // foundPeople = users.filter((user) => user.location === region)
  // 구조 분해 할당 사용할 경우
  foundPeople = users.filter(({ location }) => location === region)
  console.log(foundPeople.length)
  console.log(foundPeople)

  // NAVER 이메일을 사용하는 사람들만 걸러보세요.
  const emailService = 'NAVER'

  // 함수 값을 화살표 함수에서 명시적으로 반환할 경우
  foundPeople = users.filter((user) => { 
    return user.email.includes(emailService.toLowerCase()) 
  })
  
  // 함수 값을 화살표 함수에서 암묵적으로 반환할 경우
  foundPeople = users.filter((user) => user.email.includes(emailService.toLowerCase()))
  
  // 구조 분해 할당 문법을 사용해 user 객체의 email 속성을 매개변수로 빼낸 경우
  foundPeople = users.filter(({ email }) => email.includes(emailService.toLowerCase()))

  console.log(foundPeople.length)
  console.log(foundPeople)

  // 나이대가 20대인 사람들만 걸러보세요.
  // 나이(age)가 20대인 조건 (20-29)
  // age > 19 && age < 30

  // 구조 분해 할당을 사용하지 않을 경우
  foundPeople = users.filter((user) => user.age > 19 && user.age < 30)
  
  // 구조 분해 할당을 사용할 경우
  foundPeople = users.filter(({ age }) => age > 19 && age < 30)
  
  console.log(foundPeople.length)
  console.log(foundPeople)

  // 취미가 '??'인 사람들만 걸러보세요.
  const hobbyName = '서핑'

  // 구조 분해 할당을 사용하지 않을 경우
  foundPeople = users.filter((user) => user.hobby.includes(hobbyName))

  // 구조 분해 할당을 사용할 경우
  foundPeople = users.filter(({ hobby }) => hobby.includes(hobbyName))

  console.log(foundPeople.length)
  console.log(foundPeople)

}

console.groupEnd()


// [실습 4] 고유 ID 설정 (데이터 변형)
// 1. map을 사용하여 모든 사용자의 id 앞에 접두사(prefix)를 붙인 새 배열을 만드세요.
// 2. 예: 1 -> 'user_1' (템플릿 리터럴 활용)
console.groupCollapsed('4. map 실습')

// 간단한 데이터 가공
{
  // 숫자를 나타내는 단어로 구성된 배열
  const words = '하나 둘 셋 넷 다섯 여섯 일곱 여덟 아홉 열'.split(' ')
  console.log(words)

  // 가공된 결과: [{ 인덱스: 숫자를_표현한_단어 }, { 인덱스: 숫자를_표현한_단어 }, ...]
  const indexOfWords = words.map((word, index) => {
    // 배열을 순환해 각 요소 마다 가공한 결과를 내보낸다.
    // 가공한 요소 : { 인덱스: 숫자를_표현한_단어 }
    // 예시) { 0: '하나' }, { 1: '둘' }
    const mappedWord = { [index]: word }
    return mappedWord
  })

  // 가공된 각 요소를 포함하는 새로운 배열 반환
  // 예상된 결과: [{ 0: '하나' }, { 1: '둘' }, ...]
  console.log(indexOfWords)


  // 콜백 함수의 순서? 어떻게 지정되나?
  // map() 메서드 흉내내기를 통해 
  // 콜백 함수의 순서 지정하는 방법 학습
  // JavaScript 고차 함수, 일급 객체, 일급 함수를 지원
  // 함수는 값이고, 변수에 할당 가능하며, 
  // 함수에 인자로 전달 및 반환 값으로 내보낼 수 있다.
  function customMap(array, callbackFn) {
    const mappedArray = []

    // for 문
    for (let index = 0, l = array.length; index<l; ++index) {
      const item = array.at(index)
      // const mappedItem = callbackFn(index, item, array)
      const mappedItem = callbackFn(item, index, array)
      mappedArray.push(mappedItem)
    }
    
    // map() 함수 흉내내기
    // 반환값 가공된 요소들로 구성된 새로운 배열 반환
    return mappedArray
  }

  // const customResult = customMap(words, (index, item) => {
  const customResult = customMap(words, (item, index) => {
    // 콜백 함수에서 가공된 각 요소의 결과를 반환
    const mappedWord = { [index]: item }
    return mappedWord
  })

  console.log(customResult)

}

// 복잡한 데이터 가공
{
  const users = [
    { id: 'USER-KCLS', name: '김하영', hobby: ['서핑', '요가'], email: 'hayoung@naver.com', location: '서울', age: 27 },
    { id: 'USER-EKX1', name: '박준수', hobby: ['라이딩', '등산'], email: 'junsu@daum.net', location: '이천', age: 32 },
    { id: 'USER-CISK', name: '이상준', hobby: ['서핑', '독서'], email: 'sangjun@gmail.com', location: '원주', age: 29 },
    { id: 'USER-OCLS', name: '최민주', hobby: ['러닝', '요가'], email: 'minju@kakao.com', location: '서울', age: 25 },
    { id: 'USER-EIKA', name: '정해영', hobby: ['라이딩', '수영'], email: 'haeyoung@naver.com', location: '부산', age: 31 },
    { id: 'USER-2LOW', name: '김민식', hobby: ['서핑', '클라이밍'], email: 'minsik@naver.com', location: '대전', age: 28 },
    { id: 'USER-9KMZ', name: '박지수', hobby: ['요가', '명상'], email: 'jisoo@gmail.com', location: '서울', age: 26 },
    { id: 'USER-7PQR', name: '이현우', hobby: ['등산', '캠핑'], email: 'hyunwoo@daum.net', location: '부산', age: 33 },
    { id: 'USER-3ABC', name: '최예지', hobby: ['서핑', '사진촬영'], email: 'jimin@naver.com', location: '제주', age: 30 },
    { id: 'USER-5XYZ', name: '정소희', hobby: ['러닝', '자전거'], email: 'sohee@kakao.com', location: '서울', age: 24 },
    { id: 'USER-8DEF', name: '김태호', hobby: ['요가', '명상'], email: 'taeho@gmail.com', location: '대구', age: 35 },
    { id: 'USER-4GHI', name: '박민지', hobby: ['라이딩', '수영'], email: 'minji@naver.com', location: '인천', age: 27 },
    { id: 'USER-1JKL', name: '이준호', hobby: ['등산', '낚시'], email: 'junho@daum.net', location: '서울', age: 31 },
    { id: 'USER-6MNO', name: '최세진', hobby: ['서핑', '스노우보드'], email: 'sejin@kakao.com', location: '부산', age: 29 },
    { id: 'USER-0PQR', name: '정유진', hobby: ['요가', '필라테스'], email: 'yujin@gmail.com', location: '광주', age: 28 },
    { id: 'USER-2STU', name: '김민수', hobby: ['러닝', '축구'], email: 'minsu@naver.com', location: '서울', age: 26 },
    { id: 'USER-5VWX', name: '박지훈', hobby: ['라이딩', '테니스'], email: 'jihoon@daum.net', location: '대전', age: 30 },
    { id: 'USER-7YZA', name: '이수진', hobby: ['등산', '요리'], email: 'soojin@kakao.com', location: '부산', age: 32 },
    { id: 'USER-9BCD', name: '최동현', hobby: ['서핑', '드론'], email: 'donghyun@gmail.com', location: '제주', age: 34 },
    { id: 'USER-4EFG', name: '정예지', hobby: ['요가', '그림'], email: 'yeji@naver.com', location: '서울', age: 25 }
  ]

  // 사용자 이름 목록 만들기 (각 요소를 순환 가공해 새로운 배열 생성)
  let userNames = null
  // 구조 분해 할당 사용하지 않은 경우
  userNames = users.map((user) => user.name)
  // 구조 분해 할당 사용한 경우
  userNames = users.map(({ name }) => name)

  console.log(users)
  console.log(userNames)

  // 사용자 이메일 목록 만들기 (각 요소를 순환 가공해 새로운 배열 생성)
  let userEmails = null

  // 구조 분해 할당 사용하지 않은 경우
  userEmails = users.map((user) => user.email)

  // 구조 분해 할당 사용한 경우
  userEmails = users.map(({ email }) => email)

  console.log(users)
  console.log(userEmails)


  // 가공 목적
  // users 배열을 순환해 각 user에 새로운 속성을 추가
  // 예를 들어 index, role 속성이 추가된 새로운 배열을 생성한다면?

  const neoUsers = users.map((user, index) => {
    // 가공된 새로운 사용자 객체 반환
    const neoUser = {
      ...user,
      index,
      role: 'GUEST',
    }
    return neoUser
  })

  console.log(users)
  console.log(neoUsers)

  // 카드 데이터 (배열)
  const cards = [
    { id: 'card-naver', title: '네이버', link: 'https://naver.com' },
    { id: 'card-google', title: '구글', link: 'https://google.com' },
    { id: 'card-daum', title: '다음', link: 'https://daum.net' },
    { id: 'card-coupang', title: '쿠팡', link: 'https://coupang.com' },
  ]
  
  
  // 카드 데이터를 순환해 카드 마크업을 포함하는 새로운 배열
  // 카드 배열의 각 요소를 순환해 동적 렌더링을 위한 마크업 코드 생성 

  // 구조 분해 할당을 사용하지 않은 경우
  let cardMarkups = cards.map((card) => {
    const markup = /* html */`
      <div class="card" data-id="${card.id}">
        <a href="${card.link}" target="_blank" rel="noopener noreferrer">
          <svg width="16" height="16" viewBox="0 0 16 16">...</svg>
          ${card.title}
        </a>
      </div>
    `
    return markup
  })

  // 구조 분해 할당을 사용한 경우
  cardMarkups = cards.map(({ id, title, link }) => {
    const markup = /* html */`
      <div class="card" data-id="${id}">
        <a href="${link}" target="_blank" rel="noopener noreferrer">
          <svg width="16" height="16" viewBox="0 0 16 16">...</svg>
          ${title}
        </a>
      </div>
    `
    return markup
  })

  console.log(cardMarkups.length)
  console.log(cardMarkups)

}

console.groupEnd()


console.group('5. 다이내믹 마크업')

// --------------------------------------------------------------------------
// 다이내믹 렌더링
// --------------------------------------------------------------------------
// JavaScript로 마크업 -> 화면 렌더링(그림 그리기)
// --------------------------------------------------------------------------

// 버튼 데이터
const buttonData = [
  { id: 'button-register', type: 'submit', label: '회원가입', message: '성공적으로 회원가입되었습니다.' },
  { id: 'button-login', type: 'submit', label: '로그인', message: '사용자 계정으로 로그인되었습니다.' },
  { id: 'button-login', type: 'reset', label: '초기화', message: '입력 내용을 모두 초기화했습니다.' },
  { id: 'button-readmore', type: 'button', label: '더보기', message: '감춰진 데이터를 더보기합니다.' },
]

// 데이터 순환해 동적으로 HTML 마크업을 JavaScript 프로그래밍으로 생성
const buttonMarkups = buttonData.map((button) => {
  const markup = `
    <button
      type="${button.type}"
      data-id="${button.id}"
      data-message="${button.message}"
    >
      <svg width="12" height="12" fill="none" stroke-width="1.5" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"></path>
      </svg>
      ${button.label}
    </button>
  `
  
  return markup
})

// 프로그래밍적으로 생성된 마크업 코드 배열 → HTML 코드로 변환
const buttonsHTMLCode = buttonMarkups.join('')

// 가공된 데이터를 웹 문서 화면에 그리기(렌더링: Rendering)
const dynamicMarkupContainer = document.querySelector('[data-dynamic-markup]')
// 객체가 특정 속성을 포함하는지 여부 확인
// 'property' in Element
// console.log('innerHTML' in dynamicMarkupContainer)

dynamicMarkupContainer.innerHTML = buttonsHTMLCode

// 화면에 그려진 집합 요소들을 순환해서 이벤트 리스너 추가

// 컨테이너 요소의 자식들(children) 수집 후 배열로 변환
const dynamicButtons = Array.from(dynamicMarkupContainer.children)
// 배열의 forEach() 메서드를 사용해 각 요소를 순환한 후 이벤트 리스너 추가
dynamicButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const buttonElement = e.currentTarget
    // 각 버튼에 설정된 data-message 속성 값 읽기
    // 구조 분해 할당 사용 전
    // const message = buttonElement.dataset.message
    // 구조 분해 할당 사용 후
    const { message } = buttonElement.dataset
    // 브라우저 화면에 메시지 내용을 경고창으로 띄우기
    alert(message)
  })
})

console.groupEnd()


// --------------------------------------------------------------------------
// 실습: 심화 체이닝 및 이벤트 위임
// --------------------------------------------------------------------------

// [실습 5] 국적 일치 & 고유 ID 설정 (체이닝)
// 1. filter로 특정 국적 유저를 먼저 거르고, map으로 ID를 변형하는 체이닝을 구현하세요.
// 2. 이벤트 위임을 활용해 컨테이너 하나에서 모든 입력을 처리해 보세요.
console.groupCollapsed('6. 메서드 체이닝 실습')

const numbers = [2, 4, 8]

{
  // 데이터 가공
  const doubleNumbers = numbers.map(n => n ** 2)

  // 데이터 필터링
  const numbersLt10 = doubleNumbers.filter(n => n < 10)

  console.log(numbers) // [2, 4, 8]
  console.log(doubleNumbers) // [4, 16, 64]
  console.log(numbersLt10) // [4]
}

// 메서드 체이닝 = 메서드를 연결해 사용한다.
{
  const lessThan10 = numbers.map(n => n ** 2).filter(n => n < 10)
  console.log({lessThan10})
}


console.groupEnd()

// --------------------------------------------------------------------------
// 핵심 요약!
// --------------------------------------------------------------------------
// 1. 반환값 확인: find 계열은 단일값(혹은 인덱스), map/filter는 항상 배열을 반환합니다.
// 2. 불변성: 이 메서드들은 원본 배열을 변경하지 않고 항상 새로운 값을 반환해 안전합니다.
// 3. 체이닝: 배열을 반환하는 메서드끼리는 기차처럼 연결하여 복잡한 로직을 한 줄로 끝낼 수 있습니다.
// 4. forEach vs map: 값을 반환하여 다음 단계로 넘겨야 한다면 무조건 map을 사용하세요!
// --------------------------------------------------------------------------
