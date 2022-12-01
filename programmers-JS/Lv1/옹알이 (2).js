function solution(babbling) {
  let result = 0;

  babbling.forEach((item) => {
    while (item.match(/(aya|ye|woo|ma)/)) {
      if (item.match(/aya/)) {
        item = item.replace(/aya/, "1");
      }
      if (item.match(/ye/)) {
        item = item.replace(/ye/, "2");
      }
      if (item.match(/woo/)) {
        item = item.replace(/woo/, "3");
      }
      if (item.match(/ma/)) {
        item = item.replace(/ma/, "4");
      }
    }
    if (item.match(/(.)\1{1,}/)) return;

    if (item.match(/[^1234]/)) return;

    result++;
  });
  return result;
}
