- info
    - lv1
    - Regular Expression

# Dream Design
![Binky with Real Stone](./4_1.webp)

## Problem Description
Binky who has the Real Stone, can create a fantasy world just like the reality. Through this fantasy world, Binky shows how much those who live autonomously and independently can achieve.

Although the Real Stone cannot help you achieve what you see, it can at least become a ray of hope in the desperate Winnieb World.

```py
['Binky trained 10 times A. Binky trained 20 times B even though the weather was bad. Binky trained 10 times B while it was raining. ',
'Binky thought 30 about A. Binky thought 40 about B. Binky spent a surprisingly long time, 70, thinking about A. Binky also thought 10 about C.']
```

Extract all the numbers from the first string. The number of times A was trained is 10 and the number of times B was trained is 30. Extract numbers from the second string. The number of times A was thought about is 100, the number of times B was thought about is 40, and the number of times C was thought about is 10. Calculate this value as `training value X consideration value`. C disappears because it was not trained.

Original future: When multiplying the number of times A was trained by the number of times A was thought about, the result is 1000. When multiplying the number of times B was trained by the number of times B was thought about, the result is 1200. Adding these values together gives the original future.

Changed future: Add 100 to the value that was trained the most. Add 100 to the value that was thought about the most. Therefore, the number of times B was trained becomes 130 and the number of times A was thought about becomes 200. Finally, since the number of times A was trained is 10 and the number of times A was thought about is 200, the result is 2000, and the number of times B was trained is 130, and the number of times B was thought about is multiplied by 40 to become 5200.

The result is as follows.

```py

'The final dream design is 2000 for the original future and 5200 for the changed future. We will create Vision according to this value.'

```

---

## Constraints

- The length of the input array is 2. Strings are entered in the form of [training value, consideration value].
- Numeric strings are always sentence-separated by a period. If a divided sentence is called a split sentence, there is always a unique number and a unique alphabet in the split sentence.
- If there is no matching consideration value or training value, "The future is not visible." should be output.
- 1 ≤ the number of split sentences ≤ 10
- 1 ≤ numeric value ≤ 1000
- A ≤ alphabet ≤ z

---

## Input and Output Examples

| Input                                  | Output  |
| ---------------------------------------- | ------- |
| ['Trained A for 100. 201 for B. Trained B 20 more than 120.', 'Contemplated A for 30. Contemplated B for 40. Puzzled over A for 70. C 10. D 10. A 10. z 10.'] | The final design for the dream is original future 23840, changed future 37840. We create Vision according to these numbers. |

---

## Explanation

- The training values are 100 for A and 321 for B. Since B was trained more, adding 100 to B makes it 421.
- The contemplation values are 110 for A and 40 for B. The rest are ignored as they do not match the training values. Since A contemplated more, adding 100 to A makes it 210.
- Computing (100 * 110) + (321 * 40) results in the original future value of 23840.
- Computing (100 * 210) + (421 * 40) results in the changed future value of 37840.
- Based on these results, create the text "The final design of the dream is an original future of 23840 and a changed future of 37840. Create the Vision based on these values." Do not include a comma.