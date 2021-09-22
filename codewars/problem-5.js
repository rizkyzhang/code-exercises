/*
 * Title: Vowel Count
 * Link: https://www.codewars.com/kata/54ff3102c1bad923760001f3
 */

/*
 * Pseudocode
 *
 * ARGUMENT string
 * SET vowelCount to 0
 *
 * FOR each character in string
 *    IF character is a vowel
 *        INCREMENT vowelCount by 1
 *    ENDIF
 * ENDFOR
 *
 * RETURN vowelCount
 */

function getVowelCount(string) {
  let vowelCount = 0;

  for (const char of string) {
    const isVowel = /[aeiou]/.test(char);

    if (isVowel) {
      vowelCount++;
    }
  }

  return vowelCount;
}

console.log(getVowelCount("this is cool"));
