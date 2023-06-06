function solution(names) {
  return names.filter((_, index) => index % 5 === 0);
}

console.log(
  solution(["nami", "ahri", "jayce", "garen", "ivern", "vex", "jinx"])
); // ["nami", "vex"]
