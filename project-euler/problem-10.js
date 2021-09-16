/*
 * Title: Summation of primes
 * Link: https://projecteuler.net/problem=10
 */

/*
 * Pseudocode
 *
 * SET sum to 2
 *
 * FOR each odd number (i) from 3 and < two million
 *    IF i is a prime number
 *        SET sum to sum + i
 *    ENDIF
 * ENDFOR
 *
 * RETURN sum
 */

function isPrime(n) {
  if (n === 2) {
    return true;
  }

  if (n < 2 || n % 2 === 0) {
    return false;
  }

  for (let i = 3; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
}

function printPrimes() {
  let sum = 2;

  for (let i = 3; i < 2000000; i += 2) {
    if (isPrime(i)) {
      sum += i;
    }
  }

  return sum;
}

console.log(printPrimes());
