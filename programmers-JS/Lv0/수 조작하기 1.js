function solution(n, control) {
  const scores = {
    w: 1,
    s: -1,
    d: 10,
    a: -10,
  };

  return control.split("").reduce((acc, cur) => acc + scores[cur], n);
}

console.log(solution(0, "wsdawsdassw")); // -1
