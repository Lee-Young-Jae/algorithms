function solution(s) {
  const stack = [];
  s.split(" ").forEach((item) => {
    if (item === "Z") {
      stack.pop();
    } else {
      stack.push(item);
    }
  });

  return stack.length === 0
    ? 0
    : stack.reduce((a, b) => Number(a) + Number(b), 0);
}

console.log(solution("1 2 Z 3")); // 4
console.log(solution("10 20 30 40")); // 100
console.log(solution("10 Z 20 Z 1")); // 1
console.log(solution("10 Z 20 Z")); // 0
console.log(solution("-1 -2 -3 Z")); // -3
