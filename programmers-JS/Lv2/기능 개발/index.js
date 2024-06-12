function solution(progresses, speeds) {
  let days = progresses.map((progress, index) =>
    Math.ceil((100 - progress) / speeds[index])
  );
  const result = [];
  let max = days[0];
  let count = 0;
  for (let i = 0; i < days.length; i++) {
    if (max < days[i]) {
      max = days[i];
      result.push(count);
      count = 1;
    } else {
      count++;
    }
  }
  result.push(count);
  return result;
}
