const $btnQue = document.querySelectorAll('.btn-que');
const $btnRun = document.querySelector("#btn-run");

// 문제 로딩
$btnQue.forEach(element => {
    element.addEventListener('click', function (e) {
        PAGE_NAME = e.target.value;
        history.pushState(null, PAGE_NAME, `?page=${PAGE_NAME}`);
        render();
        loadCode();
    });
});

// 로컬 스토리지에서 code 읽어오기
function loadCode() {
    const localStorageValue = window.localStorage.getItem(PAGE_NAME);
    if (!!localStorageValue) {
        editor.setValue(localStorageValue);
    } else {
        editor.setValue(`def solution():
    return None`);
    }
}
loadCode()

$btnRun.addEventListener("click", (e) => {
    e.preventDefault();
    let text = editor.getValue();
    codeEditor = document.querySelector('#codeeditor');
    window.localStorage.setItem(PAGE_NAME, text);
    codeEditor.textContent = text
});
