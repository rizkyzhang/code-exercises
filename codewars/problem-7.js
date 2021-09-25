/*
 * Title: Square Every Digit
 * Link: https://www.codewars.com/kata/546e2562b03326a88e000020
 */

/*
 * Pseudocode
 *
 * ARGUMENT number
 *
 * CONVERT number into number string
 * SPLIT number string into digits
 * SQUARE every digits
 * CONVERT it back into a number
 * RETURN it
 */

function squareDigits(number) {
  return +number
    .toString()
    .split("")
    .map(digit => digit ** 2)
    .join("");
}

console.log(squareDigits(868));

