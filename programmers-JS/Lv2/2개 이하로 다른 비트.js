function solution(numbers) {
  return numbers.map((number) => {
    if (number === 1) return 2;

    const binNumSplitedArr = number.toString(2).split("");
    const lastZeroIdx = binNumSplitedArr.lastIndexOf("0");

    // 모든 자리가 1로 끝나는 경우 ex 111 -> 1011  1111 -> 10111  11111 -> 101111
    if (lastZeroIdx === -1) {
      binNumSplitedArr[0] = "0";
      binNumSplitedArr.unshift("1");
      return parseInt(binNumSplitedArr.join(""), 2);
    }

    // 1이 마지막 자리부터 3개 이상 연속되는 경우 ex 10111 -> 11011 101111 -> 110111
    if (binNumSplitedArr.length - lastZeroIdx >= 3) {
      binNumSplitedArr[lastZeroIdx] = "1";
      binNumSplitedArr[lastZeroIdx + 1] = "0";
      return parseInt(binNumSplitedArr.join(""), 2);
    }

    return number + 1;
  });
}

//** 테스트케이스 10, 11 시간 초과 */
function solution_Fail_1(numbers) {
  return numbers.map((number) => {
    let accNumber = number + 1;
    const binNumSplitedArr = number.toString(2).split("");

    while (true) {
      const accBinNumSplitedArr = accNumber.toString(2).split("");

      if (binNumSplitedArr.length < accBinNumSplitedArr.length) {
        binNumSplitedArr.unshift("0");
      }

      let count = 0;
      for (let i = 0; i < binNumSplitedArr.length; i++) {
        if (binNumSplitedArr[i] !== accBinNumSplitedArr[i]) count++;
      }

      if (count <= 2) return accNumber;
      accNumber++;
    }
  });
}

// [ 0 ] // 1    0 1
// [ 1 ] // 2    01 10
// [ 2 ] // 3    10 11
// [ 3 ] // 5    011 101
// [ 4 ] // 5    100 101
// [ 5 ] // 6    101 110
// [ 6 ] // 7    110 111
// [ 7 ] // 11   111 1011 /** 모든 자리가 111로 끝나는 숫자는 뻠삥이 발생 */
// [ 8 ] // 9    1000 1001
// [ 9 ] // 10   1001 1010
// [ 10 ] // 11  1010 1011
// [ 14 ] // 15  1110 1111
// [ 15 ] // 23  1111 10111
// [ 16 ] // 17  10000 10001

console.log(solution([2, 7])); // [3, 11]
console.log(solution([23])); // [27]
console.log(solution([3, 7, 15, 30, 31])); // [5, 11, 23, 31, 39]
console.log(solution([1000000000000000])); // [1000000000000001]
