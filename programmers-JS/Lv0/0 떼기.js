function solution(n_str) {
  return n_str.replace(/^0+/, "");
}

console.log(solution("0010")); // "10"
console.log(solution("854020")); // "854020"
