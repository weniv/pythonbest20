let cnt = 1;
const carousel = document.querySelector("#ad-carousel");
const beforeBtn = document.querySelector("#ad-before");
const nextBtn = document.querySelector("#ad-next");

// 슬라이드 자동재생
let auto = setInterval(() => {
  document.getElementById("radio" + cnt).checked = true;
  cnt++;
  if (cnt > 6) {
    cnt = 1;
  }
}, 1000);;

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
    if (cnt > 6) {
      cnt = 1;
    }
  }, 1000);;
})

// beforeBtn 버튼 클릭 시
beforeBtn.addEventListener("click", () => {
  if(cnt < 1) {
    cnt = 6
    document.getElementById("radio" + cnt).checked = true;
  } else {
    cnt--;
    document.getElementById("radio" + cnt).checked = true;
  }
});

// nextBtn 버튼 클릭 시
nextBtn.addEventListener("click", async() => {
  if (cnt > 6) {
    cnt = 1;
    document.getElementById("radio" + cnt).checked = true;
    cnt++
    console.log("===========");
    console.log(cnt);
  } else {
    document.getElementById("radio" + cnt).checked = true;
    cnt++;
    console.log(cnt);
  }
});