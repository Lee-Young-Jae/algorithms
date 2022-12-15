function solution(n) {
  const dp = [1, 2];
  for (let i = 2; i < n; i++) {
    dp[i] = (dp[i - 1] + dp[i - 2]) % 1234567;
  }
  return dp[n - 1];
}

console.log(solution(1)); // 1
console.log(solution(2)); // 2
console.log(solution(3)); // 3
console.log(solution(4)); // 5
console.log(solution(5)); // 8
// 1 1 1 1 1
// 1 1 1 2
// 1 1 2 1
// 1 2 1 1
// 2 1 1 1
// 2 1 2
// 2 2 1
// 1 2 2
console.log(solution(6)); // 13
// 1 1 1 1 1 1
// 1 1 1 1 2
// 1 1 1 2 1
// 1 1 2 1 1
// 1 2 1 1 1
// 2 1 1 1 1
// 2 1 1 2
// 2 1 2 1
// 2 2 1 1
// 1 2 2 1
// 1 1 2 2
// 1 2 1 2
// 2 2 2
