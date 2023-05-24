/**
 * 
 * 정수 배열 arr와 2차원 정수 배열 queries이 주어집니다. queries의 원소는 각각 하나의 query를 나타내며, [s, e, k] 꼴입니다.

각 query마다 순서대로 s ≤ i ≤ e인 모든 i에 대해 k보다 크면서 가장 작은 arr[i]를 찾습니다.

각 쿼리의 순서에 맞게 답을 저장한 배열을 반환하는 solution 함수를 완성해 주세요.
단, 특정 쿼리의 답이 존재하지 않으면 -1을 저장합니다.
 */

// function solution(arr, queries) {
//   const sorted = [...arr].sort((a, b) => a - b);
//   return queries.reduce((acc, cur) => {
//     const [start, end, key] = cur;
//     for (let i = start; i <= end; i++) {
//       if (sorted[i] > key) {
//         return [...acc, sorted.splice(i, 1)[0]];
//       }
//     }
//     return [...acc, -1];
//   }, []);
// }

function solution(arr, queries) {
  const answer = [];
  for (let i = 0; i < queries.length; i++) {
    const [start, end, k] = queries[i];
    const sliced = arr.slice(start, end + 1);
    const filtered = sliced.filter((item) => item > k);
    answer.push(filtered.length ? Math.min(...filtered) : -1);
  }
  return answer;
}

console.log(
  solution(
    [0, 1, 2, 4, 3],
    [
      [0, 4, 2],
      [0, 3, 2],
      [0, 2, 2],
    ]
  )
); // [3, 4, -1]
