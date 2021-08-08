const MORSE_TABLE = {
  '.-': 'a',
  '-...': 'b',
  '-.-.': 'c',
  '-..': 'd',
  '.': 'e',
  '..-.': 'f',
  '--.': 'g',
  '....': 'h',
  '..': 'i',
  '.---': 'j',
  '-.-': 'k',
  '.-..': 'l',
  '--': 'm',
  '-.': 'n',
  '---': 'o',
  '.--.': 'p',
  '--.-': 'q',
  '.-.': 'r',
  '...': 's',
  '-': 't',
  '..-': 'u',
  '...-': 'v',
  '.--': 'w',
  '-..-': 'x',
  '-.--': 'y',
  '--..': 'z',
  '.----': '1',
  '..---': '2',
  '...--': '3',
  '....-': '4',
  '.....': '5',
  '-....': '6',
  '--...': '7',
  '---..': '8',
  '----.': '9',
  '-----': '0',
};

function decode(expr) {

  let lettersArr = expr.match(/.{10}/g);
  let result = '';

  for (let i = 0; i < lettersArr.length; i++) {
    lettersArr[i] = lettersArr[i].replace(/10/g, '.');
    lettersArr[i] = lettersArr[i].replace(/11/g, '-');
    lettersArr[i] = lettersArr[i].replace(/00/g, '');

    if (lettersArr[i] === '**********') result += ' ';

    for (key in MORSE_TABLE) {
      if (key === lettersArr[i]) result += MORSE_TABLE[key];
    }
  }
  return result
}

module.exports = {
  decode
}