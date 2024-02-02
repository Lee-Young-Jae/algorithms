function solution(prices) {
  const result = new Array(prices.length)
    .fill(0)
    .map((_, index) => prices.length - index - 1);
  const stack = [];

  prices.forEach((price, index) => {
    if (stack.length) {
      let sec = 1;
      let prevStock = stack[stack.length - 1][0];
      while (stack.length && prevStock > price) {
        const [_, prevIndex] = stack.pop();
        prevStock = stack.length ? stack[stack.length - 1][0] : 0;
        result[prevIndex] = index - prevIndex;
        sec++;
      }
    }
    stack.push([price, index]);
  });

  return result;
}
console.log(solution([1, 2, 3, 2, 3])); // [4, 3, 1, 1, 0]
console.log(solution([1, 2, 3, 2, 3, 1])); // [5, 4, 1, 2, 1, 0]
console.log(solution([1, 2, 3, 2, 3, 1, 3])); // [6, 4, 1, 2, 1, 1, 0]
console.log(solution([3, 2, 4, 1, 1])); // [1, 2, 1, 1, 0]
