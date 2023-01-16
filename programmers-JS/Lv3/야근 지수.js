function solution(n, works) {
  const worksSum = works.reduce((acc, cur) => acc + cur);
  if (worksSum <= n) return 0;

  const worksSort = works.sort((a, b) => b - a);
  let i = 0;
  while (n > 0) {
    if (worksSort[i] < worksSort[i + 1]) {
      i++;
    } else if (i === worksSort.length - 1 && worksSort[i] < worksSort[0]) {
      i = 0;
    } else if (worksSort[i - 1] >= worksSort[i]) {
      i--;
    } else {
      worksSort[i]--;
      n--;
    }
  }

  return worksSort.reduce((acc, cur) => acc + cur ** 2, 0);
}

/** 효율성 테스트 실패 */
function solution_fail_1_2(n, works) {
  for (let i = 0; i < n; i++) {
    const max = Math.max(...works);
    const maxIdx = works.indexOf(max);
    works[maxIdx] = max - 1;
  }

  return works.reduce((acc, cur) => {
    if (cur < 0) return acc;
    return acc + cur ** 2;
  }, 0);
}

console.log(solution(4, [4, 3, 3])); // 12
console.log(solution(1, [2, 1, 2])); // 6
console.log(solution(3, [1, 1])); // 0
console.log(solution(999, [800, 100, 55, 45])); // 1
