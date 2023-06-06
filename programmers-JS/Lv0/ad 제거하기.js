function solution(strArr) {
  return strArr.filter((str) => !str.includes("ad"));
}

console.log(solution(["and", "notad", "abcd"])); // ["and","abcd"]
console.log(solution(["there", "are", "no", "a", "ds"])); // ["there","are","no","a","ds"]
