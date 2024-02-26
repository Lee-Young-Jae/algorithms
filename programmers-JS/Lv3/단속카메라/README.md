# 단속카메라

[단속카메라](https://programmers.co.kr/learn/courses/30/lessons/42884)

## 문제 이해하기

- 차량의 경로가 주어질 때, 모든 차량이 단속카메라를 만나도록 설치할 때, 최소한의 카메라 개수를 구하는 문제
- 차량의 경로는 2차원 배열로 주어지며, 각 차량의 경로는 [출발지점, 도착지점]으로 주어진다.

## 풀이

- 차량의 경로를 **도착지점**을 기준으로 오름차순으로 정렬한다.
- 차량의 경로를 순회하며, **현재 차량의 출발지점**이 **이전 차량의 도착지점**보다 크거나 같다면, 카메라를 설치한다.
- 카메라를 설치할 때마다, 카메라의 개수를 1씩 증가시킨다.

```javascript
function solution(routes) {
  routes = routes.sort((a, b) => a[1] - b[1]);
  return routes.reduce(
    (acc, [start, end]) => {
      const [result, cameraPos] = acc;
      if (!(cameraPos >= start && cameraPos <= end)) {
        return [result + 1, end];
      }
      return acc;
    },
    [1, routes[0][1]]
  )[0];
}
```

3레벨 문제치고는 쉬운 문제였다. 문제를 이해하고 아이디어를 도출해내는 것이 더 어려웠던 문제였다.
