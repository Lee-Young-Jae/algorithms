function solution(n, lost, reserve) {
  let answer = 0;
  let students = new Array(n).fill(1);
  lost.forEach((item) => students[item - 1]--);
  reserve.forEach((item) => students[item - 1]++);
  students.forEach((item, i) => {
    if (item === 0) {
      if (students[i - 1] === 2) {
        students[i - 1]--;
        students[i]++;
      } else if (students[i + 1] === 2) {
        students[i + 1]--;
        students[i]++;
      }
    }
  });
  students.forEach((item) => {
    if (item > 0) answer++;
  });
  return answer;
}

console.log(solution(5, [2, 4], [1, 3, 5])); // 5
console.log(solution(5, [2, 4], [3])); // 4
console.log(solution(3, [3], [1])); // 2
