# 불량 사용자

[프로그래머스 불량 사용자](https://programmers.co.kr/learn/courses/30/lessons/64064)

## 문제 이해하기

- 이벤트 응모자 아이디 목록이 주어진다.
- 불량 사용자 아이디 목록이 주어진다.
- 불량 사용자 아이디 목록에 매핑되는 응모자 아이디 목록을 구한다.
- 불량 아이디 목록들의 길이를 반환한다.

## 풀이 순서

[1] 불량 사용자 아이디 목록을 순회하며 매핑되는 응모자 아이디 목록을 구한다.

```js
const mappingIds = [];
banned_id.forEach((banId, i) => {
  const mappings = [];
  user_id.forEach((userId, j) => {
    if (mapping(userId, banId)) {
      mappings.push(userId);
    }
  });
  mappingIds.push(mappings);
});
```

userId와 banId가 매핑되는 지를 찾기 위해 정규 표현식을 사용

```js
const mapping = (userId, banId) => {
  const regExp = new RegExp(`^${banId.replaceAll("*", ".")}$`);
  return regExp.test(userId);
};
```

[2] 제제 아이디 목록의 모든 경우의 수를 만들기 위해 dfs를 사용한다.

- 현재 분기에 사용된 응모자 아이디가 없는 경우에만 탐색을 이어간다.
- 제제 아이디 목록의 길이와 같아지면 탐색을 종료한다.

```js
const dfs = (graph, start, depth, result) => {
  const stack = [];
  stack.push([start, 1, [start]]);

  while (stack.length) {
    const [id, currentDepth, branch] = stack.pop();

    if (currentDepth === depth) {
      result.push(branch);
      continue;
    }

    graph[currentDepth].forEach((currentId) => {
      if (!branch.includes(currentId))
        stack.push([currentId, currentDepth + 1, [...branch, currentId]]);
    });
  }
};
```

[3] 탐색 결과 중 요소가 중복되는 경우를 제거한다.

```js
const uniqueArrays = Array.from(
  new Set(result.map((arr) => arr.slice().sort().join(",")))
);
return uniqueArrays.map((str) => str.split(",")).length;
```

## 전체 소스 코드

```js
const mapping = (userId, banId) => {
  const regExp = new RegExp(`^${banId.replaceAll("*", ".")}$`);
  return regExp.test(userId);
};

const dfs = (graph, start, depth, result) => {
  const stack = [];
  stack.push([start, 1, [start]]);

  while (stack.length) {
    const [id, currentDepth, branch] = stack.pop();

    if (currentDepth === depth) {
      result.push(branch);
      continue;
    }

    graph[currentDepth].forEach((currentId) => {
      if (!branch.includes(currentId))
        stack.push([currentId, currentDepth + 1, [...branch, currentId]]);
    });
  }
};

function solution(user_id, banned_id) {
  const mappingIds = [];
  banned_id.forEach((banId, i) => {
    const mappings = [];
    user_id.forEach((userId, j) => {
      if (mapping(userId, banId)) {
        mappings.push(userId);
      }
    });
    mappingIds.push(mappings);
  });

  let result = [];
  const depth = mappingIds.length;

  mappingIds[0].forEach((id) => {
    dfs(mappingIds, id, depth, result);
  });

  //TODO: 중복된 요소를 가진 배열을 제거한다 O(N^2)
  const uniqueArrays = Array.from(
    new Set(result.map((arr) => arr.slice().sort().join(",")))
  );
  return uniqueArrays.map((str) => str.split(",")).length;
}
```
