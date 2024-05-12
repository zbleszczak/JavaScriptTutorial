

























function isPalindrome(text) {
    const cleanedText = text.toLowerCase().replace(/\s/g, '');
    const reversedText = cleanedText.split('').reverse().join('');
    return cleanedText === reversedText;
  }
  console.log(isPalindrome("kajak"));











