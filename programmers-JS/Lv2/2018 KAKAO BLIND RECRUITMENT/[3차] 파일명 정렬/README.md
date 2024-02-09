# [3차] 파일명 정렬

[프로그래머스 2018 KAKAO BLIND RECRUITMENT [3차] 파일명 정렬](https://programmers.co.kr/learn/courses/30/lessons/17686)

## 문제 이해하기

- 문자열로 구성된 파일명을 정렬하는 문제
- 파일명을 규칙에 따라 HEAD, NUMBER, TAIL로 나누기 위해 정규표현식을 사용한다.
- 나누어진 파일명을 정렬하여 반환한다.

## 풀이

[1] 파일명을 HEAD, NUMBER, TAIL로 분리한다.

- HEAD: 숫자가 아닌 문자열로 구성된다.
- NUMBER: 숫자로 구성된다.
- TAIL: 숫자와 문자열로 구성된다. (빈 문자열일 수도 있다.)

  - 정규표현식을 사용하여 파일명을 분리한다.
    TAIL은 존재하지 않을 수도 있으므로, HEAD와 NUMBER를 분리한 후, TAIL을 구한다.

```javascript
files.map((fileName) => {
  const regex = /(\D+)(\d+)/i;
  const matches = fileName.match(regex);

  const HEAD = matches[1];
  const NUMBER = matches[2];
  const TAIL = fileName.replace(HEAD, "").replace(NUMBER, "");

  return [HEAD, NUMBER, TAIL];
});
```

[2] 규칙에 따라 정렬한다.

- HEAD를 기준으로 정렬한다. (대소문자 구분하지 않는다.)
- HEAD가 같다면 NUMBER를 기준으로 정렬한다. (숫자 순으로 정렬한다.)

```javascript
.sort((a, b) => {
      if (a[0].toLowerCase() > b[0].toLowerCase()) {
        return 1;
      } else if (a[0].toLowerCase() < b[0].toLowerCase()) {
        return -1;
      } else {
        return a[1] - b[1];
      }
    })
```

[3] 정렬된 파일명을 합쳐서 반환한다.

```javascript
.map((file) => file.join(""));
```

### 전체코드

```javascript
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
```

### 기타

문자열을 찾을 때 TAIL은 HEAD와 NUMBER를 제거한 후, 남은 문자열을 사용했지만
TAIL또한 마찬가지로 나머지를 그룹화하여 구할 수 있다.

```javascript
const regex = /(\D+)(\d+)(.*)/i;
const matches = fileName.match(regex);

const HEAD = matches[1];
const NUMBER = matches[2];
const TAIL = matches[3];
```
