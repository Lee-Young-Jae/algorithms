function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  let bridge = [];
  let totalWeight = 0;

  while (truck_weights.length || bridge.length) {
    if (
      weight >= totalWeight + truck_weights[0] &&
      bridge.length < bridge_length
    ) {
      const truck = truck_weights.shift();
      totalWeight += truck;
      bridge.push([truck, time + bridge_length]);
      time++;
    } else {
      const [truck, timeToPass] = bridge.shift();
      if (timeToPass > time) {
        time = timeToPass;
      }
      totalWeight -= truck;
    }
  }
  return time + 1;
}

console.log(solution(2, 10, [7, 4, 5, 6])); // 8
console.log(solution(100, 100, [10])); // 101
console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10])); // 110
