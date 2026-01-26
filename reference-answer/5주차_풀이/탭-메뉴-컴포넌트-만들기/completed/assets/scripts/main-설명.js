// -----------------------------------------------------------------------------
// ✅ "탭 UI"를 클릭하면
// 1) 모든 탭 버튼에서 active 클래스를 제거하고
// 2) 클릭한 탭 버튼에만 active 클래스를 붙이고
// 3) 모든 패널에서 active 클래스를 제거하고
// 4) 클릭한 탭이 가리키는 패널에만 active 클래스를 붙이는 코드
// -----------------------------------------------------------------------------

// ✅ 활성화(선택됨) 상태일 때 붙일 CSS 클래스 이름들을 한 곳에 모아둔 객체
// - tab: 탭 버튼이 선택된 상태일 때 붙일 클래스
// - panel: 탭 내용 패널이 보이는 상태일 때 붙일 클래스
const ACTIVE_CLASS = {
  tab: "tab-nav__button--active",
  panel: "tab-panel--active",
};

// ✅ 탭 버튼들(여러 개)을 모두 가져오기
// - querySelectorAll은 "여러 개"를 가져오며 결과는 NodeList(배열처럼 보이는 객체)입니다.
// - '.tab-nav .tab-nav__button' 의미:
//    tab-nav 안에 있는 tab-nav__button 요소들을 선택
const tabs = document.querySelectorAll(".tab-nav .tab-nav__button");

// ✅ 탭 패널(내용 영역)들(여러 개)을 모두 가져오기
// - '.tab-panel' 클래스를 가진 요소들을 전부 가져옵니다.
const panels = document.querySelectorAll(".tab-panel");

// ✅ 각 탭 버튼(tab)에 클릭 이벤트를 붙이기
// - tabs.forEach(...) : tabs에 들어있는 탭 버튼들을 하나씩 꺼내서 처리
tabs.forEach((tab) => {
  // ✅ tab 버튼을 클릭하면 실행될 함수 등록
  tab.addEventListener("click", () => {
    // ✅ 지금 클릭한 탭 버튼이 무엇인지 변수로 저장
    // - 여기서 tab은 forEach가 하나씩 꺼내준 "현재 탭 버튼"이고,
    // - 클릭했을 때 그 탭이 "선택된 탭"이 됩니다.
    const selectedTab = tab;

    // -------------------------------------------------------------------------
    // 1) 탭 버튼들 전체에서 기존 active 클래스 제거
    // -------------------------------------------------------------------------
    // - tabs 목록을 돌면서, active 클래스가 붙어있는 버튼이 있으면 제거합니다.
    // - 두 번째 인자인 'tab'은 ACTIVE_CLASS에서 어떤 키를 사용할지 알려주는 역할
    //   => ACTIVE_CLASS['tab'] === 'tab-nav__button--active'
    removeActivatedClass(tabs, "tab");

    // -------------------------------------------------------------------------
    // 2) 클릭한 탭 버튼에 active 클래스 추가
    // -------------------------------------------------------------------------
    activeSelectedTab(selectedTab);

    // -------------------------------------------------------------------------
    // 3) 패널들 전체에서 기존 active 클래스 제거
    // -------------------------------------------------------------------------
    // - panels 목록을 돌면서, active 클래스가 붙어있는 패널이 있으면 제거합니다.
    // - 'panel' 키를 쓰므로:
    //   => ACTIVE_CLASS['panel'] === 'tab-panel--active'
    removeActivatedClass(panels, "panel");

    // -------------------------------------------------------------------------
    // 4) 클릭한 탭이 가리키는 패널에 active 클래스 추가
    // -------------------------------------------------------------------------
    activeSelectedPanel(selectedTab);
  });
});

// -----------------------------------------------------------------------------
// ✅ removeActivatedClass(list, type)
// - list: tabs(탭 버튼들) 또는 panels(패널들)처럼 "여러 요소 모음"
// - type: 'tab' 또는 'panel' (ACTIVE_CLASS에서 어떤 클래스를 쓸지 결정)
// 동작:
// 1) ACTIVE_CLASS[type]으로 제거할 클래스명을 찾고
// 2) list의 각 요소(item)에서 그 클래스가 있으면 제거합니다.
// -----------------------------------------------------------------------------
function removeActivatedClass(list, type) {
  // ✅ type이 'tab'이면 'tab-nav__button--active'
  // ✅ type이 'panel'이면 'tab-panel--active'
  // ⭕ [] 대괄호 표기법을 사용하는 이유 > 객체에서 “변수에 들어있는 key”로 접근
  // ❌ . 점 표기법이 안되는 이유 > 객체에 실제로 type이라는 key가 없기 때문입니다
  const activeClassName = ACTIVE_CLASS[type];

  // ✅ list에 들어있는 요소들을 하나씩 확인
  list.forEach((item) => {
    // ✅ 해당 요소에 active 클래스가 붙어있으면 제거
    if (item.classList.contains(activeClassName)) {
      item.classList.remove(activeClassName);
    }
  });
}

// -----------------------------------------------------------------------------
// ✅ activeSelectedTab(selectedTab)
// - 선택된 탭 버튼에만 active 클래스를 붙여서 "선택된 탭처럼 보이게" 만듭니다.
// -----------------------------------------------------------------------------
function activeSelectedTab(selectedTab) {
  selectedTab.classList.add(ACTIVE_CLASS.tab);
}

// -----------------------------------------------------------------------------
// ✅ activeSelectedPanel(selectedTab)
// - 클릭한 탭 버튼이 "어떤 패널을 보여줄지" data-target 속성으로 알아냅니다.
// 예)
//   <button class="tab-nav__button" data-target="panel-1">...</button>
//   <section id="panel-1" class="tab-panel">...</section>
//
// 동작:
// 1) selectedTab의 data-target 값을 읽어옴 (예: "panel-1")
// 2) document.getElementById로 그 id를 가진 패널을 찾음
// 3) 찾은 패널에 active 클래스(보이게 하는 클래스)를 추가
// -----------------------------------------------------------------------------
function activeSelectedPanel(selectedTab) {
  // ✅ selectedTab.getAttribute('data-target')
  // - HTML에 적힌 data-target="..." 값을 문자열로 가져옵니다.
  const targetId = selectedTab.getAttribute("data-target");

  // ✅ id가 targetId인 요소(패널)를 찾습니다.
  const targetPanel = document.getElementById(targetId);

  // ✅ 혹시 targetPanel이 없을 수도 있으니(오타/없는 id 등) 안전하게 체크
  if (targetPanel) {
    // ✅ 해당 패널에만 active 클래스를 붙여서 보이게 만듭니다.
    targetPanel.classList.add(ACTIVE_CLASS.panel);
  }
}
