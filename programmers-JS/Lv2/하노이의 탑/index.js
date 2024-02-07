const checkHanoi = (arr) => {
  return arr.every((num, index, origin) => {
    if (index !== arr.length - 1 && origin[index + 1] > num) {
      return false;
    }
    return true;
  });
};
const dfs = (start, next, maxDepth, n) => {
  const stack = [];
  const tower1 = new Array(n - 1).fill(0).map((_, index) => n - index);
  const towerState = [[], tower1, [], []];
  towerState[next].push(1);

  stack.push([next, [[start, next]], towerState, 1]);

  const result = [];
  while (stack.length) {
    const [before, branch, currentState] = stack.pop();
    if (
      !checkHanoi(currentState[1]) ||
      !checkHanoi(currentState[2]) ||
      !checkHanoi(currentState[3])
    ) {
      continue;
    }

    if (currentState[3].length === n) {
      result.push(branch);
      continue;
    }
    if (branch.length >= maxDepth) continue;

    for (let i = 1; i <= 3; i++) {
      for (let next = 1; next <= 3; next++) {
        if (i === next) continue;
        const nextBranch = [...branch, [i, next]];
        const newCurrentState = [
          [],
          [...currentState[1]],
          [...currentState[2]],
          [...currentState[3]],
        ];
        if (newCurrentState[i].length === 0) continue;
        newCurrentState[next].push(newCurrentState[i].pop());
        const nextState = newCurrentState;
        stack.push([next, nextBranch, nextState]);
      }
    }
  }

  return result;
};

// function solution(n) {
//   const maxDepth = 2 ** n - 1;
//   const result = [...dfs(1, 2, maxDepth, n), ...dfs(1, 3, maxDepth, n)];
//   return result.flat();
// }

function solution(n) {
  const answer = [];
  const hanoi = (n, from, to, by) => {
    if (n === 1) {
      answer.push([from, to]);
      return;
    }
    hanoi(n - 1, from, by, to);
    answer.push([from, to]);
    hanoi(n - 1, by, to, from);
  };
  hanoi(n, 1, 3, 2);
  return answer;
}

console.log(solution(1)); // [[1, 3]]
console.log(solution(2)); // [[1, 2], [1, 3], [2, 3]]
console.log(solution(3)); // [[1, 3], [1, 2], [3, 2], [1, 3], [2, 1], [2, 3], [1, 3]]
console.log(solution(4)); // [[1, 2], [1, 3], [2, 3], [1, 2], [3, 1], [3, 2], [1, 2], [1, 3], [2, 3], [2, 1], [3, 1], [2, 3], [1, 2], [1, 3], [2, 3]]
console.log(solution(5));
console.log(solution(6));
console.log(solution(7));
console.log(solution(8));
console.log(solution(9));
console.log(solution(10));
console.log(solution(11));
console.log(solution(12));
console.log(solution(13));
console.log(solution(14));
console.log(solution(15));
