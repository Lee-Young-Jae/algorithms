function solution(s) {
  const stack = [];
  for (const c of s) {
    if (stack.length && stack[stack.length - 1] === c) {
      stack.pop();
    } else {
      stack.push(c);
    }
    console.log(stack);
  }
  return stack.length ? 0 : 1;
}
