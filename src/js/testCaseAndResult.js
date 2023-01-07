// PAGE_NAME으로 바로 호출 가능하도록 0번째 값을 비워줌
testCaseAndResult = [{
    que_number: 0,
    testcase: null,
    result: null,
}, {
    que_number: 1,
    testcase: [[10, 20], [30, 40], [50, 60]],
    result: [30, 70, 110],
}, {
    que_number: 2,
    testcase: [
        [['A', 25, 24, 11, 12], ['B', 13, 22, 16, 14], ['C', 12, 22, 16, 14], ['D', 13, 22, 16, 14], ['E', 9, 25, 2, 19], ['F', 23, 15, 16, 14], ['G', 13, 14, 11, 14], ['H', 25, 22, 23, 14], ['I', 13, 12, 14, 23], ['J', 13, 22, 15, 14]],
        [['A', 11, 23, 17, 15], ['B', 15, 22, 17, 22], ['C', 13, 22, 16, 14], ['D', 18, 22, 16, 25], ['E', 8, 13, 23, 21], ['F', 17, 23, 16, 14], ['G', 9, 22, 16, 14], ['H', 13, 22, 16, 3], ['I', 13, 21, 11, 14], ['J', 10, 12, 16, 25]],
        [['A', 25, 25, 25, 25], ['B', 25, 25, 25, 25], ['C', 25, 25, 25, 25], ['D', 25, 25, 25, 25], ['E', 25, 25, 25, 25], ['F', 25, 25, 25, 25], ['G', 25, 25, 25, 25], ['H', 25, 25, 25, 25], ['I', 25, 25, 25, 25], ['J', 13, 22, 16, 14]],
    ],
    result: [30, 70, 110],
}, {
    que_number: 3,
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