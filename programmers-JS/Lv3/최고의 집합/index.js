function solution(n, s) {
  if (~~(s / n) === 0) return [-1];
  const 나머지 = s % n;
  const result = new Array(n).fill(~~(s / n)).map((item, index) => {
    if (index >= n - 나머지) {
      return item + 1;
    }
    return item;
  });
  return result;
}

solution(2, 9); // [4, 5]
solution(2, 1); // [-1]
solution(2, 8); // [4, 4]
