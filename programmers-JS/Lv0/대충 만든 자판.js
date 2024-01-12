function solution(keymap, targets) {
  const distanceDict = {};

  keymap.forEach((array) => {
    array.split("").forEach((char, index) => {
      if (distanceDict[char] === undefined) {
        distanceDict[char] = index + 1;
      } else {
        distanceDict[char] = Math.min(distanceDict[char], index + 1);
      }
    });
  });

  const answer = targets.map((target) => {
    const distance = target.split("").reduce((acc, cur, _, arr) => {
      if (distanceDict[cur] === undefined) {
        arr.splice(-1);
        return -1;
      } else {
        return acc + distanceDict[cur];
      }
    }, 0);
    return distance;
  });

  return answer;
}

console.log(solution(["ABACD", "BCEFD"], ["ABCD", "AABB"])); // [9, 4]
console.log(solution(["AA"], ["B"])); // [-1]
console.log(solution(["AGZ", "BSSS"], ["ASA", "BGZ"])); // [4, 6]
