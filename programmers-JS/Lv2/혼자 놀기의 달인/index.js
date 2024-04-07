function solution(cards) {
  const answer = [];
  cards.forEach((v, i) => {
    let next = i;
    let boxs = [];
    while (true) {
      if (cards[next]) {
        const temp = cards[next];
        cards[next] = 0;
        next = temp - 1;
        boxs.push(next);
      } else {
        answer.push(boxs.length);
        break;
      }
    }
  });
  const sortAnswer = answer.filter((v) => v != 0).sort((a, b) => b - a);

  return sortAnswer.length > 1 ? sortAnswer[0] * sortAnswer[1] : 0;
}
