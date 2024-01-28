function solution(begin, target, words) {
  const result = [];
  const graph = [];
  words = [begin, ...words];

  words.forEach((targetWord, index) => {
    const vertex = [];
    words.forEach((word) => {
      if (!(targetWord === word)) {
        let diffrentCount = 0;
        for (let charIndex in [...targetWord]) {
          diffrentCount =
            targetWord[charIndex] === word[charIndex]
              ? diffrentCount
              : diffrentCount + 1;
        }
        if (diffrentCount === 1) {
          vertex.push(word);
        }
      }
    });
    graph.push(vertex);
  });

  const stack = [];
  const visited = words.reduce(
    (acc, word) => ({
      ...acc,
      [word]: false,
    }),
    {}
  );

  stack.push([0, 0]);

  while (stack.length) {
    const [nodeIndex, count] = stack.pop();

    if (words[nodeIndex] === target) {
      result.push(count);
      continue;
    }

    if (!visited[words[nodeIndex]]) {
      visited[words[nodeIndex]] = true;
      graph[nodeIndex].forEach((word) => {
        stack.push([words.indexOf(word), count + 1]);
      });
    }
  }

  return result.length === 0 ? 0 : Math.min(...result);
}

console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log", "cog"])); // 4
console.log(solution("hit", "cog", ["hot", "dot", "dog", "lot", "log"])); // 0
console.log(solution("hit", "hhh", ["hhh", "hht"])); // 2
