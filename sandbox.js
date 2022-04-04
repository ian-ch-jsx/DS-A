// REVERSE WORDS
function reverseWords(input) {
  const result = input.split("").reverse().join("");
  return result;
}

// ODDISH vs EVENISH
function oddishOrEvenish(input) {
  const inputSplit = input
    .toString()
    .split("")
    .map((digit) => Number(digit))
    .reduce((a, b) => a + b);

  if (inputSplit % 2 === 0) {
    return "Evenish";
  } else {
    return "Oddish";
  }
}
