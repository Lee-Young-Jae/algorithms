function solution(balls, share) {
  let answer = 1;
  for (let i = 0; i < share; i++) {
    answer *= balls - i;
    answer /= i + 1;
  }
  return answer;
}

console.log(solution(3, 2)); // 3
console.log(solution(5, 3)); // 10

// 1 1 1 1 1
// (111) 11
// 1 (111) 1
// 1 1 (111)
// (11) 1 (1) 1
// (11) 1 1 (1)
// 1 (11) 1 (1)
// (1) 1 (11) 1
// (1) 1 1 (11)
// 1 (1) 1 (11)
// (1) 1 (1) 1 (1)

// 공식은
// nCr = n! / r! * (n-r)!
