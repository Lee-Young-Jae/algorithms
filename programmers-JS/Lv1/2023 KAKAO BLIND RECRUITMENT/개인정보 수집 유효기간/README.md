# 2023 KAKAO BLIND RECRUITMENT - 개인정보 수집 유효기간

[개인정보 수집 유효기간](https://school.programmers.co.kr/learn/courses/30/lessons/150370)

## 풀이

### 이전 풀이

```javascript
function solution(today, terms, privacies) {
  let answer = [];

  const monthWeight = 28;
  const yearWeight = 12 * monthWeight;

  const [year, month, day] = today.split(".");
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
```

### 2024.07.06 풀이

```javascript
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
```

## 회고

이전 풀이에 영향을 안받으려고 일부러 안보고 풀었는데, 이전 풀이를 보고 감탄했다.

- 현재 풀이는 `addMonth` 함수를 만들어서 유효기간을 더해주고, `compareDate` 함수를 만들어서 각 날짜를 비교하는 방식으로 풀었는데
- 이전 풀이는 유효기간을 계산할 때 각 `year`, `month`, `day`를 각각 year가중치, month가중치, day를 더해서 비교하는 방식으로 풀었다.

날이 갈수록 왜 더 창의적이지 못하게 되는거지!!?!
