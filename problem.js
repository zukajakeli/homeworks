import { names } from './names.js';

function nameScores(array) {
  let result = 0;
  const alphabet = '0ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  array.sort();
  for (let i = 1; i < array.length; i++) {
    let nameNumericValue = 0;
    for (const char of array[i]) {
      nameNumericValue += alphabet.indexOf(char);
    }
    result += nameNumericValue * i;
  }
  return result;
}

console.log(nameScores(names));
