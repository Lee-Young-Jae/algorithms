function solution(sequence, k) {
  let result = [];
  let minLength = Infinity;
  const sequenceSum = [0];
  sequence.forEach((item) => {
    sequenceSum.push(sequenceSum.at(-1) + item);
  });

  let left = 0;
  let right = 0;
  while (left <= right) {
    let sum = sequenceSum[right] - sequenceSum[left];
    if (sum === k) {
      const currentLength = right - left;
      if (minLength > currentLength) {
        result = [left, right - 1];
        minLength = Math.min(minLength, currentLength);
      }
    }

    if (sum < k) {
      right++;
    } else {
      left++;
    }
  }

  return result;
}
