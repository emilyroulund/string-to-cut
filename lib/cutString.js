/**
 * This function accepts a string and returns another containing every third character.
 * @param {string} input - the string to cut.
 * @returns {string} - the string containing every third character.
 */
const cutString = (input) => {
  let output = '';
  let index = 0;
  for (let i = 0; i < input.length; i++) {
    index += 1;
    if (index % 3 === 0) {
      output += input[i];
    }
  }
  return output;
};

export default cutString;