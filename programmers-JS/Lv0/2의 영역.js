const twoIndexOfAll = (arr) => {
  let answer = [];
  arr.forEach((el, idx) => {
    if (el === 2) answer.push(idx);
  });
  return answer;
};

function solution(arr) {
  const answer = [];
  const twoIdx = twoIndexOfAll(arr);

  if (twoIdx.length === 0) return [-1];
  else if (twoIdx.length === 1) return [2];
  for (let i = twoIdx[0]; i < twoIdx[twoIdx.length - 1] + 1; i++) {
    answer.push(arr[i]);
  }
  return answer;
}

console.log(solution([1, 2, 1, 4, 5, 2, 9])); // [2, 1, 4, 5, 2]
console.log(solution([1, 2, 1])); // [2]
console.log(solution([1, 1, 1])); // [-1]
console.log(solution([1, 2, 1, 2, 1, 10, 2, 1])); // [2, 1, 2, 1, 10, 2]
