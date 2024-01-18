function solution(arr, queries) {
  queries.forEach((item) => {
    const [s, e, k] = item;
    for (i = s; i <= e; i++) {
      if (i % k === 0) arr[i]++;
    }
  });
  return arr;
}

console.log(
  solution(
    [0, 1, 2, 4, 3],
    [
      [0, 4, 1],
      [0, 3, 2],
      [0, 3, 3],
    ]
  )
); // [3, 2, 4, 6, 4]
