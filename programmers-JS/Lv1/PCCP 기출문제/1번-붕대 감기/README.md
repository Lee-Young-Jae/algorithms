# [PCCP 기출문제] 1번 / 붕대감기

[붕대감기](https://school.programmers.co.kr/learn/courses/30/lessons/250137)

## 문제 이해하기

- 몬스터에게 공격을 받지 않을 때만 붕대를 감을 수 있다.
  - 붕대는 `초당 회복량`, `시전시간`, `보너스회복량`으로 이루어져있다.
  - 몬스터의 공격은 `공격시간`, `공격력`의 배열로 이루어져있다.
- 모든 공격을 받고 난 후 현재 남은 체력을 반환한다.
  - 중간에 체력이 0이하가 되면 -1을 반환한다.

## 풀이

- 붕대를 감을 수 있는 시간을 계산하기 위해 `sec` 변수를 사용한다.
- 마지막 공격 시간을 구하기 위해 `attacks` 배열의 마지막 요소의 첫번째 요소를 `endSec` 변수에 저장한다.
- `mappedAttacks` 배열을 생성하고 `attacks` 배열을 순회하며 `공격시간`을 인덱스로 하여 `피해량`을 저장한다.
- `sec`가 `endSec`보다 작거나 같을 때까지 반복한다.
  - `sec`에 해당하는 `mappedAttacks`의 요소가 0이 아니라면, `연속성공`을 1로 초기화하고 `health`에서 `attacked`를 뺀다.
  - `attacked`가 0이라면, `연속성공`이 `시전시간`과 같다면, `연속성공`을 0으로 초기화하고 `health`에 `추가회복량`을 더한 값이 `최대체력`보다 크거나 같다면 `최대체력`으로, 아니라면 `추가회복량`을 더한다.
  - `health`에 `초당회복량`을 더한 값이 `최대체력`보다 크거나 같다면 `최대체력`으로, 아니라면 `초당회복량`을 더한다.
  - `연속성공`을 1 증가시킨다.
  - `health`가 0 이하라면 -1을 반환한다.
  - `sec`를 1 증가시킨다.
- `health`를 반환한다.

### 전체 코드

```javascript
function solution(bandage, health, attacks) {
  const [시전시간, 초당회복량, 추가회복량] = bandage;
  const 최대체력 = health;

  let 연속성공 = 0;
  let sec = 1;
  let endSec = attacks.at(-1)[0];

  const mappedAttacks = new Array(endSec + 1).fill(0);
  attacks.forEach(([공격시간, 피해량]) => {
    mappedAttacks[공격시간] = 피해량;
  });

  while (sec <= endSec) {
    const attacked = mappedAttacks[sec];
    if (attacked) {
      연속성공 = 1;
      health -= attacked;
    }
    if (!attacked) {
      if (연속성공 === 시전시간) {
        연속성공 = 0;
        health =
          health + 추가회복량 >= 최대체력 ? 최대체력 : health + 추가회복량;
      }
      health = health + 초당회복량 >= 최대체력 ? 최대체력 : health + 초당회복량;
      연속성공++;
    }
    if (health <= 0) return -1;

    sec++;
  }

  return health;
}
```
