/*
 * Title: Largest palindrome product
 * Link: https://projecteuler.net/problem=4
 */

/*
 * Pseudocode
 *
 * SET largestPalindrome to 0
 *
 * FOR each number (i) from 100 to 999
 *    FOR each number (j) from i to 999
 *        SET product to i * j
 *
 *        IF product is palindrome and > largestPalindrome
 *            SET largestPalindrome to product   
 *        ENDIF
 *    ENDFOR
 * ENDFOR
 *
 * RETURN largestPalindrome
 */

function largestPalindrome() {
  let largestPalindrome = 0;

  for (let i = 100; i <= 999; i++) {
    for (let j = i; j <= 999; j++) {
      const product = i * j;
      const stringProduct = product.toString();
      const reversedStringProduct = stringProduct.split("").reverse().join("");
      const isPalindrome = stringProduct === reversedStringProduct;

      if (isPalindrome && product > largestPalindrome) {
        largestPalindrome = product;
      }
    }
  }

  return largestPalindrome;
}

console.log(largestPalindrome());
