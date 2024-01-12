function solution(num_list, n) {
  num_list.unshift(...num_list.splice(n));
  return num_list;
}

console.log(solution([2, 1, 6], 1)); // [1,6,2]
console.log(solution([5, 2, 1, 7, 5], 3)); // 	[7, 5, 5, 2, 1]
