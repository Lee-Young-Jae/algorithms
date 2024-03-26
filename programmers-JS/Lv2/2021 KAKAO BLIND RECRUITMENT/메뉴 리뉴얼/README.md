# 2021 KAKAO BLIND RECRUITMENT - 메뉴 리뉴얼

[2021 KAKAO BLIND RECRUITMENT - 메뉴 리뉴얼](https://programmers.co.kr/learn/courses/30/lessons/72411)

## 문제 이해하기

- orders: 손님들이 주문한 단품메뉴들이 문자열 형태로 담긴 배열
- course: 메뉴 구성 개수가 담긴 배열

메뉴 구성 개수가 course에 포함된 메뉴 구성 개수만큼 주문된 단품메뉴 조합 중 가장 많이 주문된 조합을 배열에 담아 오름차순으로 정렬하여 return

## 풀이

경우의 수를 구해서 각 메뉴 구성 개수별 가장 많이 주문된 조합을 구하는 방식으로 접근했다.

- orders의 각 요소를 정렬해서 저장한다.
- 조합을 구하는 함수를 만든다.
  - 이때 조합은 dfs로 구현했다.
- course의 각 요소를 key로 하는 객체를 만든다.
- orders의 각 요소에 대해 course의 각 요소를 key로 하는 객체에 저장한다.
- course의 각 요소에 대해 가장 많이 주문된 조합을 구한다.

```javascript
function solution(orders, course) {
  orders = orders.map((order) => {
    return order.split("").sort();
  });

  const combination = (courseMenu, menuCount) => {
    const stack = [];
    courseMenu.forEach((item) => {
      stack.push(item);
    });

    const result = [];
    while (stack.length) {
      const menu = stack.pop();

      if (menu.length === menuCount) {
        result.push(menu.join(""));
        continue;
      }

      for (
        let i = courseMenu.indexOf(menu.at(-1));
        i < courseMenu.length;
        i++
      ) {
        if (!menu.includes(courseMenu[i])) {
          stack.push([...menu, courseMenu[i]]);
        }
      }
    }
    return result;
  };

  let orderCounts = course.reduce(
    (acc, cur) => ({
      ...acc,
      [cur]: {},
    }),
    {}
  );
  orders.forEach((item) => {
    for (let len of course) {
      combination(item, len).forEach((cur) => {
        if (orderCounts[len][cur]) {
          orderCounts[len][cur]++;
        } else {
          orderCounts[len][cur] = 1;
        }
      });
    }
  });
  let result = [];

  course.forEach((amount) => {
    const maxCount = Math.max(...Object.values(orderCounts[amount]), 2);
    let foods = Object.keys(orderCounts[amount]).reduce((acc, cur) => {
      if (orderCounts[amount][cur] === maxCount) return [...acc, cur];
      return acc;
    }, []);

    result = [...result, ...foods];
  });

  return result.sort();
}
```
