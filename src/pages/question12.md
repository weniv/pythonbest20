- info
    - lv3
    - Permutations | Brute-force

# Eat More Spicy Hot Pot
![Soul Bear's favorite food: Spicy Hot Pot](./12_1.webp)

## Problem Description
NPC Soul Bear gained a soul and can now eat human food. He wants to visit his favorite Spicy Hot Pot restaurant. However, he doesn't know how much he should eat, and he may not be able to visit the mine frequently, so he wants to eat as much ingredient as possible.

The ingredients for Spicy Hot Pot are given below, and the number of ingredients that can be added per each ingredient is given in an array.

```text
[Tofu, Mushrooms, Vermicelli, Bean Sprouts, Chinese Chives, Cabbage, Potatoes, Meat]
```

Adjacent ingredients cannot be put together because they don't complement each other. Print out the maximum amount of ingredients that Soul Bear can take.

---

## Constraints

 - The array of ingredients is always fixed at 8. 
 - The maximum number of ingredients that can be taken for each type of ingredient is displayed as a number in an array. For example, `[1, 2, 3, 4, 10, 20, 30, 40]` means that 1 block of tofu, 2 mushrooms, 3 servings of vermicelli, 4 servings of bean sprouts, 10 Chinese chives, 20 cabbage leaves, 30 potato slices, and 40 pieces of meat can be taken. 
 - The number of ingredients that can be put into the Spicy Hot Pot is an integer between 1 and 1,000,000.

---

## Input and Output Examples

| Input | Output |
| --- | --- |
| [2, 4, 1, 3, 5, 8, 8, 6] | 21 |
| [10, 2, 5, 2, 7, 9, 3, 5] | 29 |
| [12, 9, 7, 8, 6, 2, 2, 6] | 31 |

---

## Explanation for Input and Output

An array of the number of Spicy Hot Pot ingredients, `[2, 4, 1, 3, 5, 8, 8, 6]`, is given as input.

If you take 2 blocks of Tofu, it cannot be followed by an adjacent 4, which is another Tofu. Therefore, skip one and add 1 to the next number. This process should be repeated and the maximum value obtained should be compared to get the maximum sum of the ingredients.

The maximum value that can be obtained when starting with 2 is 19 (2+3+8+6). However, if you start with 4, you can get 21 (4+3+8+6). Therefore, the answer is 21.