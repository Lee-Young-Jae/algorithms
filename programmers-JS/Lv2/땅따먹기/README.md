# 땅따먹기

[프로그래머스 땅따먹기](https://programmers.co.kr/learn/courses/30/lessons/12913)

## 문제 이해하기

- 땅따먹기 게임을 하려고 합니다. 땅따먹기 게임의 땅은 N행 4열로 이루어져 있고, 모든 칸에는 점수가 쓰여 있습니다.
- 1행부터 땅을 밟으며 한 행씩 내려올 때, 각 행의 4칸 중 한 칸만 밟으면서 내려와야 합니다.
- 단, 땅따먹기 게임에는 한 행씩 내려올 때, 같은 열을 연속해서 밟을 수 없는 특수 규칙이 있습니다.
- 즉, 1행에서 1번째 칸을 밟았다면, 2행의 1번째 칸은 밟을 수 없게 됩니다.
- 마지막 행까지 모두 내려왔을 때, 얻을 수 있는 점수의 최댓값을 return 하는 solution 함수를 완성해 주세요.

## 풀이

배열 길이를 보고 완전 탐색이 아닌 dp로 풀어야겠다고 생각했지만, dfs로 우선 풀어봤다.

- dfs로 풀이
  - 1행부터 시작해서 4개의 열 중 하나를 선택하고, 다음 행으로 넘어간다.
  - 다음 행에서는 선택한 열을 제외한 나머지 3개의 열 중 하나를 선택한다.
  - 이런 식으로 마지막 행까지 내려가면서 최대값을 구한다.

```js
const dfs = (graph, start) => {
  const stack = [];
  stack.push([start, graph[0][start], 1]);
  const graphLen = graph.length;

  const result = [];
  while (stack.length) {
    const [rowIndex, sum, colIndex] = stack.pop();

    if (colIndex === graphLen) {
      result.push(sum);
      continue;
    }

    for (let i = 0; i < 4; i++) {
      if (i === rowIndex) continue;
      stack.push([i, graph[colIndex][i] + sum, colIndex + 1]);
    }
  }

  return result;
};

function solution(land) {
  let result = 0;
  for (let i = 0; i < 4; i++) {
    result = Math.max(result, ...dfs(land, i));
  }
  return result;
}
```

당연하지만 시간초과!
원래의 생각대로 dp로 풀어보자.

- dp로 풀이
  - dp 배열을 만들어서 각 위치별로 해당 위치까지의 최대 점수를 저장한다.
  - 첫 번째 행(dp[0])은 주어진 land 배열의 값으로 초기화한다.
  - 각 행별로 최대 점수를 갱신한다.
  - 이전 행에서의 최대값과 현재 행의 점수를 더하여 temp에 저장하고, temp가 현재 열의 최대값보다 크다면 최대값을 업데이트한다.
  - dp 배열의 마지막 행에서 최대값을 반환한다.

```js
function solution(land) {
  const dp = Array.from({ length: land.length }, () => Array(4).fill(0));
  dp[0] = land[0];
  for (let i = 0; i < land.length - 1; i++) {
    for (let j = 0; j < 4; j++)
      for (let k = 0; k < 4; k++) {
        if (j === k) continue;
        const temp = dp[i][j] + land[i + 1][k];
        if (temp > dp[i + 1][k]) dp[i + 1][k] = temp;
      }
  }
  return Math.max(...dp.at(-1));
}
```

## 다른 풀이

정답 코드를 보다보니 reduce를 사용한 좋은 풀이가 있어서 가져왔다.

```js
function solution(land) {
  return Math.max(
    ...land.reduce(
      (a, c) => {
        return [
          c[0] + Math.max(a[1], a[2], a[3]),
          c[1] + Math.max(a[0], a[2], a[3]),
          c[2] + Math.max(a[0], a[1], a[3]),
          c[3] + Math.max(a[0], a[1], a[2]),
        ];
      },
      [0, 0, 0, 0]
    )
  );
}
```

- reduce를 사용하여 각 행별로 최대값을 구한다.
- reduce의 초기값은 [0, 0, 0, 0]으로 설정한다.
- 각 행별로 현재 행의 값과 이전 행의 최대값을 더하여 최대값을 구한다.
- 최종적으로 reduce의 반환값은 각 행별 최대값이 담긴 배열이므로 Math.max를 사용하여 최대값을 구한다.
