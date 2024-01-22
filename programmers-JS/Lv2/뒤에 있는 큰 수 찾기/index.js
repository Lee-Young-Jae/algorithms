function solution(numbers) {
  const stack = [];
  const result = Array(numbers.length).fill(-1);

  numbers.forEach((number) => {
    if (number > stack.at(-1)) {
      let backTrackingIdx = 1;
      while (number > stack.at(-backTrackingIdx)) {
        if (result.at(stack.length - backTrackingIdx) === -1)
          result[stack.length - backTrackingIdx] = number;
        backTrackingIdx++;
      }
    }
    stack.push(number);
  });

  return result;
}

console.log(solution([2, 3, 3, 5])); // [3, 5, 5, -1]
console.log(solution([9, 1, 5, 3, 6, 2])); // [ -1, 5, 6, 6, -1, -1 ]
