function solution(l, r) {
  const result = [];
  for (let i = l; i <= r; i++) {
    const str = String(i);
    if (str.split("").every((el) => el % 5 === 0)) {
      result.push(i);
    }
  }
  return result.length === 0 ? [-1] : result;
}

console.log(solution(5, 555)); // [5, 50, 55, 500, 505, 550, 555]
console.log(solution(10, 20)); // [-1]
