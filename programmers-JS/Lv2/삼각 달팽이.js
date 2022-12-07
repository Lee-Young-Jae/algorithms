function solution(n) {
  let arr = Array.from(Array(n), () => Array(n).fill(0));
  let x = -1;
  let y = 0;
  let num = 1;
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n; j++) {
      if (i % 3 === 0) x++;
      else if (i % 3 === 1) y++;
      else if (i % 3 === 2) {
        x--;
        y--;
      }
      arr[x][y] = num++;
    }
  }
  return arr.flat().filter((number) => number !== 0);
}
