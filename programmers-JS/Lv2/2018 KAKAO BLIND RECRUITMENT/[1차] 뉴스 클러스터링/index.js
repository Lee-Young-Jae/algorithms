function solution(str1, str2) {
  const getUpperdString = (str) => str.toUpperCase();
  const validate = (string) => {
    return /^[a-zA-Z]*$/g.test(string);
  };

  const splitedByTwoChar = (str) => {
    const origin = [...str];
    const result = [];

    for (let i = 0; i < str.length - 1; i++) {
      const twoChar = origin[i] + origin[i + 1];
      if (validate(twoChar)) result.push(twoChar);
    }
    return result;
  };

  const getMultipleIntersection = (arr1, arr2) => {
    const copiedArr2 = [...arr2];
    const result = [];
    for (let str1 of arr1) {
      if (copiedArr2.includes(str1)) {
        copiedArr2.splice(copiedArr2.indexOf(str1), 1);
        result.push(str1);
      }
    }
    return result;
  };

  const getMultipleUnion = (arr1, arr2) => {
    const copiedArr1 = [...arr1];
    const copiedArr2 = [...arr2];

    for (let str1 of arr1) {
      if (copiedArr2.includes(str1)) {
        copiedArr2.splice(copiedArr2.indexOf(str1), 1);
      }
    }
    for (let str2 of arr2) {
      if (copiedArr1.includes(str2)) {
        copiedArr1.splice(copiedArr1.indexOf(str2), 1);
      }
    }
    return [
      ...copiedArr1,
      ...copiedArr2,
      ...getMultipleIntersection(arr1, arr2),
    ];
  };

  const isEmpty = (arr) => arr.length === 0;

  const setA = splitedByTwoChar(getUpperdString(str1));
  const setB = splitedByTwoChar(getUpperdString(str2));

  if (isEmpty(setA) && isEmpty(setB)) {
    return 1 * 65536;
  }

  return ~~(
    (getMultipleIntersection(setA, setB).length /
      getMultipleUnion(setA, setB).length) *
    65536
  );
}

console.log(solution("FRANCE", "french")); // 16384
console.log(solution("handshake", "shake hands")); // 65536
console.log(solution("aa1+aa2", "AAAA12")); // 43690
console.log(solution("E=M*C^2", "e=m*c^2")); // 65536
