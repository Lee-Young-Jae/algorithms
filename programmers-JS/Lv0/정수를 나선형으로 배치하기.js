function solution(n) {
  const answer = Array.from({ length: n }, () => Array(n).fill(0));
  let direction = "right";
  let x = 0;
  let y = 0;

  for (let i = 1; i <= n * n; i++) {
    answer[x][y] = i;
    if (direction === "right") {
      if (y + 1 === n || answer[x][y + 1] !== 0) {
        direction = "down";
        x++;
      } else {
        y++;
      }
    } else if (direction === "down") {
      if (x + 1 === n || answer[x + 1][y] !== 0) {
        direction = "left";
        y--;
      } else {
        x++;
      }
    } else if (direction === "left") {
      if (y - 1 < 0 || answer[x][y - 1] !== 0) {
        direction = "up";
        x--;
      } else {
        y--;
      }
    } else if (direction === "up") {
      if (x - 1 < 0 || answer[x - 1][y] !== 0) {
        direction = "right";
        y++;
      } else {
        x--;
      }
    }
  }

  return answer;
}

console.log(solution(4)); // [[1, 2, 3, 4], [12, 13, 14, 5], [11, 16, 15, 6], [10, 9, 8, 7]]
console.log(solution(5)); // [[1, 2, 3, 4, 5], [16, 17, 18, 19, 6], [15, 24, 25, 20, 7], [14, 23, 22, 21, 8], [13, 12, 11, 10, 9]]
