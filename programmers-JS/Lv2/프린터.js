function solution(priorities, location) {
  var answer = 0;
  let arr = priorities.map((v, i) => [v, i]);
  let max = Math.max(...priorities);
  while (arr.length) {
    let [v, i] = arr.shift();
    if (v === max) {
      answer++;
      if (i === location) break;
      max = Math.max(...arr.map((v) => v[0]));
    } else {
      arr.push([v, i]);
    }
  }

  return answer;
}

console.log(solution([2, 1, 3, 2], 2)); // 1
console.log(solution([1, 1, 9, 1, 1, 1], 0)); // 5
