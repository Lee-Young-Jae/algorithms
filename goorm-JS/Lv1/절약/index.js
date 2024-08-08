// Run by Node.js
const readline = require("readline");

(async () => {
  let rl = readline.createInterface({ input: process.stdin });
  let input = [];
  for await (const line of rl) {
    input.push(line);
    rl.close();
  }
  const N = input.shift();
  const result = solution(+N, input);
  console.log(result);

  process.exit();
})();

const MESSAGE = {
  SUCCESS: "success",
  FAIL: "fail",
};

const checkFail = (value) => value < 0;

const solution = (N, information) => {
  const account = information.map((item) => item.split(" "));
  let money = 0;
  for (let [type, value] of account) {
    if (type === "in") {
      money += Number(value);
    } else {
      money -= Number(value);
    }
    if (checkFail(money)) {
      return MESSAGE.FAIL;
    }
  }

  return MESSAGE.SUCCESS;
};
