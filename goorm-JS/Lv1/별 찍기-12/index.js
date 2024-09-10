// Run by Node.js
const readline = require("readline");

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    solution(line);
    rl.close();
  }

  process.exit();
})();

const solution = (N) => {
  for (let i = 1; i <= N; i++) {
    let buffer = "";
    buffer = " ".repeat(N - i) + "*".repeat(i);
    console.log(buffer);
  }
  for (let i = N - 1; i >= 1; i--) {
    let buffer = "";
    buffer = " ".repeat(N - i) + "*".repeat(i);
    console.log(buffer);
  }
};
