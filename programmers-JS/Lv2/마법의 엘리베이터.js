function solution(storey) {
  let answer = 0;
  while (storey > 0) {
    let n = storey % 10;

    if (n >= 6) {
      storey += 10 - n;
      answer += 10 - n;
    } else if (n === 5 && ~~(storey / 10) % 10 >= 5) {
      storey += 10 - n;
      answer += 10 - n;
    } else {
      answer += n;
    }
    storey = ~~(storey / 10);
  }
  return answer;
}

console.log(solution(16)); // 6
console.log(solution(2554)); // 16
