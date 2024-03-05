# 2023 KAKAO BLIND RECRUITMENT - 표현 가능한 이진트리

[2023 KAKAO BLIND RECRUITMENT - 표현 가능한 이진트리](https://school.programmers.co.kr/learn/courses/30/lessons/150367)

## 문제 이해하기

이진트리를 수로 표현하는 방법은 다음과 같습니다.

이진수를 저장할 빈 문자열을 생성합니다.
주어진 이진트리에 더미 노드를 추가하여 포화 이진트리로 만듭니다. 루트 노드는 그대로 유지합니다.
만들어진 포화 이진트리의 노드들을 가장 왼쪽 노드부터 가장 오른쪽 노드까지, 왼쪽에 있는 순서대로 살펴봅니다. 노드의 높이는 살펴보는 순서에 영향을 끼치지 않습니다.
살펴본 노드가 더미 노드라면, 문자열 뒤에 0을 추가합니다. 살펴본 노드가 더미 노드가 아니라면, 문자열 뒤에 1을 추가합니다.
문자열에 저장된 이진수를 십진수로 변환합니다.
이진트리에서 리프 노드가 아닌 노드는 자신의 왼쪽 자식이 루트인 서브트리의 노드들보다 오른쪽에 있으며, 자신의 오른쪽 자식이 루트인 서브트리의 노드들보다 왼쪽에 있다고 가정합니다.

## 풀이

주어진 정수를 이진수로 변환한 후, 빈 서브트리를 0으로 채워 포화 이진트리로 만듭니다.

- 이진수의 길이를 다시 이진수로 변환하고 그 이진수의 길이를 이용하면 포화 이진트리의 높이를 구할 수 있습니다.
- "0"을 2^h - 1 - 이진수의 길이 만큼 추가합니다.

만들어진 이진트리를 이진탐색(dfs...?)을 이용하여 리프노드에 도달할 때까지 탐색합니다.

- 부모가 0이면서 자식에 1이 있는 경우, 이진트리가 아니므로 false를 반환합니다.

## 소스코드

```javascript
const binarySearch = (graph) => {
  const stack = [];

  stack.push({ start: 0, end: graph.length - 1 });

  while (stack.length > 0) {
    const { start, end } = stack.pop();
    const mid = Math.floor((start + end) / 2);
    const leftChildIdx = Math.floor((start + mid - 1) / 2);
    const rightChildIdx = Math.floor((mid + 1 + end) / 2);

    // 리프 노드에 도달
    if (start === end) {
      continue;
    }

    // 부모가 0이면서 자식에 1이 있는 경우
    if (
      graph[mid] === "0" &&
      (graph[leftChildIdx] === "1" || graph[rightChildIdx] === "1")
    ) {
      return false;
    }

    // 왼쪽 서브트리를 스택에 추가
    if (mid - 1 >= start) {
      stack.push({ start: start, end: mid - 1 });
    }

    // 오른쪽 서브트리를 스택에 추가
    if (mid + 1 <= end) {
      stack.push({ start: mid + 1, end: end });
    }
  }

  return true;
};

function solution(numbers) {
  return numbers.reduce((acc, num) => {
    const binaryNum = num.toString(2);
    const floor = binaryNum.length.toString(2).length;
    const binaryTree =
      "0".repeat(2 ** floor - 1 - binaryNum.length) + binaryNum;

    return [...acc, ~~binarySearch(binaryTree)];
  }, []);
}
```
