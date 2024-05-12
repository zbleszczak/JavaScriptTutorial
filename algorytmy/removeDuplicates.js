























function removeDuplicates(myArray) {

  const uniqueArray = [...new Set(myArray)];

  return uniqueArray;
}

const result = removeDuplicates([4, 2, 4, 5, 2, 6, 2, 5, 2, 7, 9, 9]);
console.log(result); 