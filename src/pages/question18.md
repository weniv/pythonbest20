- info
    - lv1
    - Implementation

# Organize Cat Breeds meow
![Meeting of the Cat Tribe](./18_1.webp)

## Problem Description
Organize the Types of Feline Species As the revolution approaches, Laikat is trying to organize types of feline species to determine the roles of fellow creatures. He wants to collect data of cat breeds by region and sort them in descending order by the most number of types. 

The feline species are as follows.

```text
Korean short hair, British short hair, Maine Coon, Sphynx, Bengal, Norwegian Forest
```

Given a string array representing cat breeds collected by region and an integer array representing the numbers, print them in order from the most number of types in descending order.

---

## Constraints

- The length of the array representing the breed and the array for the number should be the same. 
- Both arrays have a length between 1 and 10,000. 
- If there are multiple breeds with the same number, they are sorted in alphabetical order.

---

## Input and Output Examples

| breed array | number array | Output |
| --- | --- | --- |
| [“Korean short hair“, “Korean short hair“, “Maine Coon”, “Bengal”, “Maine Coon”, “British short hair“, “Norwegian Forest” ] | [30, 15, 13, 4, 45, 9, 21] | ["Maine Coon", "Korean short hair",  "Norwegian Forest", "British short hair", "Bengal"] |
| [”Sphynx”, “British short hair“, “Sphynx”, “Sphynx”, “Bengal”, “Maine Coon”] | [3, 16, 1, 9, 25, 5] | ["Bengal", "British short hair", "Sphynx", "Maine Coon"] |
| [”Maine Coon”, “Korean short hair“, “British short hair”, “Norwegian Forest”, “Norwegian Forest”, “Korean short hair“, “Korean short hair“] | [8, 32, 15, 17, 12, 13, 31] | ["Korean short hair", "Norwegian Forest", "British short hair", "Maine Coon"] |

---

## Explanation for Input and Output

Given arrays of strings representing cat breeds and arrays of numbers representing the number of breeds are input. Print them in order from the most number of types in descending order.

1. Input the breed array ['Sphinx', 'British Short Hair', 'Sphinx', 'Sphinx', 'Bengal', 'Maine Coon'] and the number array [3, 16, 1, 9, 25, 5]. 
2. The largest number in the number array is 25, which is mapped to 'Bengal'. Therefore, Bengal is first in order. 
3. The second largest number is 16, which is mapped to 'British Short Hair'. Therefore, next after Bengal is 'British Short Hair'. 
4. Sphinx has 3 entries. 3, 1, and 9 are the numbers for them. The sum of these numbers is 13, which is smaller than the 16 for British Short Hair. Therefore, currently, ['Bengal', 'British Short Hair', 'Sphinx']. 
5. Last but not least, Maine Coon goes last since it is 5.