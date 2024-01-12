function solution(q, r, code) {
  return code
    .split("")
    .reduce((acc, cur, index) => (index % q === r ? acc + cur : acc), "");
}

console.log(solution(3, 1, "qjnwezgrpirldywt")); // "jerry"
console.log(solution(1, 0, "programmers")); // "programmers"
