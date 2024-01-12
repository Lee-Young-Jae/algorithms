function solution(book_time) {
  const MAX_TIME = 24 * 60 + 10;
  const HOUR = 60;
  const CLEANING_TIME = 10;
  const rooms = Array(MAX_TIME).fill(0);

  book_time.forEach((v) => {
    const [start, end] = v;
    const [startHour, startMinute] = start.split(":");
    const [endHour, endMinute] = end.split(":");
    const startTime = Number(startHour) * HOUR + Number(startMinute);
    const endTime = Number(endHour) * HOUR + Number(endMinute) + CLEANING_TIME;

    rooms[startTime] += 1;
    rooms[endTime] -= 1;
  });

  for (let i = 1; i < MAX_TIME; i++) {
    rooms[i] += rooms[i - 1];
  }

  return Math.max(...rooms);
}

console.log(
  solution([
    ["15:00", "17:00"],
    ["16:40", "18:20"],
    ["14:20", "15:20"],
    ["14:10", "19:20"],
    ["18:20", "21:20"],
  ])
); // 3
console.log(
  solution([
    ["09:10", "10:10"],
    ["10:20", "12:20"],
  ])
); // 1
console.log(
  solution([
    ["10:20", "12:30"],
    ["10:20", "12:30"],
    ["10:20", "12:30"],
  ])
); // 3

// https://ksb-dev.tistory.com/269
