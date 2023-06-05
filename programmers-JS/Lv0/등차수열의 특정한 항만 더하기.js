function solution(a, d, included) {
  return included.reduce(
    (acc, isTrue) => {
      const [arithmetic, result] = acc;

      return isTrue
        ? [arithmetic + d, result + arithmetic]
        : [arithmetic + d, result];
    },
    [a, 0]
  )[1];
}

console.log(solution(3, 4, [true, false, false, true, true])); // 37
console.log(solution(7, 1, [false, false, false, true, false, false, false])); // 10
