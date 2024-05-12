




















function arrayIntersection(array1, array2) {
    const intersection = array1.filter(value => array2.includes(value));
  
    return intersection;
  }

  const result = arrayIntersection([4, 3, 6], [7, 6, 3, 5]);
  console.log(result); 
  