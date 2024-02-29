function solution(cap, n, deliveries, pickups) {
  let 트럭 = 0;
  let 거리 = 0;

  while (deliveries.length || pickups.length) {
    while (deliveries.at(-1) === 0) deliveries.pop();
    while (pickups.at(-1) === 0) pickups.pop();

    거리 += Math.max(deliveries.length, pickups.length) * 2;

    while (트럭 < cap) {
      if (deliveries.length === 0) break;
      if (deliveries.at(-1) > 0) {
        deliveries[deliveries.length - 1]--;
        트럭++;
      } else {
        deliveries.pop();
      }
    }
    트럭 = 0;

    while (트럭 < cap) {
      if (pickups.length === 0) break;
      if (pickups.at(-1) > 0) {
        pickups[pickups.length - 1]--;
        트럭++;
      } else {
        pickups.pop();
      }
    }
    트럭 = 0;
  }

  return 거리;
}
console.log(solution(4, 5, [1, 0, 3, 1, 2], [0, 3, 0, 4, 0])); // 16
console.log(solution(2, 7, [1, 0, 2, 0, 1, 0, 2], [0, 2, 0, 1, 0, 2, 0])); // 30
