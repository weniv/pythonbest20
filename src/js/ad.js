const carousel = document.querySelector("#ad-carousel");
const beforeBtn = document.querySelector("#ad-before");
const nextBtn = document.querySelector("#ad-next");

let cnt = 1;

// 슬라이드 자동재생
let auto = setInterval(() => {
  document.getElementById("radio" + cnt).checked = true;
  cnt++;
  if (cnt > 7) {
    cnt = 1;
  }
}, 3000);;

document.getElementById("radio" + cnt).checked = true;

// 캐러셀 mouseover되면 자동재생 중지
carousel.addEventListener("mouseover", () => {
  clearInterval(auto);
});

// 캐러셀 mouseout 자동재생 재시작
carousel.addEventListener("mouseout", () => {
  auto = setInterval(() => {
    document.getElementById("radio" + cnt).checked = true;
    cnt++;
    if (cnt > 7) {
      cnt = 1;
    }
  }, 3000);;
})

// beforeBtn 버튼 클릭 시
beforeBtn.addEventListener("click", () => {
  if(cnt < 1) {
    cnt = 7
    document.getElementById("radio" + cnt).checked = true;
  } else {
    cnt--;
    document.getElementById("radio" + cnt).checked = true;
  }
});

// nextBtn 버튼 클릭 시
nextBtn.addEventListener("click", async() => {
  if (cnt > 7) {
    cnt = 1;
    document.getElementById("radio" + cnt).checked = true;
    cnt++
  } else {
    document.getElementById("radio" + cnt).checked = true;
    cnt++;
  }
});