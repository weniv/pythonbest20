let cnt = 1;
const beforeBtn = document.querySelector("#ad-before");
const nextBtn = document.querySelector("#ad-next");

// 자동 화면 전환
setInterval(() => {
  document.getElementById("radio" + cnt).checked = true;
  cnt++;

  if(cnt > 6) {
    cnt = 1;
  }
}, 3000);

// next 버튼 클릭 시
beforeBtn.addEventListener("click", () => {
  if(cnt <= 1) {
    cnt = 6;
    document.getElementById("radio" + cnt).checked = true;
    console.log(cnt)
  } else {
    cnt--;
    document.getElementById("radio" + cnt).checked = true;
    console.log(cnt);

  }
})

// before 버튼 클릭 시
nextBtn.addEventListener("click", () => {
  if (cnt >= 6) {
    cnt = 1;
    document.getElementById("radio" + cnt).checked = true;
    console.log(cnt);
  } else {
    cnt++;
    document.getElementById("radio" + cnt).checked = true;
    console.log(cnt);
  }
});