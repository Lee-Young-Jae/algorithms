function solution(arr, queries) {
  return queries.reduce((acc, [s, e]) => {
    for (let i = s; i <= e; i++) {
      acc[i] += 1;
    }
    return acc;
  }, arr);
}
