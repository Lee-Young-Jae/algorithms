function solution(dirs) {
  var answer = 0;
  const visited = [];
  const coordinate = [0, 0];
  const direction = {
    U: [0, 1],
    D: [0, -1],
    R: [1, 0],
    L: [-1, 0],
  };

  for (let i = 0; i < dirs.length; i++) {
    const [x, y] = coordinate;
    const [dx, dy] = direction[dirs[i]];

    if (x + dx < -5 || x + dx > 5 || y + dy < -5 || y + dy > 5) {
      continue;
    }

    const path = `${x},${y},${x + dx},${y + dy}`;
    const reversePath = `${x + dx},${y + dy},${x},${y}`;

    if (!visited.includes(path) && !visited.includes(reversePath)) {
      visited.push(path);
      answer++;
    }

    coordinate[0] += dx;
    coordinate[1] += dy;
  }

  return answer;
}

console.log(solution("ULURRDLLU")); // 7
console.log(solution("LULLLLLLU")); // 7
