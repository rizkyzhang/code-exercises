/*
 * Title: Multiplies of 3 or 5
 * Link: https://projecteuler.net/problem=1
 */

/*
 * Pseudocode
 *
 * SET sum to 0
 *
 * FOR each number (i) from 3 to 999
 *   IF i is multiple of 3 or 5
 *      SET sum to sum + i
 *   ENDIF
 * ENDFOR
 *
 * RETURN sum 
 */

function sumMul35() {
  let sum = 0;

  for (let i = 3; i < 1000; i++) {
    const isMultipleOf3 = i % 3 === 0;
    const isMultipleOf5 = i % 5 === 0;

    if (isMultipleOf3 || isMultipleOf5) {
      sum += i;
    }
  }

  return sum;
}

console.log(sumMul35());
