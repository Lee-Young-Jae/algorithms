function solution(plans) {
  plans = plans
    .map(([name, start, playtime]) => {
      const [hour, minute] = start.split(":");
      const n_startTime = Number(hour) * 60 + Number(minute);
      return [name, n_startTime, Number(playtime)];
    })
    .sort((a, b) => a[1] - b[1]);

  const result = [];
  let currentTime = plans[0][1];
  let index = 0;
  const stack = [];
  while (plans.length > index) {
    stack.push(plans[index]);

    if (currentTime < stack.at(-1)[1]) currentTime = stack.at(-1)[1];

    while (stack.length && stack.at(-1)[2]) {
      currentTime += 1;
      stack.at(-1)[2] -= 1;
      if (!stack.at(-1)[2]) result.push(stack.pop()[0]);

      if (plans.length > index + 1 && currentTime === plans[index + 1][1]) {
        stack.push(plans[index + 1]);
        index += 1;
      }
    }
    index += 1;
  }

  return result;
}
