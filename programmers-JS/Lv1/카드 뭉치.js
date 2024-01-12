function solution(cards1, cards2, goal) {
  let c1 = 0;
  let c2 = 0;
  const c1Max = cards1.length;
  const c2Max = cards2.length;

  for (let i = 0; i < goal.length; i++) {
    if (c1 < c1Max && cards1[c1] === goal[i]) {
      c1++;
    } else if (c2 < c2Max && cards2[c2] === goal[i]) {
      c2++;
    } else {
      return "No";
    }
  }
  return "Yes";
}

console.log(
  solution(
    ["i", "drink", "water"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"]
  )
); //"Yes"

console.log(
  solution(
    ["i", "water", "drink"],
    ["want", "to"],
    ["i", "want", "to", "drink", "water"]
  )
); //"No"
