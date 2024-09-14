// Run by Node.js
const readline = require("readline");

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    console.log(solution(line));
    rl.close();
  }

  process.exit();
})();

const solution = (N) => {
  let n = BigInt(N);
  let result = BigInt(((n * (n + 1n)) / 2n) ** 2n) % BigInt(1000000007);
  return `${result}`.split("n")[0];
};
