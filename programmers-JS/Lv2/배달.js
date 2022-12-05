function solution(N, road, K) {
  let answer = 0;
  let distance = Array(N + 1).fill(Infinity);
  let graph = Array.from(Array(N + 1), () => []);
  let queue = [];

  for (let i = 0; i < road.length; i++) {
    const [a, b, c] = road[i];
    graph[a].push([b, c]);
    graph[b].push([a, c]);
  }

  distance[1] = 0;
  queue.push(1);

  while (queue.length) {
    let now = queue.shift();

    for (let i = 0; i < graph[now].length; i++) {
      const [next, cost] = graph[now][i];

      if (distance[next] > distance[now] + cost) {
        distance[next] = distance[now] + cost;
        queue.push(next);
      }
    }
  }

  for (let i = 1; i <= N; i++) {
    if (distance[i] <= K) answer++;
  }

  return answer;
}
