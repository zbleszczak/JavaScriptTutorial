





function calculatePoints(word) {
    return word.toLowerCase().split('').reduce((sum, letter) => sum + (letter.charCodeAt(0) - 96), 0);
  }
  
  function findHighestScoringWord(words) {
    let highestScore = 0;
    let highestScoringWord = '';
  
    for (const word of words) {
      const score = calculatePoints(word);
      if (score > highestScore) {
        highestScore = score;
        highestScoringWord = word;
      }
    }
  
    return highestScoringWord;
  }
  
  const words = ['adhd', 'what', 'doing', 'jokes'];
  const result = findHighestScoringWord(words);
  
  console.log(`The word with the highest score is: ${result}`);
  