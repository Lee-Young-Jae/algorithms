function solution(weights) {
  let result = 0;
  const WeightsDictionary = weights.reduce(
    (acc, cur) => ({
      ...acc,
      [cur]: acc[cur] ? acc[cur] + 1 : 1,
    }),
    {}
  );

  weights
    .sort((a, b) => a - b)
    .forEach((w) => {
      if (WeightsDictionary[w] > 1) result += WeightsDictionary[w] - 1;
      if (WeightsDictionary[(w * 3) / 2] > 0)
        result += WeightsDictionary[(w * 3) / 2];
      if (WeightsDictionary[(w * 4) / 2] > 0)
        result += WeightsDictionary[(w * 4) / 2];
      if (WeightsDictionary[(w * 4) / 3] > 0)
        result += WeightsDictionary[(w * 4) / 3];
      WeightsDictionary[w] -= 1;
    });

  return result;
}
