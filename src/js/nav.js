const $container = document.querySelector(".container");
const $btnFold = document.querySelector(".btn-fold");
const $nav = document.querySelector("nav");
let isMobile = null;

const handleClose = () => {
  $container.classList.remove("menu-on");
  $btnFold.innerText = "메뉴 펼치기";
}
const handleOpen = () => {
  $container.classList.add("menu-on");
  $btnFold.innerText = "메뉴 접기";
}

const handleToggleMenu = () => {
  if ($container.classList.contains("menu-on")) {
    handleClose();
  } else {

    handleOpen();
  }
};



const checkMobile = () => {
  const winWidth = window.innerWidth;

  if(winWidth > 1024){
    isMobile = false;
  }else{
    handleClose();
    isMobile = true;
  }
}

const handleResizeWidth =() =>{
  let timer = null;
  clearTimeout(timer);
  timer = setTimeout(function(){
    checkMobile();
  },300)
}

const handleCloseMobileMenu =(e) =>{
  const check = Boolean(e.target.closest('nav')) || Boolean(e.target.closest('header'));
  if(isMobile && $container.classList.contains("menu-on") && !check){
    handleClose();
  }
}

checkMobile();
$btnFold.addEventListener("click", handleToggleMenu);
$container.addEventListener("click", handleCloseMobileMenu);
window.addEventListener("resize", handleResizeWidth);
