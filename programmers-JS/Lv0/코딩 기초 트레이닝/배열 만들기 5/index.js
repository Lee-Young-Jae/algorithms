function solution(intStrs, k, s, l) {
  return intStrs.reduce((acc, cur) => {
    let number = ~~cur.slice(s, s + l);
    if (number > k) return [...acc, number];
    return acc;
  }, []);
}
