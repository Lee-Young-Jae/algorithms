// Run by Node.js
const readline = require("readline");

(async () => {
  let rl = readline.createInterface({ input: process.stdin });

  const lines = [];
  for await (const line of rl) {
    lines.push(line);
    rl.close();
  }

  const 시험횟수 = lines.shift();
  const 시험정보 = [];
  for (let i = 0; i < lines.length; i += 2) {
    const 응시인원 = lines[i + 0];
    const 시험성적 = lines[i + 1].split(" ").map(Number);

    시험정보.push({ 응시인원, 시험성적 });
  }

  solution(시험정보);

  process.exit();
})();

function solution(시험정보) {
  시험정보.forEach(({ 응시인원, 시험성적 }) => {
    const 평균점수 = 시험성적.reduce((acc, cur) => acc + cur, 0) / 응시인원;
    const 합격자 = 시험성적.filter((성적) => 성적 >= 평균점수);

    console.log(`${합격자.length}/${응시인원}`);
  });
}
