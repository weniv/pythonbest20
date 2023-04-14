- info
    - lv1
    - Two Pointers | Sliding Window

# Maximum Loss Amount
![Graph Chart](./9_2.webp)

## Problem Description
Representative No. 1 of "Catfish Inc." wanted to calculate the worst possible loss amount that could occur for risk management after looking at the graph changes for the past year. Let's find out the `worst possible loss amount` that can occur when given a graph chart.

In the above graph, buying at the highest price (61,100) and selling at the lowest price (52,700) seems to incur the maximum loss. However, from the perspective of the highest price, the lowest price is already in the past, so it becomes a meaningless past price that cannot be sold.

<br/>

Let's assume that input values are entered in the order of 58,000, 58,700, 55,300, 54,200, 53,600, 52,700, 57,700, 61,100. Let's calculate the maximum loss of each interval according to the time order.


| Day | Input | Highest Price | Lowest Price | Maximum Loss |
| --- | --- | --- | --- | --- |
| 1 | 58000 | 58000 | 58000 | 0 |
| 2 | 58700 | 58700 | 58700 | 0  |
| 3 | 55300 | 58700 | 55300 | 3400 |
| 4 | 54200 | 58700 | 54200 | 4500 |
| 5 | 53600 | 58700 | 53600 | 5100 |
| 6 | 52700 | 58700 | 52700 | 6000 |
| 7 | 57700 | 58700 | 52700 | 6000 |
| 8 | 61100 | 58700 | 52700 | 6000 |

- Day2: If we designate Day2 as the buying point for the worst possible loss record, the value of Day1, which is the previous point before the buying point, becomes meaningless.
- Day8: Even though it reached the highest price, it is not updated since there is no more opportunity to sell.

Therefore, the maximum loss amount for this graph is 6000 won. Complete a function to calculate the maximum loss amount according to the input value like this.

---


## Constraints

- 0 < stock price < 1000000

---

## Input and Output Examples

| Input                                  | Output  |
| ---------------------------------------- | ------- |
| [58000, 58700, 55300, 54200, 53600, 52700, 57700, 61100] | 6000 |
| [80000, 58000, 52700, 57700, 61100] | 27300 |

---

## Explanation

It takes daily stock prices as input and outputs the maximum loss amount that can be realized within the stock prices.