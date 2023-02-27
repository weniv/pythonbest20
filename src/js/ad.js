let cnt = 1;
let time = 3000;

setInterval(() => {
  document.getElementById("radio" + cnt).checked = true;
  cnt++;

  if(cnt > 6) {
    cnt = 1;
  }
}, 3000);