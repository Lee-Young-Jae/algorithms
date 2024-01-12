function solution(clothes) {
  var answer = 1;
  let obj = {};
  for (let i = 0; i < clothes.length; i++) {
    if (obj[clothes[i][1]]) {
      obj[clothes[i][1]] += 1;
    } else {
      obj[clothes[i][1]] = 1;
    }
  }
  for (let key in obj) {
    answer *= obj[key] + 1;
  }
  return answer - 1;
}

console.log(
  solution([
    ["yellowhat", "headgear"],
    ["bluesunglasses", "eyewear"],
    ["green_turban", "headgear"],
  ])
); // 5
console.log(
  solution([
    ["crowmask", "face"],
    ["bluesunglasses", "face"],
    ["smoky_makeup", "face"],
  ])
); // 3
