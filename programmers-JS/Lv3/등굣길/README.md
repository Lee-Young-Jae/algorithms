# 등굣길

[등굣길](https://programmers.co.kr/learn/courses/30/lessons/42898)

## 문제 이해하기

- m\*n 크기의 지도가 있고, 지도의 오른쪽 아래 지점까지 이동하는 **경우의 수**를 구하는 문제
- m과 n의 \*위치에 주의할 것
- 1,000,000,007로 나눈 나머지를 리턴
- 지도에는 물이 있고, 물이 있는 곳으로는 이동할 수 없음
- **오른쪽과 아래**로만 이동 가능

## 풀이

문제에 주어진 대로 DP로 풀이하였다.
어려웠던 점은 예제로 주어진 지도가 3x4였을 때, 4x3으로 풀이를 해야한다는 것이었는데,
문제는 puddles도 마찬가지로 1,2로 주어졌을 때, 2,1로 풀이해야한다는 것이었다.

접근 방법은 다음과 같다.

- 배열 dp를 만들어주었다. (n\*m)
- puddles를 순회하며, 해당 위치에 -1을 넣어주었다.
- dp를 순회하며 `i`, `j`가 0인 경우는 각각 첫번째 행과 열이므로, 각각의 경우의 수는 1이다.
  - 이때, 해당 위치에 물이 있으면 -1을 아니면 1을 넣어주었다.
- 그 외의 경우는, 해당 위치에 물이 있으면 -1을 넣어주었고, 그 외의 경우는 왼쪽과 위쪽의 경우의 수를 더해주었다.
  - 위쪽이 -1이고, 왼쪽이 -1이면 해당 위치도 -1
  - 위쪽이 -1이면, 왼쪽의 경우의 수를 넣어주었다.
  - 왼쪽이 -1이면, 위쪽의 경우의 수를 넣어주었다.
- 마지막 원소가 -1이면 0을 리턴하고, 아니면 해당 위치의 경우의 수를 리턴하였다.

코드가 더러우니 조심하실것...

```javascript
function solution(m, n, puddles) {
  const dp = Array.from({ length: n }, () => new Array(m).fill(0));
  const denominator = 1000000007;
  puddles.forEach(([x, y]) => {
    dp[y - 1][x - 1] = -1;
  });

  dp.forEach((item, i) =>
    item.forEach((area, j) => {
      if (i === 0 && j === 0) {
        dp[i][j] = 1;
      } else if (i === 0) {
        if (area !== -1) {
          dp[i][j] = dp[i][j - 1];
        } else {
          dp[i][j] = -1;
        }
      } else if (j === 0) {
        if (area !== -1) {
          dp[i][j] = dp[i - 1][j];
        } else {
          dp[i][j] = -1;
        }
      } else {
        const top = dp[i - 1][j];
        const left = dp[i][j - 1];
        if (area === -1) {
        } else if (top === -1 && left === -1) {
          dp[i][j] = -1;
        } else if (top === -1) {
          dp[i][j] = dp[i][j - 1];
        } else if (left === -1) {
          dp[i][j] = dp[i - 1][j];
        } else {
          dp[i][j] = (top + left) % denominator;
        }
      }
    })
  );
  if (dp[n - 1][m - 1] === -1) return 0;
  return dp[n - 1][m - 1];
}
```

forEach는 `return` 혹은 `break`를 사용할 수 없어서, 너무나도 보기 어려운 코드가 되었다.
for문을 사용한 코드는 다음과 같다.

```javascript
function solution(m, n, puddles) {
  const dp = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0));
  const denominator = 1000000007;
  puddles.forEach(([x, y]) => {
    dp[y][x] = -1;
  });

  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < m + 1; j++) {
      if (i === 1 && j === 1) {
        dp[i][j] = 1;
        continue;
      }
      if (dp[i][j] === -1) continue;
      const top = dp[i - 1][j];
      const left = dp[i][j - 1];

      if (top === -1 && left === -1) {
        dp[i][j] = -1;
        continue;
      }

      if (top === -1) {
        dp[i][j] = left;
        continue;
      }

      if (left === -1) {
        dp[i][j] = top;
        continue;
      }

      dp[i][j] = (top + left) % denominator;
    }
  }

  return dp[n][m];
}
```
