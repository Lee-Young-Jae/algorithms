function solution(board, k) {
  let answer = 0;
  for (let x = 0; x < board.length; x++) {
    for (let y = 0; y < board[0].length; y++) {
      if (x + y <= k) answer += board[x][y];
    }
  }
  return answer;
}

console.log(
  solution(
    [
      [0, 1, 2],
      [1, 2, 3],
      [2, 3, 4],
      [3, 4, 5],
    ],
    2
  )
); // 8
