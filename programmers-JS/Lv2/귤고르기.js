function solution(k, tangerine) {
  let answer = 0;
  const 종류별_귤 = {};

  tangerine.forEach((크기) => {
    종류별_귤[크기] = ++종류별_귤[크기] || 1;
  });

  const 종류별_수 = Object.values(종류별_귤).sort((a, b) => b - a);

  let 상자 = 0;
  for (let index in 종류별_수) {
    answer++;
    상자 += 종류별_수[index];

    if (상자 >= k) break;
  }

  return answer;
}

console.log(solution(6, [1, 3, 2, 5, 4, 5, 2, 3])); // 3
console.log(solution(4, [1, 3, 2, 5, 4, 5, 2, 3])); // 2
console.log(solution(2, [1, 1, 1, 1, 2, 2, 2, 3])); // 1
