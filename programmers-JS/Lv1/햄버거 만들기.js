function solution(ingredient) {
  // let burgerIngredient = ingredient.join("");
  // let result = 0;

  // while (burgerIngredient.match(/(1231)/)) {
  //   burgerIngredient = burgerIngredient.replace(/(1231)/, "2");
  //   result++;
  // }
  // return result;
  let stack = [];
  let result = 0;

  ingredient.forEach((item) => {
    stack.push(item);
    if (stack.length >= 4) {
      if (stack.slice(-4).join("") === "1231") {
        stack.pop();
        stack.pop();
        stack.pop();
        stack.pop();
        result++;
      }
    }
  });
  return result;
}
