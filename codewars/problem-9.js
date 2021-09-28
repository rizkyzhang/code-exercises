/*
 * Title: Duplicate Encoder
 * Link: https://www.codewars.com/kata/54b42f9314d9229fd6000d9c
 */

/*
 * Pseudocode
 *
 * ARGUMENT string
 * SET characterCounts to {}
 * SET newString to ""
 *
 * FOR each character in string
 *    IF character is already counted
 *        INCREMENT character count by 1
 *    ELSE
 *        SET character count to 1
 *    ENDIF
 * ENDFOR
 *
 * FOR each character in string
 *    IF character appears more than once
 *        APPEND ")" to newString
 *    ELSE 
 *        APPEND "(" to newString
 *    ENDIF
 * ENDFOR
 *
 * RETURN newString
 */

function duplicateEncoder(string) {
  const characterCounts = {};
  let newString = "";

  for (const char of string.toLowerCase()) {
    if (characterCounts[char]) {
      characterCounts[char]++;
    } else {
      characterCounts[char] = 1;
    }
  }

  for (const char of string.toLowerCase()) {
    if (characterCounts[char] > 1) {
      newString += ")";
    } else {
      newString += "(";
    }
  }
  
  return newString;
}

console.log(duplicateEncoder("Success"));
