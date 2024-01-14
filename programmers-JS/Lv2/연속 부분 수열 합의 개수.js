function solution(elements) {
  let answer = [];
  const 원형수열 = [...elements, ...elements];

  for (let i = 1; i < elements.length; i++) {
    for (let j = 0; j < elements.length; j++) {
      answer.push(
        원형수열.slice(j, i + j).reduce((acc, cur) => acc + cur),
        0
      );
    }
  }
  return new Set(answer).size;
}

console.log(solution([7, 9, 1, 1, 4])); // 18
