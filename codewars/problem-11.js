/*
 * Title: Factorial Factory 
 * Link: https://www.codewars.com/kata/528e95af53dcdb40b5000171
 */

/*
 * Pseudocode
 *
 * ARGUMENT n
 * SET factorial to 1
 *
 * IF n is a negative number
 *    RETURN null
 * ENDIF
 *
 * IF n is equal to 0 or 1
 *    RETURN 1
 * ENDIF
 *
 * FOR each number (i) from 2 to n
 *    MULTIPLY factorial by i
 * ENDFOR
 */

function factorial(n) {
  let factorial = 1;

  if (n < 0) {
    return null;
  }

  if (n === 0 || n === 1) {
    return 1;
  }

  for (let i = 2; i <= n; i++) {
    factorial *= i;
  }

  return factorial;
}

function factorial2(n) {
  if (n < 0) {
    return null;
  }

  if (n === 0 || n === 1) {
    return 1;
  }

  return n * factorial2(n - 1);
}

function factorial3(n) {
  if (n < 0) {
    return null;
  }

  if (n === 0 || n === 1) {
    return 1;
  }

  return [...Array(n + 1).keys()]
    .slice(1)
    .reduce((a, b) => a * b);
}

console.log(factorial3(5));
