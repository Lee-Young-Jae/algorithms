const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  const [string, number] = line.split(" ");
  console.log(string.repeat(Number(number)));
}).on("close", function () {
  str = input[0];
  n = Number(input[1]);
});
