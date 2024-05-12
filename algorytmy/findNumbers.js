





function findMaxNumber(array) {
    if (array.length === 0) {
      return null; 
    }
  
    return Math.max(...array); 
  }
  
  function findSecondLargestNumber(array) {
    if (array.length < 2) {
      return null; 
    }
  
    const uniqueNumbers = Array.from(new Set(array)); 
    const sortedNumbers = uniqueNumbers.sort((a, b) => b - a); 
    return sortedNumbers[1]; 
  }
  
  const numbers = [7, 22, 8, 5, 17, 8, 11];
  const maxNumber = findMaxNumber(numbers);
  const secondLargestNumber = findSecondLargestNumber(numbers);
  
  console.log(`Największa liczba: ${maxNumber}`);
  console.log(`Druga co do wielkości liczba: ${secondLargestNumber}`);
  