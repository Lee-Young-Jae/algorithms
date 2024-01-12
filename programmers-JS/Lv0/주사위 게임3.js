function solution(a, b, c, d) {
  // const numbers = [a, b, c, d];
  // const max = Math.max(a, b, c, d);
  // const min = Math.min(a, b, c, d);
  // const others = numbers.filter((n) => n !== max && n !== min);

  // const maxCount = numbers.filter((n) => n === max).length;
  // const minCount = numbers.filter((n) => n === min).length;

  // const isAllSame = numbers.every((n) => n === max);
  // if (isAllSame) return max * 1111;
  // if (maxCount === 3 || minCount === 3) return (max * 10 + min) ** 2;
  // if (maxCount === 2 && minCount === 2) return (max + min) * (max - min);
  // //어느 두 주사위에서 나온 숫자가 p로 같고 나머지 두 주사위에서 나온 숫자가 각각 p와 다른 q, r이라면 q × r점을 얻습니다.
  // if (maxCount === 2 || minCount === 2) return others[0] * others[1];
  // return min;

  const numbers = [a, b, c, d];
  const frequencyNumber = numbers.reduce((acc, cur) => {
    if (acc[cur]) {
      acc[cur]++;
    } else {
      acc[cur] = 1;
    }
    return acc;
  }, {});

  const sortedFrequencyNumber = Object.entries(frequencyNumber).sort(
    (a, b) => b[1] - a[1]
  );

  if (sortedFrequencyNumber[0][1] === 4)
    return +sortedFrequencyNumber[0][0] * 1111;
  if (sortedFrequencyNumber[0][1] === 3)
    return (
      (+sortedFrequencyNumber[0][0] * 10 + +sortedFrequencyNumber[1][0]) ** 2
    );
  if (sortedFrequencyNumber[0][1] === 2 && sortedFrequencyNumber[1][1] === 2)
    return (
      (+sortedFrequencyNumber[0][0] + +sortedFrequencyNumber[1][0]) *
      Math.abs(+sortedFrequencyNumber[0][0] - +sortedFrequencyNumber[1][0])
    );
  if (sortedFrequencyNumber[0][1] === 2)
    return +sortedFrequencyNumber[1][0] * +sortedFrequencyNumber[2][0];
  return Math.min(...numbers);
}

console.log(
  solution(2, 2, 2, 2) // 2222
);
console.log(
  solution(4, 1, 4, 4) // 1681
);
console.log(
  solution(6, 3, 3, 6) // 27
);
console.log(
  solution(2, 5, 2, 6) // 30
);
console.log(
  solution(6, 4, 2, 5) // 2
);
