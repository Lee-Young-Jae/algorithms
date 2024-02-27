# 광물 캐기

[광물 캐기](https://school.programmers.co.kr/learn/courses/30/lessons/172927)

## 문제 이해하기

- 곡괭이를 이용하여 광물을 캐는데 필요한 시간을 구하는 문제
- 곡괭이는 종류당 연속으로 5번씩 사용해야 한다.
- 광물을 모두 캐거나 곡괭이를 모두 사용하면 종료된다.

## 풀이

mineral 의 길이는 50 이하, 곡괭이의 개수는 0~5 이므로 완전탐색으로 접근해보았다.

dfs를 이용한 풀이

```javascript
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
```
