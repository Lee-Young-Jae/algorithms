function solution(my_string, alp) {
  return my_string.replaceAll(alp, alp.toUpperCase());
}

console.log(solution("ItisTimeToStudy", "T")); // ITisTimeToSTudy
console.log(solution("programmers", "p")); // Programmers
