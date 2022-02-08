function isPalindrome(word) {
  for (let i = 0; i < word.length / 2; i++) {
    const j = word.length -1 - i;
    if (word[i] !== word[j]) return false;
  }
  return true;
}

// less optomized //
// function isPalindrome(word) {
// // iterate from the beginning to the middle
// for (let i = 0; i < word.length / 2; i++) {
//   // check each letter to the corresponding letter from the end
//   const j = word.length - 1 - i;
//   const startChar = word[i];
//   const endChar = word[j];
// //  if any letters don't match, return false
//   if (startChar !== endChar) return false;
 
// }
// // return true
// return true;
// }


/* 
  Add your pseudocode here:
  
  make a function that returns true if a word is a palindrom. That means if the first letter is the same as the last letter, and the second is that same as the second to last letter, etc. until we reach the middle, return true

  iterate from the beginning to the middle of the word
    check each letter to the corresponding letter from the end
      if any letters don't match, return false

  return true    

  abba
  ^  ^
   ^^
   true

  robot
  ^   ^
  false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
