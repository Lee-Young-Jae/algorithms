function solution(bandage, health, attacks) {
  const [시전시간, 초당회복량, 추가회복량] = bandage;
  const 최대체력 = health;

  let 연속성공 = 0;
  let sec = 1;
  let endSec = attacks.at(-1)[0];

  const mappedAttacks = new Array(endSec + 1).fill(0);
  attacks.forEach(([공격시간, 피해량]) => {
    mappedAttacks[공격시간] = 피해량;
  });

  while (sec <= endSec) {
    const attacked = mappedAttacks[sec];
    if (attacked) {
      연속성공 = 1;
      health -= attacked;
    }
    if (!attacked) {
      if (연속성공 === 시전시간) {
        연속성공 = 0;
        health =
          health + 추가회복량 >= 최대체력 ? 최대체력 : health + 추가회복량;
      }
      health = health + 초당회복량 >= 최대체력 ? 최대체력 : health + 초당회복량;
      연속성공++;
    }
    if (health <= 0) return -1;

    sec++;
  }

  return health;
}
