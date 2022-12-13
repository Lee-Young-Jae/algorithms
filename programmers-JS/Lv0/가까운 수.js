function solution(array, n) {
  let answer = array[0];
  for (let i = 1; i < array.length; i++) {
    if (Math.abs(n - answer) > Math.abs(n - array[i])) {
      answer = array[i];
    }
    if (Math.abs(n - answer) === Math.abs(n - array[i])) {
      answer = Math.min(answer, array[i]);
    }
  }
  return answer;
}
