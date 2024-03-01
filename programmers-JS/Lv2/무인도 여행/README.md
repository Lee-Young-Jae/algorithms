# 무인도 여행

[무인도 여행](https://school.programmers.co.kr/learn/courses/30/lessons/154540)

## 문제 이해하기

- 섬에 대한 정보가 담긴 배열 `maps`가 주어진다.
- "X"는 물, `1~9`는 섬을 나타낸다.
  - `1~9`는 섬에서 살 수 있는 날짜를 나타낸다.
- 상하좌우로 이동할 수 있으며, 연결된 섬으로 간주한다.
- 섬을 모두 연결하고 섬에서 살 수 있는 날짜가 적은 순서대로 정렬하여 날짜를 반환하라.

## 풀이

dfs로 접근하여 풀 수 있는 문제이다.
visited 배열을 만들어 방문한 섬을 체크하고, 상하좌우로 이동하며 방문하지 않은 섬을 찾아 스택에 추가한다.
스택이 빌 때까지 반복하며, 방문하지 않은 섬을 찾아 스택에 추가한다.

```javascript
const direct = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];

function solution(maps) {
  maps = maps.map((map) => map.split(""));
  const mapLength = maps.length;
  const rowLength = maps[0].length;
  const visited = Array.from(Array(mapLength), () =>
    Array(rowLength).fill(false)
  );
  const days = [];

  maps.forEach((rows, i) => {
    rows.forEach((row, j) => {
      if (row !== "X" && !visited[i][j]) {
        const stack = [[i, j]];
        let day = 0;

        while (stack.length) {
          const [row, col] = stack.pop();

          if (!visited[row][col]) {
            visited[row][col] = true;
            day += Number(maps[row][col]);
          }

          for (let [dx, dy] of direct) {
            const nextRow = row + dx;
            const nextCol = col + dy;

            if (
              nextRow < 0 ||
              nextRow >= mapLength ||
              nextCol < 0 ||
              nextCol >= rowLength
            )
              continue;
            if (visited[nextRow][nextCol]) continue;
            if (maps[nextRow][nextCol] === "X") continue;

            stack.push([nextRow, nextCol]);
          }
        }
        days.push(day);
      }
    });
  });

  return days.length ? days.sort((a, b) => a - b) : [-1];
}
```
