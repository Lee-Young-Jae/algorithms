const addMonth = (targetDate, month) => {
  const addYear = ~~(month / 12);
  const addMonth = month % 12;
  const [y, m, d] = targetDate.split(".").map(Number);

  let afterMonth = m + addMonth;
  let afterYear = y + addYear;

  if (afterMonth > 12) {
    afterMonth = afterMonth - 12;
    afterYear += 1;
  }

  return `${afterYear}.${afterMonth.toString().padStart(2, "0")}.${d
    .toString()
    .padStart(2, "0")}`;
};

const compareDate = (date1, date2) => {
  return date1.localeCompare(date2);
};

function solution(today, terms, privacies) {
  const termsDic = terms
    .map((item) => item.split(" "))
    .reduce(
      (acc, [type, expiration]) => ({
        ...acc,
        [type]: +expiration,
      }),
      {}
    );

  privacies = privacies.map((item) => item.split(" "));

  const result = [];
  privacies.forEach(([date, type], index) => {
    const addedDate = addMonth(date, termsDic[type]);

    if (compareDate(today, addedDate) >= 0) {
      result.push(index + 1);
    }
  });

  return result;
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
