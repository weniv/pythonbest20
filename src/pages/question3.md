- info
    - lv1
    - Sorting

# Selecting Personnel for Expedition
![Javadog giving a speech](./3_1.webp)

## Problem Description
Javadog has returned to the village. The village looks strange with only children and teenagers remaining, as all the capable young men have been called away to various SI tasks and cannot be spared. Javadog brings in the special engineers who have never had a decent meal for decades, being dragged around by various hazardous SI tasks, to prepare a lavish dinner for them. As the number of dinners increases, the hearts of the special engineers open up.

Javadog's stone is the Mind Stone! Through the Mind Stone, Javadog showed the aging of those who had undergone a revolution 30 to 50 years ago, and the future of their next generation.

" Not for our future, but the future of our children!

Javadog selected talented individuals. Already highly trained special engineers! However, to minimize sacrifices, they decided to take an exam. Only the top 30% of those who took the exam would be selected for the expedition.


" If no one comes out, no one will go out!

```py
army = [['A', 25, 24, 11, 12], ['B', 13, 22, 16, 14]]
```

Each input value is given in the form of `name, health, mentality, skill, defense`. If only two people apply as shown above, 30% cannot be selected, so no one will go out. If four people apply and all have different scores, only one person can go out. Complete the solution function to return the name of the technician corresponding to the 30% selection criteria.



---

## Constraints

- 0 ≤ health, mentality, skill, defense ≤ 25
- 1 ≤ number of technicians ≤ 10
- The technician array is given as a two-dimensional array.
- Technician names are not duplicated.
- In case of a tie, only one person is considered.

---

## Input and Output Examples

|          Input         |  Output |
| ------------------------ | ------- |
| [['A', 25, 24, 11, 12], ['B', 13, 22, 16, 14]] | [] |
| [['A', 25, 25, 25, 25], ['B', 10, 12, 13, 11], ['C', 24, 22, 23, 21], ['D', 13, 22, 16, 14]] | ['A'] |

---

## Explanation

- An array containing the names, health, mentality, skill, and defense of the technicians is given as input.
- Only the top 30% of applicants can participate in the expedition when the sum of health, mentality, skill, and defense is calculated.
- The names of the technicians are sorted in descending order of score.
- If there are technicians with the same score, they are sorted in reverse alphabetical order.