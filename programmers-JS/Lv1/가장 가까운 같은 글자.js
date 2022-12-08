function solution(s) {
  let answer = [];
  let alpabet = {};

  s.split("").forEach((letter, index) => {
    if (alpabet[letter] >= 0) {
      answer.push(index - alpabet[letter]);
    } else {
      answer.push(-1);
    }
    alpabet[letter] = index;
  });

  return answer;
}
