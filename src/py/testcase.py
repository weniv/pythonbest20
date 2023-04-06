# PAGE_NAME으로 바로 호출 가능하도록 0번째 값을 비워줌
testcase_and_result = [{
    "que_number": 0,
    "lv" : "",
    "kinds": "",
    "testcase": "",
    "result": ""
}, {
    "que_number": 1,
    "lv" : 0,
    "kinds": "요구사항 구현",
    "testcase": [["  + + - + -+-", "  ++--+-+  ", "++ -+ -+-", "+++- +-+"], ["++-- -++", "++-- --+", "+++- +--"], ["++-++--", "++-+--+", "++-++++", "++-+++-"]],
    "result": ["jeju", "cat", "lion"]
}, {
    "que_number": 2,
    "lv" : 1,
    "kinds": "정규표현식",
    "testcase": ["adr10bb1d9ia10e33b7u88k3j1a3v11v9", "r1rr2rrr3rrrrr4rrrrrre5", "12345r12345e90v90r90"],
    "result": ["2월 3일", "1월 5일", "2월 8일"]
}, {
    "que_number": 3,
    "lv" : 1,
    "kinds": "정렬",
    "testcase": [
        [["A", 25, 24, 11, 12], ["B", 13, 22, 16, 14], ["C", 12, 22, 16, 14], ["D", 13, 22, 16, 14], ["E", 12, 25, 16, 19], [
            "F", 23, 15, 16, 14], ["G", 13, 14, 3, 5], ["H", 25, 22, 11, 14], ["I", 13, 12, 14, 23], ["J", 13, 22, 15, 14]],
        [["A", 11, 23, 17, 15], ["B", 15, 22, 17, 22], ["C", 13, 22, 16, 14],
            ["D", 18, 22, 16, 25], ["E", 8, 13, 23, 21]],
        [["A", 25, 25, 25, 25], ["B", 25, 25, 25, 25], [
            "C", 25, 25, 25, 25], ["J", 13, 22, 16, 14]]
    ],
    "result": [["H", "E", "A"], ["D"], []]
}, {
    "que_number": 4,
    "lv" : 1,
    "kinds": "정규표현식",
    "testcase": [["10 - A. 20 - B. 30 - A.", "1 - A. 1 - A. 1 - A. 1 - A. 2 - B. 1 - A. 1 - B"], ["10 a. 10 a. 10 a. 20 b. 30 c.", "c -- 100, c -- 100, c -- 100"], ["100만큼 a를 훈련. 200만큼 b를 훈련. 300만큼 c를 훈련. ", "100만큼 d를 훈련, 200만큼 e를 훈련"]],
    "result": ["최종 꿈의 설계는 원래 미래 260, 바뀐 미래 14760입니다. 이 수치대로 Vision을 만듭니다.", "최종 꿈의 설계는 원래 미래 9000, 바뀐 미래 52000입니다. 이 수치대로 Vision을 만듭니다.", "미래가 보이지 않습니다."]
}, {
    "que_number": 5,
    "lv" : 1,
    "kinds": "행렬",
    "testcase": [[10, 20], [30, 40], [50, 60]],
    "result": [30, 70, 110]
}, {
    "que_number": 6,
    "lv" : 1,
    "kinds": "스택, 큐",
    "testcase": [
        [1, 2, 3, 4, 1, 1, 2, 3, 4],
        [1, 1, 1, 2, 3, 4, 2, 3, 4, 1],
        [1, 2, 3, 4, 2, 3, 4, 1]
    ],
    "result": [1, 2, 0]
}, {
    "que_number": 7,
    "lv" : 1,
    "kinds": "투포인터, 슬라이딩 윈도우",
    "testcase": [
        [[4, 9, 11, 2], 6],
        [[2, 2], 4],
        [[1, 5, 10, 20, 93], 103]
    ],
    "result": [
        [0, 3],
        [0, 1],
        [2, 4]
    ]
}, {
    "que_number": 8,
    "lv" : 0,
    "kinds": "수학",
    "testcase": [100, 36000, 66600],
    "result": [0, 12, 24]
}, {
    "que_number": 9,
    "lv" : 1,
    "kinds": "투포인터, 슬라이딩 윈도우",
    "testcase": [[58000, 58700, 55300, 54200, 53600, 52700, 57700, 61100], [80000, 58000, 52700, 57700, 61100], [100, 2000, 30000, 400000]],
    "result": [6000, 27300, 0]
}, {
    "que_number": 10,
    "lv" : 1,
    "kinds": "조합",
    "testcase": [[0, ""], [2, "연어"], [3, ""]],
    "result": ["기본 포케가 제공됩니다.", [["연어", "참치"], ["연어", "닭가슴살"], ["연어", "베이컨"], ["연어", "버섯"]],
               [["연어", "참치", "닭가슴살"], ["연어", "참치", "베이컨"], ["연어", "참치", "버섯"], ["연어", "닭가슴살", "베이컨"], [
                   "연어", "닭가슴살", "버섯"], ["연어", "베이컨", "버섯"], ["참치", "닭가슴살", "베이컨"], ["참치", "닭가슴살", "버섯"], ["닭고기", "베이컨", "버섯"]]
               ]
}, {
    "que_number": 11,
    "lv" : 3,
    "kinds": "Tree, LinkedList, Trie",
    "testcase": [
        ["sky", "ground", "sea"],
        ["one-two", "two-three", "three-four", "one-five", "six-seven"],
        ["jeju-coding-basecamp", "coding-camp"]
    ],
    "result": [
        "sky\n\nground\n\nsea\n\n",
        "six\n  └ seven\n\none\n  ├ five\n  └ two\n      └ three\n          └ four",
        "jeju\n  └ coding\n      ├ camp\n      └ basecamp"
    ]
}, {
    "que_number": 12,
    "lv" : 3,
    "kinds": "Permutations, Brute-force",
    "testcase": [[10, 20], [30, 40], [50, 60]],
    "result": [30, 70, 110]
}, {
    "que_number": 13,
    "lv" : 1,
    "kinds": "Heap",
    "testcase": [[[46, 26, 37, 32, 10], 30], [[22, 45, 1, 7, 5], 15], [[7, 36, 25, 12, 22], 47]],
    "result": [4, 2, 2]
}, {
    "que_number": 14,
    "lv" : 1,
    "kinds": "DFS/BFS",
    "testcase": [[[1, 3, "#"], [0, "#", 2], [0, 1, 1]], [[0, "#", 1, 0], [2, 1, 1, 2], ["#", 3, 0, 1], [1, "#", "#", 3], [0, 2, "#", 1]], [[1, "#", 1], [2, 1, "#"], ["#", "#", 0], [1, "#", 1]]],
    "result": [8, 15, -1]
}, {
    "que_number": 15,
    "lv" : 2,
    "kinds": "matrix",
    "testcase": [[10, 20], [30, 40], [50, 60]],
    "result": [30, 70, 110]
}, {
    "que_number": 16,
    "lv" : 1,
    "kinds": "Implementation",
    "testcase": [[10, 20], [30, 40], [50, 60]],
    "result": [30, 70, 110]
}, {
    "que_number": 17,
    "lv" : 1,
    "kinds": "binary tree",
    "testcase": [
        [[2, 4, 1, 7, 9, 8, 12],[2, 4, 8, 3, 6]],
        [[3, 6, 9, 1, 8, 7], [3, 8]],
        [[102, 21, 38, 52, 219, 63, 1, 9, 35], [36, 9, 95, 32, 7, 52, 102]]
    ],
    "result": [[3, 6], [], [7, 32, 36, 95]]
}, {
    "que_number": 18,
    "lv" : 1,
    "kinds": "Implementation",
    "testcase": [
        [["Korean short hair", "Korean short hair", "Maine Coon", "Bengal", "Maine Coon", "British short hair", "Norwegian Forest" ], [30, 15, 13, 4, 45, 9, 21]], 
        [["Sphynx", "British short hair", "Sphynx", "Sphynx", "Bengal", "Maine Coon"], [3, 16, 1, 9, 25, 5]], 
        [["Maine Coon", "Korean short hair", "British short hair", "Norwegian Forest", "Norwegian Forest", "Korean short hair", "Korean short hair"], [8, 32, 15, 17, 12, 13, 31]]
    ],
    "result": [["Maine Coon", "Korean short hair",  "Norwegian Forest", "British short hair", "Bengal"], ["Bengal", "British short hair", "Sphynx", "Maine Coon"], ["Korean short hair", "Norwegian Forest", "British short hair", "Maine Coon"]]
}, {
    "que_number": 19,
    "lv" : 1,
    "kinds": "Greedy",
    "testcase": [[[45, 5, 3, 15],100], [[6, 2, 4, 8, 32], 50], [[7, 2, 14, 28], 74]],
    "result": [4, 4, 5]
}, {
    "que_number": 20,
    "lv" : 2,
    "kinds": "sorting",
    "testcase": [
        [[["strawberry", "cream", "flour", "butter"], [15, 8, 4, 20], [4, 3, 2, 1]], 40], 
		[[["milk", "egg", "butter", "chocolate cinnamon", "pineapple", "cream"], [10, 5, 5, 18, 6, 3], [1, 3, 2, 4, 5, 6]], 10], 
		[[["strawberry", "milk", "butter", "chocolate cinnamon", "grapefruit", "cream"], [120, 150, 130, 118, 126, 130], [6, 5, 4, 3, 2, 1]], 100]
    ],
    "result": [
        ["butter", "flour", "cream"],
		["milk"],
		[]
    ]
}]
