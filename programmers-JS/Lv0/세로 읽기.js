function solution(my_string, m, c) {
  const answer = my_string
    .split("")
    .reduce((acc, char, index) => (index % m === c - 1 ? acc + char : acc), "");
  return answer;
}

console.log(solution("ihrhbakrfpndopljhygc", 4, 2)); // "happy"
console.log(solution("programmers", 1, 1)); // "programmers"
