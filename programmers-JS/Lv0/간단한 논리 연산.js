const solution = (x1, x2, x3, x4) => (x1 || x2) && (x3 || x4);

console.log(solution(false, true, true, true)); // true
console.log(solution(true, false, false, false)); // false
