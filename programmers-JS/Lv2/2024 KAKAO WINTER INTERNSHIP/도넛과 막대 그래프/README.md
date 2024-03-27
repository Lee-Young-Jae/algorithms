# 2024 KAKAO WINTER INTERNSHIP - 도넛과 막대 그래프

[2024 KAKAO WINTER INTERNSHIP - 도넛과 막대 그래프](https://school.programmers.co.kr/learn/courses/30/lessons/258711)

## 풀이

1. 각 정점에 들어오는 간선의 수와 나가는 간선의 수를 저장한다.
2. 각 정점을 순회하면서 다음을 수행한다.
   1. 나가는 정점이 1개인 경우 일반 정점이다. (무시)
   2. 들어오는 간선이 없고 나가는 간선이 2개 이상인 정점은 생성한 정점이다. (시작점)
   3. 나가는 간선이 0개인 정점은 막대이다.
   4. 나가는 간선이 2개인 정점은 8자이다.
3. 생성한 정점의 나가는 간선의 수는 총 그래프의 갯수이다.
   1. 막대와 8자 그래프의 갯수를 빼면 도넛 그래프의 갯수가 된다.

```javascript
function solution(edges) {
  const visited = new Array(edges.length + 2).fill(0).map((item) => [0, 0]);

  edges.forEach(([start, end]) => {
    visited[end][0] += 1;
    visited[start][1] += 1;
  });

  const result = [0, 0, 0, 0];
  let index = 0;
  for (let [들어옴, 나감] of visited) {
    if (들어옴 === 0 && 나감 === 0) {
      index++;
      continue;
    }
    if (나감 === 1) {
      index++;
      continue;
    }

    // 생성한 정점
    if (나감 >= 2 && 들어옴 === 0) {
      result[0] = index;
      index++;
      continue;
    }

    // 막대
    if (나감 === 0) {
      result[2]++;
    }

    // 8자
    if (나감 === 2) {
      result[3]++;
    }
    index++;
  }

  const 생성한_정점 = result[0];
  const 도넛_그래프_수 = visited[생성한_정점][1] - result[2] - result[3];
  result[1] = 도넛_그래프_수;
  return result;
}
```
