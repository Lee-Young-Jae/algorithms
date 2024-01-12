// function solution(my_string, queries) {
//   return queries.reduce((acc, cur) => {
//     const [start, end] = cur;
//     const temp = acc.split("");
//     for (let i = start; i <= end; i++) {
//       temp[i] = acc[end - i + start];
//     }

//     return temp.join("");
//   }, my_string);
// }

function solution(my_string, queries) {
  return queries
    .reduce((acc, cur) => {
      const [start, end] = cur;
      const temp = [...acc];
      for (let i = start; i <= end; i++) {
        temp[i] = acc[end - i + start];
      }
      return temp;
    }, my_string.split(""))
    .join("");
}

console.log(
  solution("rermgorpsam", [
    [2, 3],
    [0, 7],
    [5, 9],
    [6, 10],
  ])
); // "programmers"
