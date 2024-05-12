





function displayLikes(names) {
    const length = names.length;
  
    if (length === 0) {
      return "no one likes this";
    } else if (length === 1) {
      return `${names[0]} likes this`;
    } else if (length === 2) {
      return `${names[0]} and ${names[1]} like this`;
    } else if (length === 3) {
      return `${names[0]}, ${names[1]} and ${names[2]} like this`;
    } else {
      const othersCount = length - 2;
      return `${names[0]}, ${names[1]} and ${othersCount} others like this`;
    }
  }
  
  const result = displayLikes(["Ala", "Ola"]);
  console.log(result); 
  