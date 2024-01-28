const dfs = (graph, start, visited) => {
  const stack = [];
  stack.push(start);

  while (stack.length) {
    const v = stack.pop();

    if (!visited[v]) {
      visited[v] = true;
      graph[v].forEach((node) => {
        stack.push(node);
      });
    }
  }
};

function solution(n, computers) {
  const graph = [];
  computers.forEach((computer, i) => {
    const network = [];
    computer.forEach((v, j) => {
      if (!(i === j) && v === 1) {
        network.push(j);
      }
    });
    graph.push(network);
  });

  const visited = new Array(graph.length).fill(false);

  return graph.reduce((acc, _, index) => {
    if (!visited[index]) {
      dfs(graph, index, visited);
      return acc + 1;
    }
    return acc;
  }, 0);
}

console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1],
  ])
); //2
console.log(
  solution(3, [
    [1, 1, 0],
    [1, 1, 1],
    [0, 1, 1],
  ])
); //1
