// Number letter counts

function numberLetterCounts() {
  // stores names of numbers from 0-19
  const units = [
    "",
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
    "eleven",
    "twelve",
    "thirteen",
    "fourteen",
    "fifteen",
    "sixteen",
    "seventeen",
    "eighteen",
    "nineteen",
  ];
  //   stores names of ten digit characters
  const tens = [
    "",
    "",
    "twenty",
    "thirty",
    "forty",
    "fifty",
    "sixty",
    "seventy",
    "eighty",
    "ninety",
  ];

  let count = 0;

  //   loop to iterate from 1 to 1000
  for (let number = 1; number <= 1000; number++) {
    // for numbers less than 19.
    if (number <= 19) {
      count += units[number].length;
    //   numbers from 20 to 99
    } else if (number >= 20 && number <= 99) {
      const tensDigit = Math.floor(number / 10);
      const unitsDigit = number % 10;
      count += tens[tensDigit].length + units[unitsDigit].length;
    } else if (number >= 100 && number <= 999) {
      const hundredsDigit = Math.floor(number / 100);
      const tensDigit = Math.floor((number % 100) / 10);
      const unitsDigit = number % 10;
      count += units[hundredsDigit].length + "hundred".length + "and".length;
      if (tensDigit > 1) {
        count += tens[tensDigit].length + units[unitsDigit].length;
      } else if (tensDigit === 1) {
        count += units[tensDigit * 10 + unitsDigit].length;
      } else if (unitsDigit > 0) {
        count += units[unitsDigit].length;
      }
    } else if (number === 1000) {
      count += "onethousand".length;
    }
  }

  return count;
}

console.log(numberLetterCounts());