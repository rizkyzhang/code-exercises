/*
 * Title: Sum square difference
 * Link: https://projecteuler.net/problem=6
 * The sum of the squares of the first ten natural numbers is,
 * 1^2 + 2^2 + ... + 10^2 = 385
 * The square of the sum of the first ten natural numbers is,
 * Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is .
 * Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
 */

/*
 * Pseudocode
 *
 * SET sumOfSquares to 0
 * SET squareOfSum to 0
 *
 * FOR each number (i) from 1 to 100
 *    SET square to square of i
 *    SET sumOfSquares to sumOfSquares + square
 *    SET squareOfSum to squareOfSum + i
 *
 *    IF i is equal to 100
 *        SET squareOfSum to square of squareOfSum
 *    ENDIF
 * ENDFOR
 *
 * RETURN squareOfSum - sumOfSquares
 */

function sumSquareDiff() {
  let sumOfSquares = 0;
  let squareOfSum = 0;

  for (let i = 1; i <= 100; i++) {
    const square = i ** 2;
    sumOfSquares += square;
    squareOfSum += i;

    if (i === 100) {
      squareOfSum = squareOfSum ** 2;
    }
  }

  return squareOfSum - sumOfSquares;
}

console.log(sumSquareDiff());
