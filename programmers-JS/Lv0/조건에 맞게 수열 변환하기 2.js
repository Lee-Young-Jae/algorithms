function solution(arr) {
  let count = 0;
  let isAllSame = false;
  while (!isAllSame) {
    let beforeArr = [...arr];

    arr = arr.map((v) => {
      if (v >= 50 && v % 2 === 0) {
        return (v /= 2);
      } else if (v < 50 && v % 2 === 1) {
        return (v = v * 2 + 1);
      }
      return v;
    });

    if (beforeArr.join("") === arr.join("")) {
      isAllSame = true;
    } else {
      count++;
    }
  }

  return count;
}

console.log(solution([1, 2, 3, 100, 99, 98])); // 5
