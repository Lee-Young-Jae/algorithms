const readline = require("readline");
let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
let input;
rl.on("line", (line) => {
  const [W, R] = line.split(" ");
  solution(W, R);
  rl.close();
});

rl.on("close", () => {});

const solution = (W, R) => {
  const result = ~~(W * (1 + R / 30));
  console.log(result);
};
