function solution(board) {
  let answer = 0;

  const boardSize = {
    width: board[0].length,
    height: board.length,
  };

  const boardWithDanger = Array.from(Array(boardSize.height + 2), () =>
    Array(boardSize.width + 2).fill(0)
  );

  for (let i = 0; i < boardSize.height; i++) {
    for (let j = 0; j < boardSize.width; j++) {
      if (board[i][j] === 1) {
        boardWithDanger[i][j] = 1;
        boardWithDanger[i + 1][j] = 1;
        boardWithDanger[i][j + 1] = 1;
        boardWithDanger[i + 1][j + 1] = 1;
        boardWithDanger[i + 2][j] = 1;
        boardWithDanger[i][j + 2] = 1;
        boardWithDanger[i + 2][j + 1] = 1;
        boardWithDanger[i + 1][j + 2] = 1;
        boardWithDanger[i + 2][j + 2] = 1;
      }
    }
  }

  boardWithDanger.forEach((row, rowIndex) => {
    row.forEach((col, colIndex) => {
      if (
        col === 0 &&
        rowIndex !== 0 &&
        colIndex !== 0 &&
        rowIndex !== boardSize.height + 1 &&
        colIndex !== boardSize.width + 1
      ) {
        answer++;
      }
    });
  });

  return answer;
}

console.log(
  solution([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0],
  ])
); // 16
console.log(
  solution([
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0],
  ])
); // 13
console.log(
  solution([
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
    [1, 1, 1, 1, 1, 1],
  ])
); // 0
