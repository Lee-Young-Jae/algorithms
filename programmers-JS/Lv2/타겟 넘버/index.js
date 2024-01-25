function solution(numbers, target) {
  let answer = 0;
  const stack = [];
  stack.push([numbers[0], 1]);
  stack.push([numbers[0] * -1, 1]);

  let currArr = [];
  while (stack.length) {
    const [acc, currentIndex] = stack.pop();

    currArr.push(numbers[currentIndex - 1]);
    if (numbers.length === currentIndex) {
      currArr = [];
      answer = acc === target ? answer + 1 : answer;
      continue;
    }

    stack.push([acc + numbers[currentIndex], currentIndex + 1, 1]);
    stack.push([acc - numbers[currentIndex], currentIndex + 1, -1]);
  }
  return answer;
}

console.log([1, 1, 1, 1, 1], 3); //5
console.log([4, 1, 2, 1], 4); // 2
