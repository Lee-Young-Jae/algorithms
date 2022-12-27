function solution(polynomial) {
  let arr = polynomial.split("+");
  let values = arr.reduce(
    (acc, cur) => {
      if (cur.includes("x")) {
        let [num, x] = cur.split("x");
        if (num === "" || num === " ") num = "1";
        return [acc[0] + Number(num), acc[1]];
      } else {
        return [acc[0], acc[1] + Number(cur)];
      }
    },
    [0, 0]
  );
  let result = [];
  if (values[0] !== 0) result.push(values[0] + "x");
  if (values[1] !== 0) result.push(values[1]);
  if (result[0] === "1x") result[0] = "x";
  if (result.length === 0) result.push("0");
  return result.join(" + ");
}

// console.log(solution("1x^2+2x^3+3x^4-4x^2")); // 3x^4+2x^3+1x^2-4x^2
// console.log(solution("1x^2+2x^3+3x^4-4x^2+1x^2")); // 3x^4+2x^3-4x^2
console.log(solution("3x + 7 + x")); // 4x+7
console.log(solution("3x + 7 + x + 3x")); // 7x + 7
console.log(solution("x + x + x")); // 3x
console.log(solution("7 + 3")); // 10
console.log(solution("7 + 0x + 0")); // 7
console.log(solution("0x + 0x + 0")); // 0
console.log(solution("0x + 1x")); // x
