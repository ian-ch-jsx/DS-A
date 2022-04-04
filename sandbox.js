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

//FIZZ BUZZ
function fizzBuzz(n) {
  const results = [];

  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0) {
      results.push("Fizz");
    } else if (i % 5 == 0) {
      results.push("Buzz");
    } else if (i % 15 == 0) {
      results.push("FizzBuzz");
    } else {
      results.push(i);
    }
  }
  return results;
}
