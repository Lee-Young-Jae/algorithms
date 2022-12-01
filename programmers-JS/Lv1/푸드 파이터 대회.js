function solution(food) {
  var answer = "";
  food.forEach((food, index) => {
    if (index === 0) {
      return;
    }
    let amount = Math.floor(food / 2);

    for (let i = 0; i < amount; i++) {
      answer += index;
    }
  });
  const reversed = answer.split("").reverse().join("");
  return answer + "0" + reversed;
}
