const rotate90Matrix = (origin) => {
  const result = new Array(origin[0].length).fill([]);
  origin.forEach((rows, i) => {
    rows.forEach((row, j) => {
      result[j] = [row, ...result[j]];
    });
  });

  return result;
};

const isQuadSame = (a, b, c, d) => {
  if (a === "" || b === "" || c === "" || d === "") return false;
  return a === b && b === c && c === d;
};

function solution(m, n, board) {
  board = rotate90Matrix(board.map((rows) => rows.split("")));
  let deletedSameCharacter = [];

  let result = 0;
  do {
    const rowsLength = board.length - 1;
    const rowLength = board[0].length - 1;

    deletedSameCharacter = board.map((rows) => rows.map(() => false));

    board.forEach((rows, i) => {
      rows.forEach((row, j) => {
        if (!(i === rowsLength || j === rowLength)) {
          if (
            isQuadSame(
              board[i][j],
              board[i][j + 1],
              board[i + 1][j],
              board[i + 1][j + 1]
            )
          ) {
            deletedSameCharacter[i][j] = true;
            deletedSameCharacter[i][j + 1] = true;
            deletedSameCharacter[i + 1][j] = true;
            deletedSameCharacter[i + 1][j + 1] = true;
          }
        }
      });
    });

    deletedSameCharacter.forEach((rows, i) => {
      rows.forEach((row, j) => {
        if (row) {
          result++;
          board[i][j] = "";
        }
      });
    });

    board = board.map((rows) => {
      const length = rows.length;
      const deletedRows = rows.join("").split("");
      const empty = new Array(length - deletedRows.length).fill("");
      return [...deletedRows, ...empty];
    });
  } while (
    !deletedSameCharacter.every((rows) => rows.every((row) => row === false))
  );

  return result;
}

console.log(solution(4, 5, ["CCBDE", "AAADE", "AAABF", "CCBBF"])); // 14
console.log(
  solution(6, 6, ["TTTANT", "RRFACC", "RRRFCC", "TRRRAA", "TTMMMF", "TMMTTJ"])
); // 15
