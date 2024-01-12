function solution(want, number, discount) {
  let answer = 0;

  const 구매목록 = want.reduce((acc, cur, index) => {
    return {
      ...acc,
      [cur]: number[index],
    };
  }, {});

  discount = discount.map((item, index, total) => {
    const lastDay = index + 10 > total.length ? total.length : index + 10;
    const nextItem = total.slice(index, lastDay);
    return nextItem;
  });

  discount.forEach((item, index) => {
    const 장바구니 = Object.assign({}, 구매목록);
    item.forEach((item) => {
      if (장바구니.hasOwnProperty(item) && 장바구니[item] > 0) {
        장바구니[item] -= 1;
      }
    });
    if (!Object.values(장바구니).some((item) => item !== 0)) answer++;
  });
  return answer;
}
