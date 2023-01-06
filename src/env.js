let PAGE_NAME = 1;
const BASE_URL = '';

if (typeof (history.pushState) != "undefined") {
    if (window.location.search != "") {
        PAGE_NAME = parseInt(window.location.search.split('=')[1])
    }
}