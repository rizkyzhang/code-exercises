/*
 * Title: Array.diff
 * Link: https://www.codewars.com/kata/523f5d21c841566fde000009
 */

/*
 * Pseudocode
 *
 * ARGUMENT arrayA 
 * ARGUMENT arrayB 
 *
 * SET filteredArray to []
 *
 * FOR each element in arrayA
 *    IF element doesn't exist in arrayB 
 *        APPEND it into filteredArray 
 *    ENDIF 
 * ENDFOR 
 *
 * RETURN filteredArray 
 */

function arrayDiff(arrayA, arrayB) {
  const filteredArray = [];

  for (const elem of arrayA) {
    if (!arrayB.includes(elem)) {
      filteredArray.push(elem);
    }
  }

  return filteredArray;
}

function arrayDiff2(arrayA, arrayB) {
  return arrayA.filter(elem => !arrayB.includes(elem));
}

console.log(arrayDiff2([1, 2, 3, 2], [2]));
