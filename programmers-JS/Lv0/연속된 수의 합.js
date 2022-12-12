function solution(num, total) {
  let start = num % 2 === 0 ? Math.round(total / num) : total / num;
  start -= Math.floor(num / 2);

  return Array.from({ length: num }, (_, i) => start + i);
}
