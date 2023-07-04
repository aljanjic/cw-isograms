function isogram(str = '') {

  if (typeof(str) !== 'string') return false;
  str = str.toLowerCase();

  for (let i = 0; i < str.length; i++){
    const letter = str[i];
    const wordSlice = str.slice(i+1)
    if (wordSlice.indexOf(letter) !== -1) return false
  }
  
  return true;


  // return !str || str.length === new Set(str.toLocaleLowerCase()).size

  // if (typeof(str) !== 'string') return false;
  // str = str.toLowerCase();

  // for (let i = 0; i < str.length; i++){
  //   const letter: string = str[i];
  //   const wordSlice: string = str.slice(i+1)
  //   if (wordSlice.indexOf(letter) !== -1) return false
  // }
  
  // return true;
}

module.exports = isogram;
