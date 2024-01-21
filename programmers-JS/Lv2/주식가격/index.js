function solution(prices) {
  const queue = [...prices].slice(1, prices.length);

  return prices.map((price, sec) => {
    const declineIdx = queue.findIndex((stock) => price > stock);
    queue.shift();
    if (declineIdx >= 0) {
      return declineIdx + 1;
    }
    return prices.length - (sec + 1);
  });
}

console.log(solution([1, 2, 3, 2, 3])); // [4, 3, 1, 1, 0]
console.log(solution([1, 2, 3, 2, 3, 1])); // [5, 4, 1, 2, 1, 0]
