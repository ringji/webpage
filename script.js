(function () {
  const page = document.body.dataset.page || "home";

  const navItems = [
    ["home", "홈", "index.html"],
    ["about", "팀 소개", "about.html"],
    ["work", "주요 업무", "work.html"],
    ["insights", "AX 인사이트", "insights.html"],
    ["team", "팀원", "team.html"],
    ["contact", "문의", "contact.html"]
  ];

  const metrics = [
    ["50+", "연간 AX 혁신 과제", "추진 목표"],
    ["20+", "생성형 AI 서비스", "기획 사례"],
    ["5명", "AX 전문 인력", "가상 팀 구성"],
    ["30%", "업무 생산성", "향상 목표"]
  ];

  const services = [
    {
      title: "AX 전략 수립",
      text: "중장기 AI 전환 로드맵과 실행 전략을 수립합니다.",
      detail: "조직 목표, 현업 수요, 기술 성숙도를 함께 검토해 실행 가능한 AX 과제를 설계합니다.",
      tag: "Roadmap"
    },
    {
      title: "생성형 AI 확산",
      text: "연구와 행정 업무에 생성형 AI 활용 체계를 구축합니다.",
      detail: "공통 활용 가이드, 프롬프트 표준, 내부 플랫폼 운영 모델을 정리합니다.",
      tag: "GenAI"
    },
    {
      title: "AI 업무혁신",
      text: "반복 업무 자동화와 AI Agent 도입을 지원합니다.",
      detail: "문서 작성, 데이터 정리, 보고 자동화 등 현장의 시간을 돌려주는 자동화를 추진합니다.",
      tag: "Agent"
    },
    {
      title: "데이터 거버넌스",
      text: "데이터 표준화와 품질 관리 체계를 수립합니다.",
      detail: "신뢰할 수 있는 데이터가 좋은 AI를 만든다는 원칙으로 데이터 운영 기준을 정비합니다.",
      tag: "Data"
    },
    {
      title: "AX 교육",
      text: "AI 활용 교육과 조직 변화관리를 추진합니다.",
      detail: "구성원이 새로운 업무 방식에 자연스럽게 적응하도록 실습형 교육과 컨설팅을 제공합니다.",
      tag: "Enablement"
    }
  ];

  const members = [
    ["한도윤", "팀장 / AX 전략 총괄", "AX 비전 및 전략 수립, 대외 협력", "AI는 기술이 아니라 업무 방식의 변화입니다."],
    ["윤서아", "AI 플랫폼 리드", "생성형 AI 플랫폼 구축 및 운영", "좋은 플랫폼은 누구나 쉽게 사용할 수 있어야 합니다."],
    ["강민호", "AI 솔루션 아키텍트", "Agent 시스템 및 업무 자동화 설계", "자동화는 사람의 시간을 돌려주는 기술입니다."],
    ["오지은", "데이터 전략 전문가", "데이터 품질 및 거버넌스", "신뢰할 수 있는 데이터가 좋은 AI를 만듭니다."],
    ["최현우", "AX 혁신 컨설턴트", "현업 과제 발굴 및 변화관리", "현장의 문제에서 혁신이 시작됩니다."]
  ];

  const insights = [
    ["2026.07", "생성형 AI 활용 가이드", "연구와 행정 업무에서 안전하게 생성형 AI를 활용하기 위한 기본 원칙을 정리했습니다.", "Guide"],
    ["2026.06", "AI Agent 업무혁신 사례", "반복 보고, 자료 검색, 데이터 정리에 Agent를 적용하는 방식과 기대 효과를 소개합니다.", "Case"],
    ["2026.05", "데이터 거버넌스 체크리스트", "AI 도입 전 확인해야 할 데이터 품질, 표준, 책임 체계를 체크리스트로 정리했습니다.", "Checklist"],
    ["2026.04", "AX 전환 로드맵 설계 노트", "전사 AX 전환을 단계적으로 추진하기 위한 과제 발굴과 우선순위 기준을 안내합니다.", "Strategy"]
  ];

  function icon(name) {
    const paths = {
      search: '<circle cx="11" cy="11" r="7"></circle><path d="m20 20-3.5-3.5"></path>',
      plus: '<path d="M12 5v14"></path><path d="M5 12h14"></path>',
      arrow: '<path d="M5 12h14"></path><path d="m13 6 6 6-6 6"></path>',
      mail: '<path d="M4 6h16v12H4z"></path><path d="m4 7 8 6 8-6"></path>',
      map: '<path d="M12 21s7-5.1 7-11a7 7 0 0 0-14 0c0 5.9 7 11 7 11z"></path><circle cx="12" cy="10" r="2.5"></circle>',
      clock: '<circle cx="12" cy="12" r="8"></circle><path d="M12 8v5l3 2"></path>',
      file: '<path d="M7 3h7l3 3v15H7z"></path><path d="M14 3v4h4"></path><path d="M9 12h6"></path><path d="M9 16h6"></path>',
      people: '<path d="M16 19v-1.5c0-1.7-1.8-3-4-3s-4 1.3-4 3V19"></path><circle cx="12" cy="9" r="3"></circle><path d="M4 18v-1c0-1.2 1-2.1 2.5-2.5"></path><path d="M20 18v-1c0-1.2-1-2.1-2.5-2.5"></path>'
    };
    return `<svg aria-hidden="true" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${paths[name] || paths.arrow}</svg>`;
  }

  function renderHeader() {
    const links = navItems.map(([key, label, href]) => {
      const active = key === page ? ' aria-current="page"' : "";
      return `<a href="${href}"${active}>${label}</a>`;
    }).join("");

    document.getElementById("site-header").innerHTML = `
      <header class="topbar">
        <div class="brand" aria-label="ETRI AX전략팀">
          <a class="brand-mark" href="index.html">
            <span class="etri">ETRI</span>
            <span class="ax">AX</span>
          </a>
          <div>
            <strong>AX전략팀</strong>
            <span>AI Transformation Strategy Team</span>
          </div>
        </div>
        <nav class="main-nav" aria-label="주요 메뉴">${links}</nav>
        <div class="header-actions">
          <button class="pill-button" type="button">English</button>
          <button class="translate-button" type="button">G Translate</button>
        </div>
      </header>
    `;
  }

  function renderFooter() {
    document.getElementById("site-footer").innerHTML = `
      <footer class="footer">
        <div class="footer-inner">
          <div>
            <strong>ETRI AX전략팀</strong>
            <p>기술을 전략으로, 전략을 실행으로.</p>
          </div>
          <p>본 웹사이트는 교육 및 실습용으로 작성된 가상의 팀 홍보 사이트입니다. 인물, 연락처, 수치는 실제 정보가 아닙니다.</p>
        </div>
      </footer>
    `;
  }

  function sectionHeader(kicker, title, text) {
    return `
      <div class="section-header">
        <span>${kicker}</span>
        <h2>${title}</h2>
        <p>${text}</p>
      </div>
    `;
  }

  function serviceCards(limit) {
    return services.slice(0, limit || services.length).map((item) => `
      <article class="service-card">
        <div class="card-tag">${item.tag}</div>
        <h3>${item.title}</h3>
        <p>${item.text}</p>
        <small>${item.detail}</small>
      </article>
    `).join("");
  }

  function metricCards() {
    return metrics.map(([value, label, note]) => `
      <div class="metric-card">
        <strong>${value}</strong>
        <span>${label}</span>
        <small>${note} · 가상</small>
      </div>
    `).join("");
  }

  function renderHome() {
    return `
      <section class="portal-hero">
        <aside class="left-rail">
          <div class="anniversary">
            <span>ETRI AX</span>
            <strong>전사 AX 전환,<br>실행으로 연결하다</strong>
          </div>
          <form class="search-box" aria-label="사이트 검색">
            <label for="site-search">검색어 입력</label>
            <input id="site-search" type="search" placeholder="검색어 입력">
            <button type="submit" aria-label="검색">${icon("search")}</button>
          </form>
          <a class="solid-tile blue" href="work.html">
            <span>AX 업무영역</span>
            <strong>전략부터 교육까지 한눈에 보기</strong>
          </a>
          <a class="solid-tile orange" href="insights.html">
            <span>AX 인사이트</span>
            <strong>생성형 AI 활용 자료</strong>
            ${icon("arrow")}
          </a>
        </aside>
        <section class="hero-banner" aria-label="AX전략팀 주요 배너">
          <img src="assets/hero-ai-transformation.png" alt="AI 반도체와 데이터 인프라를 표현한 디지털 전환 이미지">
          <div class="hero-copy">
            <p>ETRI AX STRATEGY TEAM</p>
            <h1>기술을 전략으로,<br>전략을 실행으로.</h1>
            <span>연구개발과 경영 전반의 AI 전환을 지원하는 가상 전략 조직</span>
          </div>
          <div class="slider-dots" aria-hidden="true"><i></i><i></i><i></i><button type="button">Ⅱ</button></div>
        </section>
        <aside class="right-rail">
          <section class="resource-card">
            <h2>발간자료</h2>
            <ul>
              <li><a href="insights.html">AX Insight</a></li>
              <li><a href="insights.html">AI Agent 사례</a></li>
              <li><a href="insights.html">데이터 거버넌스</a></li>
              <li><a href="insights.html">AX 교육자료</a></li>
            </ul>
          </section>
          <div class="quick-grid">
            <a href="contact.html">${icon("mail")}<span>문의하기</span></a>
            <a href="contact.html">${icon("people")}<span>협력 제안</span></a>
            <a href="work.html">${icon("file")}<span>AX 교육</span></a>
            <a href="about.html">${icon("map")}<span>팀 소개</span></a>
          </div>
        </aside>
      </section>

      <section class="metrics-strip" aria-label="숫자로 보는 AX전략팀">
        ${metricCards()}
      </section>

      <section class="content-grid">
        <article class="news-card featured-list">
          <div class="card-title-row">
            <h2>공지사항</h2>
            <a href="insights.html" aria-label="공지사항 더보기">${icon("plus")}</a>
          </div>
          <div class="notice-main">
            <div class="date-box"><strong>14</strong><span>2026.07</span></div>
            <p>2026년 AX 업무혁신 과제 발굴 설명회 개최 안내</p>
          </div>
          <ul class="dot-list">
            <li>생성형 AI 활용 기본 가이드 공개</li>
            <li>AX 교육 과정 3차 모집 안내</li>
            <li>데이터 표준화 실무 워크숍 안내</li>
            <li>AI Agent 파일럿 과제 접수</li>
          </ul>
        </article>
        <article class="news-card">
          <div class="card-title-row">
            <h2>보도자료</h2>
            <a href="insights.html" aria-label="보도자료 더보기">${icon("plus")}</a>
          </div>
          <div class="press-image">
            <img src="assets/hero-ai-transformation.png" alt="디지털 전환 기술 이미지">
            <span>AX전략팀, 전사 AI 전환 실행 체계 고도화</span>
          </div>
          <ul class="dot-list">
            <li>[가상] ETRI AX전략팀, 생성형 AI 활용 체계 마련</li>
            <li>[가상] AI Agent 기반 업무 자동화 실증 추진</li>
          </ul>
        </article>
        <article class="news-card service-mini">
          <div class="card-title-row">
            <h2>주요 업무</h2>
            <a href="work.html" aria-label="주요 업무 더보기">${icon("plus")}</a>
          </div>
          <div class="mini-links">
            ${services.map((item) => `<a href="work.html">${item.title}</a>`).join("")}
          </div>
        </article>
      </section>

      <section class="wide-section">
        ${sectionHeader("AX INSIGHT", "대외 홍보용 AX 자료", "AI 전환을 더 쉽게 이해할 수 있도록 전략, 활용, 거버넌스 관점의 자료를 제공합니다.")}
        <div class="insight-row">
          ${insights.slice(0, 3).map(([date, title, text, type]) => `
            <a class="insight-card" href="insights.html">
              <span>${type}</span>
              <time>${date}</time>
              <h3>${title}</h3>
              <p>${text}</p>
            </a>
          `).join("")}
        </div>
      </section>
    `;
  }

  function renderAbout() {
    return `
      ${subHero("팀 소개", "조직 전체의 업무 방식을 혁신하는 AX 전략 조직", "AI 도구를 단순히 도입하는 것이 아니라 연구개발과 경영 전반의 변화가 실행되도록 돕습니다.")}
      <section class="two-column">
        <div>
          ${sectionHeader("MISSION", "전사 AX 전환을 실행 가능한 전략으로 만듭니다", "현장의 문제에서 출발해 기술, 데이터, 사람, 제도를 함께 설계합니다.")}
          <p class="lead-text">ETRI AX전략팀은 생성형 AI, 데이터 기반 의사결정, 업무 자동화, AI 거버넌스를 중심으로 연구원의 혁신 과제를 발굴하고 실행하는 가상의 전략 조직입니다.</p>
        </div>
        <div class="principle-grid">
          <article><strong>현장 중심</strong><span>실제 업무 문제에서 과제를 발굴합니다.</span></article>
          <article><strong>실행 중심</strong><span>전략 문서에서 멈추지 않고 운영까지 연결합니다.</span></article>
          <article><strong>신뢰 중심</strong><span>데이터와 거버넌스에 기반한 AI 활용을 지향합니다.</span></article>
          <article><strong>확산 중심</strong><span>교육과 변화관리로 조직 전체의 수용성을 높입니다.</span></article>
        </div>
      </section>
      <section class="quote-band">
        <p>“AI는 기술이 아니라 업무 방식의 변화입니다.”</p>
        <span>AX전략팀 운영 철학 · 가상 문구</span>
      </section>
    `;
  }

  function renderWork() {
    return `
      ${subHero("주요 업무", "AX 전략부터 교육까지 전환의 전 과정을 지원합니다", "팀의 핵심 업무는 로드맵, 플랫폼, 자동화, 데이터, 교육으로 이어지는 실행 체계입니다.")}
      <section class="wide-section">
        ${sectionHeader("SERVICE AREAS", "5대 추진 영역", "각 영역은 별도 과제가 아니라 전사 AX 전환을 이루는 하나의 흐름으로 연결됩니다.")}
        <div class="service-grid">${serviceCards()}</div>
      </section>
      <section class="process-section">
        <h2>추진 방식</h2>
        <ol>
          <li><strong>문제 발굴</strong><span>현업 인터뷰와 업무 분석을 통해 AX 후보 과제를 찾습니다.</span></li>
          <li><strong>우선순위화</strong><span>효과, 난이도, 데이터 준비도를 기준으로 실행 순서를 정합니다.</span></li>
          <li><strong>파일럿 실행</strong><span>작게 검증하고, 반복 개선으로 확산 가능한 모델을 만듭니다.</span></li>
          <li><strong>전사 확산</strong><span>가이드, 교육, 거버넌스로 조직 전반에 정착시킵니다.</span></li>
        </ol>
      </section>
    `;
  }

  function renderInsights() {
    return `
      ${subHero("AX 인사이트", "AI 전환을 이해하기 쉽게 정리한 대외 홍보 자료", "가상의 자료 목록이며 실제 다운로드 기능은 포함하지 않습니다.")}
      <section class="article-list">
        ${insights.map(([date, title, text, type]) => `
          <article class="article-item">
            <div><span>${type}</span><time>${date}</time></div>
            <h2>${title}</h2>
            <p>${text}</p>
            <a href="contact.html">자료 문의 ${icon("arrow")}</a>
          </article>
        `).join("")}
      </section>
    `;
  }

  function renderTeam() {
    return `
      ${subHero("팀원", "전략, 플랫폼, 자동화, 데이터, 변화관리를 함께 보는 팀", "아래 인물은 교육 및 실습용 가상 인물입니다.")}
      <section class="team-grid">
        ${members.map(([name, role, task, quote], index) => `
          <article class="member-card">
            <div class="avatar" aria-hidden="true">${name.slice(0, 1)}${index + 1}</div>
            <div>
              <h2>${name}</h2>
              <strong>${role}</strong>
              <p>담당: ${task}</p>
              <blockquote>${quote}</blockquote>
            </div>
          </article>
        `).join("")}
      </section>
    `;
  }

  function renderContact() {
    return `
      ${subHero("문의", "AX전략팀과의 협력과 문의를 환영합니다", "실제 전송 폼 없이 정적 연락처와 메일 링크만 제공하는 v1 구성입니다.")}
      <section class="contact-layout">
        <div class="contact-card">
          <h2>연락처</h2>
          <dl>
            <div><dt>${icon("mail")} 이메일</dt><dd><a href="mailto:ax.strategy@etri.example">ax.strategy@etri.example</a></dd></div>
            <div><dt>${icon("clock")} 내선</dt><dd>042-000-1234</dd></div>
            <div><dt>${icon("map")} 위치</dt><dd>ETRI AX전략팀</dd></div>
            <div><dt>${icon("clock")} 운영시간</dt><dd>평일 09:00-18:00</dd></div>
          </dl>
          <a class="primary-link" href="mailto:ax.strategy@etri.example">메일 보내기</a>
        </div>
        <aside class="contact-note">
          <h2>가상 정보 안내</h2>
          <p>본 문의 정보는 교육 및 실습용으로 작성된 가상 정보입니다. 실제 ETRI 문의 또는 공식 연락처로 사용하지 마세요.</p>
          <div class="mini-links">
            <a href="about.html">팀 소개</a>
            <a href="work.html">주요 업무</a>
            <a href="insights.html">AX 인사이트</a>
          </div>
        </aside>
      </section>
    `;
  }

  function subHero(title, headline, text) {
    return `
      <section class="sub-hero">
        <div>
          <span>ETRI AX STRATEGY TEAM</span>
          <h1>${title}</h1>
          <p>${headline}</p>
          <small>${text}</small>
        </div>
      </section>
    `;
  }

  function bindSearch() {
    const form = document.querySelector(".search-box");
    if (!form) return;
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const input = form.querySelector("input");
      const value = input.value.trim();
      const message = value
        ? `"${value}" 검색은 정적 데모 사이트에서는 제공되지 않습니다.`
        : "검색어를 입력해 주세요.";
      let status = form.querySelector(".search-status");
      if (!status) {
        status = document.createElement("p");
        status.className = "search-status";
        status.setAttribute("role", "status");
        form.appendChild(status);
      }
      status.textContent = message;
    });
  }

  const renderers = {
    home: renderHome,
    about: renderAbout,
    work: renderWork,
    insights: renderInsights,
    team: renderTeam,
    contact: renderContact
  };

  renderHeader();
  document.getElementById("main").innerHTML = (renderers[page] || renderHome)();
  renderFooter();
  bindSearch();
})();
