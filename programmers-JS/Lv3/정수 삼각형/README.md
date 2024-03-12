# 정수 삼각형

[정수 삼각형](https://programmers.co.kr/learn/courses/30/lessons/43105)

## 문제 이해하기

삼각형의 꼭대기부터 시작해서 아래에 있는 수 중 하나를 선택하여 아래층으로 내려올 때, 이제까지 선택된 수의 합이 최대가 되는 경로를 구하려고 합니다. 아래층에 있는 수는 현재 층에서 선택된 수의 대각선 왼쪽 또는 대각선 오른쪽에 있는 것 중에서만 선택할 수 있습니다.

삼각형의 정보가 담긴 배열 `triangle`이 매개변수로 주어질 때, 최대 경로에 있는 수의 합을 return 하도록 solution 함수를 완성하세요.

## 풀이

삼각형의 최대 높이가 500 임으로 `dfs`를 이용하여 모든 경로를 탐색하는 것은 불가능하다 따라서 `dp`를 이용하여 문제를 해결해야 한다.

하지만 `dfs`를 이용해서 풀어보고 싶은 욕심이 생겨 최초 풀이는 `dfs`를 이용하여 풀었다.

```javascript
function solution(triangle) {
  let result = 0;
  const stack = [];
  const MAX_DEPTH = triangle.length;
  stack.push([1, triangle[0][0], 0]);

  while (stack.length) {
    const [currentDepth, sum, index] = stack.pop();

    if (currentDepth === MAX_DEPTH) {
      result = Math.max(sum, result);
      continue;
    }

    const nextDepth = currentDepth + 1;
    stack.push([nextDepth, sum + triangle[currentDepth][index], index]);
    stack.push([nextDepth, sum + triangle[currentDepth][index + 1], index + 1]);
  }
  return result;
}
```

당연하게도 시간초과가 발생했다.

다음은 dp를 이용한 풀이이다.

dp배열을 채울 때 세가지 경우를 고려했다.

- 현재 위치가 삼각형의 왼쪽 끝일 때
- 현재 위치가 삼각형의 오른쪽 끝일 때
- 그 외의 경우

왼쪽, 오른쪽 끝일 때는 단순히 이전 행의 왼쪽, 오른쪽 끝의 값과 현재 위치의 값을 더하면 된다.

그 외의 경우는 이전 행의 왼쪽, 오른쪽 끝의 값 중 큰 값을 선택하여 현재 위치의 값을 더하면 된다.

```javascript
function solution(triangle) {
  const length = triangle.length;
  const dp = Array.from({ length }).map((_, index) =>
    new Array(index + 1).fill(0)
  );
  dp[0][0] = triangle[0][0];

  for (let i = 1; i < length; i++) {
    for (let j = 0; j < i + 1; j++) {
      if (j === 0) {
        dp[i][j] = dp[i - 1][0] + triangle[i][j];
      } else if (j === i) {
        dp[i][j] = dp[i - 1].at(-1) + triangle[i][j];
      } else {
        dp[i][j] = Math.max(dp[i - 1][j - 1], dp[i - 1][j]) + triangle[i][j];
      }
    }
  }

  return Math.max(...dp.at(-1));
}
```
