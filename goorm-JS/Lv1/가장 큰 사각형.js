// Run by Node.js
const readline = require("readline");

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  const inputs = [];
  for await (const line of rl) {
    inputs.push(line);
    rl.close();
  }

  console.log(
    inputs
      .splice(1)
      .map((item) => item.split(" "))
      .reduce((acc, [w, h]) => (acc < w * h ? w * h : acc), 0)
  );

  process.exit();
})();
