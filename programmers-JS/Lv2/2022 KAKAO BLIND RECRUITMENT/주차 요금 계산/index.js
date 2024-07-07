const encordToMin = (time) => {
  const [h, m] = time.split(":").map(Number);
  return h * 60 + m;
};

const getDiffMin = (time1, time2) => {
  return encordToMin(time2) - encordToMin(time1);
};

const addMin = (base, add) => {
  return base + encordToMin(add);
};

function solution(fees, records) {
  const cars = {};

  records.forEach((record) => {
    const [time, carNumber, type] = record.split(" ");

    if (type === "IN") {
      const target = cars[carNumber];
      if (target) {
        const newCar = {
          ...target,
          type,
          time,
        };
        cars[carNumber] = newCar;
      } else {
        cars[carNumber] = {
          type,
          time,
          totalMin: 0,
        };
      }
    }

    if (type === "OUT") {
      const target = cars[carNumber];
      const newCar = {
        ...target,
        time,
        type,
        totalMin: target.totalMin + getDiffMin(target.time, time),
      };
      cars[carNumber] = newCar;
    }
  });

  // 출차 내역이 없는 경우 23:59에 출차로 간주
  for (let car of Object.keys(cars)) {
    const target = cars[car];
    if (target.type === "IN") {
      const newCar = {
        ...target,
        type: "OUT",
        totalMin: target.totalMin + getDiffMin(target.time, "23:59"),
      };
      cars[car] = newCar;
    }
  }

  const [baseTime, baseFee, unitTime, unitFee] = fees;

  const result = [];
  // 요금을 부여한다.
  for (let car of Object.keys(cars)) {
    const target = cars[car];
    let targetFee = baseFee;
    let targetTime = target.totalMin - baseTime;

    if (targetTime > 0) {
      targetFee += Math.ceil(targetTime / unitTime) * unitFee;
    }
    result.push([car, targetFee]);
  }

  return result.sort((a, b) => a[0].localeCompare(b[0])).map((item) => item[1]);
}

console.log(
  solution(
    [180, 5000, 10, 600],
    [
      "05:34 5961 IN",
      "06:00 0000 IN",
      "06:34 0000 OUT",
      "07:59 5961 OUT",
      "07:59 0148 IN",
      "18:59 0000 IN",
      "19:09 0148 OUT",
      "22:59 5961 IN",
      "23:00 5961 OUT",
    ]
  )
); // [14600, 34400, 5000]
console.log(
  solution(
    [120, 0, 60, 591],
    [
      "16:00 3961 IN",
      "16:00 0202 IN",
      "18:00 3961 OUT",
      "18:00 0202 OUT",
      "23:58 3961 IN",
    ]
  )
); // [0, 591]

console.log(solution([1, 461, 1, 10], ["00:00 1234 IN"])); // [14841]
