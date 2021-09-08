/*
 * Title: Even Fibonacci numbers
 * Link: https://projecteuler.net/problem=2
 */

/*
 * Pseudocode
 *
 * SET a to 1
 * SET b to 2
 * SET c to 0
 * SET sum to 2
 *
 * WHILE c <= four million
 *    SET c to a + b
 *    SET a to b
 *    SET b to c
 *
 *    IF c is an even number
 *        SET sum to sum + c
 *    ENDIF
 * ENDWHILE
 *
 * RETURN sum
 *
 *
 *
 * Note: We set sum initially to 2 because we only check variable c and not b which is also an even fibonacci number.
 */

function evenFibSum() {
  let a = 1;
  let b = 2;
  let c = 0;
  let sum = 2;

  while (c <= 4000000) {
    c = a + b;
    a = b;
    b = c;

    if (c % 2 === 0) {
      sum += c;
    }
  }

  return sum;
}

console.log(evenFibSum());
