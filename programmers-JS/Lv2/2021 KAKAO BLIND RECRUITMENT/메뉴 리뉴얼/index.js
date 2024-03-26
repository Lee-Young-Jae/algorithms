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
