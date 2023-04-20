function solution(arr) {
  const xLength = arr.length;
  const yLength = arr[0].length;

  if (xLength === yLength) return arr;

  const MaxLength = Math.max(xLength, yLength);
  const answer = Array.from({ length: MaxLength }, () =>
    Array(MaxLength).fill(0)
  );

  for (let x = 0; x < xLength; x++) {
    for (let y = 0; y < yLength; y++) {
      answer[x][y] = arr[x][y];
    }
  }

  return answer;
}

console.log(
  solution([
    [572, 22, 37],
    [287, 726, 384],
    [85, 137, 292],
    [487, 13, 876],
  ])
); // [[572, 22, 37, 0], [287, 726, 384, 0], [85, 137, 292, 0], [487, 13, 876, 0]]

console.log(
  solution([
    [57, 192, 534, 2],
    [9, 345, 192, 999],
  ])
); // [[57, 192, 534, 2], [9, 345, 192, 999], [0, 0, 0, 0], [0, 0, 0, 0]]

console.log(
  solution([
    [1, 2],
    [3, 4],
  ])
); // [[1, 2], [3, 4]]
