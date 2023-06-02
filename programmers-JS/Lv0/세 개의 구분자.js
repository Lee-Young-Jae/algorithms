function solution(myStr) {
  const answer = myStr.split(/[abc]/).filter((el) => el !== "");
  return answer.length === 0 ? ["EMPTY"] : answer;
}

console.log(solution("baconlettucetomato")); // ["onlettu", "etom", "to"]
console.log(solution("abcd")); // ["d"]
console.log(solution("cabab")); // ["EMPTY"]
