/*
 * Title: Largest prime factor
 *
 * The prime factors of 13195 are 5, 7, 13 and 29. 
 * What is the largest prime factor of the number 600851475143 ?
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
 * FOR each odd divisor (i) starting from 3 until n
 *    IF n is divisible by i 
 *        SET largestPrimeFactor to i
 *        SET n to n / i
 *    ENDIF
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
    if (n % i === 0) {
      largestPrimeFactor = i;
      n /= i;
    }
  }

  return largestPrimeFactor;
}

console.log(largestPrimeFactor(600851475143));
