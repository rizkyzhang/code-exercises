/*
 * Title: Balanced Number (Special Number Series #1)
 * Link: https://www.codewars.com/kata/5a4e3782880385ba68000018
 */

/*
 * Pseudocode
 *
 * ARGUMENT num
 * SET leftSum to 0
 * SET rightSum to 0
 *
 * IF totalDigits < 3
 *    RETURN "Balanced Num"
 *
 * FOR each digit to the left of the middle digit
 *    ADD digit into leftSum
 * ENDFOR
 *
 * FOR each digit to the right of the middle digit
 *    ADD digit into rightSum
 * ENDFOR
 *
 * IF leftSum is equal to rightSum
 *    RETURN "Balanced"
 * ELSE
 *    RETURN "Not Balanced"
 * ENDIF
 */

function isBalancedNum(num) {
  const totalDigits = num.toString().length;
  const digits = num.toString().split("").map(d => +d);
  let leftSum = 0;
  let rightSum = 0;

  if (totalDigits < 3) {
    return "Balanced";
  }

  if (totalDigits % 2 === 0) {
    const firstMiddleDigitIndex = (totalDigits / 2) - 1;
    const secondMiddleDigitIndex = totalDigits / 2;
 
    for (let i = 0; i < digits.length; i++) {
      if (i === firstMiddleDigitIndex || i === secondMiddleDigitIndex) {
          continue;
      }
      
      if (i < firstMiddleDigitIndex) {
        leftSum += digits[i];
      } else {
        rightSum += digits[i];
      }
    } 
  } else {
    const middleDigitIndex = Math.floor(totalDigits / 2);
      
    for (let i = 0; i < digits.length; i++) {
      if (i === middleDigitIndex) {
        continue;
      }

      if (i < middleDigitIndex) {
        leftSum += digits[i];
      } else {
        rightSum += digits[i];
      }
    }
  }

  return leftSum === rightSum ? "Balanced" : "Not Balanced";
}

function isBalancedNum2(num) {
  const totalDigits = num.toString().length;
  const digits = num.toString().split("").map(d => +d);
  let leftSum = 0;
  let rightSum = 0;

  if (totalDigits < 3) {
    return "Balanced";
  }

  if (totalDigits % 2 === 0) {
    const firstMiddleDigitIndex = (totalDigits / 2) - 1;
    const secondMiddleDigitIndex = totalDigits / 2;
    const leftDigits = digits.slice(0, firstMiddleDigitIndex);
    const rightDigits = digits.slice(secondMiddleDigitIndex + 1);
    leftSum = leftDigits.reduce((a, b) => a + b);
    rightSum = rightDigits.reduce((a, b) => a + b);
  } else {
    const middleDigitIndex = Math.floor(totalDigits / 2);
    const leftDigits = digits.slice(0, middleDigitIndex);
    const rightDigits = digits.slice(middleDigitIndex + 1);
    leftSum = leftDigits.reduce((a, b) => a + b);
    rightSum = rightDigits.reduce((a, b) => a + b);
  }

  return leftSum === rightSum ? "Balanced" : "Not Balanced";
}

function isBalancedNum3(num) {
  const totalDigits = num.toString().length;
  const digits = num.toString().split("").map(d => +d);
  let leftSum = 0;
  let rightSum = 0;

  if (totalDigits < 3) {
    return "Balanced";
  }

  for (let i = 0; i < (totalDigits / 2) - 1; i++) {
    leftSum += digits[i];
    rightSum += digits[totalDigits - i - 1];
  }

  return leftSum === rightSum ? "Balanced" : "Not Balanced";
}

console.log(isBalancedNum2(975599));

