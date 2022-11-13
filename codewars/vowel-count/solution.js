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
