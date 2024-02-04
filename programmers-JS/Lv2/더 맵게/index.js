function solution(scoville, K) {
  let result = 0;
  const scovilleLen = scoville.length;
  scoville = scoville.sort((a, b) => b - a);

  while (scoville.length && scoville[scoville.length - 1] < K) {
    const leastSpicy = scoville.pop();
    scoville[scoville.length - 1] =
      scoville[scoville.length - 1] * 2 + leastSpicy;
    scoville = scoville.sort((a, b) => b - a);

    result++;
  }

  if (result === scovilleLen) return -1;

  return result;
}

console.log(solution([1, 2, 3, 9, 10, 12], 7)); // 2
