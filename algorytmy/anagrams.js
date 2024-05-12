
















function areAnagrams(word1, word2) {
    const sorted1 = word1.toLowerCase().split('').sort().join('');
    const sorted2 = word2.toLowerCase().split('').sort().join('');
  
    return sorted1 === sorted2;
  }
  
  const word1 = 'debit card';
  const word2 = 'bad credit';
  
  if (areAnagrams(word1, word2)) {
    console.log(`${word1} and ${word2} are anagrams.`);
  } else {
    console.log(`${word1} and ${word2} are not anagrams.`);
  }
  