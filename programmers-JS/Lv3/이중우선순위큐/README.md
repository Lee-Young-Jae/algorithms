# 이중우선순위큐

[프로그래머스\_이중우선순위큐](https://programmers.co.kr/learn/courses/30/lessons/42628)

## 문제 이해하기

- 이중 우선순위 큐는 다음 연산을 할 수 있는 자료구조를 말한다.
  - I 숫자: 큐에 주어진 숫자를 삽입한다.
  - D 1: 큐에서 최댓값을 삭제한다.
  - D -1: 큐에서 최솟값을 삭제한다.
- 이중 우선순위 큐가 할 연산을 모두 처리한 뒤 큐가 비어있으면 [0,0]을, 비어있지 않으면 [최댓값, 최솟값]을 반환한다.

## 풀이

최소힙, 최대힙을 만들어서 풀이해야 하지만 JavaScript에서는 힙 메서드를 지원하지 않아서 직접 구현해야 한다.

근데 문제에 시간복잡도 제한이 없어서 그냥 배열로 풀어도 된다.
(3레벨 문제 치고 정답률이 높은 이유가 있었다...)

```javascript
function solution(operations) {
  const queue = [];
  operations.forEach((operation) => {
    const [command, value] = operation.split(" ");

    if (command === "I") {
      queue.push(Number(value));
    }

    if (command === "D") {
      if (queue.length) {
        if (value === "1") {
          queue.splice(queue.indexOf(Math.max(...queue)), 1);
        } else {
          queue.splice(queue.indexOf(Math.min(...queue)), 1);
        }
      }
    }
  });

  if (queue.length) {
    return [Math.max(...queue), Math.min(...queue)];
  }

  return [0, 0];
}
```
