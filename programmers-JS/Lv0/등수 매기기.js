function solution(score) {
  let answer = [];
  let rank = 1;
  let average = score.map((item) => (item[0] + item[1]) / 2);
  for (let i = 0; i < score.length; i++) {
    rank = 1;
    for (let j = 0; j < score.length; j++) {
      if (average[i] < average[j]) {
        rank++;
      }
    }
    answer.push(rank);
  }
  return answer;
}
