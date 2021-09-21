/*
 * Title: Convert string to camel case
 * Link: https://www.codewars.com/kata/517abf86da9663f1d2000003
 */

/*
 * Pseudocode
 *
 * ARGUMENT string
 * SET result to ""
 *
 * FOR each word in string
 *    IF first word
 *        APPEND word into result
 *    ELSE
 *        CONVERT first character of the word to uppercase
 *        APPEND word into result
 *    ENDIF
 * ENDFOR
 *
 * RETURN result
 */

function toCamelCase(string) {
  let words = string.split(/[-_]/);
  let result = "";

  for (let i = 0; i < words.length; i++) {
    if (i === 0) {
      result += words[i];
    } else {
      result += words[i][0].toUpperCase() + words[i].slice(1);
    }
  }

  return result;
}

function toCamelCase2(string) {
  return string
    .split(/[-_]/)
    .map((word, i) => i === 0 ? word : word[0].toUpperCase() + word.slice(1))
    .join("");
}

console.log(toCamelCase2("the_funny-cat"));
