function solution(fees, records) {
  var answer = [];
  const [baseTime, baseFee, unitTime, unitFee] = fees;
  const carList = {};

  records.forEach((record) => {
    const [time, carNum, inOut] = record.split(" ");
    const [hour, minute] = time.split(":");
    if (carList[carNum]) {
      if (inOut === "IN") {
        carList[carNum] = {
          ...carList[carNum],
          isParking: true,
          inTime: carList[carNum]?.inTime
            ? carList[carNum].inTime + Number(hour) * 60 + Number(minute)
            : Number(hour) * 60 + Number(minute),
        };
      } else if (inOut === "OUT") {
        carList[carNum] = {
          ...carList[carNum],
          isParking: false,
          outTime: carList[carNum]?.outTime
            ? carList[carNum].outTime + Number(hour) * 60 + Number(minute)
            : Number(hour) * 60 + Number(minute),
        };
      }
    } else {
      if (inOut === "IN") {
        carList[carNum] = {
          inTime: Number(hour) * 60 + Number(minute),
          outTime: 0,
          isParking: true,
        };
      } else if (inOut === "OUT") {
        carList[carNum] = {
          inTime: 0,
          outTime: Number(hour) * 60 + Number(minute),
          isParking: false,
        };
      }
    }
  });

  for (let carNum in carList) {
    if (carList[carNum].isParking) {
      carList[carNum].outTime += 23 * 60 + 59;
    }
  }

  for (let carNum in carList) {
    const { inTime, outTime } = carList[carNum];
    let fee = baseFee;
    if (outTime - inTime > baseTime) {
      fee += Math.ceil((outTime - inTime - baseTime) / unitTime) * unitFee;
    }
    answer.push([carNum, fee]);
  }

  answer = answer.sort((a, b) => a[0] - b[0]).map((car) => car[1]);

  return answer;
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
);

//[14600, 34400, 5000]

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
);

//[0, 591]

console.log(solution([1, 461, 1, 10], ["00:00 1234 IN"]));

//[14841]
