













function findMissingLetter(letters) {
    for (let i = 0; i < letters.length - 1; i++) {
      if (letters[i].charCodeAt(0) + 1 !== letters[i + 1].charCodeAt(0)) {

        return String.fromCharCode(letters[i].charCodeAt(0) + 1);
      }
    }
  
    return null;
  }
  
  const result = findMissingLetter(['c', 'd', 'f', 'g', 'h']);
  console.log(result); 
  