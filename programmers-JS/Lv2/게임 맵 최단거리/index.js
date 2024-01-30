function solution(maps) {
  let result = [];
  const queue = [];
  const visited = maps.map((rows) => {
    return rows.map((col) => {
      return col === 1 ? false : true;
    });
  });

  const maxX = maps[0].length;
  const maxY = maps.length;
  const minX = 0;
  const minY = 0;

  queue.push([0, 0, 1]);

  while (queue.length) {
    const [yPos, xPos, moveCount] = queue.shift();

    if (xPos >= maxX || xPos < minX) continue;
    if (yPos >= maxY || yPos < minY) continue;
    if (visited[yPos][xPos]) continue;
    visited[yPos][xPos] = true;

    if (yPos === maxY - 1 && xPos === maxX - 1) {
      result.push(moveCount);
      continue;
    }

    queue.push([yPos - 1, xPos, moveCount + 1]);
    queue.push([yPos + 1, xPos, moveCount + 1]);
    queue.push([yPos, xPos - 1, moveCount + 1]);
    queue.push([yPos, xPos + 1, moveCount + 1]);
  }
  return result.length === 0 ? -1 : Math.min(...result);
}

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
    [0, 0, 0, 0, 1],
  ])
); // 11

console.log(
  solution([
    [1, 0, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1],
  ])
); // -1

console.log(
  solution([
    [1, 1, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 1, 1, 1, 1],
    [0, 1, 1, 0, 0],
    [0, 1, 1, 1, 1],
  ])
); // 9

console.log(
  solution([
    [1, 1, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 1, 1, 1, 0],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 0, 1],
  ])
); // 9
