const elements = {
  container: document.querySelector(".container"),
  main: document.querySelector(".contents"),
  btnFold: document.querySelector(".btn-fold"),
  nav: document.querySelector(".question-nav"),
  codeMirror: document.querySelector(".CodeMirror"),
  btnMenu: document.querySelector(".hamburger-btn"),
  icon: document.querySelector(".hamburger-btn img"),
  menuContainer: document.querySelector(".menu-list"),
};

const state = {
  isMobile: null,
  isActive: elements.btnMenu.classList.contains("is-active"),
};

const toggleActiveState = () => {
  state.isActive = !state.isActive;
  const imgSrc = state.isActive ? "src/img/close.webp" : "src/img/hamburger-btn.webp";
  const imgAlt = state.isActive ? "메뉴 닫기" : "메뉴 열기";

  elements.icon.src = imgSrc;
  elements.icon.alt = imgAlt;
};

const handleCloseQuestions = () => {
  elements.container.classList.remove("menu-on");
  elements.btnFold.innerText = "메뉴 펼치기";
  elements.codeMirror.classList.remove("menu-on-CodeMirror");
  elements.codeMirror.classList.add("menu-off-CodeMirror");
};

const handleOpenQuestions = () => {
  if (elements.menuContainer.classList.contains("active")) {
      handleCloseMenu();
  }

  elements.container.classList.add("menu-on");
  elements.btnFold.innerText = "메뉴 접기";
  elements.codeMirror.classList.add("menu-on-CodeMirror");
  elements.codeMirror.classList.remove("menu-off-CodeMirror");
};

const handleToggleQuestions = () => {
  if (elements.container.classList.contains("menu-on")) {
      handleCloseQuestions();
  } else {
      handleOpenQuestions();
  }
};

const handleToggleMenu = () => {
  elements.btnMenu.classList.toggle("is-active");
  toggleActiveState();

  if (state.isActive) {
      elements.icon.classList.add("close");
      elements.menuContainer.classList.add("active");
  } else {
      elements.icon.classList.remove("close");
      elements.menuContainer.classList.remove("active");
  }

  if (elements.menuContainer.classList.contains("active") && state.isMobile) {
      handleCloseQuestions();
  }
};

const handleCloseMenu = () => {
  elements.menuContainer.classList.remove("active");
  elements.icon.classList.remove("close");
  elements.icon.src = "src/img/hamburger-btn.webp";
  state.isActive = false;
};

const checkMobile = () => {
  const winWidth = window.innerWidth;

  if (winWidth > 1024) {
      state.isMobile = false;
      elements.menuContainer.classList.remove("is-active");
  } else if (winWidth >= 900) {
      handleCloseMenu();
      state.isMobile = true;
  } else {
      handleCloseQuestions();
      state.isMobile = true;
  }
};

const handleResizeWidth = () => {
  let timer = null;
  clearTimeout(timer);
  timer = setTimeout(() => {
      checkMobile();
  }, 300);
};

const handleCloseMobileQuestions = (e) => {
  const check =
      Boolean(e.target.closest("nav")) || Boolean(e.target.closest("header"));
  if (state.isMobile && elements.container.classList.contains("menu-on") && !check) {
      handleCloseQuestions();
  }
};

const handleClickOutside = (e) => {
  if (!elements.menuContainer.contains(e.target)) {
      handleCloseMenu();
  }
};

checkMobile();
elements.btnFold.addEventListener("click", handleToggleQuestions);
elements.container.addEventListener("click", handleCloseMobileQuestions);
window.addEventListener("resize", handleResizeWidth);

elements.btnMenu.addEventListener("click", handleToggleMenu);
elements.main.addEventListener("click", handleClickOutside);