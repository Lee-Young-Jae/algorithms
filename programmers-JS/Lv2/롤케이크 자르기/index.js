function solution(topping) {
  const MAX_TOPPING = topping.reduce((max, cur) => Math.max(max, cur), 0);

  const 철수의_토핑 = new Array(MAX_TOPPING + 1).fill(0);
  topping.forEach((item) => {
    철수의_토핑[item]++;
  });
  const 철수의_토핑_종류 = new Set(topping);
  const 동생의_토핑_종류 = new Set();

  let result = 0;
  if (철수의_토핑_종류 === 동생의_토핑_종류) result++;

  topping.forEach((topp) => {
    철수의_토핑[topp] -= 1;
    if (철수의_토핑[topp] <= 0) {
      철수의_토핑_종류.delete(topp);
    }
    동생의_토핑_종류.add(topp);

    result =
      철수의_토핑_종류.size === 동생의_토핑_종류.size ? result + 1 : result;
  });

  return result;
}
