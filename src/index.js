module.exports = function toReadable (number) {

  const numbers = {
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six',
    7: 'seven',
    8: 'eight',
    9: 'nine',
    10: 'ten',
    11: 'eleven',
    12: 'twelve',
    13: 'thirteen',
    14: 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen',
    20: 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety',
    100: 'one hundred',
  }

  const numberArr = [...number.toString()].map(Number);

  if (number === 0) {
    return 'zero';
  } else if (number > 0 && number < 20) {
    return numbers[number];
  } else if (numberArr.length === 2 && (number % 10) === 0) {
      return numbers[number];
  } else if (numberArr.length === 2 && (number % 10) !== 0) {
      return `${numbers[number - numberArr[1]]} ${numbers[numberArr[1]]}`;
  } else if (numberArr.length === 3 && (number % 100) === 0) {
      return `${numbers[numberArr[0]]} hundred`;
  } else if (numberArr.length === 3 && (number % 100) !== 0) {
      const lastTwoDigits = +`${numberArr[1]}${numberArr[2]}`;
      if (lastTwoDigits < 20) {
          return `${numbers[numberArr[0]]} hundred ${numbers[lastTwoDigits]}`;
      } else if ((lastTwoDigits > 19 && lastTwoDigits % 10 === 0)) {
          return `${numbers[numberArr[0]]} hundred ${numbers[lastTwoDigits]}`;
      } else if ((lastTwoDigits > 20 && lastTwoDigits % 10 !== 0)) {
          return `${numbers[numberArr[0]]} hundred ${numbers[numberArr[1] * 10]} ${numbers[numberArr[2]]}`;
      }
  }
}
