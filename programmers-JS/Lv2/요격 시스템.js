function solution(targets) {
  let result = 1;
  targets.sort((a, b) => b[0] - a[0]);

  const first = targets.shift();
  let standard = first[0];

  targets.forEach((item) => {
    const [start, end] = item;
    if (end <= standard) {
      result += 1;
      standard = start;
    }
  });
  return result;
}

console.log(
  solution([
    [4, 5],
    [4, 8],
    [10, 14],
    [11, 13],
    [5, 12],
    [3, 7],
    [1, 4],
  ])
); // 3
