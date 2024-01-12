function solution(ineq, eq, n, m) {
  return eval(`${n} ${ineq} ${m}`) ? 1 : 0;
}

console.log(solution("<", "=", 20, 50)); // 1
console.log(solution(">", "!", 41, 78)); // 0
