function solution(myString, pat) {
  const reg = new RegExp(pat, "i");
  return ~~reg.test(myString);
}

console.log(solution("AbCdEfG", "aBc")); // 1
console.log(solution("aaAA", "aaaaa")); // 0
