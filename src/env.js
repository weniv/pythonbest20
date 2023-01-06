let PAGE_NAME = 1;
const BASE_URL = '';


if (typeof (history.pushState) != "undefined") {
    //console.dir(window.location)
    if (window.location.search != "") {
        PAGE_NAME = parseInt(window.location.search.split('=')[1])
    }
} else {
    //브라우저가 지원하지 않는 경우 처리
    PAGE_NAME = 1;
}