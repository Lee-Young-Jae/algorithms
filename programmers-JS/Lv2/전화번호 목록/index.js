function solution(phone_book) {
  let answer = phone_book.sort().some((number, index, self) => {
    const nextNumber = self[index + 1];
    return nextNumber?.startsWith(number);
  });

  return !answer;
}

console.log(solution(["119", "97674223", "1195524421"])); // false
console.log(solution(["123", "456", "789"])); // true
console.log(solution(["12", "123", "1235", "567", "88"])); // false
