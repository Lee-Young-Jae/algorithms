function solution(code) {
  let mode = 0;
  let ret = "";
  code.split("").forEach((c, index) => {
    if (mode === 0) {
      if (c !== "1" && index % 2 === 0) {
        ret += c;
      }
    }
    if (mode === 1) {
      if (c !== "1" && index % 2 === 1) {
        ret += c;
      }
    }

    if (c === "1") {
      mode = mode === 0 ? 1 : 0;
    }
  });

  return ret.length > 0 ? ret : "EMPTY";
}

console.log(solution("abc1abc1abc")); // "acbac"
