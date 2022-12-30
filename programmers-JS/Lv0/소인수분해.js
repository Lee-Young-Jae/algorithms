function solution(n) {
  var answer = [];
  var i = 2;
  while (n > 1) {
    if (n % i === 0) {
      answer.push(i);
      n /= i;
    } else {
      i++;
    }
  }

  return [...new Set(answer)];
}

console.log(solution(12)); // [2, 3]
console.log(solution(7)); // [7]
console.log(solution(17)); // [17]
console.log(solution(420)); // [2, 3, 5, 7]
