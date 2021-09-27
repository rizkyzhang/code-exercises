/*
 * Title: Sum of Digits / Digital Root
 * Link: https://www.codewars.com/kata/541c8630095125aba6000c00
 */

/*
 * Pseudocode
 *
 * ARGUMENT currentNumber
 * SET nextNumber to 0
 *
 * IF currentNumber only have one digit
 *    RETURN currentNumber
 *
 * SET nextNumber to SUM of all digits
 * RETURN function(nextNumber)
 */

function recursiveSum(currentNumber) {
  const digits = currentNumber.toString().split("").map(d => +d);
  let nextNumber = 0;

  if (digits.length === 1) {
    return currentNumber;
  }

  for (let i = 0; i < digits.length; i++) {
    nextNumber += digits[i];
  }

  return recursiveSum(nextNumber); 
}

function recursiveSum2(currentNumber) {
  const digits = currentNumber.toString().split("").map(d => +d);
  
  if (digits.length === 1) {
    return currentNumber;
  }

  const nextNumber = digits.reduce((a, b) => a + b);

  return recursiveSum2(nextNumber); 
}

console.log(recursiveSum2(493193));
