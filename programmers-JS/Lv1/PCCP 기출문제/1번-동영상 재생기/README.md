# [PCCP 기출문제] 1번 / 동영상 재생기

[동영상 재생기](https://school.programmers.co.kr/learn/courses/30/lessons/340213)

## 문제 이해하기

- 명령어 `next`, `prev`를 계산 한 후 동영상 재생기의 현재 위치를 반환하는 문제이다.

  - `next`: 현재 위치에서 10초 뒤로 이동한다.
  - `prev`: 현재 위치에서 10초 앞으로 이동한다.
  - 오프닝 구간 사이에 위치할 때는 오프닝 끝 위치로 이동한다.

- 동영상 재생기는 `video_len`, `pos`, `op_start`, `op_end`, `commands`로 이루어져 있다.

  - `video_len`: 동영상의 길이
  - `pos`: 현재 위치
  - `op_start`: 오프닝 시작 위치
  - `op_end`: 오프닝 끝 위치
  - `commands`: 명령어 배열

- 명령어를 수행한 후 동영상 재생기의 현재 위치를 반환한다.

## 풀이

다음과 같은 함수로 기능을 분리하여 풀이했습니다.

- `convertToMin`: 시간을 분으로 변환하는 함수
- `convertToTimestamp`: 분을 시간으로 변환하는 함수
- `operation`: `next`, `prev` 명령어를 수행하는 함수
- `isPosInOpening`: 현재 위치가 오프닝 구간에 위치하는지 확인하는 함수

## 전체 코드

```javascript
const convertToMin = (timestamp) => {
  const [TT, MM] = timestamp.split(":").map(Number);
  return TT * 60 + MM;
};

const convertToTimestamp = (min) => {
  const TT = String(~~(min / 60)).padStart(2, 0);
  const MM = String(min % 60).padStart(2, 0);

  return `${TT}:${MM}`;
};

const operation = {
  next: (cur, video_len) => {
    const result = cur + 10;
    return result >= video_len ? video_len : result;
  },
  prev: (cur, video_len) => {
    const result = cur - 10;
    return result <= 0 ? 0 : result;
  },
};

const isPosInOpening = (cur, op_start, op_end) => {
  if (op_start <= cur && cur <= op_end) {
    return true;
  }
  return false;
};

//video_len, pos, op_start, op_end, commands
function solution(...args) {
  const newArgs = [...args];
  const commands = newArgs.pop();
  const [video_len, pos, op_start, op_end] = newArgs.map(convertToMin);

  let current = isPosInOpening(pos, op_start, op_end) ? op_end : pos;
  commands.forEach((command) => {
    let temp = operation[command](current, video_len);
    temp = isPosInOpening(temp, op_start, op_end) ? op_end : temp;
    current = temp;
  });

  return convertToTimestamp(current);
}
```
