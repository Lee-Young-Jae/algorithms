function solution(arr1, arr2) {
  var answer = [[]];
  var arr2T = arr2[0].map((_, i) => arr2.map((row) => row[i]));
  for (let i = 0; i < arr1.length; i++) {
    answer[i] = [];
    for (let j = 0; j < arr2T.length; j++) {
      answer[i][j] = arr1[i].reduce(
        (acc, cur, idx) => acc + cur * arr2T[j][idx],
        0
      );
    }
  }
  return answer;
}

console.log(
  solution(
    [
      [1, 4],
      [3, 2],
      [4, 1],
    ],
    [
      [3, 3],
      [3, 3],
    ]
  )
); // [[15, 15], [15, 15], [15, 15]]
console.log(
  solution(
    [
      [2, 3, 2],
      [4, 2, 4],
      [3, 1, 4],
    ],
    [
      [5, 4, 3],
      [2, 4, 1],
      [3, 1, 1],
    ]
  )
); // [[22, 22, 11], [36, 28, 18], [29, 20, 14]]
