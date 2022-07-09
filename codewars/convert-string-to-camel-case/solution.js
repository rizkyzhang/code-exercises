function toCamelCase(string) {
  const words = string.split(/[-_]/);
  let camelString = "";

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
    .map((word, i) => (i === 0 ? word : word[0].toUpperCase() + word.slice(1)))
    .join("");
}

console.log(toCamelCase2("the_funny-cat"));
