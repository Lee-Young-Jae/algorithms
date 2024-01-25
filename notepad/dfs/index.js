const graph = [
  [],
  [2, 3, 8],
  [1, 7],
  [1, 4, 5],
  [3, 5],
  [3, 4],
  [7],
  [2, 6, 8],
  [1, 7],
];

/**
// recursive dfs
const recursive_dfs = (graph, v, visited) => {
  // 방문 출력
  console.log(v);
  visited[v] = true;

  graph[v].forEach((vertex) => {
    if (!visited[vertex]) recursive_dfs(graph, vertex, visited);
  });
};

recursive_dfs(graph, 1, new Array(graph.length).fill(false));

*/

/**
// stack dfs
const stack_dfs = (graph, v, visited) => {
  const stack = [];
  stack.push(v);

  while (stack.length) {
    const v = stack.pop();
    if (!visited[v]) {
      visited[v] = true;
      console.log(v);
      graph[v].forEach((node) => {
        stack.push(node);
      });
    }
  }
};

stack_dfs(graph, 1, new Array(graph.length).fill(false));

*/

const improved_stack_dfs = (graph, start, visited) => {
  const stack = [[start, -1]];

  while (stack.length) {
    const [curNode, parentNode] = stack.pop();

    if (visited[curNode]) {
      // 여기서 리프 노드에서 부모 노드로 연산을 수행한다.
      continue;
    }

    visited[curNode] = true;
    console.log(curNode);

    graph[curNode].forEach((v) => {
      if (!visited[v]) stack.push([v, curNode]);
    });
  }
};

improved_stack_dfs(graph, 1, new Array(graph.length).fill(false));
