function solution(routes) {
  routes = routes.sort((a, b) => a[1] - b[1]);
  return routes.reduce(
    (acc, [start, end]) => {
      const [result, cameraPos] = acc;
      if (!(cameraPos >= start && cameraPos <= end)) {
        return [result + 1, end];
      }
      return acc;
    },
    [1, routes[0][1]]
  )[0];
}
