function solution(my_string, is_suffix) {
  return my_string.endsWith(is_suffix) ? 1 : 0;
}

console.log(solution("banana", "ana")); //1
console.log(solution("banana", "nan")); //0
console.log(solution("banana", "wxyz")); //0
console.log(solution("banana", "abanana")); //0
