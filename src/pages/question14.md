- info
    - lv1
    - DFS/BFS

# (Licat's Dream-1) Get ready to sail!
![Licat Sailing to Skull Island](./14_1.webp)

## Problem Description
Licat had a dream of sailing to Skull Island before he wore his lion disguise.

Every day, he sails to Skull Island to catch fish. Skull Island is known to be the place with the most fish caught in Weniv World, but there are many reefs and fog, making it a dangerous place. Every morning, Weniv News provides information on areas where the fog is lifting. Licat checks the map through the news and makes a plan to catch fish.

" “How many fish will I catch today?”

Skull Island's map is a grid with a size of n x m, with a grid size of 1 x 1. The outside of the map cannot be accessed because of the dense fog, and only adjacent squares can be moved in up, down, left, and right directions. Each square displays a number and a '#'. The number represents the number of fish that can be caught in that square, and Lei Cat can move freely. '#' indicates a reef and cannot be passed. 

Licat starts from (1,1) and moves to the exit of (n,m), trying to catch as many fish as possible. Given the map information, please write a function that returns the total number of fish Lei Cat can catch as he moves. If there is no path from (1,1) to (n,m), return -1.

---

## Constraints
- The map is a 2D array of n x m, consisting of '#' or an integer greater than or equal to 0. 
  - '#' indicates a reef and cannot be passed. 
  - An integer greater than or equal to 0 represents a sea that can be moved, representing the number of fish that can be caught. 
- 2 ≤ n, m ≤ 1,000

---

## Input and Output Examples
| Input | Output |
| --- | --- |
| [[1, 3, ‘#’], [0, ‘#’, 2], [0, 1, 1]] | 8 |
| [[0, ‘#’, 1, 0], [2, 1, 1, 2], [’#’, 3, 0, 1], [1, ‘#’, ‘#’, 3], [0, 2, ‘#’, 1]] | 15 |
| [[1, ‘#’, 1], [2, 1, ‘#’], [’#’, ‘#’, 0], [1, ‘#’, 1]] | -1 |

---

## Explanation for Input and Output
- Find the sum of all fish that can be caught in the path that can be visited. 
- If there is no path from (1,1) to (n,m), return -1.
