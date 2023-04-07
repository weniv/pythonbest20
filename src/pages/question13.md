- info
    - lv1
    - Heap

# Boarding the Flight
![Measuring the weight of a Licat](./13_1.webp)

## Problem Description
Licat has given the order to embark. Licat's colleagues, who gathered their strengths in each region, are heading to Lyon Town through each region. This flight has a minimum weight limit of K.

If a colleague weighs over K, they must ride alone on the flight. If their weight is K or less, they can board a flight together if their total weight is K or more, regardless of the number of people.

Licat wanted his colleagues to rest in a more spacious place and then come up. Given an array containing the weight of his colleagues, find the maximum number of flights needed for everyone to board the flight.

---

## Constraints

- The weight of colleagues is an integer between 1 and 100, inclusive. 
- K is an integer between 0 and 50, inclusive. 
- If no one can board the flight, print -1.

---

## Input and Output Examples

| Weight                                  | K | Output |
| ---------------------------------------- | ------- |
| [46, 26, 37, 32, 10] | 30 | 4 |
| [22, 45, 1, 7, 5] | 15 | 2 |
| [7, 36, 25, 12, 22] | 47 | 2 |

---

## Explanation for Input and Output

`[46, 26, 37, 32, 10]` and K = 30, 46, 37, and 32 can ride alone on a flight. Since 10 and 26 sums up to more than 30, they can ride together on a flight. If the sum of two weights is less than 30, they must ride with another colleague.