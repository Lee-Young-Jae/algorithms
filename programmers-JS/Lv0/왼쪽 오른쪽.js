function solution(str_list) {
  const directionIndex = str_list.findIndex(
    (item) => item === "l" || item === "r"
  );
  const direction = str_list[directionIndex];

  if (!direction) return [];
  return direction === "l"
    ? str_list.slice(0, directionIndex)
    : str_list.slice(directionIndex + 1);
}

console.log(solution(["u", "u", "l", "r"])); // ["u", "u"]
console.log(solution(["l"])); // []
console.log(solution(["r", "d"])); // [d]
console.log(solution(["u"])); // []
