function solution(arr) {
  let i = 0;
  const stk = [];

  while (i < arr.length) {
    if (stk.length === 0 || stk[stk.length - 1] < arr[i]) {
      stk.push(arr[i]);
      i++;
    } else {
      stk.pop();
    }
  }

  return stk;
}

console.log(solution([1, 4, 2, 5, 3])); // [1, 2, 3]
