function solution(myString, pat) {
  let result = 0;
  const splitedPat = pat.split("");

  myString.split("").forEach((char, index) => {
    let isAllSame = true;
    for (let i = 0; i < splitedPat.length; i++) {
      if (myString[index + i] !== splitedPat[i]) {
        isAllSame = false;
        break;
      }
    }
    result = isAllSame ? result + 1 : result;
  });

  return result;
}

console.log(solution("banana", "ana")); // 2
console.log(solution("aaaa", "aa")); // 3
console.log(solution("aaabbb", "a")); // 3
