- info
    - lv1
    - Greedy

# (Licat's Dream-2) Defeat the Lich!
![Licat battling the Lich](./19_1.webp)

## Problem Description
While catching fish near Skeleton Island, a cat encounters a fierce storm.

" The storm is too strong to go home, meow...

The cat anchors the ship on Skeleton Island beach and begins to explore the island in search of a place to stay for the night. There were various statues scattered around Skeleton Island. Then, a muffled voice was heard from somewhere.

" Who are you? The one who came to a place where a visitor cannot reach...? Interesting, coming from a dream.

A skull with a cloak floated up from the water. The cat remembered a legend. Long ago, a cursed Lich was trapped on Skeleton Island and turned any cat that trespassed on his territory into stone. 

" I'll give you a greed problem since you've come to a place where visitors cannot enter. If you solve this, it will be a curse and a gift.
 
The Lich uttered an unknown spell.

" I put a spell on your fish bag, so you can endlessly pull out fish from it. I'll give you an exact weight K. Tell me the minimum number of fish that can meet the weight K.

Given an array containing the weights of the fish, find the minimum number of fish that can be combined to create the weight K.

---

## Constraints

- The numbers in the array are between 1 and 100. 
- 1 < K < 1000 
- Fish can be duplicated.

---

## Input and Output Examples

| Weight                                  | K | Output  |
| ---------------------------------------- | ------- | ------- |
| [45, 5, 3, 15] | 100 | 4 |
| [6, 2, 4, 8, 32] | 50 | 4 |
| [7, 2, 14, 28] | 74 | 5 |

---

## Explanation for Input and Output

Given an array of fish weights, if we have [45, 5, 3, 15] and K is 100, the minimum number of fish required to meet the weight is 4 with 45, 45, 5, and 5.
