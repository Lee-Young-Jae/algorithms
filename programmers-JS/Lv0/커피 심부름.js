// function solution(order) {
//   let answer = 0;
//   const coffee = {
//     americano: 4000,
//     americanoice: 4500,
//     iceamericano: 4500,
//     hotamericano: 4500,
//     americanohot: 4500,
//     americanoice: 5000,
//     cafelatte: 5000,
//     cafelatteice: 5000,
//     hotcafelatte: 5000,
//     icecafelatte: 5000,
//     cafelattehot: 5000,
//     cafelatteice: 5000,
//     anything: 4500,
//   };

//   for (let i = 0; i < order.length; i++) {
//     answer += coffee[order[i]];
//   }

//   return answer;
// }

function solution(order) {
  return order.reduce((acc, cur) => {
    if (cur.includes("americano")) {
      return acc + 4500;
    } else if (cur.includes("cafelatte")) {
      return acc + 5000;
    } else {
      return acc + 4500;
    }
  }, 0);
}

console.log(
  solution(["cafelatte", "americanoice", "hotcafelatte", "anything"])
); // 19000
console.log(solution(["americanoice", "americano", "iceamericano"])); // 13500
