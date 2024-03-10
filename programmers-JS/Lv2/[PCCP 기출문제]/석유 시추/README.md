# [PCCP 기출문제] 석유 시추

[석유 시추](https://school.programmers.co.kr/learn/courses/30/lessons/250136)

## 문제 이해하기

세로길이가 `n` 가로길이가 `m`인 격자 모양의 땅 속에서 석유가 발견되었습니다. 석유는 여러 덩어리로 나누어 묻혀있습니다. 당신이 시추관을 수직으로 단 하나만 뚫을 수 있을 때, 가장 많은 석유를 뽑을 수 있는 시추관의 위치를 찾으려고 합니다. 시추관은 열 하나를 관통하는 형태여야 하며, 열과 열 사이에 시추관을 뚫을 수 없습니다.

## 풀이

본 풀이는 `효율성 테스트 5 〉 시간 초과` 코드입니다.

- `dfs`를 이용하여 석유 덩어리의 크기와 포함된 열의 범위를 구합니다.
- 구한 석유 덩어리의 크기와 포함된 열의 범위를 이용하여 가장 많은 석유를 뽑을 수 있는 시추관의 위치를 구합니다.

```javascript
const direction = [
  [1, 0],
  [-1, 0],
  [0, 1],
  [0, -1],
];

function solution(land) {
  const visited = Array.from({ length: land.length }, () =>
    new Array(land[0].length).fill(false)
  );
  land.forEach((rows, i) => {
    rows.forEach((row, j) => {
      visited[i][j] = row === 0;
    });
  });

  const dfs = (position) => {
    const stack = [];
    if (visited[position.y][position.x]) {
      return;
    }

    stack.push(position);
    const result = {
      size: 0,
      left: position.x,
      right: position.x,
    };
    while (stack.length) {
      const pos = stack.pop();
      const { x, y, left, right } = pos;
      if (visited[y][x]) continue;

      visited[y][x] = true;
      if (x < result.left) {
        result.left = x;
      }

      if (x > result.right) {
        result.right = x;
      }

      result.size++;

      for (let [dx, dy] of direction) {
        if (
          x + dx < 0 ||
          x + dx >= land[0].length ||
          y + dy < 0 ||
          y + dy >= land.length
        )
          continue;
        const newPos = {
          ...pos,
          x: x + dx,
          y: y + dy,
        };
        stack.push(newPos);
      }
    }
    return result;
  };

  const oils = [];
  land.forEach((rows, i) => {
    rows.forEach((row, j) => {
      const position = {
        x: j,
        y: i,
      };
      const oil = dfs(position);
      if (oil) oils.push(oil);
    });
  });

  let result = 0;
  for (let i = 0; i < land[0].length; i++) {
    let sumSize = 0;
    oils.forEach((oil) => {
      if (oil.left <= i && oil.right >= i) {
        sumSize += oil.size;
      }
    });
    result = Math.max(result, sumSize);
  }

  return result;
}
```
