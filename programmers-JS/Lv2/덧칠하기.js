function solution(n, m, section) {
  let answer = 0;
  let lastSection = 0;
  section.forEach((num) => {
    if (num > lastSection) {
      answer += 1;
      lastSection = num + m - 1;
    }
  });
  return answer;
}

console.log(solution(8, 4, [2, 3, 6])); // 2
console.log(solution(5, 4, [1, 3])); // 1
console.log(solution(4, 1, [1, 2, 3, 4])); // 4
