const $container = document.querySelector(".container");
const $btnFold = document.querySelector(".btn-fold");

const handleToggleMenu = () => {
  if ($container.classList.contains("menu-on")) {
    $container.classList.remove("menu-on");
    $btnFold.innerText = "메뉴 펼침";
  } else {
    $container.classList.add("menu-on");
    $btnFold.innerText = "메뉴 접힘";
  }
};
$btnFold.addEventListener("click", handleToggleMenu);
