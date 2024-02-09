function solution(files) {
  return files
    .map((fileName) => {
      const regex = /(\D+)(\d+)/i;
      const matches = fileName.match(regex);

      const HEAD = matches[1];
      const NUMBER = matches[2];
      const TAIL = fileName.replace(HEAD, "").replace(NUMBER, "");

      return [HEAD, NUMBER, TAIL];
    })
    .sort((a, b) => {
      if (a[0].toLowerCase() > b[0].toLowerCase()) {
        return 1;
      } else if (a[0].toLowerCase() < b[0].toLowerCase()) {
        return -1;
      } else {
        return a[1] - b[1];
      }
    })
    .map((fileName) => fileName.join(""));
}

console.log(
  solution([
    "img12.png",
    "img10.png",
    "img02.png",
    "img1.png",
    "IMG01.GIF",
    "img2.JPG",
  ])
); // ["img1.png", "IMG01.GIF", "img02.png", "img2.JPG", "img10.png", "img12.png"]

console.log(
  solution([
    "F-5 Freedom Fighter",
    "B-50 Superfortress",
    "A-10 Thunderbolt II",
    "F-14 Tomcat",
  ])
); // ["A-10 Thunderbolt II", "B-50 Superfortress", "F-5 Freedom Fighter", "F-14 Tomcat"]
