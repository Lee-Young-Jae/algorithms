function solution(arr) {
  const length = arr.length;
  return [
    ...arr,
    ...new Array(2 ** Math.ceil(Math.log2(length)) - length).fill(0),
  ];
}
