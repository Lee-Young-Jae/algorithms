function solution(a, b) {
  const answerA = Number(a.toString() + b.toString());
  const answerB = 2 * a * b;

  return answerA > answerB ? answerA : answerB;
}

console.log(solution(2, 91)); // 364
console.log(solution(91, 2)); // 912
