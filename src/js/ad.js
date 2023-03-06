const $carousel = document.querySelector("#kg-carousel");
const $adv = document.querySelectorAll('#kg-inner li')
const $beforeBtn = document.querySelector("#kg-before");
const $nextBtn = document.querySelector("#kg-next");
const $pageRadio = document.querySelectorAll(".kg-pagination")
const advsLength = $adv.length
const sliderTime = 3000;
let cnt = 1;
let repeat = null;

// 슬라이드 자동 재생
let auto = () => {
  show(cnt)
  if (cnt === advsLength) {
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

// 페이지네이션 클릭 시 해당 광고를 띄워줌
$pageRadio.forEach(el =>
  el.addEventListener('click', () => {
    cnt = parseInt(el.id.slice(-1))
    show(cnt)
    document.getElementById("radio" + cnt).checked = true;
  }))

// beforeBtn 버튼 클릭 시
$beforeBtn.addEventListener("click", () => {
  if (cnt === 1) {
    cnt = advsLength
  } else {
    cnt--;
  }
  show(cnt)
  document.getElementById("radio" + cnt).checked = true;
});

// nextBtn 버튼 클릭 시
$nextBtn.addEventListener("click", () => {
  if (cnt === advsLength) {
    cnt = 1;
  } else {
    cnt++;
  }
  show(cnt)
  document.getElementById("radio" + cnt).checked = true;
});

const show = (index) => {
  // 해당 인덱스에 따라서 화면에 보여주는 함수
  console.log($adv[index].childNodes[1])
}