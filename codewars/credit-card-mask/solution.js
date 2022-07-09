const maskString = (string) => {
  if (string.length < 5) {
    return string;
  }

  return `${"#".repeat(string.length - 4)}${string.slice(-4)}`;
};

const maskString2 = (string) => {
  if (string.length < 5) {
    return string;
  }

  let maskedString = "";

  for (let i = 0; i < string.length - 4; i++) {
    maskedString += "#";
  }

  maskedString += string.slice(-4);

  return maskedString;
};
