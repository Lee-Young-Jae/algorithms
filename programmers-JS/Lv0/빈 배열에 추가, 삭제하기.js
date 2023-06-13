function solution(arr, flag) {
  return flag.reduce((acc, cur, idx) => {
    if (cur) {
      for (let i = 0; i < arr[idx] * 2; i++) {
        acc.push(arr[idx]);
      }
    } else {
      for (let i = 0; i < arr[idx]; i++) {
        acc.pop();
      }
    }
    return acc;
  }, []);
}

console.log(solution([3, 2, 4, 1, 3], [true, false, true, false, false])); // [3, 3, 3, 3, 4, 4, 4, 4]
