function solution(operations) {
  const queue = [];
  operations.forEach((operation) => {
    const [command, value] = operation.split(" ");

    if (command === "I") {
      queue.push(Number(value));
    }

    if (command === "D") {
      if (queue.length) {
        if (value === "1") {
          queue.splice(queue.indexOf(Math.max(...queue)), 1);
        } else {
          queue.splice(queue.indexOf(Math.min(...queue)), 1);
        }
      }
    }
  });

  if (queue.length) {
    return [Math.max(...queue), Math.min(...queue)];
  }

  return [0, 0];
}
