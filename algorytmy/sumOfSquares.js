


















const numbers = [1, 3, 5, 6, 7, 8, 9, 10, 12];

const sumSquaresOfEvenNumbers = numbers
  .filter(number => number % 2 === 0) // filtracja liczb parzystych
  .map(number => number * number) // kwadrat kazdej liczby
  .reduce((sum, square) => sum + square, 0); // dodawanie kwadratow 

console.log(sumSquaresOfEvenNumbers);
