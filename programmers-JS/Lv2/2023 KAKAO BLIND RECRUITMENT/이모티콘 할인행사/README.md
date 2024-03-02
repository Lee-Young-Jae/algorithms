# 2023 KAKAO BLIND RECRUITMENT - 이모티콘 할인행사

[2023 KAKAO BLIND RECRUITMENT - 이모티콘 할인행사](https://school.programmers.co.kr/learn/courses/30/lessons/150368)

## 문제 이해하기

카카오톡에서는 이모티콘을 무제한으로 사용할 수 있는 이모티콘 플러스 서비스 가입자 수를 늘리려고 합니다.
이를 위해 카카오톡에서는 이모티콘 할인 행사를 하는데, 목표는 다음과 같습니다.

이모티콘 플러스 서비스 가입자를 최대한 늘리는 것.
이모티콘 판매액을 최대한 늘리는 것.
1번 목표가 우선이며, 2번 목표가 그 다음입니다.

이모티콘 할인 행사는 다음과 같은 방식으로 진행됩니다.

n명의 카카오톡 사용자들에게 이모티콘 m개를 할인하여 판매합니다.
이모티콘마다 할인율은 다를 수 있으며, 할인율은 10%, 20%, 30%, 40% 중 하나로 설정됩니다.
카카오톡 사용자들은 다음과 같은 기준을 따라 이모티콘을 사거나, 이모티콘 플러스 서비스에 가입합니다.

각 사용자들은 자신의 기준에 따라 일정 비율 이상 할인하는 이모티콘을 모두 구매합니다.
각 사용자들은 자신의 기준에 따라 이모티콘 구매 비용의 합이 일정 가격 이상이 된다면, 이모티콘 구매를 모두 취소하고 이모티콘 플러스 서비스에 가입합니다

## 풀이

이모티콘을 구매하는 방법은 4가지가 있다. (10%, 20%, 30%, 40% 할인)

이모티콘을 구매하는 경우의 수를 모두 구한다.

- 이모티콘을 구매하는 경우의 수를 구하는 방법은 DFS로 접근했다.

- 중복 계산을 막기 위해 이모티콘의 가격에 대해 할인율을 적용한 가격을 객체로 만들어 할인율을 적용하여 가격을 구했다.

경우의 수를 루프를 돌며 사용자들의 이모티콘 구매 여부를 판단한다.

- 총액이 일정 가격 이상이면 이모티콘 플러스 서비스에 가입한다.

```javascript
function solution(users, emoticons) {
  const SALE_RATIO = [10, 20, 30, 40];

  const stack = [];
  const allCase = [];

  stack.push([-1, []]);
  while (stack.length) {
    const [index, 방법] = stack.pop();
    if (index === emoticons.length - 1) {
      allCase.push(방법);
      continue;
    }

    for (let i = 0; i < 4; i++) {
      stack.push([index + 1, [...방법, SALE_RATIO[i]]]);
    }
  }

  const emoticonPrices = emoticons.reduce(
    (acc, price) => ({
      ...acc,
      [price]: {
        40: price * (60 / 100),
        30: price * (70 / 100),
        20: price * (80 / 100),
        10: price * (90 / 100),
      },
    }),
    {}
  );

  let result = [0, 0];
  allCase.forEach((cases) => {
    const 구매목록 = [];
    users.forEach(([할인율이_이정도면_이모티콘_산다, 잔액]) => {
      const user = [0, 0];
      cases.forEach((할인율, index) => {
        const 구매액 = emoticonPrices[emoticons[index]][할인율];
        const isBuyEmoticon = 할인율 >= 할인율이_이정도면_이모티콘_산다;
        if (isBuyEmoticon) {
          user[1] += 구매액;
        }
      });
      if (잔액 <= user[1]) {
        user[0] = 1;
        user[1] = 0;
      }

      구매목록.push(user);
    });
    const [이모티콘플러스구매, 이모티콘총구매액] = 구매목록.reduce(
      (acc, cur) => [acc[0] + cur[0], acc[1] + cur[1]],
      [0, 0]
    );
    if (result[0] < 이모티콘플러스구매) {
      result = [이모티콘플러스구매, 이모티콘총구매액];
    }

    if (result[0] === 이모티콘플러스구매) {
      if (result[1] < 이모티콘총구매액) {
        result = [이모티콘플러스구매, 이모티콘총구매액];
      }
    }
  });

  return result;
}
```
