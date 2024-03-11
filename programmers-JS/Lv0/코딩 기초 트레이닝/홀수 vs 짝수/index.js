function solution(num_list) {
  return Math.max(
    ...num_list.reduce(
      (acc, cur, index) =>
        index % 2 === 0 ? [acc[0] + cur, acc[1]] : [acc[0], acc[1] + cur],
      [0, 0]
    )
  );
}
