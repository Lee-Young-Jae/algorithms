// Run by Node.js
const readline = require("readline");

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  const inputs = [];
  for await (const line of rl) {
    inputs.push(line);
    rl.close();
  }
  const [_, 축제예산] = inputs
    .shift()
    .split(" ")
    .map((item) => Number(item));
  const result = inputs
    .map((item) => item.split(" "))
    .reduce((acc, [가격, 개수]) => acc - Number(가격) * Number(개수), 축제예산);
  console.log(result < 0 ? "No" : result);
  process.exit();
})();
