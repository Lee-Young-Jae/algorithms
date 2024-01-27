// 이것이 코딩 테스트다
// 음료수 얼려 먹기

/**
 * N × M 크기의 얼음 틀이 있다. 구멍이 뚫려 있는 부분은 0, 칸막이가 존재하는 부분은 1로 표시된다.
 * 구멍이 뚫려 있는 부분끼리 상, 하, 좌, 우로 붙어 있는 경우 서로 연결되어 있는 것으로 간주한다.
 * 이때 얼음 틀의 모양이 주어졌을 때 생성되는 총 아이스크림의 개수를 구하는 프로그램을 작성하라.
 * 다음의 4 × 5 얼음 틀 예시에서는 아이스크림이 총 3개가 생성된다
 *
 * 00110
 * 00011
 * 11111
 * 00000
 *
 * 입력
 * - 첫번째 줄에 얼음 틀의 세로길이 N과 가로길이 M이 주어진다.
 * - 두번째 줄부터 N+1 번째 줄까지 얼음 틀의 형태가 주어진다.
 * - 이때 구멍이 뚫려있는 부분은 0, 그렇지 않은 부분은 1이다.
 */

const dfs = (graph, start, visited) => {
  const stack = [];
  stack.push(start);

  const MAX_Y = graph.length;
  const MAX_X = graph[0].length;
  const MIN_Y = 0;
  const MIN_X = 0;

  while (stack.length) {
    const [yPos, xPos] = stack.pop();
    if (yPos < MIN_Y || yPos >= MAX_Y || xPos < MIN_X || xPos >= MAX_X) {
      continue;
    }
    if (visited[yPos][xPos]) {
      continue;
    }
    visited[yPos][xPos] = true;

    stack.push([yPos - 1, xPos]);
    stack.push([yPos + 1, xPos]);
    stack.push([yPos, xPos - 1]);
    stack.push([yPos, xPos + 1]);
  }
};

function solution(N, M, iceTray) {
  let result = 0;

  const MAX_Y = N;
  const MAX_X = M;

  const visited = iceTray.map((cols) =>
    cols.map((rows) => (rows === 1 ? true : false))
  );

  for (let i = 0; i < MAX_Y; i++) {
    for (let j = 0; j < MAX_X; j++) {
      if (!visited[i][j]) {
        dfs(iceTray, [i, j], visited);
        result++;
      }
    }
  }

  return result;
}

console.log(
  solution(4, 5, [
    [0, 0, 1, 1, 0],
    [0, 0, 0, 1, 1],
    [1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0],
  ])
); // 3

console.log(
  solution(15, 14, [
    [0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0],
    [1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 0],
    [1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0],
    [1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1],
    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1],
    [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1],
  ])
); //8

console.log(
  solution(5, 5, [
    [0, 0, 1, 1, 0],
    [0, 1, 1, 1, 0],
    [0, 1, 0, 1, 0],
    [0, 1, 1, 1, 0],
    [0, 1, 1, 1, 0],
  ])
); // 3

console.log(
  solution(5, 6, [
    [0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1, 0],
    [0, 1, 0, 1, 0, 1],
  ])
); // 15
