# 2022 KAKAO BLIND RECRUITEMENT - 주차 요금 계산

[주차요금 계산](https://school.programmers.co.kr/learn/courses/30/lessons/92341)

## 문제 이해하기

- 주차장의 기본 요금표는 `기본 시간(분)`, `기본 요금`, `단위 시간(분)`, `단위 요금`으로 이루어져 있다.

- 입/출차 기록은 `시각`, `차량 번호`, `입/출 내역`로 이루어져 있다.

주차장의 요금표와 차량의 입/출차 기록이 주어질 때, 차량별 주차 요금을 계산한다.

## 풀이

### 이전 풀이

1. carList 객체를 만들어서 차량별 입차 시간, 출차 시간, 주차 여부를 저장한다.

2. records를 순회하면서 carList에 차량이 있는지 확인하고, 없으면 차량을 추가한다.

3. 차량이 있다면 입차 시간, 출차 시간, 주차 여부를 업데이트한다.

4. records를 모두 순회한 후, 주차 중인 차량은 23시 59분으로 출차 시간을 업데이트한다.

5. carList를 순회하면서 주차 요금을 계산한다.

6. 주차 요금을 answer에 저장하고, 차량 번호 순으로 정렬한다.

```javascript
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
```

### 2024.07.07 풀이

이전 풀이와 거의 동일한 방식으로 풀었다. 다만, 시간을 계산하는 함수를 따로 만들어서 사용했다.

```javascript
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
```
