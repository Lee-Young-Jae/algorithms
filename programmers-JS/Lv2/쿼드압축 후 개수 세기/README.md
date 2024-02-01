# 쿼드압축 후 개수 세기

[쿼드압축 후 개수 세기](https://programmers.co.kr/learn/courses/30/lessons/68936)

## 문제 이해하기

- 0과 1로 이루어진 2^n x 2^n 크기의 2차원 정수 배열을 쿼드 트리와 같은 방식으로 압축한다.
- 압축한 배열의 각 원소의 0과 1의 개수를 return한다.

## 풀이 순서

[1] 배열의 원소가 모두 0이거나 1인 경우를 판별하는 isQuad 함수를 만든다.

```js
const isQuad = (arr) => {
  const flatedArr = arr.flat();
  const standard = flatedArr[0];

  return !flatedArr.some((number) => number !== standard);
};
```

[2] 배열을 순회하며 0과 1의 개수를 센다.

```js
const result = arr.flat().reduce(
  (acc, cur) => ({
    ...acc,
    [cur]: acc[cur] + 1,
  }),
  { 0: 0, 1: 0 }
);
```

[3] 최초의 배열부터 4개의 배열로 분활하여 탐색한다. isQuad 함수를 통해 압축이 가능한지 판별한다. (dfs)

- 압축이 가능한 경우, 해당 배열 원소의 개수 -1을 [2]에서 세었던 0과 1 개수에서 빼준다.
  - 배열 원소의 개수 - 1을 하는 이유는 \[[0, 0], [0, 0]] (길이 4) 인 경우 \[[0]] (길이 1)으로 압축되기 때문이다. -> 기존 4로 세줬던 0의 갯수에서 3을 빼줘야함.
  - 배열 원소의 개수가 1개인 경우(최소 원소까지 탐색한 경우)에는 압축이 된다고 판별되지만 원소의 개수(1) - 1 = 0이므로 결과에 영향을 주지 않는다.
- 압축이 불가능한 경우, 4개의 배열로 분활하여 탐색한다.

```js
const stack = [];
stack.push(arr);

while (stack.length) {
  const currentArr = stack.pop();
  const length = currentArr.length;

  if (isQuad(currentArr)) {
    const standard = currentArr[0][0];
    const count = currentArr.flat().flat().length - 1;
    result[standard] -= count;
    continue;
  }

  for (let i = 0; i < 2; i++) {
    for (let j = 0; j < 2; j++) {
      const newArr = currentArr
        .map((rows) => {
          return rows.slice((j * length) / 2, (j * length) / 2 + length / 2);
        })
        .slice((i * length) / 2, i * length + length / 2);
      stack.push(newArr);
    }
  }
}
```

[4] 최종 계산된 0과 1 갯수를 반환한다.

```js
return [result[0], result[1]];
```
