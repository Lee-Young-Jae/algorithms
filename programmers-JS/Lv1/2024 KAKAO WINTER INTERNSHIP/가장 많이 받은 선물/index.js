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
