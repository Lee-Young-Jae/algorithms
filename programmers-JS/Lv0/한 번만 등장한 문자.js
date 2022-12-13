function solution(s) {
  let dictionary = {};
  let answer = [];
  s.split("").forEach((item) => {
    if (dictionary[item]) {
      dictionary[item] += 1;
    } else {
      dictionary[item] = 1;
    }
  });

  for (let key in dictionary) {
    if (dictionary[key] === 1) {
      answer.push(key);
    }
  }

  return answer.sort().join("");
}
