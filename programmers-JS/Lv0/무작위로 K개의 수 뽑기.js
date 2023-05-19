function solution(arr, k) {
  const result = [...new Set(arr)];

  return result.length < k
    ? result.concat(Array(k - result.length).fill(-1))
    : result.slice(0, k);
}

console.log(solution([0, 1, 1, 2, 2, 3], 3)); // [0, 1, 2]
console.log(solution([0, 1, 1, 1, 1], 4)); // [0, 1, -1, -1]
