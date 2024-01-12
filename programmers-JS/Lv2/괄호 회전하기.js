function solution(s) {
  let answer = 0;
  let stack = [];
  let bracketList = [];

  for (let i = 0; i < s.length; i++) {
    bracketList.push(s.slice(i) + s.slice(0, i));
  }
  for (let i = 0; i < bracketList.length; i++) {
    for (let j = 0; j < bracketList[i].length; j++) {
      if (
        bracketList[i][j] === "(" ||
        bracketList[i][j] === "{" ||
        bracketList[i][j] === "["
      ) {
        stack.push(bracketList[i][j]);
      } else {
        if (stack.length === 0) {
          stack.push(bracketList[i][j]);
          break;
        }
        if (bracketList[i][j] === ")" && stack[stack.length - 1] === "(") {
          stack.pop();
        } else if (
          bracketList[i][j] === "}" &&
          stack[stack.length - 1] === "{"
        ) {
          stack.pop();
        } else if (
          bracketList[i][j] === "]" &&
          stack[stack.length - 1] === "["
        ) {
          stack.pop();
        } else {
          stack.push(bracketList[i][j]);
          break;
        }
      }
    }
    if (stack.length === 0) {
      answer++;
    }
    stack = [];
  }

  return answer;
}

console.log(solution("[](){}")); // 3
console.log(solution("}]()[{")); // 2
console.log(solution("[)(]")); // 0
console.log(solution("}}}")); // 0
