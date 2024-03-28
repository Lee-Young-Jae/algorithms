function solution(a, b) {
  // 기약분수로 만들기
  const gcd = (a, b) => {
    if (b === 0) {
      return a;
    } else {
      return gcd(b, a % b);
    }
  };

  const gcdNum = gcd(a, b);
  b = b / gcdNum;

  // 유한소수인지 판별하기
  const isFinite = (bottom) => {
    while (bottom !== 1) {
      if (bottom % 2 === 0) bottom /= 2;
      else if (bottom % 5 === 0) bottom /= 5;
      else return 2;
    }
    return 1;
  };
  return isFinite(b);
}
