function solution(park, routes) {
  let position = park.reduce((acc, cur, i) => {
    if (cur.includes("S")) {
      acc = [i, cur.indexOf("S")];
    }
    return acc;
  }, []);
  let parkSize = [park.length, park[0].length];

  routes.forEach((route) => {
    let [dir, num] = route.split(" ");
    num = Number(num);
    let tempPosition = [...position];

    for (let i = 0; i < num; i++) {
      switch (dir) {
        case "N":
          position[0] -= 1;
          break;
        case "S":
          position[0] += 1;
          break;
        case "E":
          position[1] += 1;
          break;
        case "W":
          position[1] -= 1;
          break;
      }

      if (
        position[0] < 0 ||
        position[0] >= parkSize[0] ||
        position[1] < 0 ||
        position[1] >= parkSize[1]
      ) {
        position = tempPosition;
        break;
      }

      if (park[position[0]][position[1]] === "X") {
        position = tempPosition;
        break;
      }
    }
  });
  return position;
}

console.log(solution(["SOO", "OOO", "OOO"], ["E 2", "S 2", "W 1"])); // [2,1]
console.log(solution(["SOO", "OXX", "OOO"], ["E 2", "S 2", "W 1"])); // [0,1]
console.log(solution(["OSO", "OOO", "OXO", "OOO"], ["E 2", "S 3", "W 1"])); // [0,0]
