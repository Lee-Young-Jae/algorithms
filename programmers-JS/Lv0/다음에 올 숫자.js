function solution(common) {
  let isArithmeticSeq = common[1] - common[0] === common[2] - common[1];

  return isArithmeticSeq
    ? common[common.length - 1] + common[2] - common[1]
    : (common[common.length - 1] * common[2]) / common[1];
}
