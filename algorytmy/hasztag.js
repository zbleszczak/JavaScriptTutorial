








function generateHashtag(text) {
    if (!text) {
      return null; 
    }
  
    const words = text.split(/\s+/); 
    const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)); 
  
    return `#${capitalizedWords.join('')}`;
}
  
const inputText = "ala ma kota";
const hashtag = generateHashtag(inputText);
  
console.log(hashtag);