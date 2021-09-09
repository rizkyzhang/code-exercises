/*
 * Title: Smallest Multiple
 * Link: https://projecteuler.net/problem=5
 */

/*
 * Pseudocode
 *
 * SET n to 5040
 *
 * WHILE n is not divisible by all divisors from 1 to 20
 *    FOR each divisor from 2 to 20
 *        IF n is not divisible by divisor
 *            BREAK the loop
 *        ENDIF
 *        IF n is divisible by all divisors
 *            RETURN n
 *        ENDIF
 *    ENDFOR
 *
 *    INCREMENT n by 1
 * ENDWHILE
 */

function smallestMultiple() {
  let n = 5040;

  while (true) {
    for (let i = 2; i <= 20; i++) {
      if (n % i !== 0) {
        break;
      }

      if (i === 20 && n % i === 0) {
        return n;
      }
    }

    n++;
  }
}

console.log(smallestMultiple());
