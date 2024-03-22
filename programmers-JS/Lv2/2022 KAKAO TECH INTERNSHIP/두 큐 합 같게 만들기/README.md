# 2022 KAKAO TECH INTERNSHIP - 두 큐 합 같게 만들기

[2022 KAKAO TECH INTERNSHIP - 두 큐 합 같게 만들기](https://school.programmers.co.kr/learn/courses/30/lessons/118667)

## 풀이

JavaScript 배열의 shift()연산은 O(n)의 시간복잡도를 가지기 때문에 시간초과가 발생한다. 따라서 큐를 실제로 dequeue하는 대신 dequeue할 인덱스를 저장하고, 해당 인덱스를 증가시키는 방식으로 해결했다.

문제의 접근 방법은 그리디 알고리즘을 사용해서 해결했다. 각 queue의 합끼리의 차이를 구하고, 합이 높은 큐에서 합이 낮은 큐로 값을 옮겨야 한다. 변수 diff를 통해 두 큐의 합의 차이를 갱신하고, diff가 0이 될 때까지 큐의 값을 옮겨주었다.

각 큐의 원소 합을 같게 만들 수 없는 경우는 큐를 옮기는 최악의 경우가 발생했을 때이다. 한 큐를
모두 다른 큐로 옮기고 그 큐의 결과를 다시 다른 큐로 옮기는 과정이다. 초기값 큐의 길이는 두 큐가 동일하기 때문에 `queue.length * 3`만큼이 최대값이다. 이를 초과하였을 경우 -1을 반환하도록 하였다.

```javascript
function solution(queue1, queue2) {
  let answer = 0;
  const max = queue1.length * 3;
  let diff =
    (queue1.reduce((acc, cur) => acc + cur, 0) -
      queue2.reduce((acc, cur) => acc + cur, 0)) /
    2;

  let idx1 = 0;
  let idx2 = 0;
  while (diff !== 0 && answer < max) {
    if (diff > 0) {
      const target = queue1[idx1];
      diff -= queue1[idx1];
      queue2.push(queue1[idx1]);
      idx1++;
    } else if (diff < 0) {
      diff += queue2[idx2];
      queue1.push(queue2[idx2]);
      idx2++;
    }
    answer++;
  }

  return diff === 0 ? answer : -1;
}
```
