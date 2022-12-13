function solution(my_string) {
  const equation = my_string.split(" ");
  let result = Number(equation[0]);
  for (let i = 1; i < equation.length; i += 2) {
    if (equation[i] === "+") {
      result += Number(equation[i + 1]);
    } else if (equation[i] === "-") {
      result -= Number(equation[i + 1]);
    }
  }
  return result;
}
