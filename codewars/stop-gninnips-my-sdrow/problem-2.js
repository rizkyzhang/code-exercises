function reverseSentence(sentence) {
  if (!sentence.trim().includes(" ")) {
    const word = sentence;
    const reversedWord = word.split("").reverse().join("");
    return word.length >= 5 ? reversedWord : sentence;
  }

  let words = sentence.split(" ");
  let newSentence = [];

  for (const word of words) {
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
    .map((word) => {
      const reversedWord = word.split("").reverse().join("");
      return word.length >= 5 ? reversedWord : word;
    })
    .join("");
}
