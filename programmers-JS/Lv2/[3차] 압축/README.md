# [3차] 압축

## [프로그래머스 [3차] 압축](https://programmers.co.kr/learn/courses/30/lessons/17684)

### 문제 이해하기

- 길이가 1인 모든 단어를 포함하도록 사전을 초기화한다.
- 사전에서 현재 입력과 일치하는 가장 긴 문자열 w를 찾는다.
- w에 해당하는 사전의 색인 번호를 출력하고, 입력에서 w를 제거한다.
- 입력에서 처리되지 않은 다음 글자가 남아있다면(c), w+c에 해당하는 단어를 사전에 등록한다.
- 단계 2로 돌아간다.

### 풀이

[1] A-Z까지의 알파벳을 key로, 1부터 26까지의 숫자를 value로 하는 객체를 만든다.

```js
const 사전 = new Array(26).fill(0).reduce(
  (acc, _, idx) => ({
    ...acc,
    [String.fromCharCode(idx + 65)]: idx + 1,
  }),
  {}
);
```

[2] msg를 순회하며 사전에 등록되어 있는 단어까지 길이를 늘려 탐색한다.

- 사전에 등록되어 있는 단어가 없을 때까지 탐색하며 queue에 push한다.
- 사전에 등록되어 있는 단어가 없는 경우, queue에 담긴 단어를 사전에 등록하고 이전 단어의 색인 번호를 result에 push한다.

```js
const result = [];
let i = 0;
while (i < msg.length) {
  const queue = [];
  queue.push(msg[i]);

  let scope = 1;
  while (사전[queue.join("")]) {
    if (i + scope > msg.length) break;
    queue.push(msg[i + scope]);
    scope = scope + 1;
  }

  result.push(사전[queue.slice(0, queue.length - 1).join("")]);
  사전[queue.join("")] = Object.keys(사전).length + 1;
  i = i + scope - 1;
}
```
