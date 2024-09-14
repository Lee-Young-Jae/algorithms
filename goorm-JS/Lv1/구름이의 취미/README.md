# 구름이의 취미

[구름이의 취미](https://level.goorm.io/exam/49094/%EA%B5%AC%EB%A6%84%EC%9D%B4%EC%9D%98-%EC%B7%A8%EB%AF%B8/quiz/1)

## 문제 이해하기

처음 for문을 돌면서 연산을 했지만 연산 결과가 많아 시간초과가 났다. 그래서 부피행렬의 합을 구하는 공식을 적용하였다.

```javascript
const n = BigInt(input);
BigInt((n * (n + 1) * (n + 2)) / 2); // 부피행렬의 합
```

또한 기존 Number 타입이 표현할 수 있는 수의 범위인 `2^53 - 1` 보다 큰 수를 다루기 위해 `BigInt`를 사용하여 풀이하였다.

## 풀이

```javascript
const readline = require("readline");

(async () => {
let rl = readline.createInterface({ input: process.stdin });

for await (const line of rl) {
console.log(solution(line));
rl.close();
}

process.exit();
})();

const solution = (N) => {
let n = BigInt(N);
let result = BigInt(((n \* (n + 1n)) / 2n) \*\* 2n) % BigInt(1000000007);
return `${result}`.split("n")[0];
};
```
