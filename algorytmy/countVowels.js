















function countVowels(text) {
    const cleanedText = text.toLowerCase().replace(/\s/g, '');
  
    const vowels = ['a', 'e', 'i', 'o', 'u'];
  
    let vowelCount = 0;
    for (let char of cleanedText) {
      if (vowels.includes(char)) {
        vowelCount++;
      }
    }
  
    return vowelCount;
  }
  
  const result = countVowels("fsdasdasdsadafsafasfas");
  console.log(result);