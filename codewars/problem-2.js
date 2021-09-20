/*
 * Title: Stop gninnipS My sdroW!
 * Link: https://www.codewars.com/kata/5264d2b162488dc400000001
 */

/*
 * Pseudocode
 *
 * ARGUMENT sentence
 * SET newSentence to []
 *
 * IF sentence only have 1 word
 *    IF word have >= 5 letter
 *        REVERSE word
 *        RETURN word
 *    ELSE
 *      RETURN word
 *    ENDIF
 * ENDIF
 *
 * FOR each word in sentence
 *    IF word have >= 5 letter
 *        REVERSE the word
 *    PUSH the word into newSentence
 *    ENDIF
 * ENDFOR
 *
 * RETURN newSentence
 */

function reverseSentence(sentence) {
  if (!sentence.trim().includes(" ")) {
    const word = sentence;
    const reversedWord = word.split("").reverse().join("");
    return word.length >= 5 ? reversedWord : sentence;
  }

  let words = sentence.split(" ");
  let newSentence = [];

  for (let word of words) {
    if (word.length >= 5) {
      const reversedWord = word.split("").reverse().join("");
      newSentence.push(reversedWord);
    } else {
      newSentence.push(word);
    }
  }

  return newSentence.join(" ");
}

function reverseSentence2(sentence) {
  if (!sentence.trim().includes(" ")) {
    const word = sentence;
    const reversedWord = word.split("").reverse().join("");
    return word.length >= 5 ? reversedWord : sentence;
  }

  return sentence
    .split(" ")
    .map(word => {
      const reversedWord = word.split("").reverse().join("");
      return word.length >= 5 ? reversedWord : word;
    })
    .join("");
}
