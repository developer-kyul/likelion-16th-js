// 템플릿 리터럴
{
  const data = {
    title: "데이터 타이틀",
    description: "데이터 콘텐츠",
  };

  const template = `템플릿을 사용하면 ${data.title}, ${data.description} 문자열 연결이 편리합니다.`;
  console.log(template);
}

// 구조 분해 할당 (객체, 배열)
{
  const house = {
    area: 84, // 제곱미터 (34평)
    location: "서울",
    price: "16억",
  };

  const { area, location, price } = house;
  console.log(area);
  console.log(location);
  console.log(price);

  const areas = ["서울", "원주", "광주", "대구", "대전", "부산"];

  const [, /* 0 */ wonju] = areas;
  console.log(wonju);
}

// 전개 구문
{
  const areas = ["서울", "원주", "광주", "대구", "대전", "부산"];
  const newAreas = ["춘천", "용인", ...areas, "목포"];
  console.log(newAreas);

  const house = {
    area: 84, // 제곱미터 (34평)
    location: "서울",
    price: "16억",
  };

  const myHouse = {
    ...house,
    area: 56,
    price: "14억",
  };

  console.log(myHouse);
}

// 함수의 기본 매개변수, 나머지 매개변수
{
  function drink(what = "워터") {
    return `${what}를 마신다.`;
  }

  console.log(drink());
  console.log(drink("코크"));
  console.log(drink("사이다"));
  console.log(drink("마운틴 듀"));

  function logPeopleNames(master, ...members) {
    // console.log(arguments)
    console.log(master);
    console.log(members);

    // for (const member of members) {
    //   console.log(`${master}은 ${member}에게 월세를 받는다.`)
    // }

    members.forEach((member) => {
      console.log(`${master}은 ${member}에게 월세를 받는다.`);
    });
  }

  // 세대주, 세대원
  logPeopleNames("지훈", "영주", "상희", "주연", "후영");
}

// 템플릿 리터럴
{
  const data = {
    title: "데이터 타이틀",
    description: "데이터 콘텐츠",
  };

  const template = `템플릿을 사용하면 ${data.title}, ${data.description} 문자열 연결이 편리합니다.`;
  console.log(template);
}

// 구조 분해 할당 (객체, 배열)
{
  const house = {
    area: 84, // 제곱미터 (34평)
    location: "서울",
    price: "16억",
  };

  const { area, location, price } = house;
  console.log(area);
  console.log(location);
  console.log(price);

  const areas = ["서울", "원주", "광주", "대구", "대전", "부산"];

  const [, /* 0 */ wonju] = areas;
  console.log(wonju);
}

// 전개 구문
{
  const areas = ["서울", "원주", "광주", "대구", "대전", "부산"];
  const newAreas = ["춘천", "용인", ...areas, "목포"];
  console.log(newAreas);

  const house = {
    area: 84, // 제곱미터 (34평)
    location: "서울",
    price: "16억",
  };

  const myHouse = {
    ...house,
    area: 56,
    price: "14억",
  };

  console.log(myHouse);
}

// 함수의 기본 매개변수, 나머지 매개변수
{
  function drink(what = "워터") {
    return `${what}를 마신다.`;
  }

  console.log(drink());
  console.log(drink("코크"));
  console.log(drink("사이다"));
  console.log(drink("마운틴 듀"));

  function logPeopleNames(master, ...members) {
    // console.log(arguments)
    console.log(master);
    console.log(members);

    // for (const member of members) {
    //   console.log(`${master}은 ${member}에게 월세를 받는다.`)
    // }

    members.forEach((member) => {
      console.log(`${master}은 ${member}에게 월세를 받는다.`);
    });
  }

  // 세대주, 세대원
  logPeopleNames("지훈", "영주", "상희", "주연", "후영");
}

// 향상된 객체 리터럴
{
  const area = 84;
  const location = "서울";
  const price = "16억";
  const speaking = "briefing";

  // 속성 할당 단축
  // 메서드 단축
  // 계산된 속성
  const yourHouse = {
    area,
    location,
    price,
    [speaking]() {
      // 구조 분해 할당 (객체의 구조를 분해해 지역 변수로 할당 구문)
      const { location, area, price } = this;
      return `${location}에 위치한 ${area} 제곱미터의 ${price} 가격 집에 살고 있어요.`;
    },
  };

  console.log(yourHouse);
  // console.log(yourHouse.briefing())
  console.log(yourHouse[speaking]());
}
