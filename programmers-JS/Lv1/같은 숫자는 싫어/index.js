function solution(arr) {
  let continuityItem = null;

  return arr
    .map((e) => {
      if (continuityItem === e) return "";
      continuityItem = e;
      return e;
    })
    .filter((e) => e !== "");
}
