

function areAllCharactersUnique(text) {

    const charMap = {};
  
    for (let char of text) {
      if (charMap[char]) {
        return false;
      }
  

      charMap[char] = true;
    }

    return true;
  }
  

  console.log(areAllCharactersUnique("abcde")); 
  console.log(areAllCharactersUnique("hello")); 
  console.log(areAllCharactersUnique("world")); 
  