function solution(m, n, puddles) {
  const dp = Array.from({ length: n }, () => new Array(m).fill(0));
  const denominator = 1000000007;
  puddles.forEach(([x, y]) => {
    dp[y - 1][x - 1] = -1;
  });

  dp.forEach((item, i) =>
    item.forEach((area, j) => {
      if (i === 0 && j === 0) {
        dp[i][j] = 1;
      } else if (i === 0) {
        if (area !== -1) {
          dp[i][j] = dp[i][j - 1];
        } else {
          dp[i][j] = -1;
        }
      } else if (j === 0) {
        if (area !== -1) {
          dp[i][j] = dp[i - 1][j];
        } else {
          dp[i][j] = -1;
        }
      } else {
        const top = dp[i - 1][j];
        const left = dp[i][j - 1];
        if (area === -1) {
        } else if (top === -1 && left === -1) {
          dp[i][j] = -1;
        } else if (top === -1) {
          dp[i][j] = dp[i][j - 1];
        } else if (left === -1) {
          dp[i][j] = dp[i - 1][j];
        } else {
          dp[i][j] = (top + left) % denominator;
        }
      }
    })
  );
  if (dp[n - 1][m - 1] === -1) return 0;
  return dp[n - 1][m - 1];
}
