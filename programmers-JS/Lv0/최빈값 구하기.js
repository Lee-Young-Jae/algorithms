function solution(array) {
  const obj = {};
  let max = 0;
  let result = -1;

  array.forEach((v) => {
    obj[v] = obj[v] ? obj[v] + 1 : 1;
    if (obj[v] > max) {
      max = obj[v];
      result = v;
    } else if (obj[v] === max) {
      result = -1;
    }
  });

  return result;
}
