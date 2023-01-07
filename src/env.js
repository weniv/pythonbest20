let PAGE_NAME = 1;
const BASE_URL = '';

if (typeof (history.pushState) != "undefined") {
    if (window.location.search != "") {
        PAGE_NAME = parseInt(window.location.search.split('=')[1])
    }
}

document.getElementById(PAGE_NAME).classList.add('active')

for (let i = 1; i <= 30; i++) {
    if (!!window.localStorage.getItem(`${i}_check`)) {
        document.getElementById(i).classList.add('success')
    }
}