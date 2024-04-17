const isBalance = (string) => {
  const queue = [];
  const u = [];
  const brackets = string.split("");
  for (let index in brackets) {
    const current = brackets[index];
    if (current === "(") queue.push(current);
    if (current === ")") {
      if (queue.length <= 0) return false;
      if (queue.shift() === ")") return false;
    }
    u.push(current);
  }
  return true;
};

const splitUV = (w) => {
  const u = [];
  let balanceCount = {
    "(": 0,
    ")": 0,
  };
  const brackets = w.split("");
  for (let index in brackets) {
    const current = brackets[index];
    u.push(current);
    balanceCount[current] += 1;

    if (balanceCount["("] === balanceCount[")"]) {
      return [u.join(""), brackets.slice(u.length).join("")];
    }
  }
};

const reverseMiddle = (string) => {
  const middle = string.slice(1, -1);
  const reversed = middle
    .split("")
    .map((item) => (item === "(" ? ")" : "("))
    .join("");
  return reversed;
};

function solution(p) {
  if (isBalance(p)) return p;
  if (p === "") return "";

  let result = "";
  let [u, v] = splitUV(p);

  if (isBalance(u)) {
    result += u + solution(v);
  } else {
    result += "(" + solution(v) + ")" + reverseMiddle(u);
  }

  return result;
}
