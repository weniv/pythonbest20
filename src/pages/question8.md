- info
    - lv0
    - Math

# Weapon Production
![Gary buying weapons in the forge](./8_1.webp)

## Problem Description
Gary is preparing to buy weapons by exchanging the jewels of the soul bears he received in the Arctic for money. The blacksmith Gary is requesting offers swords for 3000 won per piece, and if he sharpens the blade, an additional 300 won is added. As a regular customer, one unsheathed sword is provided for every 10 swords, and one sharpened sword is provided for every 100 swords.

If the budget for buying weapons is given, how many sharpened swords can Gary buy?

---

## Constraints

- The budget for buying weapons is always a positive integer and given in multiples of 100.
- 100 ≤ Budget  ≤ 1000000

---

## Input and Output Examples

| Input                                  | Output  |
| ---------------------------------------- | ------- |
| 100 | 0 |
| 36000 | 12 |
| 66600 | 24 |

---

## Explanation

- If the budget is 100 won, Gary can buy 0 swords.
- If the budget is 36000 won, Gary can buy 12 sharpened swords with 11 unsheathed swords for 3300 won each plus one sharpened sword as a service and an additional 300 won.
- If the budget is 66600 won, Gary can buy 24 sharpened swords with 22 unsheathed swords for 3300 won each plus two sharpened swords as a service and an additional 600 won.