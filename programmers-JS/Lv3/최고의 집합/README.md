# 최고의 집합

[최고의 집합](https://programmers.co.kr/learn/courses/30/lessons/12938)

## 문제 이해하기

- 자연수 n과 자연수 s가 주어진다.
- n개의 자연수로 이루어진 집합 중, 각 원소의 합이 s가 되는 집합을 구한다.
- 이러한 집합이 여러 개일 경우, 원소의 곱이 최대가 되는 집합을 구하라.

## 풀이

처음 풀이는 dfs를 통해 모든 경우의 수를 구했다.
1부터 s까지의 숫자를 start로 하여 dfs를 돌려 모든 집합을 구하고 그 중에서 원소의 곱이 최대가 되는 집합을 반환했다.

하지만 다음 두 조건에 의해 당연하게도 시간 초과가 발생

- _자연수의 개수 n은 1 이상 10,000 이하의 자연수입니다._
- _모든 원소들의 합 s는 1 이상, 100,000,000 이하의 자연수입니다._

하지만 곱이 최대가 되는 집합이 s/2를 기준으로 나타나는 것을 보고 dfs의 범위를 줄여서 시간을 단축시켰다.

그래도 시간 초과가 발생하여 다른 방법을 찾아보았다.

다음은 시간 초과가 발생한 dfs 풀이이다.

```js
const dfs = (n, s, start, result) => {
  if (start === 0) return;
  const stack = [];
  stack.push([start, start, [start]]);

  while (stack.length) {
    const [v, sum, branch] = stack.pop();

    if (branch.length === n && sum === s) {
      result.push(branch);
      continue;
    }

    if (branch.length === n) continue;
    if (sum === s) continue;

    for (let i = 1; i <= s; i++) {
      const nextBranch = [...branch, i];
      stack.push([i, sum + i, nextBranch]);
    }
  }
};

function solution(n, s) {
  const result = [];
  dfs(n, s, Math.floor(s / 2), result);

  return result[result.length - 1] ?? [-1];
}
```

문제를 바로 해결하진 못했지만 풀이 과정에서 다음과 같은 규칙을 발견했다.

- s가 n으로 나누어 떨어지는 경우 s/n을 n번 반복하면 된다.
- s가 n으로 나누어 떨어지지 않는 경우 s/n을 n-s%n번 반복하고 s/n+1을 s%n번 반복하면 된다.

예시를 들어보자.

```any
n = 3, s = 9~12

s = 9
s/n = 3
s/n을 n번 반복하면 [3, 3, 3]

s = 10
s/n+1 = 4
s/n을 n-s%n번 반복하고 s/n+1을 s%n번 반복하면 [3, 3, 4]

s = 11
s/n+1 = 4
s/n을 n-s%n번 반복하고 s/n+1을 s%n번 반복하면 [3, 4, 4]

s = 12
s/n = 4
s/n을 n번 반복하면 [4, 4, 4]
```

다음은 위 규칙을 적용한 풀이이다.

```js
function solution(n, s) {
  if (~~(s / n) === 0) return [-1];
  const 나머지 = s % n;
  const result = new Array(n).fill(~~(s / n)).map((item, index) => {
    if (index >= n - 나머지) {
      return item + 1;
    }
    return item;
  });
  return result;
}
```
