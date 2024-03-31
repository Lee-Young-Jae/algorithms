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
