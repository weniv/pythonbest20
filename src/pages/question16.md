- info
    - lv1
    - Implementation

# 2nd Agent Selection
![Licat's fish corporation](./16_1.webp)

## Problem Description
[Licat's fish] had an unexpected situation where the leader, No.1, had to leave for a personal mission. [Licat's fish] was left without anyone in charge, and business operations were suspended. To select a new leader, No.1 set the following problem. The one who solves this problem will become the new leader of [Licat's fish].

Here is the problem: Your task is to create a function called "solution(arr)" to take an array "arr" consisting of ASCII codes as input.

The function should convert the input array to a list of Roman numerals using the following table.

| Roman Numera | Value |
| --- | --- |
| I | 1 |
| V | 5 |
| X | 10 |
| L | 50 |
| C | 100 |
| D | 500 |
| M | 1000 |

Roman numerals can be written in subtractive notation, meaning that a smaller numeral can be placed before a larger numeral to represent the difference, e.g. IV represents 4 (5-1). Your function should compute all possible combinations of these Roman numerals and return the maximum value M.

---

## Constraints

- The input array "arr" will not contain duplicated elements. 
- 1 ≤ len(arr) ≤ 5 
- 1 ≤ M ≤ 1660

---

## Input and Output Examples

| Input List of ASCII Codes | Output |
| --- | --- |
| [73, 88, 86] | 16 |
| [67, 86, 77, 76] | 1155 |
| [68, 86, 76, 73, 88] | 566 |

---

## Explanation for Input and Output

- The input array "arr" contains ASCII codes. 
- Your function should compute all possible combinations of Roman numerals that can be made from these ASCII codes, and return the maximum value M that can be formed. 
- The Roman numerals for [73, 88, 86] are [I, X, V]. 
- X is the largest numeral and it must come first (at position arr[0]). Therefore, there are two possible combinations: [X, I, V] and [X, V, I]. 
- The first combination gives 14 and the second 16 so the maximum value M is 16.
