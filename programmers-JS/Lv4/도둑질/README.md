# 도둑질

[프로그래머스\_도둑질](https://programmers.co.kr/learn/courses/30/lessons/42897)

## 문제 이해하기

- 도둑이 집을 털 때, 인접한 두 집을 털면 경보가 울리게 된다.
- 집이 원형으로 이어져 있으므로, 첫번째 집과 마지막 집은 인접하다.
- 각 집이 가진 `Money` 배열이 주어질 때 도둑이 훔칠 수 있는 돈의 최댓값을 구하는 문제

[Summer/Winter Coding(2018)의 스티커 모으기(2)](<https://github.com/Lee-Young-Jae/algorithms/tree/master/programmers-JS/Lv3/Summer-Winter%20Coding(~2018)/%EC%8A%A4%ED%8B%B0%EC%BB%A4%20%EB%AA%A8%EC%9C%BC%EA%B8%B0(2)>)와 동일한 문제다.

- 집들의 길이가 1,000,000이므로, dp로 풀이해야한다.
- 첫번째 집을 털었을 때, 마지막 집을 털지 않는 경우와 마지막 집을 털었을 때, 첫번째 집을 털지 않는 경우로 나누어 풀이하였다.
  - `money1` 배열은 마지막 집을 털었다고 가정, `money[0]`을 0으로 초기화
  - `money2` 배열은 첫번째 집을 털었다고 가정, `money[n-1]`을 0으로 초기화
  - `dp1[0]`은 `money1[0]`, `dp1[1]`은 `money1[1]`과 `money1[0]` 중 큰 값 으로 초기화
  - `dp2[0]`은 `money2[0]`, `dp2[1]`은 `money2[1]`과 `money2[0]` 중 큰 값 으로 초기화

### 점화식

예제가 [1,2,3,1,4,999] 라고 했을 때

cursor가 0일 때, 최댓값은 1 => `dp[0] = 1`
cursor가 1일 때, 최댓값은 1 vs 2 = 2 => `dp[1] = 2`
cursor가 2일 때, 최댓값은 2 vs 1+3 => `dp[1] vs dp[0] + money[2]` => `dp[2] = 4`
cursor가 3일 때, 최댓값은 1+3 vs 2+1 = 4 => `dp[2] vs dp[1] + money[3]` => `dp[3] = 4`
cursor가 4일 때, 최댓값은 1+3 vs 1+3+4 = 8 => `dp[3] vs dp[2] + money[4]` => `dp[4] = 8`
cursor가 5일 때, 최댓값은 1+3+4 vs 1+3+999 = 1003 => `dp[4] vs dp[3] + money[5]` => `dp[5] = 1003`

- `dp[i] = Math.max(dp[i-1], dp[i-2] + money[i])`
  or
- `dp[i+2] = Math.max(dp[i+1], dp[i] + money[i+2])`

## 풀이

```javascript
function solution(money) {
  const length = money.length;
  const money1 = [...money];
  money1[0] = 0;
  const money2 = [...money];
  money2[length - 1] = 0;

  const dp1 = new Array(length).fill(0);
  const dp2 = new Array(length).fill(0);

  dp1[0] = money1[0];
  dp1[1] = money1[1];
  dp2[0] = money2[0];
  dp2[1] = Math.max(money2[0], money2[1]);

  for (let i = 0; i < length - 2; i++) {
    dp1[i + 2] = Math.max(dp1[i + 1], dp1[i] + money1[i + 2]);
  }

  for (let i = 0; i < length - 2; i++) {
    dp2[i + 2] = Math.max(dp2[i + 1], dp2[i] + money2[i + 2]);
  }

  return Math.max(dp1.at(-1), dp2.at(-1));
}
```
