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
