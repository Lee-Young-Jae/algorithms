function solution(my_string) {
  const alphabets = {};
  Array(26)
    .fill(0)
    .forEach((_, i) => {
      alphabets[String.fromCharCode(i + 65)] = 0;
    });
  Array(26)
    .fill(0)
    .forEach((_, i) => {
      alphabets[String.fromCharCode(i + 97)] = 0;
    });
  const charArr = [...my_string];
  charArr.forEach((char) => (alphabets[char] = alphabets[char] + 1));
  return Object.values(alphabets);
}

console.log(solution("Programmers")); // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 3, 1, 0, 0, 0, 0, 0, 0, 0]
