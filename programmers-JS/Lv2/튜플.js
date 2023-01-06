function solution(s) {
  var answer = [];
  var arr = s.slice(2, s.length - 2).split("},{");
  arr.sort((a, b) => a.length - b.length);
  for (var i = 0; i < arr.length; i++) {
    var temp = arr[i].split(",");
    for (var j = 0; j < temp.length; j++) {
      if (!answer.includes(Number(temp[j]))) {
        answer.push(Number(temp[j]));
      }
    }
  }
  return answer;
}

console.log(solution("{{2},{2,1},{2,1,3},{2,1,3,4}}")); // [2, 1, 3, 4]
console.log(solution("{{1,2,3},{2,1},{1,2,4,3},{2}}")); // [2, 1, 3, 4]
console.log(solution("{{20,111},{111}}")); // [111, 20]
console.log(solution("{{123}}")); // [123]
console.log(solution("{{4,2,3},{3},{2,3,4,1},{2,3}}")); // [3, 2, 4, 1]
