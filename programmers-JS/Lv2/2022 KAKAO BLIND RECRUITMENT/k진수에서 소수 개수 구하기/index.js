const isPrime = (num) => {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i == 0) return false;
  }
  return true;
};

function solution(n, k) {
  const visited = {};
  const n진수 = n.toString(k);
  return n진수
    .split("0")
    .map((item) => {
      if (item !== "0" && item !== "" && visited[item] === undefined) {
        visited[item] = isPrime(item);
      }
      return Number(item);
    })
    .reduce((acc, cur) => {
      if (cur !== 0 && cur !== 1 && visited[cur]) acc++;
      return acc;
    }, 0);
}
