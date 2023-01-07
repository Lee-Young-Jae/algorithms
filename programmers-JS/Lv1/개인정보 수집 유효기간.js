function solution(today, terms, privacies) {
  let answer = [];

  const monthWeight = 28;
  const yearWeight = 12 * monthWeight;

  const [year, month, day] = today.split(".");
  console.log(year, month, day);
  const todayData = year * yearWeight + month * monthWeight + day * 1;

  const termsObj = {};
  terms.forEach((term) => {
    const [name, termData] = term.split(" ");
    termsObj[name] = Number(termData) * monthWeight;
  });

  const privaciesData = privacies.map((privacy) => {
    const [date, name] = privacy.split(" ");
    const [year, month, day] = date.split(".");
    const privacyData =
      year * yearWeight + month * monthWeight + day * 1 + termsObj[name];
    return privacyData;
  });

  privaciesData.forEach((privacy, index) => {
    if (todayData >= privacy) {
      answer.push(index + 1);
    }
  });

  return answer;
}

console.log(
  solution(
    "2022.05.19",
    ["A 6", "B 12", "C 3"],
    ["2021.05.02 A", "2021.07.01 B", "2022.02.19 C", "2022.02.20 C"]
  )
); // [1, 3]

console.log(
  solution(
    "2020.01.01",
    ["Z 3", "D 5"],
    [
      "2019.01.01 D",
      "2019.11.15 Z",
      "2019.08.02 D",
      "2019.07.01 D",
      "2018.12.28 Z",
    ]
  )
); // [1, 4, 5]
