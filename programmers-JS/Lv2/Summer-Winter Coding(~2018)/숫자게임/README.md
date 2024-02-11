# Summer/Winter Coding(~2018) 숫자 게임

[S/W Coding(~2018) > 숫자 게임](https://programmers.co.kr/learn/courses/30/lessons/12987)

## 문제 이해하기

- A와 B가 숫자를 가지고 있고, 각각의 숫자를 한번씩만 사용하여 최대한 많은 라운드를 이길 수 있는 경우의 수를 구하는 문제

## 풀이

첫 풀이는 A를 내림차 순으로 정렬 후 순회하며 B에서 A보다 큰 수를 `find` 메서드로 찾아 제거하는 방식으로 풀었지만, 효율성 테스트에서 실패했다.

```js
function solution(A, B) {
  let score = 0;
  A = A.sort((a, b) => b - a);
  A.forEach((num) => {
    const find = B.find((item) => item > num);
    if (find) {
      const tempIndex = B.indexOf(find);
      A.splice(tempIndex, 1);
      score++;
    }
  });

  return score;
}
```

두번째 풀이는 커서(포인터)를 이용하여 풀었다. A와 B를 오름차순으로 정렬 후, A와 B의 커서가 A와 B의 길이보다 작을 때 반복하며 커서가 가리키는 값이 B보다 A가 작을 경우에 `poiterB`와 `score` 그리고 `pointerA`를 증가시키고 A가 B보다 클 경우에는 `pointerB`만 증가시켜서 풀었다.

```js
function solution(A, B) {
  A = A.sort((a, b) => b - a);
  B = B.sort((a, b) => b - a);

  const pointer = { a: 0, b: 0 };

  let score = 0;
  while (pointer.a < A.length && pointer.b < B.length) {
    if (A[pointer.a] < B[pointer.b]) {
      pointer.b++;
      score++;
    }
    pointer.a++;
  }

  return score;
}
```
