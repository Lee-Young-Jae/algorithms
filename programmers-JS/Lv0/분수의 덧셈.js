function solution(denum1, num1, denum2, num2) {
  const denum = num1 * num2;
  const num = num1 * denum2 + num2 * denum1;

  const gcd = (a, b) => (b ? gcd(b, a % b) : a);
  const g = gcd(num, denum);

  return [num / g, denum / g];
}
