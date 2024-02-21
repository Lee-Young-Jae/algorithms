function solution(n, t, m, p) {
  const max = (t - 1) * m + p;
  const N진수 = Array.from({ length: t * m }, (_, index) =>
    index.toString(n).split("")
  ).flat();

  let result = "";
  let 순서 = 1;
  let index = 0;
  while (result.length < t) {
    if (순서 > m) 순서 = 1;
    if (순서 === p) {
      result += N진수[index].toUpperCase();
    }
    순서++;
    index++;
  }

  return result;
}

console.log(solution(2, 4, 2, 1)); // "0111"
console.log(solution(16, 16, 2, 1)); // "02468ACE11111111"
console.log(solution(16, 16, 2, 2)); // "13579BDF01234567"
