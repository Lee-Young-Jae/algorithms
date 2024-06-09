const dfs = (graph, root, visited) => {
  const queue = [root];
  let count = 0;
  while (queue.length) {
    const target = queue.pop();
    if (visited[target]) {
      continue;
    }
    count += 1;
    visited[target] = true;
    graph[target].forEach((item) => {
      if (!visited[item]) {
        queue.push(item);
      }
    });
  }
  return count;
};

function solution(n, wires) {
  const graph = wires.reduce(
    (acc, [a, b]) => ({
      ...acc,
      [a]: acc[a] ? [...acc[a], b] : [b],
      [b]: acc[b] ? [...acc[b], a] : [a],
    }),
    {}
  );

  const visited = new Array(n)
    .fill(0)
    .reduce((acc, _, i) => ({ ...acc, [i + 1]: false }), {});

  let min = Infinity;
  wires.forEach(([a, b]) => {
    const newGraph = { ...graph };
    newGraph[a] = newGraph[a].filter((item) => item !== b);
    newGraph[b] = newGraph[b].filter((item) => item !== a);

    const aDepth = dfs(newGraph, a, { ...visited });
    const bDepth = dfs(newGraph, b, { ...visited });

    const diff = Math.abs(aDepth - bDepth);
    min = Math.min(diff, min);
  });

  return min;
}
