const isDuplicationWin = (board) => {
  const win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  let winDict = {};
  win.forEach((array) => {
    const [a, b, c] = array;
    if (board[a] === board[b] && board[b] === board[c] && board[a] !== ".") {
      if (winDict[board[a]] === undefined) {
        winDict[board[a]] = 1;
      } else {
        winDict[board[a]] += 1;
      }
    }
  });

  let winCount = 0;
  for (let key in winDict) {
    winCount += winDict[key];
  }

  if (winCount > 1) {
    if (
      (winDict["X"] === 2 && winDict["O"] === undefined) ||
      (winDict["X"] === undefined && winDict["O"] === 2)
    ) {
      return false;
    }
    return true;
  } else if (winCount === 1) {
    const oCount = board.filter((char) => char === "O").length;
    const xCount = board.filter((char) => char === "X").length;
    const winner = Object.keys(winDict)[0];
    if (winner === "O" && oCount - xCount === 1) {
      return false;
    }
    if (winner === "X" && oCount === xCount) {
      return false;
    }
    return true;
  }
  return false;
};

const isWrongOrder = (board) => {
  const xCount = board.filter((char) => char === "X").length;
  const oCount = board.filter((char) => char === "O").length;

  if (xCount - oCount > 0 || oCount - xCount > 1) {
    return true;
  } else {
    return false;
  }
};

function solution(board) {
  const boardArray = board.join("").split("");

  if (isDuplicationWin(boardArray) || isWrongOrder(boardArray)) {
    return 0;
  }

  return 1;
}

console.log(solution(["O.X", ".O.", "..X"])); // 1
console.log(solution(["OOO", "...", "XXX"])); // 0
console.log(solution(["...", ".X.", "..."])); // 0
console.log(solution(["...", "...", "..."])); // 1
console.log(solution(["OOO", "XOX", "XXO"])); // 0
console.log(solution(["XXX", "OXO", "OOX"])); // 0
