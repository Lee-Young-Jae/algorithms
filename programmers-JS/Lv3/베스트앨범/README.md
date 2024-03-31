# 베스트앨범

[프로그래머스 베스트앨범](https://programmers.co.kr/learn/courses/30/lessons/42579)

## 문제 이해하기

문제 설명

> 스트리밍 사이트에서 장르 별로 가장 많이 재생된 노래를 두 개씩 모아 베스트 앨범을 출시하려 합니다. 노래는 고유 번호로 구분하며, 노래를 수록하는 기준은 다음과 같습니다.

- 속한 노래가 많이 재생된 장르를 먼저 수록합니다.
- 장르 내에서 많이 재생된 노래를 먼저 수록합니다.
- 장르 내에서 재생 횟수가 같은 노래 중에서는 고유 번호가 낮은 노래를 먼저 수록합니다.
- 노래의 장르를 나타내는 문자열 배열 genres와 노래별 재생 횟수를 나타내는 정수 배열 - plays가 주어질 때, 베스트 앨범에 들어갈 노래의 고유 번호를 순서대로 return 하도록 solution 함수를 완성하세요.

제한사항

> genres[i]는 고유번호가 i인 노래의 장르입니다.
> plays[i]는 고유번호가 i인 노래가 재생된 횟수입니다.
> genres와 plays의 길이는 같으며, 이는 1 이상 10,000 이하입니다.
> 장르 종류는 100개 미만입니다.
> 장르에 속한 곡이 하나라면, 하나의 곡만 선택합니다.
> 모든 장르는 재생된 횟수가 다릅니다.

## 풀이

처음 문제 이해를 잘못해서 풀이과정에 시간이 오래걸렸다. 문제를 잘 이해하고 풀이과정을 해야하는 중요성을 다시 한번 느꼈다.
틀린 이유는
`가장 많이 재생된 장르 내에서 가장 많이 재생된 노래 최대 2개까지 리스트에 담아야 하는데
가장 많이 재생된 장르도 2개를 골라서 나머지 장르들이 제대로 출력 되지 않았다.`

```javascript
function solution(genres, plays) {
  const genre = {};
  const play = genres.reduce(
    (acc, cur) => ({
      ...acc,
      [cur]: [],
    }),
    {}
  );

  genres.forEach((item, index) => {
    genre[item] = genre[item] ? genre[item] + plays[index] : plays[index];
    play[item].push({
      id: index,
      play: plays[index],
    });
  });

  const sortedGenre = Object.keys(genre).sort((a, b) => genre[b] - genre[a]);
  const sortCondition = (a, b) => b.play - a.play || a.id - b.id;

  const result = [];
  sortedGenre.forEach((g) => {
    result.push(
      ...play[g]
        .sort(sortCondition)
        .map((item) => item.id)
        .slice(0, 2)
    );
  });

  return result;
}
```
