- info
  - lv1
  - Combination

# Ali's Poke Store
![Ali's Poke Store](./10_1.webp)

## Problem Description
Ali, who used the Space Stone to save his tribe from slavery, has opened a Poke store that he has always liked. Kind Ali guides all possible combinations of Poke that can be made when customers tell the number of toppings they want and the toppings they want to include.

The toppings that can be put in Poke are as follows:

```text
Salmon, Tuna, Chicken, Bacon, Mushroom
```

Customers can choose up to 5 toppings, including toppings that must be included. Ali must guide the combination of Poke that matches the order.

However, if nothing is entered, it must be informed that `"Basic Poke will be provided."`

---

## Constraints

- 0 ≤ Number of toppings ≤ 5
- The toppings must be selected among `salmon, tuna, chicken, bacon, mushroom`.

---

## Input and Output Examples

| Input              | Output                                                                                                                                                                                                                                                                       |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| []                | “Basic Poke will be provided.”                                                                                                                                                                                                                                                  |
| [2, “salmon”]       | [["salmon", "tuna"], ["salmon", "chicken"], ["salmon", "bacon"], ["salmon", "mushroom"]]                                                                                                                                                                                             |
| [3, “salmon, tuna”] | [["salmon", "tuna", "chicken"], ["salmon", "tuna", "bacon"], ["salmon", "tuna", "mushroom"]]                                                                                                                                                                                    |
| [3, “”]           | [["salmon", "tuna", "chicken"], ["salmon", "tuna", "bacon"], ["salmon", "tuna", "mushroom"], ["salmon", "chicken", "bacon"], ["salmon", "chicken", "mushroom"], ["salmon", "bacon", "mushroom"], ["tuna", "chicken", "bacon"], ["tuna", "chicken", "mushroom"], ["chicken", "bacon", "mushroom"]] |

---

## Explanation

- Enter the number of toppings and toppings.
- The number of toppings can be entered from 0 to 5. In addition, toppings must be selected among sSalmon, tuna, chicken, bacon, mushroom and entered as a string.
- If you do not choose toppings, enter an empty string.
- The combination of toppings is output as an array.

<br/>

### 1. When nothing is entered

If nothing is entered, that is, if an empty array ([]) is entered, the number of toppings is considered to be 0 and there are no desired toppings. Therefore, `"Default Poke will be provided."` is output.
<br/>

### 2. When both the number of toppings and toppings are entered

For example, if the number of toppings is 2 and "salmon" is entered as a must-have topping,

Since you must choose 2 toppings that include "salmon" out of 5 toppings, all possible combinations that match are :
```text
[["salmon", "tuna"], ["salmon", "chicken"], ["salmon", "bacon"], ["salmon", "mushroom"]]
```

<br/>

### 3. When no topping is entered

For example, if the number of toppings is entered as 3 but no topping is actually entered, then you must choose 3 toppings from the 5 available toppings without including any toppings that are required. The combinations are as follows.


```text
[["salmon", "tuna", "chicken"], ["salmon", "tuna", "bacon"], ["salmon", "tuna", "mushroom"],
["salmon", "chicken", "bacon"], ["salmon", "chicken", "mushroom"], ["salmon", "bacon", "mushroom"],
["tuna", "chicken", "bacon"], ["tuna", "chicken", "mushroom"], ["chicken", "bacon", "mushroom"]]
```
