/*
 * Title: Coloured Triangles
 * Link: https://www.codewars.com/kata/5a25ac6ac5e284cfbe000111
 */

/*
 * Pseudocode
 *
 * ARGUMENT currentRow
 * SET nextRow to ""
 *
 * IF length of currentRow is equal to 1
 *    RETURN currentRow
 *
 * FOR each color in currentRow
 *    IF next color is identical
 *        APPEND color to nextRow
 *    ELSE
 *        APPEND missing color to nextRow
 *    ENDIF
 * ENDFOR
 *
 * RETURN function(nextRow)
 */

function triangle(currentRow) {
  let nextRow = "";

  if (currentRow.length === 1) {
    return currentRow;
  }

  for (let i = 0; i < currentRow.length - 1; i++) {
    const currentColor = currentRow[i];
    const nextColor = currentRow[i + 1];

    if (currentColor === nextColor) {
      nextRow += currentRow[i];
    } else {
      const colors = ["R", "G", "B"];
      nextRow += colors.find(color => color !== currentColor && color !== nextColor);
    }
  }

  return triangle(nextRow);
}

console.log(triangle("RRGBRGBB"));
