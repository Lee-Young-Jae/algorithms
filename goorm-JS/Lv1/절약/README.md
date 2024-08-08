# 구름LEVEL Lv1 - 절약

- [절약](https://level.goorm.io/exam/171192/%EC%A0%88%EC%95%BD/quiz/1)

## 구현

문제 요구사항에 맞게 구현한다.

### 이전코드

요구사항에 있는 _만약 구름이가 지출해야 할 돈이 현재 가지고 있는 돈보다 크다면 이후의 수입과는 관계없이 절약에 실패한 것으로 판단한다_
부분을 만족하지 못해서 테스트 통과에 실패했다.

```js
// Run by Node.js
const readline = require("readline");

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  let input = [];
  for await (const line of rl) {
    input.push(line);
    rl.close();
  }

  const N = input.shift();
  const result = solution(+N, input);
  console.log(result);

  process.exit();
})();

const MESSAGE = {
  SUCCESS: "success",
  FAIL: "fail",
};

const solution = (N, information) => {
  const money = information
    .map((item) => item.split(" "))
    .reduce(
      (acc, [type, value]) =>
        type === "in" ? acc + Number(value) : acc - Number(value),
      0
    );
  if (money >= 0) {
    return MESSAGE.SUCCESS;
  }
  return MESSAGE.FAIL;
};
```

### 수정한 코드

```js
// Run by Node.js
const readline = require("readline");

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  let input = [];
  for await (const line of rl) {
    input.push(line);
    rl.close();
  }
  const N = input.shift();
  const result = solution(+N, input);
  console.log(result);

  process.exit();
})();

const MESSAGE = {
  SUCCESS: "success",
  FAIL: "fail",
};

const checkFail = (value) => value < 0;

const solution = (N, information) => {
  const account = information.map((item) => item.split(" "));
  let money = 0;
  for (let [type, value] of account) {
    if (type === "in") {
      money += Number(value);
    } else {
      money -= Number(value);
    }
    if (checkFail(money)) {
      return MESSAGE.FAIL;
    }
  }

  return MESSAGE.SUCCESS;
};
```
