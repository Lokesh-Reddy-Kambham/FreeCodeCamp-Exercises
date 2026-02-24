// ** start of script.js **
// FreeCodeCamp Challenge: Build a Longest Word Finder
function findLongestWordLength(sentence){
  let wordLength = 0;
  let count = 0; 
  for (const char of sentence){
    if (char == " "){
      if (wordLength<count){
        wordLength = count;
      }
      count = 0;
    }
    else{
      count++;
    }
  }
  return wordLength<count ? count : wordLength;
}

// ** end of script.js **

