# 과제 진행하기

[프로그래머스\_과제 진행하기](https://school.programmers.co.kr/learn/courses/30/lessons/176962)

## 문제 이해하기

- `name`, `start`, `playtime`으로 이루어진 배열들의 배열인 `plans가 주어진다.
- 과제는 `name`이 `start`부터 `start + playtime`까지의 시간동안 수행되어야 한다.
- 과제를 수행하다 다음 과제의 start 시간이 되면 이전 과제를 중단하고 다음 과제를 수행해야 한다.
- 중단된 과제는 최근에 멈췄던 순서대로 빈 시간동안 다시 수행한다.
- `plans`에 있는 모든 `name`이 수행되는 순서를 구하라.

## 풀이

- "HH:MM" 형식의 `start`를 분 단위로 반환하고 오름차순으로 정렬한다.
- 모든 과제를 수행할 때까지 반복한다.
  - 현재 과제를 `stack`에 추가한다.
  - 현재 시간을 `currentTime`에 저장한다.
  - 해당 일정의 활동 시간이 남아있을 때까지 반복한다.
    - `currentTime`를 1분씩 증가시킨다.
    - 활동 시간을 1분씩 감소시킨다.
    - 활동 시간이 소진되면 `result`에 추가하고 `stack`에서 제거한다.
    - 다음 과제의 시작 시간이 현재 시간과 같다면 `stack`에 추가한다.
  - 다음 과제로 넘어간다.

```javascript
function solution(plans) {
  plans = plans
    .map(([name, start, playtime]) => {
      const [hour, minute] = start.split(":");
      const n_startTime = Number(hour) * 60 + Number(minute);
      return [name, n_startTime, Number(playtime)];
    })
    .sort((a, b) => a[1] - b[1]);

  const result = [];
  let currentTime = plans[0][1];
  let index = 0;
  const stack = [];
  while (plans.length > index) {
    stack.push(plans[index]);

    if (currentTime < stack.at(-1)[1]) currentTime = stack.at(-1)[1];

    while (stack.length && stack.at(-1)[2]) {
      currentTime += 1;
      stack.at(-1)[2] -= 1;
      if (!stack.at(-1)[2]) result.push(stack.pop()[0]);

      if (plans.length > index + 1 && currentTime === plans[index + 1][1]) {
        stack.push(plans[index + 1]);
        index += 1;
      }
    }
    index += 1;
  }

  return result;
}
```
