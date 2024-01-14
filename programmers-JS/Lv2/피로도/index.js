function solution(k, dungeons) {
  const permutations = (arr, selectNum) => {
    let result = [];
    if (selectNum === 1) return arr.map((v) => [v]);
    arr.forEach((v, idx, arr) => {
      const fixer = v;
      const restArr = arr.filter((_, index) => index !== idx);
      const permuationArr = permutations(restArr, selectNum - 1);
      const combineFixer = permuationArr.map((v) => [fixer, ...v]);
      result.push(...combineFixer);
    });
    return result;
  };
  const subsets = permutations(dungeons, dungeons.length);

  return subsets.reduce((acc, item) => {
    let 피로도 = k;
    let 던전클리어 = 0;
    for (던전 of item) {
      const [입장피로도, 소모피로도] = 던전;
      if (입장피로도 > 피로도) break;
      피로도 = 피로도 - 소모피로도;
      던전클리어++;
    }
    return Math.max(던전클리어, acc);
  }, 0);
}
console.log(
  solution(80, [
    [80, 20],
    [50, 40],
    [30, 10],
  ])
); // 3
