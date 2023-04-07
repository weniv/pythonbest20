- info
    - lv1
    - Two Pointers | Sliding Window

# Sum of Two Numbers
![SoulGom visits a mine in the Arctic](./7_1.webp)

## Problem Description
SoulGom had no hometown. He was an NPC created by Pye and Sun! But by receiving a soul stone, he gained a soul, as well as great wisdom and the ability to see the world of souls.

SoulGom thought to himself, 

" What can I do to help?

Through the wisdom he gained from the soul stone, SoulGom was able to predict that he would soon need a huge amount of war funds. He headed for the Arctic. It is a place where no living creatures can survive due to extreme cold. Because his body was not that of a living creature, he could move around freely. He went deeper into the area, to the place where the ancient treasure was hidden, untouched by anyone's hand.

There were a tremendous amount of jewels hidden there, more than all the world's wealth combined. SoulGom thought that if war broke out, the value of money would plummet infinitely, hyperinflation would engulf Winnieb World, and so the value of jewels would shine even more brightly. As he looked at the jewels, SoulGom smiled faintly.

Faith, worth, role, reason for existence, innovation and revolution, cartels, and more. As he swung his pickaxe, SoulGom mulled over many pieces of knowledge that had only been stored in his head as simple words until now, and transformed them into wisdom and soul.

SoulGom made a mining cart and was able to move even more jewels. The mining cart has a weight capacity and can only carry up to two items at a time. Please find the two jewels that can be combined to match the weight of the mining cart, given the weight of each jewel.

---

## Constraints

- 2 ≤ length of list ≤ 99
- There is only one correct answer.

---

## Input and Output Examples

| Weight of Jewels List                        | Weight of Mining Cart  |  Output  |
| ---------------------------------------- | ------- |------- |
| [4, 9, 11, 2] | 6 | [0, 3] |
| [2, 2] | 4 | [0, 1] |
| [1, 5, 10, 20, 93] | 103 | [2, 4] |
| [3, 4, 5] | 9 | [1, 2] |

---

## Explanation

- There are no cases where there is no answer.
- When adding up two jewel weights from the list of weights that are numeric, it must always match the weight of the mining cart.
- The index values of the two jewels should be output as the result.