/*
 * Title: Multiplies of 3 or 5
 *
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9.
 * The sum of these multiples is 23. Find the sum of all the multiples of 3 or 5 below 1000.
 */

/*
 * Pseudocode
 *
 * SET sum to 0
 *
 * FOR each number starting from 3 until 999
 *   IF number is multiple of 3 or 5
 *      SET sum to sum + number
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
