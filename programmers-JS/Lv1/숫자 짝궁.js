function solution(X, Y) {
  const numObj = {};
  const result = [];

  for (const number of X) {
    numObj[number] = (numObj[number] || 0) + 1;
  }

  for (const number of Y) {
    if (numObj[number]) {
      result.push(number);
      numObj[number]--;
    }
  }

  const answer = result.sort((a, b) => b - a).join("");

  if (answer === "") return "-1";

  if (!answer.match(/[1-9]/)) {
    return "0";
  }

  return answer;
}
