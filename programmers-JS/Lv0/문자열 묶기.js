function solution(strArr) {
  const strDic = {};

  strArr.forEach((str) => {
    const key = str.length + "";
    if (strDic[key] === undefined) {
      strDic[key] = 1;
    } else {
      strDic[key] += 1;
    }
  });

  let max = 0;
  for (let key in strDic) {
    if (max < strDic[key]) {
      max = strDic[key];
    }
  }

  return max;
}

console.log(solution(["a", "bc", "d", "efg", "hi"])); //2
