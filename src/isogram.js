function isogram(str = '') {

  str = str.toLowerCase();

  for (let i = 0; i < str.length; i++){
    const letter = str[i];
    const wordSlice = str.slice([i+1])
    if (wordSlice.indexOf(letter) !== -1) return false

  }
  return true;
}

module.exports = isogram;
