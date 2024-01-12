function solution(t, p) {
  let answer = 0;
  const pLen = p.length;
  const tLen = t.length;
  let tArray = t.split("");

  for (let i = 0; i < tLen - pLen + 1; i++) {
    let pArray = tArray.slice(i, i + pLen);
    let pString = pArray.join("");
    if (pString <= p) {
      answer += 1;
    }
  }

  return answer;
}

console.log(solution("3141592", "271")); //2
console.log(solution("500220839878", "7")); //8
console.log(solution("10203", "15")); //3
