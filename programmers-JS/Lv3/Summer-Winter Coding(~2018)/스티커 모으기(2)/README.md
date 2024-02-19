# Summer/Winter Coding(~2018) 스티커 모으기(2)

[스티커 모으기(2)](https://school.programmers.co.kr/learn/courses/30/lessons/12971)

## 문제 이해하기

- 인자로 주어지는 sticker의 길이는 `1` ~ `100,000` 로 매우 크기 때문에 `dp` 로 접근해야함.

- 스티커는 원형 구조이며 한칸을 뜯으면 인접한 양 옆 스티커는 사용할 수 없다. 때문에 두가지의 경우의 수가 생긴다.
  - 첫칸을 뜯었을 경우 배열의 마지막은 사용할 수 없음
  - 배열의 마지막 칸을 뜯었을 경우 배열의 첫번째 값은 사용할 수 없음

## 문제 풀이

### 1. dp 점화식

### 전체 코드

```javascript
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
```
