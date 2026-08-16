/**
 * Adri Dark Portfolio — main.js
 * Language toggle, sticky header, scroll reveal
 */

const STORAGE_KEY = "portfolio-lang";

const i18n = {
  ko: {
    "header.logo": "Process Engineer",
    "nav.motivation": "지원 동기",
    "nav.expertise": "역량",
    "nav.approach": "강점",
    "nav.vision": "포부",
    "nav.contact": "연락",
    "hero.label": "Process Engineer · Plant Design",
    "hero.title": "20년, 플랜트 설계 현장에서.",
    "hero.lead":
      "화학공학 전공. 공정 개념 설계부터 상세 설계, 시운전 지원까지 프로젝트 전 주기를 경험한 process engineer입니다.",
    "hero.cta": "연락하기",
    "hero.ctaSecondary": "역량 보기",
    "hero.imageAlt": "산업 플랜트 설계를 상징하는 일러스트",
    "stats.years": "년 경력",
    "stats.focusValue": "Plant",
    "stats.focus": "설계 전문",
    "stats.degreeValue": "Chem",
    "stats.degree": "공학 전공",
    "motivation.label": "Motivation",
    "motivation.title": "지원 동기",
    "motivation.p1":
      "[회사명]의 [직무명]에 지원하게 된 것은, 지난 20년간 플랜트 설계 현장에서 쌓아 온 공정 엔지니어링 경험을 [회사명]의 [산업 분야] 프로젝트에 기여하고 싶기 때문입니다. 화학공학 전공 이후 엔지니어링 회사에서 process engineer로 근무하며, 공정 개념 설계부터 상세 설계, 시운전 지원까지 프로젝트 전 주기를 경험했습니다.",
    "motivation.p2":
      "[회사명]이 [기업의 강점 또는 가치 — 예: 안전·품질 중심의 EPC 역량 / 글로벌 프로젝트 수행력]을 바탕으로 성장하고 있다는 점에 깊은 인상을 받았습니다. 저는 단순히 설계 산출물을 완성하는 것을 넘어, 발주처·타 discipline·시공사와의 협업 속에서 최적의 공정 솔루션을 도출하는 일에 보람을 느껴 왔습니다. [회사명]에서 동일한 전문성과 책임감으로 프로젝트 성공에 기여하고자 지원합니다.",
    "expertise.label": "Expertise",
    "expertise.title": "핵심 역량 및 경험",
    "expertise.skillsTitle": "공정 설계 기술",
    "expertise.skill1":
      "Mass and energy balance, PFD/P&ID 개발 및 revision 관리",
    "expertise.skill2":
      "주요 장치(반응기, 증류탑, 열교환기, 펌프·압축기 등) sizing 및 hydraulic 검토",
    "expertise.skill3":
      "Utility summary, line sizing, relief/load 분석 등 공정 기본 설계",
    "expertise.skill4":
      "HAZOP, design review 참여 및 공정 안전·operability 관점의 설계 검토",
    "expertise.projectTitle": "프로젝트 수행",
    "expertise.project1":
      "FEED 및 detail design 단계별 deliverable 작성·검토 (process design basis, datasheets, specifications 등)",
    "expertise.project2":
      "Mechanical, piping, instrument, electrical discipline과의 interface 조율",
    "expertise.project3":
      "Vendor proposal evaluation 및 equipment datasheets 승인",
    "expertise.project4":
      "시운전 및 performance test 단계 기술 지원",
    "expertise.projectsLabel": "대표 프로젝트",
    "expertise.project1Label": "Project 01",
    "expertise.project1ImageAlt": "석양 아래 정유·화학 플랜트 증류탑과 설비",
    "expertise.project1Name": "[대표 프로젝트 1]",
    "expertise.project1Desc":
      "[프로젝트 개요: 규모, 역할, 주요 기여 — 예: lead process engineer로 PFD/P&ID 개발 및 HAZOP facilitation]",
    "expertise.project2Label": "Project 02",
    "expertise.project2ImageAlt": "플랜트 내 산업 배관과 밸브",
    "expertise.project2Name": "[대표 프로젝트 2]",
    "expertise.project2Desc":
      "[프로젝트 개요: 규모, 역할, 주요 기여 — 예: revamp project에서 heat integration 검토 및 capacity debottlenecking]",
    "expertise.careerSummary":
      "[대학교명] 화학공학과를 졸업한 후, [현재/이전 회사명]에서 process engineer로 20년간 근무해 왔습니다. FEED 단계의 공정 개념 수립부터 detail design, revision 관리, vendor data review, 시운전 단계 기술 지원까지 폭넓게 수행했습니다.",
    "approach.label": "My Approach",
    "approach.title": "강점 및 업무 태도",
    "approach.card1Title": "기술적 엄밀성",
    "approach.card1Desc":
      "공정 데이터와 설계 가정을 명확히 문서화하고, balance closure·sizing basis·design margin을 일관되게 관리합니다. 설계 변경 시에도 근거를 추적 가능하게 유지합니다.",
    "approach.card2Title": "다학제 협업",
    "approach.card2Desc":
      "Piping routing, instrument control philosophy, mechanical layout 등과의 early engagement를 통해 constructability와 operability를 동시에 고려하는 설계를 지향합니다.",
    "approach.card3Title": "품질·멘토링",
    "approach.card3Desc":
      "Milestone 기반 deliverable 관리와 critical path 이슈의 선제적 escalate. [멘토링 경험 — 예: junior process engineer ○명 기술 지도]을 통해 팀 설계 품질 향상에도 기여했습니다.",
    "vision.label": "Vision",
    "vision.title": "입사 후 포부",
    "vision.p1":
      "[회사명]에 합류하게 된다면, [직무명]으로서 공정 discipline의 기술적 backbone 역할을 수행하겠습니다. [회사명]의 [산업 분야 / 프로젝트 유형] 프로젝트에서 안전하고 경제적인 공정 설계를 통해 발주처 신뢰를 확보하고, 프로젝트 일정·비용·품질 목표 달성에 기여하겠습니다.",
    "vision.p2":
      "장기적으로는 축적된 plant design know-how를 바탕으로, [기술 리더십 목표 — 예: design standard 정립 / revamp·debottlenecking 전문성 강화 / 후배 engineer 육성]에도 적극적으로 참여하겠습니다. [회사명]과 함께 성장하며, 지속 가능하고 경쟁력 있는 엔지니어링 솔루션을 제공하는 데 기여하고자 합니다.",
    "contact.label": "Get in Touch",
    "contact.title": "연락하기",
    "contact.lead": "프로젝트 협업 또는 채용 관련 문의를 환영합니다.",
    "contact.email": "이메일 보내기",
    "contact.download": "자기소개서 다운로드",
    "contact.meta": "지원 직무:",
    "contact.updated": "작성일:",
    "footer.copy": "© Process Engineer · Plant Design · 20 Years",
    "footer.note": "HTML, CSS & JavaScript로 제작",
  },
  en: {
    "header.logo": "Process Engineer",
    "nav.motivation": "Motivation",
    "nav.expertise": "Expertise",
    "nav.approach": "Approach",
    "nav.vision": "Vision",
    "nav.contact": "Contact",
    "hero.label": "Process Engineer · Plant Design",
    "hero.title": "Two decades in plant design.",
    "hero.lead":
      "Chemical engineering graduate with end-to-end project experience — from conceptual process design and detailed engineering to commissioning support.",
    "hero.cta": "Get in Touch",
    "hero.ctaSecondary": "View Expertise",
    "hero.imageAlt": "Illustration representing industrial plant design",
    "stats.years": "Years of Experience",
    "stats.focusValue": "Plant",
    "stats.focus": "Design Focus",
    "stats.degreeValue": "Chem",
    "stats.degree": "Engineering",
    "motivation.label": "Motivation",
    "motivation.title": "Why I Apply",
    "motivation.p1":
      "I am applying for the [직무명] position at [회사명] because I want to contribute two decades of plant design and process engineering experience to your [산업 분야] projects. Since graduating with a degree in chemical engineering, I have worked as a process engineer at an engineering company, supporting projects from conceptual design through detailed engineering and commissioning assistance.",
    "motivation.p2":
      "I am impressed by [회사명]'s reputation for [기업의 강점 또는 가치 — e.g., safety-driven EPC excellence / global project delivery]. Beyond delivering design deliverables, I find the greatest satisfaction in collaborating with clients, multidisciplinary teams, and contractors to develop practical process solutions. I am confident that I can bring the same technical depth and accountability to [회사명]'s project success.",
    "expertise.label": "Expertise",
    "expertise.title": "Core Competencies & Experience",
    "expertise.skillsTitle": "Process Design Expertise",
    "expertise.skill1":
      "Mass and energy balances; PFD/P&ID development and revision control",
    "expertise.skill2":
      "Equipment sizing and hydraulic review for reactors, distillation columns, heat exchangers, pumps, compressors, and related units",
    "expertise.skill3":
      "Fundamental process design including utility summaries, line sizing, and relief/load analysis",
    "expertise.skill4":
      "Participation in HAZOP and design reviews from process safety and operability perspectives",
    "expertise.projectTitle": "Project Execution",
    "expertise.project1":
      "Preparation and review of deliverables across FEED and detailed design (process design basis, datasheets, specifications, etc.)",
    "expertise.project2":
      "Interface coordination with mechanical, piping, instrument, and electrical disciplines",
    "expertise.project3":
      "Vendor proposal evaluation and approval of equipment datasheets",
    "expertise.project4":
      "Technical support during commissioning and performance testing",
    "expertise.projectsLabel": "Representative Projects",
    "expertise.project1Label": "Project 01",
    "expertise.project1ImageAlt": "Oil refinery distillation columns and equipment at dusk",
    "expertise.project1Name": "[대표 프로젝트 1]",
    "expertise.project1Desc":
      "[Project summary: scale, role, key contributions — e.g., lead process engineer for PFD/P&ID development and HAZOP facilitation]",
    "expertise.project2Label": "Project 02",
    "expertise.project2ImageAlt": "Industrial piping and valves inside a plant",
    "expertise.project2Name": "[대표 프로젝트 2]",
    "expertise.project2Desc":
      "[Project summary: scale, role, key contributions — e.g., heat integration review and capacity debottlenecking on a revamp project]",
    "expertise.careerSummary":
      "After earning my bachelor's degree in chemical engineering from [대학교명], I have spent 20 years as a process engineer at [현재/이전 회사명]. My work spans FEED-level concept development, detailed design, revision control, vendor data review, and commissioning support.",
    "approach.label": "My Approach",
    "approach.title": "Strengths & Work Style",
    "approach.card1Title": "Technical Rigor",
    "approach.card1Desc":
      "I maintain clear documentation of process data and design assumptions, consistently managing balance closure, sizing bases, and design margins. When design changes occur, I ensure traceability of rationale.",
    "approach.card2Title": "Cross-Discipline Collaboration",
    "approach.card2Desc":
      "Process design is never completed in isolation. I engage early with piping, instrumentation, and mechanical teams to balance constructability and operability.",
    "approach.card3Title": "Quality & Mentoring",
    "approach.card3Desc":
      "I manage deliverables against milestones and proactively escalate critical process issues. Through [멘토링 경험], I have also contributed to raising overall team design quality.",
    "vision.label": "Vision",
    "vision.title": "Career Goals",
    "vision.p1":
      "If given the opportunity to join [회사명], I will serve as a technical backbone within the process discipline as [직무명]. I aim to earn client trust through safe and cost-effective process design on [회사명]'s [산업 분야 / 프로젝트 유형] projects, contributing to schedule, cost, and quality targets.",
    "vision.p2":
      "In the longer term, I intend to leverage my plant design experience toward [기술 리더십 목표]. I look forward to growing with [회사명] and contributing to sustainable, competitive engineering solutions.",
    "contact.label": "Get in Touch",
    "contact.title": "Contact",
    "contact.lead":
      "Open to project collaboration and career opportunities.",
    "contact.email": "Send Email",
    "contact.download": "Download Cover Letter",
    "contact.meta": "Position:",
    "contact.updated": "Updated:",
    "footer.copy": "© Process Engineer · Plant Design · 20 Years",
    "footer.note": "Built with HTML, CSS & JavaScript",
  },
};

