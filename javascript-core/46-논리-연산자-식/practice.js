// --------------------------------------------------------------------------
// 1. 영화 관람 가능 여부 확인

function canWatchMovie(person) {
  let status

  // 18세 이상 '그리고' 신분증이 있어야 함
  if (person.age >= 18 && person.idCard) {
    status = '관람 허용'
  } else {
    status = '관람 불가'
  }

  return status
}

const results1 = [
  canWatchMovie({ age: 21, idCard: true }),
  canWatchMovie({ age: 15, idCard: false }),
]

console.log(results1) // ['관람 허용', '관람 불가']

// --------------------------------------------------------------------------
// 2. 우산 챙겨야 할 지 결정

function needUmbrella(weather) {
  let decision

  // 비가 오거나 '또는' 일기예보에 비 소식이 있을 때
  if (weather.isRaining || weather.forecastRain) {
    decision = true
  } else {
    decision = false
  }

  return decision
}

const results2 = [
  needUmbrella({ isRaining: false, forecastRain: true }),
  needUmbrella({ isRaining: false, forecastRain: false }),
]

console.log(results2) // [true, false]
