const fatigue = {
  diamond: {
    diamond: 1,
    iron: 1,
    stone: 1,
  },
  iron: {
    diamond: 5,
    iron: 1,
    stone: 1,
  },
  stone: {
    diamond: 25,
    iron: 5,
    stone: 1,
  },
};

const PickDictionary = {
  0: "diamond",
  1: "iron",
  2: "stone",
};

const dfs = (first, picks, minerals) => {
  if (picks[first] === 0) {
    return 9999;
  }
  picks = [...picks];
  minerals = [...minerals];

  picks[first] -= 1;
  let result = 9999;
  const stack = [[picks, PickDictionary[first], minerals, 0]];

  while (stack.length) {
    const [picks, pick, minerals, score] = stack.pop();
    let newScore = score;
    let newMinerals = [...minerals];
    if (!minerals.length) {
      result = Math.min(score, result);
      continue;
    }

    for (let i = 0; i < 5; i++) {
      if (!newMinerals.length) break;
      const curMineral = newMinerals.shift();
      newScore += fatigue[pick][curMineral];
    }

    if (picks.every((item) => item === 0)) {
      result = Math.min(newScore, result);
      continue;
    }

    picks.forEach((pick, index) => {
      if (pick !== 0) {
        const newPicks = [...picks];
        newPicks[index] -= 1;
        stack.push([newPicks, PickDictionary[index], newMinerals, newScore]);
      }
    });
  }
  return result;
};

function solution(picks, minerals) {
  let result = 9999;
  for (let i = 0; i < 3; i++) {
    result = Math.min(result, dfs(i, picks, minerals));
  }

  return result;
}
