const $btnQue = document.querySelectorAll(".btn-que");
const $btnRun = document.querySelector("#btn-run");
const $resultInfo = document.querySelector("#result_info");
const $btnDownload = document.querySelectorAll(".btn-download");
const $languageSelector = document.querySelector(".lang-selector");
let lang;

// 문제 로딩
$btnQue.forEach((element) => {
  element.addEventListener("click", function (e) {
    document.getElementById("q" + PAGE_NAME).classList.remove("active");
    PAGE_NAME = e.target.id.slice(1);
    document.getElementById("q" + PAGE_NAME).classList.add("active");
    history.pushState(null, PAGE_NAME, `?page=${PAGE_NAME}`);
    // 문제 이동 시 에러 메시지 초기화
    document.getElementById("result_desc").textContent = "";
    render();
    loadCode();
  });
});

// 로컬 스토리지에서 code 읽어오기
function loadCode() {
  const localStorageValue = window.localStorage.getItem(PAGE_NAME);
  if (!!localStorageValue) {
    editor.setValue(localStorageValue);
    $resultInfo.classList.remove("result-info-none");
  } else {
    editor.setValue(`def solution(data):
    return None`);
    $resultInfo.classList.remove("result-info-none");
  }
}
loadCode();

$btnRun.addEventListener("click", (e) => {
  e.preventDefault();
  let text = editor.getValue();
  codeEditor = document.querySelector("#codeeditor");
  window.localStorage.setItem(PAGE_NAME, text);
  codeEditor.textContent = text;
  $resultInfo.classList.add("result-info-none");
});

const downloadFile = async ({ data, fileName, fileType }) => {
  const blob = new Blob([data], { type: fileType });
  const link = document.createElement("a");

  link.download = fileName;
  link.href = await URL.createObjectURL(blob);

  const clickEvt = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true,
  });
  link.dispatchEvent(clickEvt);
  link.remove();
};

const fetchQuestionInfo = async () => {
  const res = await fetch(`${window.location.origin}/src/py/testcase.py`);
  if (res.status == 200) {
    const responseValue = await res.text();
    return responseValue;
  } else {
    const responseValue = "";
    return responseValue;
  }
};

$btnDownload.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    let totalData = "";
    const res = fetchQuestionInfo();
    res.then((response) => {
      const questionInfo = JSON.parse(response.split("=")[1].slice(1));
      for (let i = 1; i < 21; i++) {
        let localStorageValue = window.localStorage.getItem(i);
        let passCheck = window.localStorage.getItem(`${i}_check`);
        if (!!localStorageValue) {
          localStorageValue = "```javascript\n" + localStorageValue + "\n```";
          if (!!passCheck) {
            localStorageValue = `# Question no.${i}\n\n* Level : ${questionInfo[i]["lv"]}\n* Topic : ${questionInfo[i]["kinds"]}\n* Link : https://jsalgo.co.kr/?page=${i}\n* P/F : P\n\n${localStorageValue}\n\n`;
          } else {
            localStorageValue = `# Question no.${i}\n\n* Level : ${questionInfo[i]["lv"]}\n* Topic : ${questionInfo[i]["kinds"]}\n* Link : https://jsalgo.co.kr/?page=${i}\n* P/F : F\n\n${localStorageValue}\n\n`;
          }
          totalData += localStorageValue;
        }
      }
      if (!!totalData) {
        const name = `solution_total`;
        downloadFile({
          data: totalData,
          fileName: `${name}.md`,
          fileType: "text/json",
        });
      } else {
        window.alert("There is no data to download.");
      }
    });
  });
});

$languageSelector.addEventListener("change", (e) => {
  lang = e.target.value;

  if (lang === "javascript") {
    window.location = "https://jsalgo.co.kr/";
  } else {
    return;
  }
});

window.onload = function () {
  const options = $languageSelector.querySelectorAll("option");
  lang = "python";
  options[0].selected = true;
};
