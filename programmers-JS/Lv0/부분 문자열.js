function solution(str1, str2) {
  const regexp = new RegExp(str1);
  return ~~regexp.test(str2);
}

console.log(solution("abc", "aabcc")); // 1
console.log(solution("tbt", "tbbttb")); // 0
