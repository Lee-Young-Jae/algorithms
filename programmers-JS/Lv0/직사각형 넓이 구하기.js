function solution(dots) {
  const [minX, minY] = [
    Math.min(...dots.map((dot) => dot[0])),
    Math.min(...dots.map((dot) => dot[1])),
  ];
  const [maxX, maxY] = [
    Math.max(...dots.map((dot) => dot[0])),
    Math.max(...dots.map((dot) => dot[1])),
  ];
  return (maxX - minX) * (maxY - minY);
}

console.log(
  solution([
    [1, 1],
    [2, 1],
    [2, 2],
    [1, 2],
  ])
); // 1

console.log(
  solution([
    [-1, -1],
    [1, 1],
    [1, -1],
    [-1, 1],
  ])
); // 4
