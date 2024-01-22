function solution(numbers) {
  const queue = [...numbers].slice(1, numbers.length);
  return numbers.map((number, index) => {
    const 가까운큰수 = queue.find((item) => item > number);
    queue.shift();
    if (!가까운큰수) return -1;
    return 가까운큰수;
  });
}

console.log(solution([2, 3, 3, 5])); // [3, 5, 5, -1]
console.log(solution([9, 1, 5, 3, 6, 2])); // [ -1, 5, 6, 6, -1, -1 ]
