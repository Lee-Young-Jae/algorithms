function solution(x, y, n) {
  const queue = [];
  queue.push([y, 0]);
  let result = -1;

  while (queue.length) {
    const [current, depth] = queue.shift();

    if (current === x) {
      result = depth;
      break;
    }

    if (current < x) continue;

    if (current % 2 === 0) {
      queue.push([current / 2, depth + 1]);
    }

    if (current % 3 === 0) {
      queue.push([current / 3, depth + 1]);
    }

    queue.push([current - n, depth + 1]);
  }

  return result;
}
