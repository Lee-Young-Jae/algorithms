function solution(my_string, indices) {
  return my_string
    .split("")
    .reduce(
      (acc, char, index) => (indices.includes(index) ? acc : acc + char),
      ""
    );
}

console.log(solution("apporoograpemmemprs", [1, 16, 6, 15, 0, 10, 11, 3])); // "programmers"
