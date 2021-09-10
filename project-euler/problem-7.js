/*
 * Title: 10001st prime
 * Link: https://projecteuler.net/problem=7
 */

/*
 * Pseudocode 1
 *
 * ARGUMENT n
 *
 * IF n is equal to 2
 *    RETURN true
 * ENDIF
 *
 * IF n < 2 or n is an even number
 *    RETURN false
 * ENDIF
 *
 * FOR each odd number (i) from 3 to square root of n
 *    IF n is divisible by i
 *        RETURN false
 * ENDFOR
 *
 * RETURN true
 */


/*
 * Pseudocode 2
 *
 * SET primeNumber to 2
 * SET primeCount to 1
 *
 * FOR each number (i) from 3 to 10001st prime
 *    IF primeCount is equal to 1001
 *        RETURN primeNumber
 *    ENDIF
 *
 *    IF i is a prime number
 *        SET primeNumber to i
 *        INCREMENT primeCount by 1
 *    ENDIF
 * ENDFOR
 */

function isPrime(n) {
  if (n === 2) {
    return true;
  }

  if (n < 2 || n % 2 === 0) {
    return false;
  }

  for (let i = 3; i <= Math.sqrt(n); i += 2) {
    if (n % i === 0) {
      return false;
    }  
  }

  return true;
}


function get10001Prime() {
  let primeNumber = 2;
  let primeCount = 1;

  for (let i = 3; i <= Number.MAX_SAFE_INTEGER; i += 2) {
    if (primeCount === 10001) {
      return primeNumber;
    }

    if (isPrime(i)) {
      primeNumber = i;
      primeCount++;
    } 
  }  
}

console.log(get10001Prime());
