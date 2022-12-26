function solution(n) {
  let answer = 0;
  if (n === 1) return 1;

  for (let i = 1; i <= n; i++) {
    while (answer % 3 === 0 || answer.toString().includes("3")) {
      answer += 1;
    }
    answer += 1;
  }
  return answer - 1;
}

console.log(solution(1)); // 1
console.log(solution(2)); // 2
console.log(solution(3)); // 4
console.log(solution(4)); // 5
console.log(solution(5)); // 7
console.log(solution(6)); // 8
console.log(solution(7)); // 10
console.log(solution(8)); // 11
console.log(solution(9)); // 14
console.log(solution(10)); // 16
console.log(solution(15)); // 25
console.log(solution(40)); // 76
