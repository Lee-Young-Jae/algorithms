# 시소짝궁

[시소짝궁](https://school.programmers.co.kr/learn/courses/30/lessons/152996)

## 문제 이해하기

- 2 ~ 100,000개의 몸무게로 이루어진 배열 `weights`가 주어진다.
- 몸무게의 3/2, 4/2, 4/3 배가 되는 몸무게를 가진 사람들은 짝궁이 될 수 있다.

## 풀이

최초 풀이는 완전탐색으로 풀었다. 하지만 당연하게도 시간초과가 발생했다.

- 몸무게의 2배, 3배, 4배를 구한 배열을 만든다.
- 이중 반복문을 통해 각각의 몸무게에 대해 다른 몸무게와 비교한다.
- 비교할 때, `some`을 사용하여 하나라도 일치하는 값이 있으면 `answer`를 증가시킨다.

```javascript
function solution(weights) {
  let answer = 0;
  const sisoWeights = weights.map((weight) => [
    weight * 2,
    weight * 3,
    weight * 4,
  ]);

  for (let i in weights) {
    for (let j = 0; j < i; j++) {
      if (i === j) continue;
      const isMatched = sisoWeights[i].some((item) =>
        sisoWeights[j].includes(item)
      );
      answer = isMatched ? answer + 1 : answer;
    }
  }
  return answer;
}
```

두번째 풀이는 Dictionary를 사용하는 방법으로 접근했다.

- 몸무게의 개수를 세어 Dictionary로 만든다.
- 몸무게를 오름차순으로 정렬하여 탐색한다. (3/2, 4/2, 4/3 배가 되는 몸무게를 찾기 위해)
- 정렬된 몸무게를 순회하며, 3/2, 4/2, 4/3 배가 되는 몸무게가 있는지 확인하고 있다면 `result`에 추가힌다.
- 같은 몸무게가 여러개 있을 경우 본인 몸무게를 제외한 나머지를 `result`에 추가한다.
- 해당 몸무게의 개수를 1개 줄인다. (이미 사용한 몸무게는 다시 사용할 수 없다.)

```javascript
function solution(weights) {
  let result = 0;
  const WeightsDictionary = weights.reduce(
    (acc, cur) => ({
      ...acc,
      [cur]: acc[cur] ? acc[cur] + 1 : 1,
    }),
    {}
  );

  weights
    .sort((a, b) => a - b)
    .forEach((w) => {
      if (WeightsDictionary[w] > 1) result += WeightsDictionary[w] - 1;
      if (WeightsDictionary[(w * 3) / 2] > 0)
        result += WeightsDictionary[(w * 3) / 2];
      if (WeightsDictionary[(w * 4) / 2] > 0)
        result += WeightsDictionary[(w * 4) / 2];
      if (WeightsDictionary[(w * 4) / 3] > 0)
        result += WeightsDictionary[(w * 4) / 3];
      WeightsDictionary[w] -= 1;
    });

  return result;
}
```
