function solution(quiz) {
  const answer = [];
  quiz.forEach((q) =>
    answer.push(
      eval.call(null, q.replace(/=/g, "==")).toString().toUpperCase() === "TRUE"
        ? "O"
        : "X"
    )
  );
  return answer;
}

console.log(solution(["3 - 4 = -3", "5 + 6 = 11"])); // ["X", "O"]
console.log(
  solution(["19 - 6 = 13", "5 + 66 = 71", "5 - 15 = 63", "3 - 1 = 2"])
); // ["O", "O", "X", "O"]
