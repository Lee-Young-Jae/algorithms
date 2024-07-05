const readline = require("readline");

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  const inputs = [];
  for await (const line of rl) {
    inputs.push(line);

    rl.close();
  }
  let [n, k] = inputs[0].split(" ");
  const s = inputs[1];
  k = Number(k);

  const result = s
    .split("")
    .map((number) => Number(number) + k)
    .join("");
  console.log(result);
  process.exit();
})();
