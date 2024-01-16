function solution(cacheSize, cities) {
  const CACHE_HIT = 1;
  const CACHE_MISS = 5;
  const cache = [];

  let time = 0;
  if (cacheSize === 0) return cities.length * CACHE_MISS;

  for (city of cities) {
    city = city.toUpperCase();
    if (cache.some((item) => item === city)) {
      cache.splice(cache.indexOf(city), 1);
      cache.push(city);
      time += CACHE_HIT;
      continue;
    }

    if (cache.length < cacheSize) {
      cache.push(city);
      time += CACHE_MISS;
      continue;
    }

    cache.shift();
    cache.push(city);
    time += CACHE_MISS;
  }
  return time;
}

console.log(
  solution(3, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
  ])
); // 50
console.log(
  solution(3, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "Jeju",
    "Pangyo",
    "Seoul",
    "Jeju",
    "Pangyo",
    "Seoul",
  ])
); // 21
console.log(
  solution(2, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
    "SanFrancisco",
    "Seoul",
    "Rome",
    "Paris",
    "Jeju",
    "NewYork",
    "Rome",
  ])
); // 60
console.log(
  solution(5, [
    "Jeju",
    "Pangyo",
    "Seoul",
    "NewYork",
    "LA",
    "SanFrancisco",
    "Seoul",
    "Rome",
    "Paris",
    "Jeju",
    "NewYork",
    "Rome",
  ])
); // 52
console.log(solution(2, ["Jeju", "Pangyo", "NewYork", "newyork"])); // 16
console.log(solution(0, ["Jeju", "Pangyo", "Seoul", "NewYork", "LA"])); // 25
