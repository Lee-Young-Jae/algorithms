function solution(n, a, b) {
  return ~~(Math.log2((a - 1) ^ (b - 1)) + 1);
}
