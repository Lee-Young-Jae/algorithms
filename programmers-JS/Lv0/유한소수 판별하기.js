function solution(a, b) {
  return (a / b + "").length >= 16 ? 2 : 1;
}
console.log(solution(7, 20)); // 1 유한소수
console.log(solution(11, 22)); // 1 유한소수
console.log(solution(12, 21)); // 2 무한소수
