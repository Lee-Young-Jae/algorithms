function solution(my_string, s, e) {
  return (
    my_string.slice(0, s) +
    my_string
      .slice(s, e + 1)
      .split("")
      .reverse()
      .join("") +
    my_string.slice(e + 1)
  );
}

console.log(solution("Progra21Sremm3", 6, 12)); // "ProgrammerS123"
console.log(solution("Stanley1yelnatS", 4, 10)); // "Stanley1yelnatS"
