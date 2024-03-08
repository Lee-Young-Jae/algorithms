const isOdd = (num) => !(num % 2 === 0);

function solution(n) {
  const numbers = new Array(n).fill(0).map((_, i) => i + 1);

  const result = numbers.reduce(
    (acc, cur) => {
      const [odd, even] = acc;
      if (isOdd(cur)) return [odd + cur, even];
      return [odd, even + cur ** 2];
    },
    [0, 0]
  );

  return isOdd(n) ? result[0] : result[1];
}
