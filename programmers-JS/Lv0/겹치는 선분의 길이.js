function solution(lines) {
  let answer = 0;
  const obj = {};

  lines.map((line) => {
    const [start, end] = line;
    for (let i = start; i < end; i++) {
      obj[i] = obj[i] ? obj[i] + 1 : 1;
    }
  });

  for (let key in obj) {
    if (obj[key] > 1) answer++;
  }

  return answer;
}

console.log(
  solution([
    [0, 1],
    [2, 5],
    [3, 9],
  ])
); // 2
console.log(
  solution([
    [-1, 1],
    [1, 3],
    [3, 9],
  ])
); // 0
console.log(
  solution([
    [0, 5],
    [3, 9],
    [1, 10],
  ])
); // 8
