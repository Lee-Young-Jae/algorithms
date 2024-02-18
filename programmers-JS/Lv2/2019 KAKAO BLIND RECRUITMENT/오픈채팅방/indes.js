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