let currentLang = localStorage.getItem(STORAGE_KEY) || "ko";

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem(STORAGE_KEY, lang);
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const text = i18n[lang][key];
    if (text !== undefined) {
      el.textContent = text;
    }
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const key = el.getAttribute("data-i18n-alt");
    const text = i18n[lang][key];
    if (text !== undefined) {
      el.setAttribute("alt", text);
    }
  });

  const toggle = document.getElementById("lang-toggle");
  if (toggle) {
    toggle.textContent = lang === "ko" ? "EN" : "KO";
    toggle.setAttribute(
      "aria-label",
      lang === "ko" ? "Switch to English" : "한국어로 전환"
    );
  }
}

function initLanguageToggle() {
  const toggle = document.getElementById("lang-toggle");
  if (!toggle) return;

  toggle.addEventListener("click", () => {
    applyLanguage(currentLang === "ko" ? "en" : "ko");
  });

  applyLanguage(currentLang);
}

function initStickyHeader() {
  const header = document.getElementById("site-header");
  if (!header) return;

  const onScroll = () => {
    header.classList.toggle("is-scrolled", window.scrollY > 40);
  };

  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function initScrollReveal() {
  const prefersReduced = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const elements = document.querySelectorAll(".reveal");
  if (prefersReduced || !elements.length) {
    elements.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  elements.forEach((el) => observer.observe(el));
}

document.addEventListener("DOMContentLoaded", () => {
  initLanguageToggle();
  initStickyHeader();
  initScrollReveal();
});
