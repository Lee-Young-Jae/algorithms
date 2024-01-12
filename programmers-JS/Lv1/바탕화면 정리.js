function solution(wallpaper) {
  let minX = Infinity;
  let minY = Infinity;
  let maxX = 0;
  let maxY = 0;

  wallpaper.forEach((row, y) => {
    row.split("").forEach((char, x) => {
      if (char === "#") {
        minX = Math.min(minX, x);
        minY = Math.min(minY, y);
        maxX = Math.max(maxX, x);
        maxY = Math.max(maxY, y);
      }
    });
  });

  return [minY, minX, maxY + 1, maxX + 1];
}

console.log(solution([".#...", "..#..", "...#."])); // [0, 1, 3, 4]
console.log(
  solution([
    "..........",
    ".....#....",
    "......##..",
    "...##.....",
    "....#.....",
  ])
); // [1, 3, 5, 8]
console.log(
  solution([
    ".##...##.",
    "#..#.#..#",
    "#...#...#",
    ".#.....#.",
    "..#...#..",
    "...#.#...",
    "....#....",
  ])
); // [0, 0, 7, 9]

console.log(solution(["..", "#."])); // [1, 0, 2, 1]
