function solution(sides) {
  const max = Math.max(...sides);
  const min = Math.min(...sides);
  return 2 * (max + min) - 2 * max - 1;
}

console.log(solution([1, 2])); // 1
// 2
console.log(solution([3, 6])); // 5
// 4, 5, 6
// 7, 8
console.log(solution([11, 7])); // 13
// 5, 6, 7, 8, 9, 10, 11
// 12, 13, 14, 15, 16, 17

// console.log(max + min - max);
// console.log(max + min - (max + 1));
