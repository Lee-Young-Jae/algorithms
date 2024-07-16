# 2021 KAKAO BLIND RECRUITMENT - 광고 삽입

[광고 삽입](https://programmers.co.kr/learn/courses/30/lessons/72414) - 2021 KAKAO BLIND RECRUITMENT

## 풀이

### 최초 풀이

결과: 14점

실패 이유: 시간초과 및 테스트 케이스 실패

- 시간초과: logs를 순회하면서 memo에 기록을 채우는 부분에서 시간이 오래 걸린다.

- 테스트 케이스 실패: 누적 시청기록을 찾는 게 아닌 누적 시청자를 찾아서 틀린 결과가 나왔다.

```javascript
const convertToSecond = (time) => {
  const [h, m, s] = time.split(":").map(Number);
  return h * 3600 + m * 60 + s;
};

function solution(play_time, adv_time, logs) {
  const MAX_SIZE = convertToSecond(play_time);
  const memo = new Array(MAX_SIZE).fill(0);

  const advTime = convertToSecond(adv_time);

  // memo에 기록 채우기
  logs.forEach((log) => {
    const [startTime, endTime] = log.split("-").map(convertToSecond);
    for (let i = startTime; i < endTime; i++) {
      memo[i]++;
    }
  });

  const times = [];
  // 각 memo를 순회하면서 가장 많은 카운트를 가진 시각을 찾는다.
  for (let log of logs) {
    const [startTime, endTime] = log.split("-").map(convertToSecond);
    let count = 0;
    // 광고시간 + startTime MAXTIME을 넘으면 PASS
    if (startTime + advTime > MAX_SIZE) continue;
    for (let i = startTime; i < endTime; i++) {
      count += memo[i];
    }

    // result에 startTime과 count를 담는다.
    times.push({
      startTime: log.split("-")[0],
      count,
    });
  }

  const result = times.sort(
    (a, b) => b.count - a.count || a.startTime.localeCompare(b.startTime)
  )[0];

  return result ? result.startTime : "00:00:00";
}
```

### 통과한 풀이

```javascript
const convertToSecond = (time) => {
  const [h, m, s] = time.split(":").map(Number);
  return h * 3600 + m * 60 + s;
};

const convertToTime = (second) => {
  const h = ~~(second / 3600);
  const m = ~~((second % 3600) / 60);
  const s = (second % 3600) % 60;

  const hh = h.toString().padStart(2, "0");
  const mm = m.toString().padStart(2, "0");
  const ss = s.toString().padStart(2, "0");

  return `${hh}:${mm}:${ss}`;
};

function solution(play_time, adv_time, logs) {
  const MAX_SIZE = convertToSecond(play_time);
  const memo = new Array(MAX_SIZE).fill(0);
  const advTime = convertToSecond(adv_time);

  // memo에 start, end기록
  logs.forEach((log) => {
    const [startTime, endTime] = log.split("-").map(convertToSecond);
    memo[startTime]++;
    memo[endTime]--;
  });

  // memo를 순회하며 누적 시청자를 기록한다.
  for (let i = 1; i <= MAX_SIZE; i++) {
    memo[i] += memo[i - 1];
  }

  // 한번더 memo를 순회하며 누적 시청률을 기록한다.
  for (let i = 1; i <= MAX_SIZE; i++) {
    memo[i] += memo[i - 1];
  }

  // 최초값
  let maxAdvTime = memo[advTime - 1];
  let index = 0;
  // 슬라이딩 윈도우 기법으로 max 찾기
  for (let i = advTime - 1; i < MAX_SIZE; i++) {
    if (maxAdvTime < memo[i] - memo[i - advTime]) {
      maxAdvTime = memo[i] - memo[i - advTime];
      index = i - advTime + 1;
    }
  }
  return convertToTime(index);
}
```
