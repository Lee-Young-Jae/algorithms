function solution(d, budget) {
  let count = 0;

  d.sort((a, b) => a - b).reduce((acc, cur) => {
    if (acc + cur <= budget) {
      acc += cur;
      count++;
    }
    return acc;
  }, 0);
  return count;
}
