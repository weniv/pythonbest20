let cnt = 1;
// let beforeBtn = document.querySelector(".ad_before");
// let afterBtn = document.querySelector(".ad_after");

// document.getElementById("radio" + cnt).checked = true;

// afterBtn.addEventListener("click", function () {
//   document.getElementById("radio" + cnt).checked = true;
//   cnt++;
  
//   console.log(`**************${cnt}`);

//   if(cnt > 3) {
//     cnt = 1;
//   }
// });

// beforeBtn.addEventListener("click", function () {
//   document.getElementById("radio" + cnt).checked = true;
//   cnt--;

//   console.log(`**************${cnt}`);

//     if (cnt < 1) {
//       cnt = 3;
//     }
// });


let time = 3000;

const test = setInterval(() => {
  document.getElementById("radio" + cnt).checked = true;
  cnt++;

  if (cnt > 4) {
    cnt = 1;
  } else if (cnt === 2) {
    document.querySelector(".ad-img").style.transition = "0s";
  } else {
    document.querySelector(".ad-img").style.transition = "1s";
  }
}, 3000);



