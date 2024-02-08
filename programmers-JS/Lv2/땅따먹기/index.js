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

console.log(
  solution([
    [1, 2, 3, 5],
    [5, 6, 7, 8],
    [4, 3, 2, 1],
  ])
); // 16
console.log(
  solution([
    [1, 2, 3, 5],
    [5, 6, 7, 100],
    [4, 3, 2, 1],
  ])
); // 107
