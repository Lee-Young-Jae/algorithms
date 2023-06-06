function solution(todo_list, finished) {
  return todo_list.filter((todo, index) => finished[index] === false);
}

console.log(
  solution(
    ["problemsolving", "practiceguitar", "swim", "studygraph"],
    [true, false, true, false]
  )
); // ["practiceguitar", "studygraph"]
