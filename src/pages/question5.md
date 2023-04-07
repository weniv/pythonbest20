- info
    - lv1
    - Matrix

# Finding a Rotten Carrot
![Binky's carrot farm](./5_1.webp)

## Problem Description
Binky showed people the appearance of their hometowns that could be changed by his power. It was no longer just a Vision, it was an Action!

The hometown has changed a lot. The town that faced industrialization had no orchards left, only tall buildings. People lost their peace and the village where they could play and rest anywhere disappeared. Without money, they could not eat what they wanted. So they became divided.

Binky starts with the field. He wants to restore peace through the most basic food recovery.

" From what I can change! From what we can change!

1. The carrot field consists of N x M cells. (N: rows, M: columns)
2. Spoiled carrots are represented by `#`.
3. There are only spoiled carrots left in the carrot field, and some cells are empty. Binky decided to give the `number of spoiled carrots` and the `number of adjacent spoiled carrots` on the empty cell for efficient placement of labor. You need to write the total number of spoiled carrots and the number of spoiled carrots located on the empty cell and adjacent to the edge.
4.Cells located on the edge have a maximum of 8 adjacent cells, which refer to cells in four directions, up, down, left, and right, and four diagonal cells.

If you say the table below is a carrot field, the cells around A2 are A1, B1, B2, B3, A3, and the number of spoiled carrots to be written in A2 is 2. Here, `#` indicates that the spoiled carrot is located.

<br />

|  | A | B | C |
| --- | --- | --- | --- |
| 1 | A1 | B1 | C1 |
| 2 | A2 | B2 | C2 |
| 3 | A3 | B3 | C3 |

<br />

|  | A | B | C |
| --- | --- | --- | --- |
| 1 | # |  | # |
| 2 |  | # |  |
| 3 |  |  |  |

<br />

If you write the number of spoiled carrots in all empty cells, the result is as follows, and the sum of the number is 10.

<br />

|  | A | B | C |
| --- | --- | --- | --- |
| 1 | # | 3 | # |
| 2 | 2 | # | 2 |
| 3 | 1 | 1 | 1 |

---

## Constraints

- 1 ≤ N, M ≤ 100
- The carrot field is given as a two-dimensional array.
- 0 indicates an empty cell, and `#` indicates a spoiled carrot.

---

## Input and Output Examples

| Input | Output |
| --- | --- |
| [[0, ‘#’], [0, 0]] | [1, 3] |
| [[0, 0, ‘#’, ‘#’], [’#’, ‘#’, 0, ‘#’], [0, ‘#’, ‘#’, 0]] | [7, 16] |
| [[’#’, 0, 0, 0, ‘#’], [0, ‘#’, ‘#’, 0, 0], [’#’, ‘#’, ‘#’, 0, ‘#’], [’#’, 0, 0, ‘#’, ‘#’]] | [11, 29] |

---

## Explanation

- A carrot field consisting of a two-dimensional array is input. After filling in the maximum number of spoiled carrots and empty values with the number of spoiled carrots located on the perimeter, the sum of all numbers is output as the result.
- For example, if `[[0, ‘#’], [0, 0]]` is input, the empty spaces where the maximum number of spoiled carrots should be entered are (0, 0), (1, 0), and (1, 1).
- Here, the number of spoiled carrots located on each perimeter is the same, with one each. The array with the numbers entered is `[[1, ‘#’], [1, 1]]`, and the total sum is 3. Therefore, the return value is `[1, 3]`.