// const solution = (a, b) => String(BigInt(a) + BigInt(b));

// over 10^53
const solution = (a, b) => {
  const result = [];
  const arrA = a.split("").reverse();
  const arrB = b.split("").reverse();
  const length = Math.max(arrA.length, arrB.length);
  let carry = 0;
  for (let i = 0; i < length; i++) {
    const sum = (~~arrA[i] || 0) + (~~arrB[i] || 0) + carry;
    result.push(sum % 10);
    carry = ~~(sum / 10);
  }
  if (carry) result.push(carry);
  return result.reverse().join("");
};

console.log(solution("582", "734")); // "1316"
console.log(solution("18446744073709551615", "287346502836570928366")); // "305793246910280479981"
console.log(solution("0", "0")); // "0"

/**
 * "582"	"734"	"1316"
"18446744073709551615"	"287346502836570928366"	"305793246910280479981"
"0"	"0"	"0"
 */
