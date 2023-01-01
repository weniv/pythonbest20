// 옵션 값은 https://codemirror.net/5/doc/manual.html 참고

let editor = CodeMirror.fromTextArea(
  document.getElementById("codeeditor"),
  {
    mode: "python",
    // indentWithTabs: true, // tab으로 인식하게 할 것인지 => false
    smartIndent: true,
    lineNumbers: true,
    matchBrackets: true,
    autofocus: true,
    // extraKeys: { Tab: "autocomplete" }, // hint cdn을 추가하면 자동완성 됨
    indentUnit: 4,
  }
);

// let testCase1 = document.querySelector('#testcase1')
// let testCase2 = document.querySelector('#testcase2')
// let testCase3 = document.querySelector('#testcase3')


editor.setValue(`def solution():
    return None`);

// testCase1.value = `(10, 20)`;
// testCase2.value = `(30, 40)`;
// testCase3.value = `(50, 60)`;

const $btnRun = document.querySelector("#btn-run");

$btnRun.addEventListener("click", (e) => {
  e.preventDefault();
  let text = editor.getValue();
  codeEditor = document.querySelector('#codeeditor')
  codeEditor.textContent = text
});
