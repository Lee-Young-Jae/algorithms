# 2024 KAKAO WINTER INTERNSHIP - 가장 많이 받은 선물

[가장 많이 받은 선물](https://school.programmers.co.kr/learn/courses/30/lessons/258712)

## 문제 이해하기

- 선물을 가장 많이 받은 사람을 구하는 구현 문제
  1. 두 사람 중 선물을 더 많이 준 쪽이 선물을 하나 받는다.
  2. 선물을 같은 수로 주고 받았거나 아무도 선물을 주지 않은 경우 모두에게 선물을 많이 준 사람이 선물을 받는다.
  - 모두에게 선물을 준 횟수가 같은 경우엔 아무도 선물을 받지 않는다.

## 풀이

### 1. 선물을 준 사람을 기준으로 선물을 받은 사람 객체를 만든다

- `friendsGifts` 객체에 `friends` 배열의 요소를 키로 하고, `gifts` 배열의 요소를 값으로 하는 객체를 만든다.

```javascript
const friendsGifts = friends.reduce(
  (acc, cur) => ({
    ...acc,
    [cur]: gifts
      .map((item) => item.split(" "))
      .filter((item) => item[0] === cur)
      .map((item) => item[1]),
  }),
  {}
);
```

### 2. 선물 지수를 구한다

- `giftIndex` 객체에 `friends` 배열의 요소를 키로 하고, 선물 지수를 값으로 하는 객체를 만든다.

```javascript
const giftIndex = friends.reduce((acc, name) => {
  const giveScore = friendsGifts[name].length;
  const receiveScore = friends.reduce((acc, cur) => {
    let count = 0;
    friendsGifts[cur].forEach((reciver) => {
      if (reciver === name) count++;
    });

    return acc + count;
  }, 0);

  return { ...acc, [name]: giveScore - receiveScore };
}, {});
```

### 3. 선물을 받은 횟수를 구한다

- `friends` 배열의 요소를 기준으로 선물을 받은 횟수를 구한다.

```javascript
friends.map((giverName) => {
  let 받을선물개수 = 0;
  friends.forEach((receiverName) => {
    if (!(giverName === receiverName)) {
      let isSameGiveAndTake = false;
      // 두사람이 선물을 주고받은 기록이 있는 경우
      const giverIncludesReceiver =
        friendsGifts[giverName].includes(receiverName);
      const receiverIncludesGiver =
        friendsGifts[receiverName].includes(giverName);
      if (giverIncludesReceiver || receiverIncludesGiver) {
        const giveCount = friendsGifts[giverName].filter(
          (name) => name === receiverName
        ).length;
        const takeCount = friendsGifts[receiverName].filter(
          (name) => name === giverName
        ).length;
        // 선물 기록이 많을 경우만 받은 선물 갯수를 늘린다.
        if (giveCount > takeCount) {
          받을선물개수++;
        }
        if (giveCount === takeCount) {
          isSameGiveAndTake = true;
        }
      }
      // 두사람이 선물을 주고받은 기록이 없거나 주고 받은 수가 같다면 (선물지수가 높은 사람)
      if (
        !(giverIncludesReceiver || receiverIncludesGiver) ||
        isSameGiveAndTake
      ) {
        // 선물 지수가 높울 경우만 받을 선물 개수를 늘린다.
        if (giftIndex[giverName] > giftIndex[receiverName]) 받을선물개수++;
      }
    }
  });
  return 받을선물개수;
});
```

### 전체코드

```javascript
function solution(friends, gifts) {
  const friendsGifts = friends.reduce(
    (acc, cur) => ({
      ...acc,
      [cur]: gifts
        .map((item) => item.split(" "))
        .filter((item) => item[0] === cur)
        .map((item) => item[1]),
    }),
    {}
  );

  const giftIndex = friends.reduce((acc, name) => {
    const giveScore = friendsGifts[name].length;
    const receiveScore = friends.reduce((acc, cur) => {
      let count = 0;
      friendsGifts[cur].forEach((reciver) => {
        if (reciver === name) count++;
      });

      return acc + count;
    }, 0);

    return { ...acc, [name]: giveScore - receiveScore };
  }, {});

  return Math.max(
    ...friends.map((giverName) => {
      let 받을선물개수 = 0;
      friends.forEach((receiverName) => {
        if (!(giverName === receiverName)) {
          let isSameGiveAndTake = false;
          // 두사람이 선물을 주고받은 기록이 있는 경우
          const giverIncludesReceiver =
            friendsGifts[giverName].includes(receiverName);
          const receiverIncludesGiver =
            friendsGifts[receiverName].includes(giverName);
          if (giverIncludesReceiver || receiverIncludesGiver) {
            const giveCount = friendsGifts[giverName].filter(
              (name) => name === receiverName
            ).length;
            const takeCount = friendsGifts[receiverName].filter(
              (name) => name === giverName
            ).length;
            // 선물 기록이 많을 경우만 받은 선물 갯수를 늘린다.
            if (giveCount > takeCount) {
              받을선물개수++;
            }
            if (giveCount === takeCount) {
              isSameGiveAndTake = true;
            }
          }
          // 두사람이 선물을 주고받은 기록이 없거나 주고 받은 수가 같다면 (선물지수가 높은 사람)
          if (
            !(giverIncludesReceiver || receiverIncludesGiver) ||
            isSameGiveAndTake
          ) {
            // 선물 지수가 높울 경우만 받을 선물 개수를 늘린다.
            if (giftIndex[giverName] > giftIndex[receiverName]) 받을선물개수++;
          }
        }
      });
      return 받을선물개수;
    })
  );
}
```
