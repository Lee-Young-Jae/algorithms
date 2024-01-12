// function solution(n) {
//   var answer = 0;
//   const dp = [1, 2];

//   for (let i = 2; i < n; i++) {
//     dp[i] = (dp[i - 1] + dp[i - 2]) % 1000000007;
//   }
//   answer = dp[n - 1];
//   return answer;
// } // 시간 초과 코드

function solution(n) {
  const dp = [];
  dp[0] = 1;
  dp[1] = 1;

  const mod = 10 ** 9 + 7;
  for (let i = 2; i <= n; i++) {
    dp[i] = (dp[i - 2] + dp[i - 1]) % mod;
  }

  return dp[n];
}

console.log(solution(4)); // 5
