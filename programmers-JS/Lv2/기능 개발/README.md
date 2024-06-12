# 프로그래머스 - Lv2. 기능 개발

[기능 개발](https://programmers.co.kr/learn/courses/30/lessons/42586)

## 문제 이해하기

- 각 기능은 진도가 100%일 때 서비스에 반영할 수 있다.
- 각 기능의 개발속도는 모두 다르다.
- 뒤에 있는 기능이 앞에 있는 기능보다 먼저 개발될 수 있다.
- 뒤에 있는 기능은 앞에 있는 기능이 배포될 때 함께 배포된다.

- 각 기능의 개발속도가 담긴 배열 progresses
- 각 기능의 개발속도가 담긴 배열 speeds
- 각 배포마다 몇 개의 기능이 배포되는지 return

### 기존 풀이

- 각 기능의 개발속도를 더해가면서 100이 넘으면 배포한다.
- 배포한 기능의 개수를 저장하고, 다음 기능의 개발속도를 더해가면서 100이 넘으면 배포한다.
- 이를 반복하면서 배포한 기능의 개수를 저장한다.

```js
function solution(progresses, speeds) {
  let tempArr = [];
  let tempSpeeds = speeds;
  let result = [];

  tempArr = progresses.map((e, i) => {
    return e + speeds[i];
  });
  while (true) {
    let numberOfWork = 0;
    while (tempArr[0] >= 100) {
      tempArr.shift();
      tempSpeeds.shift();
      numberOfWork++;
    }
    if (numberOfWork !== 0) result.push(numberOfWork);
    if (tempArr.length <= 0) {
      break;
    }
    tempArr = tempArr.map((e, i) => {
      return e + tempSpeeds[i];
    });
  }
  return result;
}
```

### 현재 풀이

- 현재 진행도와 개발속도를 이용하여 각 기능이 배포되는데 걸리는 일수를 계산한다.
- days 배열에 각 기능이 배포되는데 걸리는 일수를 저장한다.
- days 배열을 순회하면서 각 기능이 배포되는데 걸리는 일수가 더 크면, 이전까지의 배포된 기능의 개수를 result 배열에 저장한다.
- days 배열을 모두 순회한 후, 마지막까지 배포된 기능의 개수를 result 배열에 저장한다.

```js
function solution(progresses, speeds) {
  let days = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  );
  const result = [];
  let max = days[0];
  let count = 0;
  for (let i = 0; i < days.length; i++) {
    if (max < days[i]) {
      max = days[i];
      result.push(count);
      count = 1;
    } else {
      count++;
    }
  }
  result.push(count);
  return result;
}
```
