function solution(players, callings) {
  const ranking = players.reduce((acc, cur, index) => {
    acc[cur] = index;
    return acc;
  }, {});

  callings.forEach((calling) => {
    let tempIdx = ranking[calling];
    let temp = players[tempIdx];
    players[tempIdx] = players[tempIdx - 1];
    players[tempIdx - 1] = temp;
    ranking[calling] = tempIdx - 1;
    ranking[players[tempIdx]] = tempIdx;
  });

  return players;
}

console.log(
  solution(
    ["mumu", "soe", "poe", "kai", "mine"],
    ["kai", "kai", "mine", "mine"]
  )
); // ["mumu", "kai", "mine", "soe", "poe"]
