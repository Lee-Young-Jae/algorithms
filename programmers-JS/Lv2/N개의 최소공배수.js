const gcd = (a, b) => (a % b === 0 ? b : gcd(b, a % b));

function solution(arr) {
  return arr.reduce((acc, cur) => (acc * cur) / gcd(acc, cur));
}
