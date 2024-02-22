# 숫자 변환하기

[숫자 변환하기](https://school.programmers.co.kr/learn/courses/30/lessons/154538)

## 문제 이해하기

- 자연수 x를 y로 변환할 때, 사용할 수 있는 연산은 다음과 같다.

  1. x에 2를 곱한다.
  2. x에 3을 곱한다.
  3. x에 n을 더한다. (입력으로 받는다)

- 이때, x를 y로 바꾸는데 필요한 연산의 최솟값을 구하라.

## 풀이

bfs 를 이용하여 최소 연산을 찾으면 탈출한다.

### 1. dfs를 사용한 첫번째 풀이

```js
const bfs = (start, n, target) => {
  const queue = [];
  queue.push([start, 1]);

  let result = Infinity;
  while (queue.length) {
    const [current, depth] = queue.shift();

    if (current === target) {
      return Math.min(result, depth);
    }
    if (current > target) continue;

    queue.push([current + n, depth + 1]);
    queue.push([current * 2, depth + 1]);
    queue.push([current * 3, depth + 1]);
  }

  return result;
};

function solution(x, y, n) {
  const result = Math.min(bfs(x + n, n, y), bfs(x * 2, n, y), bfs(x * 3, n, y));
  return result === Infinity ? -1 : result;
}
```

효율성 테스트에서 실패했다. 시간복잡도를 줄이기 위해 로직을 변경했다.
start부터 target까지 `+`, `*` 연산을 하며 reulst를 찾는것이 아닌 target부터 start까지 `*`, `/` 연산을 하며 result를 찾는 방법으로 변경했다.

이때 2나 3으로 나누어 떨어지는 경우만 queue에 넣도록 하여 전체 탐색 과정을 줄였다.

### 2. bfs를 사용한 두번째 풀이

```js
function solution(x, y, n) {
  const queue = [];
  queue.push([y, 0]);
  let result = -1;

  while (queue.length) {
    const [current, depth] = queue.shift();

    if (current === x) {
      result = depth;
      break;
    }

    if (current < x) continue;

    if (current % 2 === 0) {
      queue.push([current / 2, depth + 1]);
    }

    if (current % 3 === 0) {
      queue.push([current / 3, depth + 1]);
    }

    queue.push([current - n, depth + 1]);
  }

  return result;
}
```
