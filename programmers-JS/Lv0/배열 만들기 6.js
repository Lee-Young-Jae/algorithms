function solution(arr) {
  const result = arr.reduce((stk, cur) => {
    if (stk.length === 0) {
      stk.push(cur);
      return stk;
    } else if (stk[stk.length - 1] === cur) {
      stk.pop();
      return stk;
    } else {
      stk.push(cur);
      return stk;
    }
  }, []);

  return result.length > 0 ? result : [-1];
}

console.log(solution([0, 1, 1, 1, 0])); // [0, 1, 0]

console.log(solution([0, 1, 0, 1, 0])); // [0, 1, 0, 1, 0]

console.log(solution([0, 1, 1, 0])); // [-1]
