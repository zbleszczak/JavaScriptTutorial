












function fizzBuzzArray(number) {
    const resultArray = [];
  
    for (let i = 1; i <= number; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        resultArray.push("FizzBuzz");
      } else if (i % 3 === 0) {
        resultArray.push("Fizz");
      } else if (i % 5 === 0) {
        resultArray.push("Buzz");
      } else {
        resultArray.push(i);
      }
    }
  
    return resultArray;
  }
  
  const result = fizzBuzzArray(56);
  console.log(result);
  