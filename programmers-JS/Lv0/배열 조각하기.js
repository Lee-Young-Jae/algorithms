function solution(arr, query) {
  return query.reduce(
    (acc, cur, index) =>
      index % 2 === 0 ? acc.slice(0, cur + 1) : acc.slice(cur),
    arr
  );
}

console.log(solution([0, 1, 2, 3, 4, 5], [4, 1, 2])); // [1, 2, 3]
