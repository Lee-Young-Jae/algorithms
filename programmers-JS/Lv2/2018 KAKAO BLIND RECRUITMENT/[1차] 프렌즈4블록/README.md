# [1차] 프렌즈4블록

[1차 프렌즈4블록](https://programmers.co.kr/learn/courses/30/lessons/17679)

## 문제 이해하기

- 2x2 형태로 같은 블록이 4개가 붙어있으면 사라지고 점수를 얻는다.
- 블록이 사라진 후 위에 있는 블록이 아래로 떨어진다.
- 블록이 떨어진 후에 다시 2x2 형태로 같은 블록이 있는지 확인한다.
- 더 이상 2x2 형태로 같은 블록이 없을 때까지 반복한다.
- 사라진 블록의 개수를 return 한다.

## 풀이 순서

[1] 같은 줄에 있는 블록을 쉽게 제거할 수 있도록 배열을 90도 회전시키는 함수 작성

```js
const rotate90Matrix = (origin) => {
  const result = new Array(origin[0].length).fill([]);
  origin.forEach((rows, i) => {
    rows.forEach((row, j) => {
      result[j] = [row, ...result[j]];
    });
  });

  return result;
};
```

[2] 2x2 형태로 같은 블록이 있는지 확인하는 함수 작성

```js
const isQuadSame = (a, b, c, d) => {
  if (a === "" || b === "" || c === "" || d === "") return false;
  return a === b && b === c && c === d;
};
```

[3] 제거된 블록위치를 저장하는 `deletedSameCharacter` 배열에 더 이상 제거된 블록이 없을 때까지 do while을 돌며 2x2 형태로 같은 블록이 있는지 확인하고 제거한다.
이 때 제거된 블록의 개수를 `result`에 저장하고, 제거된 블록은 빈 문자열로 바꾼다.

```js
let deletedSameCharacter = [];

let result = 0;
do {
  const rowsLength = board.length - 1;
  const rowLength = board[0].length - 1;

  deletedSameCharacter = board.map((rows) => rows.map(() => false));

  board.forEach((rows, i) => {
    rows.forEach((row, j) => {
      if (!(i === rowsLength || j === rowLength)) {
        if (
          isQuadSame(
            board[i][j],
            board[i][j + 1],
            board[i + 1][j],
            board[i + 1][j + 1]
          )
        ) {
          deletedSameCharacter[i][j] = true;
          deletedSameCharacter[i][j + 1] = true;
          deletedSameCharacter[i + 1][j] = true;
          deletedSameCharacter[i + 1][j + 1] = true;
        }
      }
    });
  });

  deletedSameCharacter.forEach((rows, i) => {
    rows.forEach((row, j) => {
      if (row) {
        result++;
        board[i][j] = "";
      }
    });
  });

  board = board.map((rows) => {
    const length = rows.length;
    const deletedRows = rows.join("").split("");
    const empty = new Array(length - deletedRows.length).fill("");
    return [...deletedRows, ...empty];
  });
} while (
  !deletedSameCharacter.every((rows) => rows.every((row) => row === false))
);
```
