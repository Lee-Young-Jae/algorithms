function solution(queue1, queue2) {
  let answer = 0;
  const max = queue1.length * 3;
  let diff =
    (queue1.reduce((acc, cur) => acc + cur, 0) -
      queue2.reduce((acc, cur) => acc + cur, 0)) /
    2;

  let idx1 = 0;
  let idx2 = 0;
  while (diff !== 0 && answer < max) {
    if (diff > 0) {
      const target = queue1[idx1];
      diff -= queue1[idx1];
      queue2.push(queue1[idx1]);
      idx1++;
    } else if (diff < 0) {
      diff += queue2[idx2];
      queue1.push(queue2[idx2]);
      idx2++;
    }
    answer++;
  }

  return diff === 0 ? answer : -1;
}
