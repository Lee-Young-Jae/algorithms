function solution(order) {
  let answer = 0;
  const stack = [];
  let package = 1;

  for (const item of order) {
    let isChecked = true;
    while (isChecked) {
      if (stack.length === 0) {
        stack.push(package++);
      }
      if (item > stack.at(-1)) {
        stack.push(package++);
      } else if (item === stack.at(-1)) {
        stack.pop();
        answer++;
        isChecked = false;
        break;
      } else {
        break;
      }
    }
    if (isChecked) break;
  }

  return answer;
}

/** 시간 초과된 풀이 */
function solution_fail_7_9_10(order) {
  const packages = Array.from(
    { length: order.length },
    (_, index) => index + 1
  );

  const stack = [];
  let result = 0;

  for (const package of packages) {
    stack.push(package);
    while (stack.length > 0 && stack[stack.length - 1] === order[0]) {
      stack.pop();
      order.shift();
      result++;
    }
  }

  return result;
}

console.log(solution([4, 3, 1, 2, 5])); // 2
console.log(solution([5, 4, 3, 2, 1])); // 5

console.log(solution_fail_7_9_10([4, 3, 1, 2, 5])); // 2
console.log(solution_fail_7_9_10([5, 4, 3, 2, 1])); // 5
