function solution(babbling) {
  var answer = 0;
  const joca = ["aya", "ye", "woo", "ma"];
  const jocaDic = ["aya", "ye", "woo", "ma"];
  for (i of joca) {
    for (j of joca) {
      jocaDic.push(i + j);
      for (k of joca) {
        jocaDic.push(i + j + k);
        for (l of joca) {
          jocaDic.push(i + j + k + l);
        }
      }
    }
  }

  babbling.forEach((item) => {
    if (jocaDic.includes(item)) {
      console.log(item);
      answer += 1;
    }
  });

  return answer;
}

console.log(solution(["aya", "yee", "u", "maa", "wyeoo"])); // 1
console.log(solution(["ayaye", "uuuma", "ye", "yemawoo", "ayaa"])); // 3
