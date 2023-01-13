function solution(expression) {
  const op = [
    ["+", "-", "*"],
    ["+", "*", "-"],
    ["-", "+", "*"],
    ["-", "*", "+"],
    ["*", "+", "-"],
    ["*", "-", "+"],
  ];
  const num = expression.split(/[^0-9]/);
  const oper = expression.split(/[0-9]/).filter((v) => v !== "");
  let answer = 0;
  for (let i = 0; i < op.length; i++) {
    const tempNum = [...num];
    const tempOper = [...oper];
    for (let j = 0; j < op[i].length; j++) {
      while (tempOper.includes(op[i][j])) {
        const idx = tempOper.indexOf(op[i][j]);
        tempNum.splice(
          idx,
          2,
          eval
            .call(null, tempNum[idx] + tempOper[idx] + tempNum[idx + 1])
            .toString()
        );
        tempOper.splice(idx, 1);
      }
    }
    answer = Math.max(answer, Math.abs(tempNum[0]));
  }

  return answer;
}

console.log(solution("100-200*300-500+20")); // 60420
console.log(solution("50*6-3*2")); // 300
