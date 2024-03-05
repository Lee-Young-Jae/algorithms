const binarySearch = (graph) => {
  const stack = [];

  stack.push({ start: 0, end: graph.length - 1 });

  while (stack.length > 0) {
    const { start, end } = stack.pop();
    const mid = Math.floor((start + end) / 2);
    const leftChildIdx = Math.floor((start + mid - 1) / 2);
    const rightChildIdx = Math.floor((mid + 1 + end) / 2);

    // 리프 노드에 도달
    if (start === end) {
      continue;
    }

    // 부모가 0이면서 자식에 1이 있는 경우
    if (
      graph[mid] === "0" &&
      (graph[leftChildIdx] === "1" || graph[rightChildIdx] === "1")
    ) {
      return false;
    }

    // 왼쪽 서브트리를 스택에 추가
    if (mid - 1 >= start) {
      stack.push({ start: start, end: mid - 1 });
    }

    // 오른쪽 서브트리를 스택에 추가
    if (mid + 1 <= end) {
      stack.push({ start: mid + 1, end: end });
    }
  }

  return true;
};

function solution(numbers) {
  return numbers.reduce((acc, num) => {
    const binaryNum = num.toString(2);
    const floor = binaryNum.length.toString(2).length;
    const binaryTree =
      "0".repeat(2 ** floor - 1 - binaryNum.length) + binaryNum;

    return [...acc, ~~binarySearch(binaryTree)];
  }, []);
}
