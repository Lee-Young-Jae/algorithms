# 2023 KAKAO BLIND RECRUITMENT - 택배 배달과 수거하기

[2023 KAKAO BLIND RECRUITMENT - 택배 배달과 수거하기](https://school.programmers.co.kr/learn/courses/30/lessons/150369)

## 문제 이해하기

- 택배를 배달할 집의 위치인 `deliveries`와 택배를 수거할 집의 위치인 `pickups`가 주어진다.
- 배달할 트럭의 용량 `cap`이 주어진다.
- 트럭은 택배를 배달하고 수거할 수 있다.
- 물류 센터에서 집까지의 거리는 1이다.
- 집에서 집까지의 거리는 1이다.
- 택배를 배달하고 수거할 때 걸리는 최소 거리를 구하는 문제

## 풀이

배달&수거의 한 사이클에서 택배 차량이 물류 센터에서 출발하여 택배를 배달&수거 하는 거리는 `Math.max(deliveries.length, pickups.length) * 2` 이다.

- \*2를 해주는 이유는 편도 거리가 아닌 갔다가 돌아오는 왕복 거리를 구해야하기 때문이다.
- `deliveries`와 `pickups`의 길이중 긴 값을 기준으로 택배 차량이 도착해야한다.

이때, `deliveries`와 `pickups`는 뒤에서부터 0이 아닌 값이 나올 때까지 0을 제거한 상태여야 한다.

- 0인 곳은 택배 차량이 배달&수거할 필요가 없다.

`deliveries`와 `pickups`를 택배 차량의 용량까지 배달 또는 수거한다.

```javascript
function solution(cap, n, deliveries, pickups) {
  let 트럭 = 0;
  let 거리 = 0;

  while (deliveries.length || pickups.length) {
    while (deliveries.at(-1) === 0) deliveries.pop();
    while (pickups.at(-1) === 0) pickups.pop();

    거리 += Math.max(deliveries.length, pickups.length) * 2;

    while (트럭 < cap) {
      if (deliveries.length === 0) break;
      if (deliveries.at(-1) > 0) {
        deliveries[deliveries.length - 1]--;
        트럭++;
      } else {
        deliveries.pop();
      }
    }
    트럭 = 0;

    while (트럭 < cap) {
      if (pickups.length === 0) break;
      if (pickups.at(-1) > 0) {
        pickups[pickups.length - 1]--;
        트럭++;
      } else {
        pickups.pop();
      }
    }
    트럭 = 0;
  }

  return 거리;
}
```
