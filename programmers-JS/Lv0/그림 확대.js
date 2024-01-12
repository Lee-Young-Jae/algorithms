function solution(picture, k) {
  const result = new Array(picture.length * k).fill("");
  for (let i = 0; i < picture.length; i++) {
    for (let j = 0; j < picture[i].length; j++) {
      for (let l = 0; l < k; l++) {
        result[i * k + l] += picture[i][j].repeat(k);
      }
    }
  }
  return result;
}

console.log(
  solution(
    [
      ".xx...xx.",
      "x..x.x..x",
      "x...x...x",
      ".x.....x.",
      "..x...x..",
      "...x.x...",
      "....x....",
    ],
    2
  )
); // ["..xxxx......xxxx..", "..xxxx......xxxx..", "xx....xx..xx....xx", "xx....xx..xx....xx", "xx......xx......xx", "xx......xx......xx", "..xx..........xx..", "..xx..........xx..", "....xx......xx....", "....xx......xx....", "......xx..xx......", "......xx..xx......", "........xx........", "........xx........"]
console.log(solution(["x.x", ".x.", "x.x"], 3)); // ["xxx...xxx", "xxx...xxx", "xxx...xxx", "...xxx...", "...xxx...", "...xxx...", "xxx...xxx", "xxx...xxx", "xxx...xxx"]
