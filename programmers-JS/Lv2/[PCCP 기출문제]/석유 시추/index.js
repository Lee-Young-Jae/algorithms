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
