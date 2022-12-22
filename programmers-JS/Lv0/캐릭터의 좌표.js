function solution(keyinput, board) {
  const [maxX, maxY] = [~~(board[0] / 2), ~~(board[1] / 2)];
  const [minX, minY] = [-maxX, -maxY];

  let [xPos, yPos] = [0, 0];

  keyinput.forEach((key) => {
    switch (key) {
      case "left":
        if (xPos > minX) xPos--;
        break;
      case "right":
        if (xPos < maxX) xPos++;
        break;
      case "up":
        if (yPos < maxY) yPos++;
        break;
      case "down":
        if (yPos > minY) yPos--;
        break;
    }
  });

  return [xPos, yPos];
}

console.log(solution(["left", "right", "up", "right", "right"], [11, 11])); // [2, 1]
console.log(solution(["down", "down", "down", "down", "down"], [7, 9])); // [0, 4]
