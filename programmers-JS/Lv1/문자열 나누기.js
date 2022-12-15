function solution(s) {
  let x = s[0];
  let xStack = [];
  let yStack = [];
  const result = [""];
  s.split("").forEach((item, index) => {
    if (item === x) {
      xStack.push(item);
    } else {
      yStack.push(item);
    }
    result[result.length - 1] += item;
    if (xStack.length === yStack.length) {
      xStack = [];
      yStack = [];
      result.push("");
      x = s[index + 1];
    }
  });
  return result[result.length - 1] === "" ? result.length - 1 : result.length;
}

console.log(solution("banana")); // 3
// b
// a 1
// n 1

console.log(solution("abracadabra")); // 6
console.log(solution("aaabbaccccabba")); // 3
// a 1
// a 2
// a 3
// b 1
// bb 2
// a 4
// bbc 3
// bbcc 4

// c 1
// c 2
// a 1
// ab 2

// b 1
// a 1
