- info
    - lv2
    - sorting

# Binky's Carrot Cake
![Binky with Carrot Cake](./20_1.webp)

## Problem Description
Binky has selected some carrots that are no longer fresh and wants to create a delicious carrot cake for his hard-working colleagues.

1. An array is given that contains the name, price, and priority of each ingredient. 
2. Binky's budget is also given. Within budget, the ingredients must be purchased in order of priority.

Please write a function `solution` which prints the ingredients that can be purchased within budget.

---

## Constraints

- 1 ≤ number of ingredients ≤ 10 
- 1 ≤ price of each ingredient ≤ 10000 
- 1 ≤ priority ≤ 10 
- Priorities will not be duplicated. 
- Ingredients will not be duplicated.

---

## Input and Output Examples

| Information for Ingredients | Budget | Output  |
|-------------------- |---- | ----- |
| [['strawberry', 'cream', 'flour', 'butter'], [15, 8, 4, 20], [4, 3, 2, 1]] | 40 | ['butter', 'flour', 'cream'] |
| [['milk', 'egg', 'butter', 'chocolate cinnamon', 'pineapple', 'cream'], [10, 5, 5, 18, 6, 3], [1, 3, 2, 4, 5, 6]] | 10 | ['milk'] |
| [['strawberry', 'milk', 'butter', 'chocolate cinnamon', 'grapefruit', 'cream'], [120, 150, 130, 118, 126, 130], [6, 5, 4, 3, 2, 1]] | 100 | [] |

---

## Explanation for Input and Output

The function takes two inputs: 1. A 2D array that contains the name, price, and priority of ingredients. 2. The budget that Binky has to spend.

The function should return an array of ingredients that can be purchased in order of priority.

For example, let's say the following inputs are given: [['milk', 'egg', 'butter', 'chocolate cinnamon', 'pineapple', 'cream'], [10, 5, 5, 18, 6, 3], [1, 3, 2, 4, 5, 6]] and 10. If we arrange the ingredients in order of priority, we get ['milk', 'butter', 'egg', 'chocolate cinnamon', 'pineapple', 'cream']. Since only milk, which costs 10, can be purchased within the given budget of 10, the function should print ['milk'].