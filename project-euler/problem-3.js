/*
 * Title: Largest prime factor
 * Link: https://projecteuler.net/problem=3
 */

/*
 * Pseudocode
 *
 * ARGUMENT n
 * SET largestPrimeFactor to 0
 *
 * IF n is divisible by 2
 *    SET largestPrimeFactor to 2
 *    SET n to n / 2
 * ENDIF
 *
 * FOR each odd divisor (i) from 3 to n
 *    WHILE n is divisible by i 
 *        SET largestPrimeFactor to i
 *        SET n to n / i
 *    ENDWHILE
 * ENDFOR
 *
 * RETURN largestPrimeFactor
 */

function largestPrimeFactor(n) {
  let largestPrimeFactor = 0;

  if (n % 2 === 0) {
    largestPrimeFactor = 2;
    n /= 2;
  }

  for (let i = 3; i <= n; i += 2) {
    while (n % i === 0) {
      largestPrimeFactor = i;
      n /= i;
    }
  }

  return largestPrimeFactor;
}

console.log(largestPrimeFactor(600851475143));
