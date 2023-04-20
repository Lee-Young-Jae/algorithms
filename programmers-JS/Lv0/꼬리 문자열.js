function solution(str_list, ex) {
  return str_list.reduce((acc, cur) => {
    if (cur.includes(ex)) return acc;
    return acc + cur;
  }, "");
}
console.log(solution(["abc", "def", "ghi"], "ef")); // "abcghi"
console.log(solution(["abc", "bbc", "cbc"], "c")); // ""
