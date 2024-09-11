const convertToMin = (timestamp) => {
  const [TT, MM] = timestamp.split(":").map(Number);
  return TT * 60 + MM;
};

const convertToTimestamp = (min) => {
  const TT = String(~~(min / 60)).padStart(2, 0);
  const MM = String(min % 60).padStart(2, 0);

  return `${TT}:${MM}`;
};

const operation = {
  next: (cur, video_len) => {
    const result = cur + 10;
    return result >= video_len ? video_len : result;
  },
  prev: (cur, video_len) => {
    const result = cur - 10;
    return result <= 0 ? 0 : result;
  },
};

const isPosInOpening = (cur, op_start, op_end) => {
  if (op_start <= cur && cur <= op_end) {
    return true;
  }
  return false;
};

//video_len, pos, op_start, op_end, commands
function solution(...args) {
  const newArgs = [...args];
  const commands = newArgs.pop();
  const [video_len, pos, op_start, op_end] = newArgs.map(convertToMin);

  let current = isPosInOpening(pos, op_start, op_end) ? op_end : pos;
  commands.forEach((command) => {
    let temp = operation[command](current, video_len);
    temp = isPosInOpening(temp, op_start, op_end) ? op_end : temp;
    current = temp;
  });

  return convertToTimestamp(current);
}
