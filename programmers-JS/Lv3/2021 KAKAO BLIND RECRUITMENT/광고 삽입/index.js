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
