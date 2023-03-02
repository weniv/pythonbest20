const $carousel = document.querySelector("#ad-carousel");
const $beforeBtn = document.querySelector("#ad-before");
const $nextBtn = document.querySelector("#ad-next");
const $pageRadio = document.querySelectorAll(".ad-pagination")
const $adList = document.querySelector("#ad-inner").querySelectorAll("li")
const sliderTime = 3000;
let cnt = 1;
let repeat = null;

// 슬라이드 자동 재생
let auto = () => {
  if (cnt === $adList.length) {
    cnt = 1;
  } else {
    cnt++
  }
  document.getElementById("radio" + cnt).checked = true;
}

repeat = setInterval(auto, sliderTime);

// 캐러셀 mouseenter 시 자동재생 중지
$carousel.addEventListener("mouseenter", () => {
  clearInterval(repeat);
});

// 캐러셀 mouseleave 시 자동재생 재시작
$carousel.addEventListener("mouseleave", () => {
  repeat = setInterval(auto, sliderTime);
})

// 슬라이드 수동 조작
$pageRadio.forEach(el =>
  el.addEventListener('click', () => {
    cnt = parseInt(el.id.slice(-1))
    document.getElementById("radio" + cnt).checked = true;
  }))

// beforeBtn 버튼 클릭 시
$beforeBtn.addEventListener("click", () => {
  if (cnt === 1) {
    cnt = $adList.length
  } else {
    cnt--;
  }
  document.getElementById("radio" + cnt).checked = true;
});

// nextBtn 버튼 클릭 시
$nextBtn.addEventListener("click", () => {
  if (cnt === $adList.length) {
    cnt = 1;
  } else {
    cnt++;
  }
  document.getElementById("radio" + cnt).checked = true;
});