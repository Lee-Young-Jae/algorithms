function solution(numLog) {
  const keyOption = (prev, next) => {
    const diff = next - prev;
    switch (diff) {
      case 1:
        return "w";
      case -1:
        return "s";
      case 10:
        return "d";
      case -10:
        return "a";
      default:
        return "";
    }
  };

  return numLog.reduce((acc, cur, index) => {
    if (index === numLog.length - 1) return acc;
    return (acc += keyOption(cur, numLog[index + 1]));
  }, "");
}

console.log(solution([0, 1, 0, 10, 0, 1, 0, 10, 0, -1, -2, -1])); // "wsdawsdassw"
