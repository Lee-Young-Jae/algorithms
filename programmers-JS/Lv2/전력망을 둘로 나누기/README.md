# 전력망을 둘로 나누기

[전력망을 둘로 나누기](https://programmers.co.kr/learn/courses/30/lessons/86971)

## 문제 이해하기

- 전력망이 연결된 모든 전선 중 하나를 끊어 두 개의 전력망으로 나누려고 한다.
- 두 전력망에 속한 발전소의 개수를 최소로 하려고 한다.
- 전력망의 정보가 담긴 2차원 배열 wires가 매개변수로 주어질 때, 두 전력망에 속한 발전소의 개수의 차이(절댓값)를 return 하도록 solution 함수를 완성하라.

## 풀이

그래프 문제이기 때문에 탐색을 하는 방법을 생각했습니다.
전선망을 하나씩 끊고 끊어진 각 그래프를 dfs로 탐색하여 두 전력망에 속한 발전소의 개수를 구하고 차이를 구하는 방식으로 접근했습니다.

## 코드 구현

초기 그래프와 방문 여부를 저장할 객체를 생성합니다.

```js
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
```

dfs 함수를 구현합니다. dfs 함수는 그래프, 시작 노드, 방문 여부를 저장할 객체를 매개변수로 받고 탐색을 통해 방문한 노드의 개수`count`를 반환합니다.

```js
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
```

그래프를 하나씩 끊어가며 두 전력망에 속한 발전소의 개수를 구하고 차이를 구합니다.

```js
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
```

## 전체 코드

```js
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
```
