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
  return arrayA.filter((elem) => !arrayB.includes(elem));
}

