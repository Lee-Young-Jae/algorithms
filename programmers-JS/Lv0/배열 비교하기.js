function solution(arr1, arr2) {
  const arr1Sum = arr1.reduce((acc, cur) => acc + cur, 0);
  const arr2Sum = arr2.reduce((acc, cur) => acc + cur, 0);

  if (arr1Sum === arr2Sum) {
    return 0;
  } else if (arr1Sum > arr2Sum) {
    return 1;
  } else {
    return -1;
  }
}

console.log(solution([49, 13], [70, 11, 2])); // -1
console.log(solution([100, 17, 84, 1], [55, 12, 65, 36])); // 1
console.log(solution([1, 2, 3, 4, 5], [3, 3, 3, 3, 3])); // 0
