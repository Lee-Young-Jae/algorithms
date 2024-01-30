const mapping = (userId, banId) => {
  const regExp = new RegExp(`^${banId.replaceAll("*", ".")}$`);
  return regExp.test(userId);
};

const dfs = (graph, start, depth, result) => {
  const stack = [];
  stack.push([start, 1, [start]]);

  while (stack.length) {
    const [id, currentDepth, branch] = stack.pop();

    if (currentDepth === depth) {
      result.push(branch);
      continue;
    }

    graph[currentDepth].forEach((currentId) => {
      if (!branch.includes(currentId))
        stack.push([currentId, currentDepth + 1, [...branch, currentId]]);
    });
  }
};

function solution(user_id, banned_id) {
  const mappingIds = [];
  banned_id.forEach((banId, i) => {
    const mappings = [];
    user_id.forEach((userId, j) => {
      if (mapping(userId, banId)) {
        mappings.push(userId);
      }
    });
    mappingIds.push(mappings);
  });

  let result = [];
  const depth = mappingIds.length;

  mappingIds[0].forEach((id) => {
    dfs(mappingIds, id, depth, result);
  });

  const uniqueArrays = Array.from(
    new Set(result.map((arr) => arr.slice().sort().join(",")))
  );

  return uniqueArrays.map((str) => str.split(",")).length;
}

console.log(
  solution(["frodo", "fradi", "crodo", "abc123", "frodoc"], ["fr*d*", "abc1**"])
); // 2

console.log(
  solution(
    ["frodo", "fradi", "crodo", "abc123", "frodoc"],
    ["*rodo", "*rodo", "******"]
  )
); // 2

console.log(
  solution(
    ["frodo", "fradi", "crodo", "abc123", "frodoc"],
    ["fr*d*", "*rodo", "******", "******"]
  )
); //3
