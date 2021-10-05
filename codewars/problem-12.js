/**
 * Title: Strong Number (Special Numbers Series #2)
 * Link: https://www.codewars.com/kata/5a4d303f880385399b000001
 */

/**
 * Pseudocode
 *
 * ARGUMENT n
 * SET sum to 0
 *
 * FOR each digit in n
 *      CALC factorial of digit
 *      ADD factorial into sum
 * ENDFOR
 *
 * IF sum is equal to n
 *      RETURN "STRONG!!!!"
 * ELSE
 *      RETURN "Not Strong !!"
 * ENDIF
 */

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

function strong(n) {
  const digits = n
    .toString()
    .split("")
    .map((d) => +d);
  let sum = 0;

  for (const digit of digits) {
    const f = factorial(digit);
    sum += f;
  }

  return sum === n ? "STRONG!!!!" : "Not Strong !!";
}
