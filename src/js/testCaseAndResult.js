// PAGE_NAME으로 바로 호출 가능하도록 0번째 값을 비워줌
testCaseAndResult = [{
    que_number: 0,
    testcase: null,
    result: null,
}, {
    que_number: 1,
    testcase: [[10, 20], [30, 40], [50, 60]],
    result: [30, 70, 110],
}]

function testcaseSetting() {
    testcase = testCaseAndResult[PAGE_NAME]
    document.querySelector('#testcase1').value = testcase['testcase'][0]
    document.querySelector('#testcase2').value = testcase['testcase'][1]
    document.querySelector('#testcase3').value = testcase['testcase'][2]
    document.querySelector('#testcaseResult').value = testcase['result']
}
testcaseSetting()