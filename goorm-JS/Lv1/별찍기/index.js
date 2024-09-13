// Run by Node.js
const readline = require("readline");

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  for await (const line of rl) {
    solution(+line);
    rl.close();
  }

  process.exit();
})();

function solution(N) {
  for (let star = 1; star <= N; star++) {
    console.log("*".repeat(star).padStart(N, " "));
  }
}
