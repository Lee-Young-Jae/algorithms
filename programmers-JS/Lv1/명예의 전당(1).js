function solution(k, score) {
  let answer = [];
  let stack = [];

  score.forEach((item, index) => {
    if (index >= k) return;

    stack.push(item);
    answer.push(Math.min(...stack));
  });

  for (let i = k; i < score.length; i++) {
    const min = Math.min(...stack);

    if (min < score[i]) {
      stack[stack.indexOf(min)] = score[i];
    }
    answer.push(Math.min(...stack));
  }

  return answer;
}
