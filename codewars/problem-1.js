/*
 * Title: Array.diff
 * Link: https://www.codewars.com/kata/523f5d21c841566fde000009
 */

/*
 * Pseudocode
 *
 * ARGUMENT a 
 * ARGUMENT b
 *
 * SET filteredArray to []
 *
 * FOR each element in a
 *    IF element doesn't exist in b
 *        PUSH it into filteredArray
 *    ENDIF
 * ENDFOR
 *
 * RETURN filteredArray
 */

function arrayDiff(a, b) {
  const filteredArray = [];

  for (elem of a) {
    if (!b.includes(elem)) {
      filteredArray.push(elem);
    }
  }

  return filteredArray;
}

function arrayDiff2(a, b) {
  return a.filter(elem => !b.includes(elem));
}

console.log(arrayDiff2([1, 2, 3, 2], [2]));
