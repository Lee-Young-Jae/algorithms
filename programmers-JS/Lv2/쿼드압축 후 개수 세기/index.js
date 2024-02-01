const isQuad = (arr) => {
  const flatedArr = arr.flat();
  const standard = flatedArr[0];

  return !flatedArr.some((number) => number !== standard);
};

function solution(arr) {
  const result = arr.flat().reduce(
    (acc, cur) => ({
      ...acc,
      [cur]: acc[cur] + 1,
    }),
    { 0: 0, 1: 0 }
  );
  const stack = [];
  stack.push(arr);

  let scope = 1;
  while (stack.length) {
    const currentArr = stack.pop();
    const length = currentArr.length;

    if (isQuad(currentArr)) {
      const standard = currentArr[0][0];
      const count = currentArr.flat().flat().length - 1;
      result[standard] -= count;
      continue;
    }

    for (let i = 0; i < 2; i++) {
      for (let j = 0; j < 2; j++) {
        const newArr = currentArr
          .map((rows) => {
            return rows.slice((j * length) / 2, (j * length) / 2 + length / 2);
          })
          .slice((i * length) / 2, i * length + length / 2);
        stack.push(newArr);
      }
    }
  }

  return [result[0], result[1]];
}

console.log([
  [1, 1, 0, 0],
  [1, 0, 0, 0],
  [1, 0, 0, 1],
  [1, 1, 1, 1],
]); // [4, 9]

console.log([
  [1, 1, 1, 1, 1, 1, 1, 1],
  [0, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 1, 1, 1, 1],
  [0, 1, 0, 0, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 1],
  [0, 0, 0, 0, 1, 0, 0, 1],
  [0, 0, 0, 0, 1, 1, 1, 1],
]); // [10, 15]
