# 연속된 부분 수열의 합

[연속된 부분 수열의 합](https://school.programmers.co.kr/learn/courses/30/lessons/178870)

## 문제 이해하기

비내림차순으로 정렬된 수열이 주어질 때, 다음 조건을 만족하는 부분 수열을 찾으려고 합니다.

기존 수열에서 임의의 두 인덱스의 원소와 그 사이의 원소를 모두 포함하는 부분 수열이어야 합니다.
부분 수열의 합은 k입니다.
합이 k인 부분 수열이 여러 개인 경우 길이가 짧은 수열을 찾습니다.
길이가 짧은 수열이 여러 개인 경우 앞쪽(시작 인덱스가 작은)에 나오는 수열을 찾습니다.
수열을 나타내는 정수 배열 sequence와 부분 수열의 합을 나타내는 정수 k가 매개변수로 주어질 때, 위 조건을 만족하는 부분 수열의 시작 인덱스와 마지막 인덱스를 배열에 담아 return 하는 solution 함수를 완성해주세요. 이때 수열의 인덱스는 0부터 시작합니다.

## 풀이

첫번째 풀이는 이중 for문을 사용하여 모든 경우의 수를 탐색했다. 당연하지만 시간복잡도가 O(n^2)이므로 효율성 테스트 실패

```javascript
function solution(sequence, k) {
  const result = [];
  let minLength = Infinity;
  const length = sequence.length;
  for (let i = length - 1; i >= 0; i--) {
    i = Number(i);
    let sum = 0;
    for (let j = i; j < length; j++) {
      const current = sequence[j];
      sum += current;
      if (sum > k) break;
      if (sum === k) {
        minLength = Math.min(minLength, j - i);
        result.push([i, j]);
      }
    }
  }

  if (result.length === 1) return result[0];
  return result.filter(([a, b]) => b - a === minLength).at(-1);
}
```

두번째 풀이는 투포인터를 사용하여 풀이했다. 시간복잡도는 O(n)이다.
다만 `sequenceSum`를 구하는 과정에서 처음엔 reduce를 사용했는데 이상하게 효율성 테스트에서 실패했다.

```javascript
const sequenceSum = sequence.reduce(
  (acc, cur) => [...acc, acc.at(-1) + cur],
  [0]
);
```

> reduce에서 return으로 전개연산을 하게 되면 O(n^2)가 된다고 한다.

그래서 `sequenceSum`을 구하는 과정을 forEach로 변경했더니 통과했다.

```javascript
function solution(sequence, k) {
  let result = [];
  let minLength = Infinity;
  const sequenceSum = [0];
  sequence.forEach((item) => {
    sequenceSum.push(sequenceSum.at(-1) + item);
  });

  let left = 0;
  let right = 0;
  while (left <= right) {
    let sum = sequenceSum[right] - sequenceSum[left];
    if (sum === k) {
      const currentLength = right - left;
      if (minLength > currentLength) {
        result = [left, right - 1];
        minLength = Math.min(minLength, currentLength);
      }
    }

    if (sum < k) {
      right++;
    } else {
      left++;
    }
  }

  return result;
}
```
