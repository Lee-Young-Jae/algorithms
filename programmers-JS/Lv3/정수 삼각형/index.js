function solution(triangle) {
  let result = 0;
  const stack = [];
  const MAX_DEPTH = triangle.length;
  stack.push([1, triangle[0][0], 0]);

  while (stack.length) {
    const [currentDepth, sum, index] = stack.pop();

    if (currentDepth === MAX_DEPTH) {
      result = Math.max(sum, result);
      continue;
    }

    const nextDepth = currentDepth + 1;
    stack.push([nextDepth, sum + triangle[currentDepth][index], index]);
    stack.push([nextDepth, sum + triangle[currentDepth][index + 1], index + 1]);
  }
  return result;
}
