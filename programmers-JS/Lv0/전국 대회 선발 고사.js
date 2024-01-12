function solution(rank, attendance) {
  const [a, b, c] = rank
    .map((r, i) => {
      if (attendance[i]) {
        return [r, i];
      } else {
        return Infinity;
      }
    })
    .filter((r) => r !== Infinity)
    .sort((a, b) => a[0] - b[0])
    .splice(0, 3);

  return a[1] * 10000 + b[1] * 100 + c[1];
}

console.log(
  solution([3, 7, 2, 5, 4, 6, 1], [false, true, true, true, true, false, false])
); // 20403

console.log(solution([1, 2, 3], [true, true, true])); // 102

console.log(
  solution([6, 1, 5, 2, 3, 4], [true, false, true, false, false, true])
); // 50200
