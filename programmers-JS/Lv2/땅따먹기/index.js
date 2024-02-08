function solution(land) {
  const dp = Array.from({ length: land.length }, () => Array(4).fill(0));
  dp[0] = land[0];
  for (let i = 0; i < land.length - 1; i++) {
    for (let j = 0; j < 4; j++)
      for (let k = 0; k < 4; k++) {
        if (j === k) continue;
        const temp = dp[i][j] + land[i + 1][k];
        if (temp > dp[i + 1][k]) dp[i + 1][k] = temp;
      }
  }
  return Math.max(...dp.at(-1));
}

console.log(
  solution([
    [1, 2, 3, 5],
    [5, 6, 7, 8],
    [4, 3, 2, 1],
  ])
); // 16
console.log(
  solution([
    [1, 2, 3, 5],
    [5, 6, 7, 100],
    [4, 3, 2, 1],
  ])
); // 107

console.log(
  solution([
    [0, 1, 0, 0],
    [0, 100, 0, 0],
    [0, 0, 0, 0],
    [1, 2, 3, 5],
  ])
); // 105
