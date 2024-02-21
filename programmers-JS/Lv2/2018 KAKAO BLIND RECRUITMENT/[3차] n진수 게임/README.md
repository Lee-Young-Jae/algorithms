# [3차] n진수 게임

[n진수 게임](https://programmers.co.kr/learn/courses/30/lessons/17687)

## 문제 이해하기

- 진법 변환을 통해 n진수로 변환한 수를 순서대로 나열하고, t개의 숫자를 차례대로 말하면 된다.

## 풀이

최초 풀이는 max까지의 n진수를 구한 뒤, 순서와 p의 순서가 같을 때마다 결과에 추가하는 방식으로 풀었다. 하지만 효율성 테스트에서 실패했다.

```javascript
function solution(n, t, m, p) {
  const max = (t - 1) * m + p;
  const N진수 = new Array(max)
    .fill(0)
    .reduce((acc, _, index) => [...acc, ...index.toString(n).split("")], []);

  let result = "";
  let 순서 = 1;
  let index = 0;
  while (result.length < t) {
    if (순서 > m) 순서 = 1;
    if (순서 === p) {
      result += N진수[index].toUpperCase();
    }
    순서++;
    index++;
  }

  return result;
}
```

두번째 풀이는 max까지의 n진수를 구하는 과정을 조금 수정하였다.

```javascript
function solution(n, t, m, p) {
  const max = (t - 1) * m + p;
  const N진수 = Array.from({ length: t * m }, (_, index) =>
    index.toString(n).split("")
  ).flat();

  let result = "";
  let 순서 = 1;
  let index = 0;
  while (result.length < t) {
    if (순서 > m) 순서 = 1;
    if (순서 === p) {
      result += N진수[index].toUpperCase();
    }
    순서++;
    index++;
  }

  return result;
}
```

reduce 안에서 스프레드 연산자를 사용하는 것에서 Array.from을 사용했고 reduce를 사용하지 않고 flat을 사용했다.
시간적인 측면에서 거의 비슷한 효율성을 보일것이라고 생각했지만 두번째 풀이에서 생각보다 쉽게 효율성 테스트를 통과했다.
첫번째 풀이에선 두번의 루프를 도는것에 반해 두번째 풀이에선 하나의 루프에서 배열을 생성하고, 초기화 하기 때문이라고 생각된다.
