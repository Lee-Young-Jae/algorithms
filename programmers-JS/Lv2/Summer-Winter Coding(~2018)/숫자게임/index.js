function solution(A, B) {
  A = A.sort((a, b) => b - a);
  B = B.sort((a, b) => b - a);

  const pointer = { a: 0, b: 0 };

  let score = 0;
  while (pointer.a < A.length && pointer.b < B.length) {
    if (A[pointer.a] < B[pointer.b]) {
      pointer.b++;
      score++;
    }
    pointer.a++;
  }

  return score;
}
