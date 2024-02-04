function solution(msg) {
  const 사전 = new Array(26).fill(0).reduce(
    (acc, _, idx) => ({
      ...acc,
      [String.fromCharCode(idx + 65)]: idx + 1,
    }),
    {}
  );

  const result = [];
  let i = 0;
  while (i < msg.length) {
    const queue = [];
    queue.push(msg[i]);

    let scope = 1;
    while (사전[queue.join("")]) {
      if (i + scope > msg.length) break;
      queue.push(msg[i + scope]);
      scope = scope + 1;
    }

    result.push(사전[queue.slice(0, queue.length - 1).join("")]);
    사전[queue.join("")] = Object.keys(사전).length + 1;
    i = i + scope - 1;
  }

  return result;
}

console.log(solution("KAKAO")); // [11, 1, 27, 15]
console.log(solution("TOBEORNOTTOBEORTOBEORNOT")); // [20, 15, 2, 5, 15, 18, 14, 15, 20, 27, 29, 31, 36, 30, 32, 34]
console.log(solution("ABABABABABABABAB")); // [1, 2, 27, 29, 28, 31, 30]
