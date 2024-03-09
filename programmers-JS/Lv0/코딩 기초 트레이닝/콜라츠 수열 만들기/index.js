const 콜라츠 = (num) => {
  if (num % 2 === 0) return num / 2;
  return 3 * num + 1;
};

function solution(n) {
  const result = [n];
  while (result.at(-1) !== 1) {
    n = 콜라츠(n);
    result.push(n);
  }

  return result;
}
