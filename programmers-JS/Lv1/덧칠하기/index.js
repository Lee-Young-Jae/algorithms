function solution(n, m, section) {
  let count = 0;
  let lastPainted = 0;
  for (let item of section) {
    if (lastPainted <= item) {
      count++;
      lastPainted = item + m;
    }
  }
  return count;
}
