- info
    - lv1
    - 정렬

# 출정인원 선발

## 문제 설명

마을로 돌아간 자바독은 마을로 돌아왔습니다. 자바독은 각 부족에 전서를 보내 라이언에게 충성하며 각종 험난한 SI 작업에 끌려다녀 수십 년간 제대로 된 식사 한 번 못 했던 특급 기술자들을 불러 모읍니다. 그리고 묵묵히 정성스레 저녁 식사를 대접합니다. 횟수가 반복될수록 특급기술자들의 마음이 열리게 되었습니다.

![연설하는 자바독](./3_1.webp)

자바독이 가진 스톤은 마인드 스톤! 자바독은 마인드 스톤을 통해 혁명이 일어난 후 30년, 50년 후 그들의 노후를 보여줬어요. 그리고 다음 자녀들의 미래를요.

" 우리의 미래가 아니라, 우리 자녀들의 미래를 위해서!

자바독은 능력자를 선별했습니다. 이미 고도로 단련된 특급 기술자! 그러나 희생을 최소화하기 위해 시험을 보기로 했습니다. 시험을 본 인원에 상위 30%만 전투에 참가하기로 결정했어요.

" 아무도 나오지 않는다면, 아무도 출정하지 않는다독!

```py
army = [['A', 25, 24, 11, 12], ['B', 13, 22, 16, 14]]
```

각 입력값은 `이름, 체력, 정신력, 기술력, 방어력`으로 주어집니다. 위와 같이 만약 2명만 지원한다면 30%를 선발할 수 없기에 아무도 출정하지 않습니다. 만약 4명이 지원을 하였고 모두가 점수가 다르다면 단 한 명만 출정할 수 있어요. 30%에 해당하는 기술자의 이름을 return하는 solution 함수를 완성하세요. 

---

## 제한 사항

- 0 ≤ 체력, 정신력, 기술력, 방어력 ≤ 25
- 1 ≤ 기술자 수 ≤ 10
- 기술자 배열은 2차원 배열로 주어집니다.
- 기술자 이름은 중복되지 않습니다.

---

## 입출력 예

|          입력         |  출력 |
| ------------------------ | ------- |
| [['A', 25, 24, 11, 12], ['B', 13, 22, 16, 14]] | [] |
| [['A', 25, 25, 25, 25], ['B', 10, 12, 13, 11], ['C', 24, 22, 23, 21], ['D', 13, 22, 16, 14]] | ['A'] |

---

## 입출력 설명
- 1번 : 2명 중 한 명에게 장학금을 주게 되면 50%를 주게 되는 것이니 아무도 줄 수 없습니다.
- 2번 : 4명 중 한 명에게 장학금을 주게 되면 25%로 30% 미만이니 최고 점수인 'A'만 장학금을 받을 수 있습니다.