function solution(word) {
  var answer = 0;
  const arr = ["A", "E", "I", "O", "U"];
  const len = word.length;
  const lenArr = [781, 156, 31, 6, 1];
  for (let i = 0; i < len; i++) {
    answer += arr.indexOf(word[i]) * lenArr[i] + 1;
  }
  return answer;
}

console.log(solution("AAAAE")); // 6
console.log(solution("AAAE")); // 10
console.log(solution("I")); // 1563
console.log(solution("EIO")); // 1189
