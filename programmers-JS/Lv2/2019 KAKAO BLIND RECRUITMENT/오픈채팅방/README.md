# 2019 KAKAO BLIND RECRUITMENT - 오픈채팅방

[2019 KAKAO BLIND RECRUITMENT - 오픈채팅방](https://programmers.co.kr/learn/courses/30/lessons/42888)

## 문제 이해하기

- 오픈채팅방에 들어오고 나가는 유저의 닉네임을 변경하고, 변경된 닉네임을 출력하는 문제
- 유저의 닉네임을 변경하면 기존에 출력된 메시지의 닉네임도 변경된다.

## 풀이 순서

[1] 1차 풀이

- record배열을 복사해 newRecord 배열을 만든다.
- record 배열을 순회하며 Change, Enter일 경우 newRecord 배열의 닉네임을 변경한다.
- newRecord 배열을 순회하며 Enter, Leave일 경우 닉네임을 출력한다.

```js
function solution(record) {
  let newRecord = record.map((log) => log.split(" "));
  record.forEach((log) => {
    const [type, uid, name] = log.split(" ");

    if (type === "Change") {
      newRecord = newRecord.map((log) => {
        const [nType, nUid, nName] = log;
        if (uid === nUid) {
          return [nType, nUid, name];
        }
        return [nType, nUid, nName];
      });
    }

    if (type === "Enter") {
      newRecord = newRecord.map((log) => {
        const [nType, nUid, nName] = log;
        if (uid === nUid) {
          return [nType, nUid, name];
        }
        return [nType, nUid, nName];
      });
    }
  });

  const result = [];
  newRecord.forEach((log) => {
    const [type, uid, name] = log;

    if (type === "Enter") result.push(`${name}님이 들어왔습니다.`);
    if (type === "Leave") result.push(`${name}님이 나갔습니다.`);
  });

  return result;
}
```

이 풀이는 효율성 문제로 25~30의 테스트케이스를 통과하지 못했다.
때문에 처음 record 배열을 순회하며 newRecord를 갱신 시킬 때, newRecord를 모두 순회하는 것이 아닌, uid를 key로 하는 객체에 index를 저장해 두고 해당 index만 갱신하는 방법으로 풀이를 수정했다.

[2] 2차 풀이

- MemoUidIndex 객체를 만들어 uid를 key로 하는 객체에 index를 저장한다.
- record 배열을 순회하며 Change, Enter일 경우 MemoUidIndex 객체에 저장된 index만 갱신한다.
- newRecord 배열을 순회하며 Enter, Leave일 경우 닉네임을 출력한다.

```js
function solution(record) {
  const MemoUidIndex = {};
  let newRecord = record.map((log, index) => {
    const [type, uid, name] = log.split(" ");
    MemoUidIndex[uid] = MemoUidIndex[uid]
      ? [...MemoUidIndex[uid], index]
      : [index];
    return [type, uid, name];
  });
  record.forEach((log) => {
    const [type, uid, name] = log.split(" ");

    if (type === "Change") {
      MemoUidIndex[uid].forEach((index) => {
        const [originType, originUid, originName] = newRecord[index];
        newRecord[index] = [originType, originUid, name];
      });
    }

    if (type === "Enter") {
      MemoUidIndex[uid].forEach((index) => {
        const [originType, originUid, originName] = newRecord[index];
        newRecord[index] = [originType, originUid, name];
      });
    }
  });

  const result = [];
  newRecord.forEach((log) => {
    const [type, uid, name] = log;

    if (type === "Enter") result.push(`${name}님이 들어왔습니다.`);
    if (type === "Leave") result.push(`${name}님이 나갔습니다.`);
  });

  return result;
}
```
