function solution(sticker) {
  const length = sticker.length;

  if (length === 1) return sticker[0];
  if (length === 2) return Math.max(...sticker);

  const stickerCase1 = [...sticker];
  stickerCase1[length - 1] = 0;
  const stickerCase2 = [...sticker];
  stickerCase2[0] = 0;

  const dp1 = new Array(length).fill(0);
  const dp2 = new Array(length).fill(0);

  dp1[0] = stickerCase1[0];
  dp1[1] = Math.max(stickerCase1[0], stickerCase1[1]);
  dp2[0] = stickerCase2[0];
  dp2[1] = Math.max(stickerCase2[0], stickerCase2[1]);

  for (let i = 0; i < length - 2; i++) {
    dp1[i + 2] = Math.max(dp1[i + 1], dp1[i] + stickerCase1[i + 2]);
  }

  for (let i = 0; i < length - 2; i++) {
    dp2[i + 2] = Math.max(dp2[i + 1], dp2[i] + stickerCase2[i + 2]);
  }

  return Math.max(dp1.at(-1), dp2.at(-1));
}
