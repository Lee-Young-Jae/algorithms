function solution(n) {
  let answer = 0;
  let fibo = [0, 1];

  for (let i = 2; i <= n; i++) {
    fibo[i] = (fibo[i - 1] + fibo[i - 2]) % 1234567;
  }

  answer = fibo[n];

  return answer;
}

console.log(solution(3)); // 2
console.log(solution(5)); // 5
