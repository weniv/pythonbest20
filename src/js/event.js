const $btnQue = document.querySelectorAll('.btn-que');
const $btnRun = document.querySelector("#btn-run");
const $resultInfo = document.querySelector("#result_info");
const $btnDownload = document.querySelector(".btn-download");


// 문제 로딩
$btnQue.forEach(element => {
    element.addEventListener('click', function (e) {
        document.getElementById('q' + PAGE_NAME).classList.remove('active')
        PAGE_NAME = e.target.id.slice(1);
        document.getElementById('q' + PAGE_NAME).classList.add('active')
        history.pushState(null, PAGE_NAME, `?page=${PAGE_NAME}`);
        // 문제 이동 시 에러 메시지 초기화
        document.getElementById('result_desc').textContent = '';
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
loadCode()

$btnRun.addEventListener("click", (e) => {
    e.preventDefault();
    let text = editor.getValue();
    codeEditor = document.querySelector('#codeeditor');
    window.localStorage.setItem(PAGE_NAME, text);
    codeEditor.textContent = text
    $resultInfo.classList.add("result-info-none");
});

const downloadFile = async ({ data, fileName, fileType }) => {
    const blob = new Blob([data], { type: fileType });
    const link = document.createElement('a');

    link.download = fileName;
    link.href = await URL.createObjectURL(blob);

    const clickEvt = new MouseEvent('click', {
        view: window,
        bubbles: true,
        cancelable: true,
    });
    link.dispatchEvent(clickEvt);
    link.remove();
};

$btnDownload.addEventListener("click", (e) => {
    let localStorageValue = window.localStorage.getItem(PAGE_NAME);
    localStorageValue = '```python\n' + localStorageValue + '\n```'
    localStorageValue = `# 문제 ${PAGE_NAME}번\n\n* 문제 링크 : https://pyalgo.co.kr/?page=${PAGE_NAME}\n\n${localStorageValue}`
    if (!!localStorageValue) {
        const name = `solution_${PAGE_NAME}`;
        downloadFile({
            data: localStorageValue,
            fileName: `${name}.md`,
            fileType: 'text/json',
        });
    } else {
        window.alert('다운로드 할 데이터가 없습니다.')
    }
});
