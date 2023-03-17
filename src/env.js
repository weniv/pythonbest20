let PAGE_NAME = 1;
const BASE_URL = '';

if (typeof (history.pushState) != "undefined") {
    if (window.location.search != "") {
        if (window.location.search.includes('page=')) {
            PAGE_NAME = parseInt(window.location.search.split('=')[1].replace('#', ''))
        }
    }
}

document.getElementById('q' + PAGE_NAME).classList.add('active')

for (let i = 1; i <= 30; i++) {
    if (!!window.localStorage.getItem(`${i}_check`)) {
        document.getElementById('q' + i).classList.add('success')
    }
}