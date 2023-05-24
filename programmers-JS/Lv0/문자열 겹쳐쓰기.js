function solution(my_string, overwrite_string, s) {
  let targetIndex = s;
  const result = my_string.split("");
  overwrite_string.split("").forEach((item) => {
    result[targetIndex] = item;
    targetIndex++;
  });
  return result.join("");
}

console.log(solution("He11oWor1d", "lloWorl", 2)); // "HelloWorld"
console.log(solution("Program29b8UYP", "merS123", 7)); // "ProgrammerS123"
