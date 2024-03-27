function solution(edges) {
  const visited = new Array(edges.length + 2).fill(0).map((item) => [0, 0]);

  edges.forEach(([start, end]) => {
    visited[end][0] += 1;
    visited[start][1] += 1;
  });

  const result = [0, 0, 0, 0];
  let index = 0;
  for (let [들어옴, 나감] of visited) {
    if (들어옴 === 0 && 나감 === 0) {
      index++;
      continue;
    }
    if (나감 === 1) {
      index++;
      continue;
    }

    // 생성한 정점
    if (나감 >= 2 && 들어옴 === 0) {
      result[0] = index;
      index++;
      continue;
    }

    // 막대
    if (나감 === 0) {
      result[2]++;
    }

    // 8자
    if (나감 === 2) {
      result[3]++;
    }
    index++;
  }

  const 생성한_정점 = result[0];
  const 도넛_그래프_수 = visited[생성한_정점][1] - result[2] - result[3];
  result[1] = 도넛_그래프_수;
  return result;
}
