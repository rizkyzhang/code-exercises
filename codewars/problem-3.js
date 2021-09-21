/*
 * Title: Credit Card Mask
 * Link: https://www.codewars.com/kata/5412509bd436bd33920011bc
 */

/*
 * Pseudocode
 *
 * ARGUMENT cc
 * SET result to ""
 *
 * IF cc have < 5 character
 *    RETURN cc
 * ENDIF
 *
 * FOR each character until fifth character from behind in cc
 *    CONVERT char to #
 *    APPEND char into result
 * ENDFOR
 *
 * APPEND last 4 characters into result
 *
 * RETURN result
 */

function maskify(cc) {
  if (cc < 5) {
    return cc;
  }

  let result = "";

  for (let i = 0; i < cc.length - 4; i++) {
    result += "#";
  }

  result += cc.slice(cc.length - 4);

  return result;
}


function maskify2(cc) {
  if (cc < 5) {
    return cc;
  }

  return "#".repeat(cc.length - 4) + cc.slice(cc.length - 4);
}

console.log(maskify("2828235616"));
