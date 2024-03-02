function solution(users, emoticons) {
  const SALE_RATIO = [10, 20, 30, 40];

  const stack = [];
  const allCase = [];

  stack.push([-1, []]);
  while (stack.length) {
    const [index, 방법] = stack.pop();
    if (index === emoticons.length - 1) {
      allCase.push(방법);
      continue;
    }

    for (let i = 0; i < 4; i++) {
      stack.push([index + 1, [...방법, SALE_RATIO[i]]]);
    }
  }

  const emoticonPrices = emoticons.reduce(
    (acc, price) => ({
      ...acc,
      [price]: {
        40: price * (60 / 100),
        30: price * (70 / 100),
        20: price * (80 / 100),
        10: price * (90 / 100),
      },
    }),
    {}
  );

  let result = [0, 0];
  allCase.forEach((cases) => {
    const 구매목록 = [];
    users.forEach(([할인율이_이정도면_이모티콘_산다, 잔액]) => {
      const user = [0, 0];
      cases.forEach((할인율, index) => {
        const 구매액 = emoticonPrices[emoticons[index]][할인율];
        const isBuyEmoticon = 할인율 >= 할인율이_이정도면_이모티콘_산다;
        if (isBuyEmoticon) {
          user[1] += 구매액;
        }
      });
      if (잔액 <= user[1]) {
        user[0] = 1;
        user[1] = 0;
      }

      구매목록.push(user);
    });
    const [이모티콘플러스구매, 이모티콘총구매액] = 구매목록.reduce(
      (acc, cur) => [acc[0] + cur[0], acc[1] + cur[1]],
      [0, 0]
    );
    if (result[0] < 이모티콘플러스구매) {
      result = [이모티콘플러스구매, 이모티콘총구매액];
    }

    if (result[0] === 이모티콘플러스구매) {
      if (result[1] < 이모티콘총구매액) {
        result = [이모티콘플러스구매, 이모티콘총구매액];
      }
    }
  });

  return result;
}
