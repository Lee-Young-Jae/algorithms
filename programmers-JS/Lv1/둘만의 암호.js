function solution(s, skip, index) {
  var answer = "";
  const alphabetDic = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    f: 6,
    g: 7,
    h: 8,
    i: 9,
    j: 10,
    k: 11,
    l: 12,
    m: 13,
    n: 14,
    o: 15,
    p: 16,
    q: 17,
    r: 18,
    s: 19,
    t: 20,
    u: 21,
    v: 22,
    w: 23,
    x: 24,
    y: 25,
    z: 26,
  };

  const skipsNumber = skip.split("").map((v) => alphabetDic[v]);

  const isOverAlphabet = (number) => {
    return number > 26;
  };

  s.split("").forEach((v, i) => {
    let alphabetNumber = alphabetDic[v];
    for (let i = 0; i < index; i++) {
      alphabetNumber++;
      if (isOverAlphabet(alphabetNumber)) {
        alphabetNumber = 1;
      }
      while (skipsNumber.includes(alphabetNumber)) {
        if (isOverAlphabet(alphabetNumber)) {
          alphabetNumber = 1;
        } else {
          alphabetNumber++;
        }
        if (isOverAlphabet(alphabetNumber)) {
          alphabetNumber = 1;
        }
      }
      iif (isOverAlphabet(alphabetNumber)) {
        alphabetNumber = 1;
      }
    }
    answer += Object.keys(alphabetDic).find(
      (key) => alphabetDic[key] === alphabetNumber
    );
  });

  return answer;
}

console.log(solution("aukks", "wbqd", 5)); // "happy"
console.log(solution("z", "x", 2)); // "b"
console.log(solution("ybcde", "az", 1)); // "bcdef"
