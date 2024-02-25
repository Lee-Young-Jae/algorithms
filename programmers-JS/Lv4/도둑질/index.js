function solution(money) {
  const length = money.length;
  const money1 = [...money];
  money1[0] = 0;
  const money2 = [...money];
  money2[length - 1] = 0;

  const dp1 = new Array(length).fill(0);
  const dp2 = new Array(length).fill(0);

  dp1[0] = money1[0];
  dp1[1] = money1[1];
  dp2[0] = money2[0];
  dp2[1] = Math.max(money2[0], money2[1]);

  for (let i = 0; i < length - 2; i++) {
    dp1[i + 2] = Math.max(dp1[i + 1], dp1[i] + money1[i + 2]);
  }

  for (let i = 0; i < length - 2; i++) {
    dp2[i + 2] = Math.max(dp2[i + 1], dp2[i] + money2[i + 2]);
  }

  return Math.max(dp1.at(-1), dp2.at(-1));
}
