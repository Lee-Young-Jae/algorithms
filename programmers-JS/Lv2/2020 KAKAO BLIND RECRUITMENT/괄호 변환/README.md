# 2020 KAKAO BLIND RECRUITMENT - 괄호 변환

## 문제 이해하기

- '(' 와 ')' 로만 이루어진 문자열이 있을 경우, '(' 의 개수와 ')' 의 개수가 같다면 이를 균형잡힌 괄호 문자열이라고 부릅니다.
  그리고 여기에 '('와 ')'의 괄호의 짝도 모두 맞을 경우에는 이를 올바른 괄호 문자열이라고 부릅니다.
  예를 들어, "(()))("와 같은 문자열은 "균형잡힌 괄호 문자열" 이지만 "올바른 괄호 문자열"은 아닙니다.
  반면에 "(())()"와 같은 문자열은 "균형잡힌 괄호 문자열" 이면서 동시에 "올바른 괄호 문자열" 입니다.

- '(' 와 ')' 로만 이루어진 문자열 w가 "균형잡힌 괄호 문자열" 이라면 다음과 같은 과정을 통해 "올바른 괄호 문자열"로 변환할 수 있습니다.

```plaintext
1. 입력이 빈 문자열인 경우, 빈 문자열을 반환합니다.
2. 문자열 w를 두 "균형잡힌 괄호 문자열" u, v로 분리합니다. 단, u는 "균형잡힌 괄호 문자열"로 더 이상 분리할 수 없어야 하며, v는 빈 문자열이 될 수 있습니다.
3. 문자열 u가 "올바른 괄호 문자열" 이라면 문자열 v에 대해 1단계부터 다시 수행합니다.
  3-1. 수행한 결과 문자열을 u에 이어 붙인 후 반환합니다.
4. 문자열 u가 "올바른 괄호 문자열"이 아니라면 아래 과정을 수행합니다.
  4-1. 빈 문자열에 첫 번째 문자로 '('를 붙입니다.
  4-2. 문자열 v에 대해 1단계부터 재귀적으로 수행한 결과 문자열을 이어 붙입니다.
  4-3. ')'를 다시 붙입니다.
  4-4. u의 첫 번째와 마지막 문자를 제거하고, 나머지 문자열의 괄호 방향을 뒤집어서 뒤에 붙입니다.
  4-5. 생성된 문자열을 반환합니다.
```

## 풀이

먼저 주어진 문자열이 올바른 괄호 문자열인지 확인하는 `isBalance` 함수를 작성했다.

> 계산기를 만들때 사용했던 괄호 검사 알고리즘을 떠올려 보며... 작성했다.

```js
const isBalance = (string) => {
  const queue = [];
  const u = [];
  const brackets = string.split("");
  for (let index in brackets) {
    const current = brackets[index];
    if (current === "(") queue.push(current);
    if (current === ")") {
      if (queue.length <= 0) return false;
      if (queue.shift() === ")") return false;
    }
    u.push(current);
  }
  return true;
};
```

그리고 주어진 문자열을 u, v로 나누는 `splitSV` 함수를 작성했다.

```js
const splitUV = (w) => {
  const u = [];
  let balanceCount = {
    "(": 0,
    ")": 0,
  };
  const brackets = w.split("");
  for (let index in brackets) {
    const current = brackets[index];
    u.push(current);
    balanceCount[current] += 1;

    if (balanceCount["("] === balanceCount[")"]) {
      return [u.join(""), brackets.slice(u.length).join("")];
    }
  }
};
```

세번째는 4-4번 조건을 풀기 위해 `reverseMiddle` 함수를 작성했다.
주의할 점은 문자열을 뒤집는것`reverse()`이 아닌 `(` 는 `)`로, `)`는 `(`로 바꿔주어야 한다.

> 이 부분을 놓쳐서 테스트 케이스 12~ 를 통과하지 못했다.

```js
const reverseMiddle = (string) => {
  const middle = string.slice(1, -1);
  const reversed = middle
    .split("")
    .map((item) => (item === "(" ? ")" : "("))
    .join("");
  return reversed;
};
```

마지막으로 주어진 문자열을 재귀적으로 처리하는 로직을 작성했다.

```js
function solution(p) {
  if (isBalance(p)) return p;
  if (p === "") return "";

  let result = "";
  let [u, v] = splitUV(p);

  if (isBalance(u)) {
    result += u + solution(v);
  } else {
    result += "(" + solution(v) + ")" + reverseMiddle(u);
  }

  return result;
}
```

> 처음에 문제를 나만의 방식으로 풀려고 했지만, 정답은 그냥 문제 그대로 구현하는 것이 맞는 접근방법이였다. 조건을 저렇게 제시해 주지 않았다면 4~5레벨 문제로 분류되었을 것 같다. 다행인건 시간복잡도 제한이 따로 없어서 큰 고민없이 풀 수 있었다.
