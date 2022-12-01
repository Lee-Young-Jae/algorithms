const getDivisorCount = (num) => {
  let count = 0;
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      count++;
    }
  }
  return count + 1;
};

function solution(number, limit, power) {
  const knights = new Array(number).fill(1).map((item, index) => getDivisorCount(index + 1));
  return knights
    .map((item) => {
      return item > limit ? power : item;
    })
    .reduce((acc, item) => acc + item, 0);
}
