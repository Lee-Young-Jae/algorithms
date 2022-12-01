function solution(k, m, score) {
  let answer = [];
  score.sort((a, b) => b - a);
  for (let i = 0; i < Math.floor(score.length / m); i++) {
    answer.push(score[m * (i + 1) - 1]);
  }
  return answer.reduce((acc, number) => {
    return (acc += number * m);
  }, 0);
}
