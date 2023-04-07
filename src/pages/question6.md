- info
    - lv1
    - Stack | Queue

# Sandwich Packaging
![Catfish Inc. with 10,000 employees](./6_1.webp)

## Problem Description
Licat has come down to his hometown to prepare for a revolution. Catfish, which he established before leaving to get the original stone, has grown from 20 employees to 10,000. Licat traveled around the city without telling anyone about his return. Despite the large economic growth centered around Catfish Inc., there were still shady areas. Some people could not go to the hospital, some were begging, and more and more people were forced into forced labor in Lion Town, even with many cats, they could not beat the lions. They were persecuted, looted, and threatened more as they achieved significant economic growth.

Licat settles in the village where people who returned from Lion Town gathered. They had become useless in mind and spirit, and no one cared about them, so they comforted each other and built a village.

Licat set up a free sandwich cafeteria here and took care of the packaging work without asking anyone. Licat got up early in the morning and prepared the ingredients. However, since there was a limit to what could be obtained from the village, he prepared the ingredients from the surrounding villages. Once the ingredients were ready, he packaged one sandwich at a time in the order of cooking, such as `bread → egg → bacon → vegetables → bread`. His stone shone.

1. When the ingredients come in the order of [bread, bread, egg, bacon, vegetable, bread, egg, bacon, vegetable, bread],
2. You can package one sandwich from the second to sixth ingredients.
3. Now, you can package one sandwich with the first ingredient and the seventh to tenth ingredients.
4. Therefore, a total of two sandwiches can be made. Sandwiches cannot be packaged if the order is reversed.

Given the information of the ingredients that Licat receives in a list, output the number of sandwiches that can be packaged.

---

## Constraints

- 1 ≤ the length of the ingredients ≤ 1,000,000
- The ingredients are represented as follows:
  - 1: bread
  - 2: egg
  - 3: vegetable
  - 4: bacon
- There is only one correct answer.

---

## Input and Output Examples

| Input                                | Output  |
| ---------------------------------------- | ------- |
| [1, 2, 3, 4, 1, 1, 2, 3, 4] | 1 |
| [1, 1, 1, 2, 3, 4, 2, 3, 4, 1] | 2 |
| [1, 2, 3, 4, 2, 3, 4, 1] | 0 |
| [1, 2, 3, 4, 1, 1, 2, 3, 4] | 2 |

---

## Explanation

- A list of numbers is inputted.
- The order of the sandwich must always follow 1, 2, 3, 4, 1.
- The ingredients cannot be taken out in the middle by changing the order. Only completed sandwiches can be removed from the input list.
- The number of sandwiches that can be made from the list is outputted as the result.
