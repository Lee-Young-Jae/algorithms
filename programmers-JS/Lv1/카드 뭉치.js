function solution(cards1, cards2, goal) {
  let answer = "No";

  let currentWord = "";

  while (goal.length > 0) {
    if (cards1.length === 0 && cards2.length === 0) {
      break;
    }

    currentWord = goal[0];

    if (cards1[0] === currentWord) {
      cards1.shift();
      goal.shift();
    } else if (cards2[0] === currentWord) {
      cards2.shift();
      goal.shift();
    } else {
      if (cards1.length > 0) {
        cards1.shift();
      } else if (cards2.length > 0) {
        cards2.shift();
      }
    }
  }

  if (goal.length === 0) {
    answer = "Yes";
  }

  return answer;
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
